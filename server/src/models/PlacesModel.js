import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for places
const PlacesSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ticket: {
    type: String,
    required: true,
  },
  bestTime: {
    type: [String],
    required: true,
  },
  schedule: [
    {
      day: { type: [String], required: true },
      time: { type: [String], required: true },
    },
  ],
  rating: {
    type: String,
    required: true,
  },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  coverImages: {type: Array, required: true},
  smallImages: {type: Array, required: true},
  desc: {
    type: String,
    required: true,
  },
});

const PlacesModel = mongoose.model('Place', PlacesSchema);

export default PlacesModel;
