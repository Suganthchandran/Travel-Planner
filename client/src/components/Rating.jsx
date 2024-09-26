import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Rating.css'

const Rating = ({ rating }) => {
    const getStarIcons = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0 ? 1 : 0; 
        const emptyStars = 5 - fullStars - halfStar; 

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-icon" />);
        }

        if (halfStar) {
            stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="star-icon" />);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon key={fullStars + i + 1} icon={farStar} className="star-icon empty-star" />);
        }

        return stars;
    };

    return (
        <div className="rating-container">
            <h1>Rating: {rating}</h1>
            <div className="stars-row">
                {getStarIcons(rating)}
            </div>
        </div>
    );
};

export default Rating;
