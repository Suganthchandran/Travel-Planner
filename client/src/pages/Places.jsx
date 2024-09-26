import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { locations, places } from '../assets/assets';
import Navbar from '../components/Navbar';
import '../styles/Places.css';
import { Tilt } from 'react-tilt';
import Cards from '../components/Cards';

const Places = () => {
  const { state } = useLocation();
  const { location } = state || {};  // Ensure state is not undefined

  const navigate = useNavigate();

  // Find the location in the locations array
  const loc = locations.find(item => item.name === location);

  // Filter the places related to the current location
  const place_card = places.filter(item => item.place === location);

  const handleCardClick = (placeName) => {
    navigate('/place_details', { state: { name: placeName } });
  };

  return (
    <div className='places-main'>
      <Navbar />
      {/* Check if loc is found before rendering its content */}
      {loc ? (
        <>
          <div className='places-main-image'>
            <img src={loc.image} alt={loc.name} />
          </div>
          <div className='place-content'>
            <h1>{loc.name}</h1>
            <p>{loc.desc}</p>
          </div>
        </>
      ) : (
        <div className='error'>
          <h1>Location not found</h1>
        </div>
      )}

      <h1 className='places-heading'>Tourist Places :</h1>
      <div className='place-main-cards'>
        {place_card.length > 0 ? (
          place_card.map((item, index) => (
            <Tilt key={index}>
              <div onClick={() => handleCardClick(item.name)}>
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
