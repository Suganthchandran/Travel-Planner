import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import Weather from '../components/Weather';
import Cards from '../components/Cards';
import { Tilt } from 'react-tilt';
import { assets } from '../assets/assets';

const Location = () => {
    const { name } = useParams();
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const fetchLocationData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/location/findlocationbyname/${name}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setLocationData(data.location);
        } catch (err) {
            setError('Error fetching location data');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchLocationData();
    }, [name]);

    const handleCardClick = (path) => {
        navigate(path); // Navigate to the specified path
    };

    if (error) return <div>{error}</div>;

    return (
        <div className='location'>
            <Navbar />
            <Weather location={locationData ? locationData.name : ''} />
            <div>
                {locationData ? (
                    <div>
                        <h1 style={{ color: 'black' }}>{locationData.name}</h1>
                        <p>{locationData.desc}</p>
                        <img src={locationData.image} alt={locationData.name} className='location-image' />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {locationData && (
                <div className='location-content'>
                    <div className="location-card" onClick={() => handleCardClick('/places')}>
                        <Tilt>
                            <Cards name="TOURIST PLACES" image={assets.place} />
                        </Tilt>
                    </div>
                    <div className="location-card" onClick={() => handleCardClick('/hotels')}>
                        <Tilt>
                            <Cards name="HOTELS" image={assets.hotel} />
                        </Tilt>
                    </div>
                    <div className="location-card" onClick={() => handleCardClick('/restaurants')}>
                        <Tilt>
                            <Cards name="RESTAURANTS" image={assets.restaurant} />
                        </Tilt>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Location;
