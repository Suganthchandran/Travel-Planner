import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Location from './pages/Location';
import Places from './pages/Places';
import Hotels from './pages/Hotels';
import Restaurant from './pages/Restaurant';
import Place_Details from './pages/Place_Details';
import Hotel_Details from './pages/Hotel_Details';
import Restaurant_Details from './pages/Restaurant_Details';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import VerifyEmailRedirect from './components/VerifyEmailRedirect';
import Favourites from './pages/Favourites';

function App() {
  return (
    <div className="App">
      <SignedIn>
        <Routes>
          <Route path='/location/:name' element={<Location />} />
          <Route path='/places/:locationName' element={<Places />} />
          <Route path='/hotels/:locationName' element={<Hotels />} />
          <Route path='/restaurants/:locationName' element={<Restaurant />} />
          <Route path='/place_details/:placeId' element={<Place_Details />} />
          <Route path='/hotel_details/:hotelId' element={<Hotel_Details />} />
          <Route path='/restaurant_details/:restaurantId' element={<Restaurant_Details />} />
          <Route path='/favourite' element={<Favourites/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Intro />} />
          <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
      </SignedIn>

      <SignedOut>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Intro />} />
          {/* <Route path="*" element={<N avigate to="/login" />} /> */}
          <Route path="/verify" element={<VerifyEmailRedirect/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/sign-up' element={<SignUpPage/>} />
        </Routes>
      </SignedOut>
    </div>
  );
}

export default App;
