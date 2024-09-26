// src/pages/Restaurant.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { locations, restaurants } from '../assets/assets';
import Navbar from '../components/Navbar';
import '../styles/Restaurant.css';
import { Tilt } from 'react-tilt';
import Cards from '../components/Cards';

const Restaurant = () => {
  const { state } = useLocation();
  const { location } = state;
  const navigate = useNavigate();

  const loc = locations.find((item) => item.name === location);
  const restaurant_card = restaurants.filter((item) => item.place === location);

  const handleCardClick = (restaurantName) => {
    navigate('/restaurant_details', { state: { name: restaurantName } });
  };

  return (
    <div className='restaurant-main'>
      <Navbar />
      <div className='restaurant-main-image'>
        <img src={loc.image} alt='' />
      </div>
      <div className='restaurant-content'>
        <h1>{loc.name}</h1>
        <p>{loc.desc}</p>
      </div>
      <h1 className='restaurant-heading'>Restaurants :</h1>
      <div className='restaurant-main-cards'>
        {restaurant_card.map((item, index) => (
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

export default Restaurant;
