import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './src/config/configDB.js';
import connectCloudinary from './src/config/Cloudinary.js';
import locationRouter from './src/routes/LocationRouter.js';
import placesRouter from './src/routes/PlacesRouter.js';
import restaurantRouter from './src/routes/RestaurantRouter.js';
import hotelRouter from './src/routes/HotelRouter.js';
import favouriteRouter from './src/routes/FavouriteRoute.js';

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/location', locationRouter);
app.use('/api/place',placesRouter);
app.use('/api/restaurant',restaurantRouter);
app.use('/api/hotel',hotelRouter)
app.use('/api/favourite',favouriteRouter)

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});
