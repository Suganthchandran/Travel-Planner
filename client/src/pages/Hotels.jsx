// src/pages/Hotels.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { locations, hotels } from '../assets/assets';
import Navbar from '../components/Navbar';
import '../styles/Hotels.css';
import { Tilt } from 'react-tilt';
import Cards from '../components/Cards';

const Hotels = () => {
  const { state } = useLocation();
  const { location } = state;
  const navigate = useNavigate();

  const loc = locations.find((item) => item.name === location);
  const hotel_card = hotels.filter((item) => item.place === location);

  const handleCardClick = (hotelName) => {
    navigate('/hotel_details', { state: { name: hotelName } });
  };

  return (
    <div className='hotel-main'>
      <Navbar />
      <div className='hotel-main-image'>
        <img src={loc.image} alt='' />
      </div>
      <div className='hotel-content'>
        <h1>{loc.name}</h1>
        <p>{loc.desc}</p>
      </div>
      <h1 className='hotel-heading'>Hotels :</h1>
      <div className='hotel-main-cards'>
        {hotel_card.map((item, index) => (
          <Tilt key={index}>
            <div onClick={() => handleCardClick(item.name)}>
              <Cards name={item.name} image={item.image} />
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
