import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Intro.css'
import {assets} from '../assets/assets'
import Navbar from '../components/Navbar';

const Intro = () => {
  return (
    <div className="intro">
      <Navbar/>
      <section className="intro-main" style={{ backgroundImage: `url(${assets.intro_image})` }}>
        <h1>Welcome to Diago</h1>
        <p>
          Welcome to Diago – your ultimate travel companion for discovering the world's hidden gems. Whether you're planning a relaxing getaway, an adventurous expedition, or a cultural exploration, Diago helps you curate the perfect journey.
        </p>
        <button className="read-more-btn"><Link to='/home' style={{textDecoration:'none',color:'white',fontWeight:'650'}}>Set Your Journey</Link></button>
      </section>
    </div>
  );
};

export default Intro;
