import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import '../styles/Places.css';
import { Tilt } from 'react-tilt';
import Cards from '../components/Cards';

const Places = () => {
    const { locationName } = useParams(); // Get the location name from URL params
    const [locationData, setLocationData] = useState(null);
    const [placesData, setPlacesData] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use useNavigate to navigate programmatically

    // Function to fetch location data from the database
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
    const fetchPlacesData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/place/list`); // Fetch all places
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const filteredPlaces = data.place.filter(place => place.place === locationName); // Filter places by location name
            setPlacesData(filteredPlaces);
            console.log("Filtered Places",filteredPlaces)
        } catch (err) {
            setError('Error fetching places data');
            console.error(err);
        }
    };

    const handleCardClick = (placeId) => {
        console.log(placeId);
        navigate(`/place_details/${placeId}`); // Ensure this matches the route in App.js
    };
    

    // Fetch data when the component mounts
    useEffect(() => {
        fetchLocationData();
        fetchPlacesData();
    }, [locationName]);

    if (error) return <div>{error}</div>;

    return (
        <div className='places-main'>
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

            <h1 className='places-heading'>Tourist Places:</h1>
            <div className='place-main-cards'>
                {placesData.length > 0 ? (
                    placesData.map((item, index) => (
                        <Tilt key={index}>
                            {/* Correctly call handleCardClick when clicking on a card */}
                            <div onClick={() => handleCardClick(item._id)}>
                                <Cards name={item.name} image={item.image} />
                            </div>
                        </Tilt>
                    ))
                ) : (
                    <p>No places found for this location.</p>
                )}
            </div>
        </div>
    );
};

export default Places;
