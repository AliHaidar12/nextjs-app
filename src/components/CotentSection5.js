import Image from 'next/image';
import React from 'react';
import styles from './banner.module.css';

const ContentSection5 = ({ heading, text, text1, image, reverseDirection }) => {
  const directionStyle = {
    flexDirection: reverseDirection ? 'row-reverse' : 'row',
  };

  return (
    <div className={`container-fluid ${styles.container1} mt-4 pt-4`}>
      <div className="container">
        <div className={`row ${styles.inner1}`} style={directionStyle}>
          {/* Left Side */}
          <div className="col-md-6">
            <h2 className={`mb-4 ${styles.h2}`}>{heading}</h2>
            <p className="mb-4">{text}</p>
            <p className="mb-4">{text1}</p>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-primary me-3"
                style={{ backgroundColor: "#1a808dff" }}
              >
                Get A Free Quote
              </button>
              <button
                className="btn btn-primary me-3"
                style={{ backgroundColor: "black" }}
              >
                Call Us Today
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
          <Image width={600} height={600}
              src={image}
              alt="banner"
              className={`img-fluid ${styles.imageBorder}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection5;
