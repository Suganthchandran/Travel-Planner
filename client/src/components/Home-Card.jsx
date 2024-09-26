import React from 'react';
import '../styles/Home-Card.css';
import { FaStar } from 'react-icons/fa';

const Card = ({ destination, location, rating, price, days, image }) => {
  return (
    <div className="card">
      <img src={image} alt={destination} className="card-image" />
      <div className="card-content">
        <h3>{destination}</h3>
        <p>{location}</p>
        <div className="rating-price">
          <div className="rating">
            <FaStar className="star-icon" />
            <span>{rating}</span>
          </div>
          <p>Start from <strong>${price}</strong>/pax</p>
        </div>
        <button className="days-button">{days}</button>
      </div>
    </div>
  );
};

export default Card