import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contentSection.module.css'; // Import the CSS file
import Image from 'next/image';

const ContentSection7 = ({ heading, text, image }) => {
  return (
    <div className="container mt-5">
      <div className={`row ${styles.inner}` }>
        {/* Right Side */}
        <div className="col-md-6">
        <Image width={600} height={600} src={image} priority alt="Your Image" className="img-fluid" />
        </div>

        {/* Left Side */}
        <div className="col-md-6">
          <div className="d-flex align-items-center">
            <div className="line"></div>
            <p className={styles.line1}>Our Expertise</p>
          </div>
          <h2 className={styles.h2}>{heading}</h2>
          <p>{text}</p>
          <div className="d-flex align-items-center">
            <div className={`circle-icon-with-shadow text-center ${styles.mainIcon}`} >
              <i className={`${styles.iconstyle} text-center bi bi-people-fill`} ></i>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Professional Staff</p>
            </div>
            <div className="circle-icon-with-shadow text-center">
              <i className={`${styles.iconstyle} text-center bi bi-check-all`} ></i>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Perfection Assurance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection7;
