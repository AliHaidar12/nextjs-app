import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contentSection.module.css'; // Import the CSS file
import Image from 'next/image';

const ContentSection6 = ({ heading, text, image }) => {
  return (
    <div className="container mt-5">
      <div className={`row ${styles.inner}` }>
        {/* Left Side */}
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <div className="line"></div>
            <p className={styles.line1}>Custom-Designed Curtains</p>
          </div>
          <h2 className={styles.h2}>{heading}</h2>
          <p>{text}</p>
          <div className="d-flex align-items-center">
            <div className={`circle-icon-with-shadow text-center ${styles.mainIcon}`} >
              <i className={`${styles.iconstyle} bi bi-check2`} ></i>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Low Rates</p>
            </div>
            <div className="circle-icon-with-shadow text-center">
              <i className={`${styles.iconstyle} bi bi-check2`} ></i>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Fast Services</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-6">
        <Image width={600} height={600} priority src={image} alt="Your Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ContentSection6;
