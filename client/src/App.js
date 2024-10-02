import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import './styles/App.css';
import Home from './pages/Home';
import Location from './pages/Location';
import Places from './pages/Places';
import Hotels from './pages/Hotels';
import Restaurant from './pages/Restaurant';
import Place_Details from './pages/Place_Details';
import Hotel_Details from './pages/Hotel_Details';
import Restaurant_Details from './pages/Restaurant_Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/home' element={<Home />} />
        {/* Dynamic route for Location */}
        <Route path='/location/:name' element={<Location />} />
        {/* Dynamic routes for other pages */}
        <Route path='/places/:locationName' element={<Places />} />
        <Route path='/hotels/:locationName' element={<Hotels />} />
        <Route path='/restaurants/:locationName' element={<Restaurant />} />
        <Route path='/place_details/:placeId' element={<Place_Details />} />
        <Route path='/hotel_details/:hotelId' element={<Hotel_Details />} />
        <Route path='/restaurant_details/:restaurantId' element={<Restaurant_Details />} />
        {/* Fallback for 404 */}
        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
