// src/pages/Hotels_hotel.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { hotels } from '../assets/assets';
import Navbar from '../components/Navbar';
import '../styles/Hotel_Details.css'; // Ensure you have this CSS file
import { IoCall } from 'react-icons/io5';
import { FaHeart } from "react-icons/fa";
import HotelPolicy from '../components/HotelPolicy';
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

const Hotel_hotel = () => {
    const { state } = useLocation();
    const { name } = state;

    console.log(state);

    const hotel = hotels.find(item => item.name === name);

    const navigate = useNavigate();

    const handleCardClick = (hotelName) => {
        navigate(`/hotel_details`, { state: { name: hotelName } });
        window.scrollTo(0, 0);
    };



    const coverImages = Object.values(hotel.cover_images);
    const smallImages = Object.values(hotel.small_images);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });

    const googleMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBW7gCrgWOcn76LTFgXqrZJzWNpWc8Bao8&q=${encodeURIComponent(hotel.name)}`;

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
        const nearbyHotels = hotels.filter(p => p.name !== hotel.name).slice(0, 4);
        const formattedRecommendations = nearbyHotels.map(p => ({
            name: p.name,
            image: p.image,
        }));
        setRecommendations(formattedRecommendations);
    }, [hotel]);

    return (
        <div className={`hotel-main ${isModalOpen ? 'blur-background' : ''}`}>
            <Navbar />
            <Slideshow images={coverImages} />
            <div className='hotel-content'>
                <h1>{hotel.name}</h1>
                <p>{hotel.desc}</p>
            </div>

            <div className='hotel-mid'>
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

                <div className='hotel-mid-right'>

                    <div className='hotel-button-group'>

                        <div>
                            <button className='animated-button'>
                                Contact<span className='hotel-button-icon'><IoCall /></span>
                            </button>
                        </div>
                        <div>
                            <button className='animated-button favorite-button'>
                                <span className="button-text">Favourite</span>
                                <span className='hotel-button-icon'><FaHeart /></span>
                            </button>
                        </div>
                    </div>

                    <div>
                     <Rating rating={hotel.rating} />
                    </div>

                    <div>
                        <div className='hotel-timing-table'>
                            <h1>{hotel.name} Timings</h1>
                            <table className='hotel-table'>
                                <tr>
                                    <th>Room Type</th>
                                    <th>Price</th>
                                </tr>
                                {hotel.room_types.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                    </div>


                </div>
            </div>

            <div className='hotel-map-main'>

            <div className='hotel-map'>
                <h1>Location for {hotel.name}:</h1>
                <iframe
                    title='map'
                    src={googleMapUrl}
                    width="100%"
                    height="500px"
                    style={{ border: '1px solid grey' }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            </div>

            <HotelPolicy />

            <div className="hotel-recommend">
                <h1>Recommended Places Around {hotel.place}</h1>
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

export default Hotel_hotel;
