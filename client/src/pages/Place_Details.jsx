import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Place_Details.css';
import { IoCall } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import Cards from '../components/Cards';
import { Tilt } from 'react-tilt';
import Rating from '../components/Rating';
import { useFavourite } from '../context/FavouriteContext';
import { useUser } from '@clerk/clerk-react';

const Slideshow = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='slideshow-container'>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`slide-${index}`}
                    className={`slide ${index === currentImage ? 'active' : ''}`}
                    style={{ display: index === currentImage ? 'block' : 'none' }}
                />
            ))}
        </div>
    );
};

const Place_Details = () => {
    const { placeId } = useParams();
    const { loading, error, addFavourite} = useFavourite();
    const { user } = useUser();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    console.log(placeId)

    const navigate = useNavigate();

    const handleCardClick = (placeName) => {
        navigate(`/place_details`, { state: { name: placeName } });
        window.scrollTo(0, 0);
    };

    const [place, setPlace] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });
    const [recommendations, setRecommendations] = useState([]);

    // Fetch place data by placeId
    useEffect(() => {
        const fetchPlaceData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/place/findplace/${placeId}`); // Assuming your API uses this endpoint
                if (!response.ok) {
                    throw new Error('Error fetching place data');
                }
                const data = await response.json();
                setPlace(data.placee); // Set the place data
            } catch (err) {
                console.error('Error:', err);
            }
        };

        fetchPlaceData();
    }, [placeId]); 

    if (!place) {
        return <div>Loading...</div>;
    }

    const googleMapUrl = place.coordinates 
    ? `https://www.google.com/maps/embed/v1/view?key=AIzaSyBW7gCrgWOcn76LTFgXqrZJzWNpWc8Bao8&center=${place.coordinates.lat},${place.coordinates.lng}&zoom=15`
    : `https://www.google.com/maps/embed/v1/place?key=AIzaSyBW7gCrgWOcn76LTFgXqrZJzWNpWc8Bao8&q=${encodeURIComponent(place.name)}`;



    const openModal = (image, event) => {
        setSelectedImage(image);
        const { top, left, width, height } = event.target.getBoundingClientRect();
        setImagePosition({ top, left, width, height });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

 
    const bestTime = JSON.parse(place.bestTime);  // If it is a stringified array
    console.log("Best Time",bestTime);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const handleFavourite = (name, itemId, image, place, userId, type) => {
        addFavourite( userId, itemId, name, place, image, type )
    }

    return (
        <div className={`details-main ${isModalOpen ? 'blur-background' : ''}`}>
            <Navbar />
            <Slideshow images={place.coverImages} />
            <div className='details-content'>
                <h1>{place.name}</h1>
                <p>{place.desc}</p>
            </div>

            <div className='details-mid'>
                <div className='small-images'>
                     {place.smallImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`small-${index}`}
                            onClick={(e) => openModal(img, e)}
                        />
                    ))}
                </div>

                <div className="vertical-line"></div>;

                <div className='details-mid-right'>

                    <div className='details-button-group'>
                        <div>
                            <button className='animated-button'>
                                Contact<span className='details-button-icon'><IoCall /></span>
                            </button>
                        </div>
                        <div>
                            <button className='animated-button favorite-button' onClick={() => handleFavourite(place.name, place._id, place.image,place.place, user.id, "place")}>
                                <span className="button-text">Favourite</span>
                                <span className='details-button-icon'><FaHeart /></span>
                            </button>
                        </div>
                    </div>

                    <div className='details-mid-right-first'>
                        <h1><span className='details-mid-right-heading'>Entry  Ticket : </span> <span className='details-mid-right-content'>{place.ticket}</span> <GiTicket /></h1>
                        <Rating rating={place.rating} />
                    </div>

                    <div className='details-mid-right-second'>
                        <h1>Best Month to visit :</h1>
                        <ul>
                            {bestTime.map((item, index) => (  
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            <div className='details-end'>
                <div className='timing-table'>
                    <h1>{place.name} Timings</h1>
                    <table className="place-table">
  <thead>
    <tr>
      <th>Day</th>
      <th>Timing</th>
    </tr>
  </thead>
  <tbody>
    {place.schedule.map((item, index) => (
      item.day.map((day, dayIndex) => (
        <tr key={`${index}-${dayIndex}`}>
          <td>{day}</td>
          <td>{item.time[0]}</td>
        </tr>
      ))
    ))}
  </tbody>
</table>


                </div>

                <div className='vertical-line2'></div>

                <div className='details-map'>
                    <h1>Location for {place.name} :</h1>
                    <iframe
                        title='map'
                        src={googleMapUrl}
                        width="100%"
                        height="370px"
                        style={{ border: '1px solid grey' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="place-recommend">
                <h1>Recommended Places Around {place.name}</h1>
                <div className="cards-container">
                    {recommendations.map((item, index) => (
                        <Tilt key={index}>
                            <div onClick={() => handleCardClick(item.name)} >
                            <Cards
                                // Handle click and navigate to the respective place
                                image={item.image}
                                name={item.name}
                            />
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>


            {isModalOpen && (
                <div className="modal" style={{ bottom: '-920px', left: '320px' }}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={selectedImage} alt="Full-screen" />
                </div>
            )}

        </div>
    );
};

export default Place_Details;