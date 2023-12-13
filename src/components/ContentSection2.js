// components/ContentSection2.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contentSection.module.css'; // Import the CSS file
import Image from 'next/image';

const ContentSection2 = ({ image=null, heading=null, text=null, h31=null, h32=null, h31text=null, h32text=null }) => {
  return (
    <div className={`container-fluid p-5 ${styles.positionRelative}`} style={{ color: 'black' }}>
      <div className={`row ${styles.inner}` }>
        {/* Left Side: Image */}
        <div className="col-md-6 position-relative">
        <Image
            width={600}
            height={600}
            src={image} // Replace with the actual path to your image
            alt="Your Image Alt Text"
            className="img-fluid mb-4 w-100" // Add the 'w-100' class for 100% width
        />

          {/* Moving Box */}
          <div className={styles.movingbox}>
            <div className={styles.boxText + ' row'}>
              <div className={`col-md-3 ${styles.box}`}>15</div>
              <div className={`col-md-4 ${styles.boxText}`}>years experience</div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="col-md-6">
          <div className="text-start">
            <li style={{color: "#1a808d"}} className="fs-5"> Welcome To Closing Curtain</li>
            {/* Heading */}
            <h2 className={styles.h2}>{heading}</h2>

            {/* Content */}
            <p>{text}</p>

            {/* Subheadings and Content */}
            <div className="row">
              <div className="col-6">
                <h3>{h31}</h3>
                <p>{h31text}</p>
              </div>
              <div className="col-6">
                <h3>{h32}</h3>
                <p>{h32text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection2;
