import React from 'react';
import '../styles/Cards.css';

const Cards = ({ image, name }) => {
  return (
    <div className="place-card">
      <div className="place-card-image-container">
        <img src={image} alt={name} className="place-card-image" />
      </div>
      <div className="place-card-details">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Cards;