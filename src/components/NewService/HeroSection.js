// components/HeroSection.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import styles from './heroSection.module.css';
const HeroSection = ({ imageUrl, text, heading, content }) => {
  const bgImageStyle = {
    backgroundImage: `linear-gradient(
        rgba(7 7 7 / 40%),
        rgba(9 61 68 / 56%)
      ),
      url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '75vh',
  };

  

  return (
    <section className="hero" style={bgImageStyle}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className={`${styles.main} text-white text-center`}>
            <p className={`${styles.textColor} ${styles.fontSize} mb-4 text-center fw-bold text-uppercase`}>{text}</p>
          <h1 className="mb-4">{heading}</h1>
          <p className={`${styles.fontSize}`}>{content}</p>
          <Link className={`${styles.btnColor} btn btn-outline-light btn-lg `} href="#!" role="button">
            Call to action
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
