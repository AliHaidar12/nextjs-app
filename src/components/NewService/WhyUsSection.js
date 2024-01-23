// components/HeroSection.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import styles from './heroSection.module.css';
const WhyUsSection = ({ imageUrl, text, heading }) => {
  const bgImageStyle = {
    backgroundImage: `linear-gradient(
        rgba(7 7 7 / 70%),
        rgba(21 72 79 / 70%)
      ),
      url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
  };

  

  return (
    <section className='py-5' >
        <div className={`${styles.whyUs} mb-3`} style={bgImageStyle}>
            <div className="d-flex justify-content-center align-items-center">
            <div className={`${styles.main1} text-white text-center`}>
            <h2 className={`${styles.heading} mb-4`}>{heading}</h2>
            <div className={`${styles.fontSize} mb-4`} >{text}</div>
            <Link className={`${styles.btnColor} btn btn-outline-light btn-lg `} href="#!" role="button">
                Contact Us
            </Link>
            </div>
        </div>
        </div>
      
    </section>
  );
};

export default WhyUsSection;
