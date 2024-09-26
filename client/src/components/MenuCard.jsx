// src/components/MenuCard.jsx
import React, { useState } from 'react';
import FlipPage from 'react-flip-page';
import { motion } from 'framer-motion';
import '../styles/MenuCard.css';

const MenuCard = ({ menu, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="menu-book"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <FlipPage
        orientation="horizontal"
        className="menu-flip-book"
        showHint={true}
        width={500}
        height={500}
        onPageChange={(page) => setIsFlipped(page > 0)}
      >
        {/* Cover page */}
        <article className="menu-cover-page">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            <img src={image} alt="Menu Cover" className="menu-cover-image" />
            <h1 className="menu-cover-title">Welcome to Our Restaurant</h1>
          </motion.div>
        </article>

        {/* Menu pages */}
        {menu.map((menuSection, index) => (
          <article key={index} className="menu-page">
            <h2>{menuSection.category}</h2>
            <ul>
              {menuSection.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        {/* Thank You page */}
        <article className="menu-thank-you-page">
          <h1>Thank You!</h1>
          <p>We hope you enjoyed browsing our menu. Looking forward to serving you soon!</p>
        </article>
      </FlipPage>
    </motion.div>
  );
};

export default MenuCard;
