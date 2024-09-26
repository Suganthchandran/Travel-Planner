import intro_image from './Home3.jpg';
import Home_image from './Home_image3.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpeg';
import img4 from './4.jpg';
import menu_image from './menu.jpg';
import clear_sky from './clear_sky.jpeg'
import place from './Places.jpg'
import hotel from './Hotels.jpg'
import restaurant from './Restaurant.jpg'

export const assets = {
    intro_image,
    Home_image,
    place,
    hotel,
    restaurant
};

export const data = [
    {
      destination: 'Mount Bromo',
      location: 'Volcano in East Java',
      rating: 4.9,
      price: 150,
      days: '3D2N',
      image: img1,
    },
    {
      destination: 'Labengki Sombori',
      location: 'Islands in Sulawesi',
      rating: 4.8,
      price: 250,
      days: '3D2N',
      image: img2,
    },
    {
      destination: 'Sailing Komodo',
      location: 'Labuan Bajo',
      rating: 4.8,
      price: 200,
      days: '3D2N',
      image: img3,
    },
    {
        destination: 'Sailing Komodo',
        location: 'Ooty',
        rating: 4.8,
        price: 200,
        days: '3D2N',
        image: img4,
      },
      {
        destination: 'Mount Bromo',
        location: 'Volcano in East Java',
        rating: 4.9,
        price: 150,
        days: '3D2N',
        image: img1,
      },
      {
        destination: 'Labengki Sombori',
        location: 'Islands in Sulawesi',
        rating: 4.8,
        price: 250,
        days: '3D2N',
        image: img2,
      },
      {
        destination: 'Sailing Komodo',
        location: 'Labuan Bajo',
        rating: 4.8,
        price: 200,
        days: '3D2N',
        image: img3,
      },
      {
          destination: 'Sailing Komodo',
          location: 'Ooty',
          rating: 4.8,
          price: 200,
          days: '3D2N',
          image: img4,
        },
];

export const weather_images = {
  clear_sky
}

export const locations = [
  {
    id : 0,
    name : "Ooty",
    image : img2,
    desc : "Ooty, also known as Udhagamandalam, is a picturesque hill station nestled in the Nilgiri Hills of Tamil Nadu, India. Famous for its cool climate, it offers a tranquil escape with rolling tea plantations, dense forests, and misty mountains. The town is dotted with charming colonial-era architecture, serene lakes, and vibrant botanical gardens. Popular attractions include the peaceful Ooty Lake, the expansive Government Botanical Gardens, and the stunning views from Doddabetta Peak. Ooty is also home to the Nilgiri Mountain Railway, a UNESCO World Heritage site, which offers scenic train rides through the hills. Its natural beauty and serene atmosphere make it a popular destination for nature lovers and those seeking a relaxing retreat."
  },
  {
    id : 1,
    name : "Tondi",
    image : img2,
    desc : "Losbsbb hdehddbfhfhfbduhfb   bwdewbdewbf fhewf f ewufeiuf ewfe fegieggoagbefo f gfo  gf fg w g gef g"
  }
]

