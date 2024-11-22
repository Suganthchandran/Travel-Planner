import express from 'express';
import { addFavourite, removeFavourite, listFavourite } from '../controllers/FavouriteController.js';
import upload from '../middleware/PlacesMulter.js';

const favouriteRouter = express.Router();

favouriteRouter.post('/', addFavourite);
favouriteRouter.get('/', listFavourite);
favouriteRouter.delete('/delete', removeFavourite);

export default favouriteRouter;
