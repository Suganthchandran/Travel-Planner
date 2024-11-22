import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  image: { type: String, required: true }, // Main image
  place: { type: String, required: true },
  name: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  room_types: [
    {
      name: { type: String, required: true },
      price: { type: String, required: true },
    },
  ],
  rating: { type: String, required: true },
  coverImages: {type: Array, required: true},
  smallImages: {type: Array, required: true},
  desc: { type: String, required: true },
});

const HotelModel = mongoose.model('Hotel', hotelSchema);

export default HotelModel;
