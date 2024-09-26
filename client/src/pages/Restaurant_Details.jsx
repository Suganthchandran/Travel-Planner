// src/pages/Restaurant_Details.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { restaurants } from '../assets/assets';
import Navbar from '../components/Navbar';
import '../styles/Restaurant_Details.css';
import { IoCall } from 'react-icons/io5';
import { FaHeart } from "react-icons/fa";
import MenuCard from '../components/MenuCard';
import Rating from '../components/Rating';
import Cards from '../components/Cards';
import { Tilt } from 'react-tilt';

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
    const { state } = useLocation();
    const { name } = state;

    const restaurant = restaurants.find(item => item.name === name);

    const navigate = useNavigate();

    const handleCardClick = (restaurantName) => {
        navigate(`/restaurant_details`, { state: { name: restaurantName } });
        window.scrollTo(0, 0);
    };


    const coverImages = Object.values(restaurant.cover_images);
    const smallImages = Object.values(restaurant.small_images);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });

    const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBW7gCrgWOcn76LTFgXqrZJzWNpWc8Bao8&q=${encodeURIComponent(restaurant.name)}`;

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const nearbyRestaurant = restaurants.filter(p => p.name !== restaurant.name).slice(0, 4);
        const formattedRecommendations = nearbyRestaurant.map(p => ({
            name: p.name,
            image: p.image,
        }));
        setRecommendations(formattedRecommendations);
    }, [restaurant]);

    return (
        <div className={`restaurant-main ${isModalOpen ? 'blur-background' : ''}`}>
            <Navbar />
            <Slideshow images={coverImages} />
            <div className='restaurant-content'>
                <h1>{restaurant.name}</h1>
                <p>{restaurant.desc}</p>
            </div>

            <div className='restaurant-mid'>

                <div className='small-images'>
                    {smallImages.map((img, index) => (
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
                            <button className='animated-button favorite-button'>
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
                        <MenuCard menu={restaurant.menu} image={restaurant.menu_image} />
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

            <div className="restaurant-recommend">
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
            </div>

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
