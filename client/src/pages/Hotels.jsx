// src/pages/Hotels.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { locations, hotels } from '../assets/assets';
import Navbar from '../components/Navbar';
import '../styles/Hotels.css';
import { Tilt } from 'react-tilt';
import Cards from '../components/Cards';

const Hotels = () => {
  const { locationName } = useParams();
  const [locationData, setLocationData] = useState(null);
  const [hotelData, setHotelData] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchLocationData = async () => {
    try {
        console.log("Name is ",locationName);
        const response = await fetch(`http://localhost:4000/api/location/findlocationbyname/${locationName}`);
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

// Function to fetch places data from the database
const fetchHotelData = async () => {
    try {
        const response = await fetch(`http://localhost:4000/api/hotel/list`); // Fetch all places
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const filteredHotels = data.hotels.filter(hotel => hotel.place === locationName); // Filter places by location name
        setHotelData(filteredHotels);
        console.log("Filtered Hotels",filteredHotels)
    } catch (err) {
        setError('Error fetching Hotels data');
        console.error(err);
    }
};

const handleCardClick = (hotelId) => {
    console.log(hotelId);
    navigate(`/hotel_details/${hotelId}`); // Ensure this matches the route in App.js
};


// Fetch data when the component mounts
useEffect(() => {
    fetchLocationData();
    fetchHotelData();
}, [locationName]);

if (error) return <div>{error}</div>;

  return (
    <div className='hotel-main'>
      <Navbar />
      {locationData ? (
                <>
                    <div className='places-main-image'>
                        <img src={locationData.image} alt={locationData.name} />
                    </div>
                    <div className='place-content'>
                        <h1>{locationData.name}</h1>
                        <p>{locationData.desc}</p>
                    </div>
                </>
            ) : (
                <div className='error'>
                    <h1>Location not found</h1>
                </div>
            )}

      <h1 className='hotel-heading'>Hotels :</h1>
      <div className='hotel-main-cards'>
      {hotelData.length > 0 ? (
        hotelData.map((item, index) => (
          <Tilt key={index}>
            <div onClick={() => handleCardClick(item._id)}>
              <Cards name={item.name} image={item.image} />
            </div>
          </Tilt>
        ))
      ) : (
        <p>No Hotels found for this location.</p>
    )}
      </div>
    </div>
  );
};

export default Hotels;
