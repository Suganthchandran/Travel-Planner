// src/pages/Restaurant.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { locations, restaurants } from '../assets/assets';
import Navbar from '../components/Navbar';
import '../styles/Restaurant.css';
import { Tilt } from 'react-tilt';
import Cards from '../components/Cards';

const Restaurant = () => {
  const { locationName } = useParams();
  const [locationData, setLocationData] = useState(null);
  const [restaurantData, setRestaurantData] = useState([]);
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
const fetchRestaurantsData = async () => {
    try {
        const response = await fetch(`http://localhost:4000/api/restaurant/list`); // Fetch all places
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const filteredRestaurants = data.restaurants.filter(restaurant => restaurant.place === locationName); // Filter places by location name
        setRestaurantData(filteredRestaurants);
        console.log("Filtered Restaurants",filteredRestaurants)
    } catch (err) {
        setError('Error fetching Restaurant data');
        console.error(err);
    }
};

const handleCardClick = (restaurantId) => {
    console.log(restaurantId);
    navigate(`/restaurant_details/${restaurantId}`); // Ensure this matches the route in App.js
};


// Fetch data when the component mounts
useEffect(() => {
    fetchLocationData();
    fetchRestaurantsData();
}, [locationName]);

if (error) return <div>{error}</div>;

  return (
    <div className='restaurant-main'>
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
            
      <h1 className='restaurant-heading'>Restaurants :</h1>
      <div className='restaurant-main-cards'>
      {restaurantData.length > 0 ? (
        restaurantData.map((item, index) => (
          <Tilt key={index}>
            <div onClick={() => handleCardClick(item._id)}>
              <Cards name={item.name} image={item.image} />
            </div>
          </Tilt>
        ))
      ) : (
        <p>No Restaurant found for this location.</p>
    )}
      </div>
    </div>
  );
};

export default Restaurant;
