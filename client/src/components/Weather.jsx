// // src/components/Weather.js
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { assets } from '../assets/assets';
// import '../styles/Weather.css'
// import Typewriter from 'typewriter-effect';

// const Weather = ({ location }) => {
//     const [weatherData, setWeatherData] = useState(null);

//     useEffect(() => {
//         if (location) {
//             getWeather(location);
//         }
//     }, [location]);

//     const getWeather = (location) => {
//         const apiKey = "1db494b1f60c3b3360117603776f9f7e";
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => {
//                 setWeatherData(data);
//                 // const weatherCondition = data.weather[0].main;
//                 // setWeatherImage(weatherImages[weatherCondition] || "default-weather.jpg");
//             })
//             .catch((error) => console.error('Error fetching weather data:', error));
//     };

//     return (
//         <div className='weather'>
//             {weatherData ? (
//                 <div className="weather-main" style={{ backgroundImage: `url(${assets.Home_image})` }}>
//                     <Typewriter
//                         options={{
//                             strings: [weatherData.weather[0].description],
//                             autoStart: true,
//                             loop: true,
//                             wrapperClassName: 'typewriter-text',
//                         }} />
//                     <div className='weather-content'>
//                         <p>Temperature: {weatherData.main.temp} °C</p>
//                         <p>Humidity: {weatherData.main.humidity}%</p>
//                         <p>Wind Speed: {weatherData.wind.speed} m/s</p>
//                     </div>
//                 </div>
//             ) : (
//                 <p>Loading weather data...</p>
//             )}
//         </div>
//     );
// };

// Weather.propTypes = {
//     location: PropTypes.string.isRequired,
// };

// export default Weather;


import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import '../styles/Weather.css';

const Weather = ({ location, image }) => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (location) {
            getWeather(location);
        }
    }, [location]);

    const getWeather = (location) => {
        const apiKey = "1db494b1f60c3b3360117603776f9f7e";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data);
            })
            .catch((error) => console.error('Error fetching weather data:', error));
    };

    return (
        <div className='weather'>
            {weatherData ? (
                <div className="weather-main" style={{ backgroundImage: `url(${image})` }}> {/* Use dynamic image */}
                    <Typewriter
                        options={{
                            strings: [weatherData.weather[0].description],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'typewriter-text',
                        }} />
                    <div className='weather-content'>
                        <p>Temperature: {weatherData.main.temp} °C</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    </div>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

Weather.propTypes = {
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, // Expect image prop to be passed
};

export default Weather;