export const places = [
  {
    id:0,
    image: img1,
    place : 'Ooty',
    name: 'Botanical Garden',
    ticket : '$ 200',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    coordinates: {
      lat: 11.41899399553629,
      lng: 76.71166531490057
  },
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'The Government Botanical Garden in Ooty, nestled amidst the Nilgiri Hills, is a serene oasis of vibrant flora. Spread across 55 acres, the garden boasts a diverse collection of exotic and indigenous plants, including rare species like the paper bark tree and the monkey puzzle tree. The well-maintained lawns, terraced layout, and picturesque Italian garden create a tranquil atmosphere, perfect for nature enthusiasts. Visitors can marvel at the colorful blooms, explore the fern house, and even witness the annual flower show held in May. A visit to the Ooty Botanical Garden offers a delightful escape into the heart of nature.',
  },
  {
    id:1,
    image: img2,
    place : 'Ooty',
    name: 'Historical Museum',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.4',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Explore rich history and culture through fascinating exhibits and artifacts at this well-curated museum.',
  },
  {
    id:2,
    image: img3,
    place : 'Ooty',
    name: 'Beach Resort',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.3',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Relax and unwind at this luxurious beach resort with stunning ocean views, excellent amenities, and a variety of recreational activities.',
  },
  {
    id:3,
    image: img4,
    place : 'Ooty',
    name: 'Mountain Retreat',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '2',
    ticket : 'Free',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A cozy mountain retreat offering breathtaking views, hiking opportunities, and a tranquil environment to recharge and connect with nature.',
  },
  {
    id:4,
    image: img1,
    place : 'Ooty',
    name: 'Botanical Garden',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A beautiful and serene botanical garden offering a wide variety of plant species. Perfect for nature lovers and a peaceful retreat from the city.',
  },
  {
    id:5,
    image: img2,
    place : 'Ooty',
    name: 'Historical Museum',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Explore rich history and culture through fascinating exhibits and artifacts at this well-curated museum.',
  },
  {
    id:6,
    image: img3,
    place : 'Ooty',
    name: 'Beach Resort',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Relax and unwind at this luxurious beach resort with stunning ocean views, excellent amenities, and a variety of recreational activities.',
  },
  {
    id:7,
    image: img4,
    place : 'Ooty',
    name: 'Mountain Retreat',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A cozy mountain retreat offering breathtaking views, hiking opportunities, and a tranquil environment to recharge and connect with nature.',
  },
  {
    id:8,
    image: img1,
    place : 'Ooty',
    name: 'Botanical Garden',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A beautiful and serene botanical garden offering a wide variety of plant species. Perfect for nature lovers and a peaceful retreat from the city.',
  },
  {
    id:9,
    image: img2,
    place : 'Ooty',
    name: 'Historical Museum',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Explore rich history and culture through fascinating exhibits and artifacts at this well-curated museum.',
  },
  {
    id:10,
    image: img3,
    place : 'Ooty',
    name: 'Beach Resort',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Relax and unwind at this luxurious beach resort with stunning ocean views, excellent amenities, and a variety of recreational activities.',
  },
  {
    id:11,
    image: img4,
    place : 'Ooty',
    name: 'Mountain Retreat',
    ticket : 'Free',
    Best_Time : ['April','May','June'],
    schedule : [
      {day:'Monday',time:'7.00am - 6.30pm' },
      {day:'Tuesday',time:'7.00am - 6.30pm' },
      {day:'Wednesday',time:'7.00am - 6.30pm' },
      {day:'Thursday',time:'7.00am - 6.30pm' },
      {day:'Friday',time:'7.00am - 6.30pm' },
      {day:'Saturday',time:'7.00am - 6.30pm' },
      {day:'Sunday',time:'7.00am - 6.30pm' },
    ],
    rating : '4.5',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
   small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A cozy mountain retreat offering breathtaking views, hiking opportunities, and a tranquil environment to recharge and connect with nature.',
  },
  
];


export const hotels = [
  {
    image: img1,
    place : 'Ooty',
    name: 'Grand Palace Hotel',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
    
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A luxurious hotel with elegant rooms, top-notch amenities, and impeccable service. Located in the heart of the city for easy access to major attractions.',
  },
  {
    image: img2,
    place : 'Ooty',
    name: 'Seaside Inn',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],    
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    rating : '4.2',
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A charming inn by the sea offering cozy accommodations, stunning ocean views, and a relaxing atmosphere. Perfect for a seaside getaway.',
  },
  {
    image: img3,
    place : 'Ooty',
    name: 'Mountain Lodge',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    rating : '4.2',
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A rustic lodge nestled in the mountains, featuring comfortable rooms, a cozy fireplace, and beautiful views of the surrounding landscape.',
  },
  {
    image: img4,
    place : 'Ooty',
    name: 'Urban Suites',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Modern suites with stylish decor, located in a bustling urban area. Offers convenient access to shopping, dining, and entertainment.',
  },
  {
    image: img1,
    place : 'Ooty',
    name: 'Grand Palace Hotel',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A luxurious hotel with elegant rooms, top-notch amenities, and impeccable service. Located in the heart of the city for easy access to major attractions.',
  },
  {
    image: img2,
    place : 'Ooty',
    name: 'Seaside Inn',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A charming inn by the sea offering cozy accommodations, stunning ocean views, and a relaxing atmosphere. Perfect for a seaside getaway.',
  },
  {
    image: img3,
    place : 'Ooty',
    name: 'Mountain Lodge',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A rustic lodge nestled in the mountains, featuring comfortable rooms, a cozy fireplace, and beautiful views of the surrounding landscape.',
  },
  {
    image: img4,
    place : 'Ooty',
    name: 'Urban Suites',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Modern suites with stylish decor, located in a bustling urban area. Offers convenient access to shopping, dining, and entertainment.',
  },
  {
    image: img1,
    place : 'Ooty',
    name: 'Grand Palace Hotel',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A luxurious hotel with elegant rooms, top-notch amenities, and impeccable service. Located in the heart of the city for easy access to major attractions.',
  },
  {
    image: img2,
    place : 'Ooty',
    name: 'Seaside Inn',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A charming inn by the sea offering cozy accommodations, stunning ocean views, and a relaxing atmosphere. Perfect for a seaside getaway.',
  },
  {
    image: img3,
    place : 'Ooty',
    name: 'Mountain Lodge',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'A rustic lodge nestled in the mountains, featuring comfortable rooms, a cozy fireplace, and beautiful views of the surrounding landscape.',
  },
  {
    image: img4,
    place : 'Ooty',
    name: 'Urban Suites',
    room_types: [
      { name: "Single Bed", price: "$100 per night" },
      { name: "Two Bed", price: "$150 per night" },
      { name: "Suite", price: "$300 per night" },
      { name: "Deluxe Room", price: "$200 per night" },
      { name: "King Suite", price: "$350 per night" },
      { name: "Queen Suite", price: "$320 per night" },
      { name: "Family Room", price: "$250 per night" },
      { name: "Presidential Suite", price: "$500 per night" },
      { name: "Executive Suite", price: "$450 per night" },
      { name: "Studio Room", price: "$180 per night" }
    ],
  rating : '4.2',
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'Modern suites with stylish decor, located in a bustling urban area. Offers convenient access to shopping, dining, and entertainment.',
  },
];


