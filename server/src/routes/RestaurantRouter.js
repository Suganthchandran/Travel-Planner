import express from 'express';
import { addRestaurant, listRestaurant, findByIdRestaurant, updateRestaurant, removeRestaurant } from '../controllers/RestaurantController.js';
import upload from '../middleware/PlacesMulter.js';

const restaurantRouter = express.Router();

restaurantRouter.post(
    '/add',
    upload.fields([{name:'menuImage',maxCount:1},{name:'image',maxCount:1},{name:'Coverimage1',maxCount:1},{name:'Coverimage2',maxCount:1},{name:'Coverimage3',maxCount:1},{name:'Coverimage4',maxCount:1},,{name:'SmallImage1',maxCount:1},,{name:'SmallImage2',maxCount:1},,{name:'SmallImage3',maxCount:1},,{name:'SmallImage4',maxCount:1},,{name:'SmallImage5',maxCount:1},,{name:'SmallImage6',maxCount:1},,{name:'SmallImage7',maxCount:1},,{name:'SmallImage8',maxCount:1},,{name:'SmallImage9',maxCount:1}]),
    addRestaurant
  );
  
restaurantRouter.get('/list', listRestaurant);
restaurantRouter.get('/:id', findByIdRestaurant);
// restaurantRouter.put('/updateplace/:id',uploadFields, updatePlace);
restaurantRouter.delete('/delete', removeRestaurant);

export default restaurantRouter;
