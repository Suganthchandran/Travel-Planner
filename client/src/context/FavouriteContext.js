import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const listFavourites = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:4000/api/favourite');
            setFavourites(response.data.favourite);
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch favourites');
        } finally {
            setLoading(false);
        }
    };

    const addFavourite = async (userId, itemId, name, place , image, type) => {
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:4000/api/favourite', {
                userId,
                itemId,
                name,
                place,
                image,
                type
            });
            setFavourites((prev) => [...prev, response.data.newFavourite]);
            console.log("Favourite Added");
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to add favourite');
        } finally {
            setLoading(false);
        }
    };

    const removeFavourite = async (id) => {
        setLoading(true);
        try {
            await axios.delete('http://localhost:4000/api/favourite/delete', { id });
            setFavourites((prev) => prev.filter((fav) => fav._id !== id));
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to remove favourite');
        } finally {
            setLoading(false);
        }
    };

    return (
        <FavouriteContext.Provider
            value={{
                favourites,
                loading,
                error,
                listFavourites,
                addFavourite,
                removeFavourite,
            }}
        >
            {children}
        </FavouriteContext.Provider>
    );
};

export const useFavourite = () => useContext(FavouriteContext);
