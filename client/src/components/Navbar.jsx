import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="navbar-logo">Diago</div>
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
        <a href="tel:+046000000000">Login</a>
      </div>
    </header>
  );
}

export default Navbar;
