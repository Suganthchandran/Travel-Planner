import React from 'react';
import '../styles/HotelPolicy.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBan, faChild, faDog, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const HotelPolicy = () => {
    return (
        <div className="policy-container">
            <h2 className="policy-title">Hotel Policies</h2>
            <div className="policy-row">
                <div className="policy-item">
                    <FontAwesomeIcon icon={faClock} className="policy-icon" />
                    <h3>Check-in / Check-out</h3>
                    <p>Check-in: <span className="highlight">2:00 PM</span></p>
                    <p>Check-out: <span className="highlight">12:00 PM</span></p>
                </div>

                <div className="policy-item">
                    <FontAwesomeIcon icon={faBan} className="policy-icon" />
                    <h3>Cancellation</h3>
                    <p>Free cancellation up to 24 hours before check-in.</p>
                    <p>50% charge within 24 hours of check-in.</p>
                </div>

                <div className="policy-item">
                    <FontAwesomeIcon icon={faChild} className="policy-icon" />
                    <h3>Children & Extra Beds</h3>
                    <p>Children of all ages are welcome. Extra beds on request.</p>
                </div>

                <div className="policy-item">
                    <FontAwesomeIcon icon={faDog} className="policy-icon" />
                    <h3>Pets</h3>
                    <p>Pets are <span className="highlight">not allowed</span>.</p>
                </div>

                <div className="policy-item">
                    <FontAwesomeIcon icon={faCreditCard} className="policy-icon" />
                    <h3>Payment Options</h3>
                    <p>We accept Visa, MasterCard, and PayPal.</p>
                </div>
            </div>
        </div>
    );
};

export default HotelPolicy;
