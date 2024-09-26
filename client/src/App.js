import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Intro from './pages/Intro';
import './styles/App.css'
import Home from './pages/Home';
import Location from './pages/Location';
import Places from './pages/Places';
import Hotels from './pages/Hotels';
import Restaurant from './pages/Restaurant'
import Place_Details from './pages/Place_Details'
import Hotel_Details from './pages/Hotel_Details';
import Restaurant_Details from './pages/Restaurant_Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Intro/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/location" element={<Location/>} />
        <Route path='/places' element={<Places/>} />
        <Route path='/hotels' element={<Hotels/>} />
        <Route path='/restaurants' element={<Restaurant/>} />
        <Route path='/place_details' element={<Place_Details />} />
        <Route path='/hotel_details' element={<Hotel_Details />} />
        <Route path='/restaurant_details' element={<Restaurant_Details />} />
      </Routes>
    </div>
  );
}

export default App;
