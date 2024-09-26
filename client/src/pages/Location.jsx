// src/pages/Location.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Location.css';
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import { Tilt } from 'react-tilt';
import Weather from '../components/Weather';

const Location = () => {
    const { state } = useLocation();
    const { location } = state;
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path, { state: { location } });
    };

    return (
        <div className='location'>
            <Navbar />
            <Weather location={location} />
            <div className='location-content'>
                <div className="location-card" onClick={() => handleCardClick(`/places`)}>
                    <Tilt><Cards name="TOURIST PLACES" image={assets.place} /></Tilt>
                </div>
                <div className="location-card" onClick={() => handleCardClick(`/hotels`)}>
                    <Tilt><Cards name="HOTELS" image={assets.hotel} /></Tilt>
                </div>
                <div className="location-card" onClick={() => handleCardClick(`/restaurants`)}>
                    <Tilt><Cards name="RESTAURANTS" image={assets.restaurant} /></Tilt>
                </div>
            </div>
        </div>
    );
};

export default Location;
