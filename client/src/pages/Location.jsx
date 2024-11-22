import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar';
import Weather from '../components/Weather';
import Cards from '../components/Cards';
import { Tilt } from 'react-tilt';
import { assets } from '../assets/assets';
import '../styles/Location.css';

const Location = () => {
    const { name } = useParams();
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

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
        navigate(path); 
    };

    if (error) return <div>{error}</div>;

    return (
        <div className='location'>
            <Navbar />
            <Weather location={locationData ? locationData.name : ''} image={locationData ? locationData.image : ''} />
            <div>
                {locationData ? (
                    <div>
                        <h1 style={{ color: 'black' }}>{locationData.name}</h1>
                        <p>{locationData.desc}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {locationData && (
                <div className='location-content'>
                    <div className="location-card" onClick={() => handleCardClick(`/places/${locationData.name}`)}>
                        <Tilt>
                            <Cards name="TOURIST PLACES" image={assets.place} />
                        </Tilt>
                    </div>
                    <div className="location-card" onClick={() => handleCardClick(`/hotels/${locationData.name}`)}>
                        <Tilt>
                            <Cards name="HOTELS" image={assets.hotel} />
                        </Tilt>
                    </div>
                    <div className="location-card" onClick={() => handleCardClick(`/restaurants/${locationData.name}`)}>
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
