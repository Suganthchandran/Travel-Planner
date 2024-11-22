// src/pages/Restaurant_Details.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { restaurants } from '../assets/assets';
import Navbar from '../components/Navbar';
import '../styles/Restaurant_Details.css';
import { IoCall } from 'react-icons/io5';
import { FaHeart } from "react-icons/fa";
import MenuCard from '../components/MenuCard';
import Rating from '../components/Rating';
import Cards from '../components/Cards';
import { Tilt } from 'react-tilt';
import { useFavourite } from '../context/FavouriteContext';
import { useUser } from '@clerk/clerk-react';

const Slideshow = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='slideshow-container'>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`slide-${index}`}
                    className={`slide ${index === currentImage ? 'active' : ''}`}
                    style={{ display: index === currentImage ? 'block' : 'none' }}
                />
            ))}
        </div>
    );
};

const Restaurant_Details = () => {
    const { restaurantId } = useParams();
    const { loading, error, addFavourite} = useFavourite();
    const { user } = useUser();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const handleCardClick = (restaurantName) => {
        navigate(`/restaurant_details`, { state: { name: restaurantName } });
        window.scrollTo(0, 0);
    };

    const [restaurant, setRestaurant] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/restaurant/${restaurantId}`);
                if (!response.ok) {
                    throw new Error('Error fetching Restaurant data');
                }
                const data = await response.json();
                setRestaurant(data.restaurant); // Set the place data
            } catch (err) {
                console.error('Error:', err);
            }
        };

        fetchRestaurantData();
    }, [restaurantId]); 

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    const googleMapUrl = restaurant.coordinates 
    ? `https://www.google.com/maps/embed/v1/view?key=AIzaSyBW7gCrgWOcn76LTFgXqrZJzWNpWc8Bao8&center=${restaurant.coordinates.lat},${restaurant.coordinates.lng}&zoom=15`
    : `https://www.google.com/maps/embed/v1/place?key=AIzaSyBW7gCrgWOcn76LTFgXqrZJzWNpWc8Bao8&q=${encodeURIComponent(restaurant.name)}`;

    const openModal = (image, event) => {
        setSelectedImage(image);
        const { top, left, width, height } = event.target.getBoundingClientRect();
        setImagePosition({ top, left, width, height });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const handleFavourite = (name, itemId, image, place, userId, type) => {
        addFavourite( userId, itemId, name, place, image, type )
    }

    return (
        <div className={`restaurant-main ${isModalOpen ? 'blur-background' : ''}`}>
            <Navbar />
            <Slideshow images={restaurant.coverImages} />
            <div className='restaurant-content'>
                <h1>{restaurant.name}</h1>
                <p>{restaurant.desc}</p>
            </div>

            <div className='restaurant-mid'>

                <div className='small-images'>
                    {restaurant.smallImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`small-${index}`}
                            onClick={(e) => openModal(img, e)}
                        />
                    ))}
                </div>

                <div className="vertical-line"></div>

                <div className='restaurant-mid-right'>

                    <div className='restaurant-button-group'>

                        <div>
                            <button className='animated-button'>
                                Contact<span className='restaurant-button-icon'><IoCall /></span>
                            </button>
                        </div>
                        <div>
                            <button className='animated-button favorite-button ' onClick={() => handleFavourite(restaurant.name, restaurant._id, restaurant.image,restaurant.place, user.id, "restaurant")}>
                                <span className="button-text">Favourite</span>
                                <span className='restaurant-button-icon'><FaHeart /></span>
                            </button>
                        </div>
                    </div>

                    <div>
                        
                        <Rating rating={restaurant.rating} />
                    </div>

                    <div className='restaurant-right-content'>
                        <h1> <span>Special Food  : </span> {restaurant.special_food}</h1>
                        <h1> <span>Working Time  : </span> {restaurant.working_time}</h1>
                    </div>


                   


                </div>
            </div>

            <div className='restaurant-end'>
            
            <div className='restaurant-menu-card'>
                        <h1>Menu :</h1>
                        <MenuCard menu={restaurant.menu} image={restaurant.menuImage} />
                    </div>

                    <div className="vertical-line2"></div>
                            
            <div className='restaurant-map'>
                <h1>Location for {restaurant.name}:</h1>
                <iframe
                    title='map'
                    src={googleMapUrl}
                    width="100%"
                    height="450px"
                    style={{ border: '1px solid grey' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            </div>

            {/* <div className="restaurant-recommend">
                <h1>Recommended Restaurants Around {restaurant.place}</h1>
                <div className="cards-container">
                    {recommendations.map((item, index) => (
                        <Tilt key={index}>
                            <div onClick={() => handleCardClick(item.name)} >
                            <Cards
                                image={item.image}
                                name={item.name}
                            />
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div> */}

            {isModalOpen && (
                <div className="modal" style={{ bottom: '-920px', left: '320px' }}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={selectedImage} alt="Full-screen" />
                </div>
            )}
        </div>
    );
};

export default Restaurant_Details;
