import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <img src={assets.logo2} />
      </div>
      <nav className="navbar-content">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="navbar-contact-info">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className='navbar-login-button' onClick={()=> navigate('/login')}>
            Login
          </div>
        </SignedOut>
      </div>
    </header>
  );
}

export default Navbar;
