import React, { useEffect } from 'react'
import { useFavourite } from '../context/FavouriteContext'
import { Tilt } from 'react-tilt';
import Cards from '../components/Cards';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
    const { favourites, loading, error, listFavourites } = useFavourite();
    const navigate = useNavigate();

    useEffect(()=>{
        listFavourites();
    },[])

    const handleCardClick = (Id, type) => {
        if(type === "place") {
            navigate(`/place_details/${Id}`);
        }
        else if( type === "hotel") {
            navigate(`/hotel_details/${Id}`);
        }
        else {
            navigate(`/restaurant_details/${Id}`);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {favourites.length > 0 ? (
                favourites.map((item, index) => (
                    <Tilt key={index}>
                    <div onClick={() => handleCardClick(item.itemId, item.type)}>
                        <Cards name={item.name} image={item.image} />
                    </div>
                    </Tilt>
                ))
            ) : (
                <p>No favourites yet.</p>
            )}
        </div>
    )
}

export default Favourites;
