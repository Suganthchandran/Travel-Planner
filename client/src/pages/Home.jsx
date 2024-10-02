import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Country, State, City } from 'country-state-city';
import '../styles/Home.css';
import { assets } from '../assets/assets';
import { data } from '../assets/assets';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ImAirplane } from "react-icons/im";
import Card from '../components/Home-Card';

const Home = () => {
    const [location, setLocation] = useState(""); 
    const [date, setDate] = useState("");
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            const countryStates = State.getStatesOfCountry(selectedCountry);
            setStates(countryStates);
            setSelectedState("");
            setCities([]);
        } else {
            setStates([]);
            setCities([]);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState) {
            const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
            setCities(stateCities);
        } else {
            setCities([]);
        }
    }, [selectedState]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const locationToSend = location ? location : selectedState;
    
        navigate(`/location/${locationToSend}`, { state: { location: locationToSend, date } });
    };
    

    return (
        <div className='home'>
            <Navbar />
            <section className="home-image" style={{ backgroundImage: `url(${assets.Home_image})` }}>
            </section>
            <div className='home-form-container'>
                <motion.form
                    className='home-form'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    onSubmit={handleSubmit}
                >
                    <div className='input-container'>
                        <select
                            className='input-field'
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            required
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                        <label className='input-label'>Country</label>
                    </div>

                    <div className='input-container'>
                        <select
                            className='input-field'
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            required
                            disabled={!selectedCountry}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                        <label className='input-label'>State</label>
                    </div>

                    <div className='input-container'>
                        <select
                            className='input-field'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            disabled={!selectedState} 
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                        <label className='input-label'>City</label>
                    </div>

                    <div className='input-container'>
                        <input
                            type='date'
                            className='input-field'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <label className='input-label'>Date</label>
                    </div>
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='submit-button'
                    >
                        Search<ImAirplane className='airplane-icon' />
                    </motion.button>
                </motion.form>
            </div>

            <div className='home-popular'>
                <h1 className='home-popular-heading'>Popular Places</h1>
                <div className="card-list">
                    {data.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