export const restaurants = [
  {
    image: img1,
    place : 'Ooty',
    name: 'The Gourmet Bistro',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    desc: 'An upscale bistro offering a diverse menu of gourmet dishes made from the finest ingredients. Known for its elegant ambiance and exceptional service.',
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ]
  },
  {
    image: img2,
    place : 'Ooty',
    name: 'Seafood Haven',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A seafood lover\'s paradise featuring fresh catches of the day, expertly prepared in a variety of delicious dishes. Enjoy a casual and inviting dining experience.',
  },
  {
    image: img3,
    place : 'Ooty',
    name: 'Mountain Grill',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A cozy grill with a rustic charm, offering hearty meals and comfort food. Perfect for a casual meal with friends and family.',
  },
  {
    image: img4,
    place : 'Ooty',
    name: 'Urban Eats',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A trendy eatery serving a variety of urban-inspired dishes with a modern twist. Great for a quick lunch or a casual dinner in the city.',
  },
  {
    image: img1,
    place : 'Ooty',
    name: 'The Gourmet Bistro',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'An upscale bistro offering a diverse menu of gourmet dishes made from the finest ingredients. Known for its elegant ambiance and exceptional service.',
  },
  {
    image: img2,
    place : 'Ooty',
    name: 'Seafood Haven',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A seafood lover\'s paradise featuring fresh catches of the day, expertly prepared in a variety of delicious dishes. Enjoy a casual and inviting dining experience.',
  },
  {
    image: img3,
    place : 'Ooty',
    name: 'Mountain Grill',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A cozy grill with a rustic charm, offering hearty meals and comfort food. Perfect for a casual meal with friends and family.',
  },
  {
    image: img4,
    place : 'Ooty',
    name: 'Urban Eats',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A trendy eatery serving a variety of urban-inspired dishes with a modern twist. Great for a quick lunch or a casual dinner in the city.',
  },
  {
    image: img1,
    place : 'Ooty',
    name: 'The Gourmet Bistro',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'An upscale bistro offering a diverse menu of gourmet dishes made from the finest ingredients. Known for its elegant ambiance and exceptional service.',
  },
  {
    image: img2,
    place : 'Ooty',
    name: 'Seafood Haven',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A seafood lover\'s paradise featuring fresh catches of the day, expertly prepared in a variety of delicious dishes. Enjoy a casual and inviting dining experience.',
  },
  {
    image: img3,
    place : 'Ooty',
    name: 'Mountain Grill',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A cozy grill with a rustic charm, offering hearty meals and comfort food. Perfect for a casual meal with friends and family.',
  },
  {
    image: img4,
    place : 'Ooty',
    name: 'Urban Eats',
    special_food : 'Chicken',
    working_time : '8.00am - 10.00pm',
    rating : '4.2',
    menu_image : menu_image,
    cover_images: {
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
    },
    small_images : {
      img1 : img1,
      img2 : img2,
      img3 : img1,
      img4 : img2,
      img5 : img1,
      img6 : img2,
      img7 : img1,
      img8 : img2,
      img9 : img1,
    },
    menu: [
      {
        category: 'Starters',
        items: [
          { name: 'Garlic Bread', price: '$5' },
          { name: 'Bruschetta', price: '$7' },
          { name: 'Stuffed Mushrooms', price: '$8' }
        ]
      },
      {
        category: 'Main Course',
        items: [
          { name: 'Grilled Chicken', price: '$15' },
          { name: 'Pasta Alfredo', price: '$12' },
          { name: 'Steak', price: '$20' }
        ]
      },
      {
        category: 'Desserts',
        items: [
          { name: 'Chocolate Lava Cake', price: '$8' },
          { name: 'Tiramisu', price: '$6' },
          { name: 'Cheesecake', price: '$7' }
        ]
      },
      {
        category: 'Drinks',
        items: [
          { name: 'Mojito', price: '$10' },
          { name: 'Lemonade', price: '$4' },
          { name: 'Coffee', price: '$3' }
        ]
      }
    ],
    desc: 'A trendy eatery serving a variety of urban-inspired dishes with a modern twist. Great for a quick lunch or a casual dinner in the city.',
  },
];
