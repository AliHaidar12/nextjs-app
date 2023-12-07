import Image from 'next/image';
import React from 'react';
import styles from './banner.module.css';

const ContentSection8 = ({ mainHeading, heading, text, text1, image }) => {
  // Fixed colors
  const backgroundColor = '#ffffff';
  const buttonColor = '#1a808d';
  const buttonTextColor = 'white';
  const textColor = 'black';
  const headingColor = '#1A808D';

  const mainStyle = {
    background: backgroundColor,
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: buttonTextColor,
  };

  const textStyle = {
    color: textColor,
  };

  const headingStyle = {
    color: headingColor,
  };

  return (
      <div>
          <div className={`mt-2 d-flex flex-column ${styles.box_container} flex-md-row align-items-center justify-content-center text-white text-center py-2`}>
    <p className="mb-3 mb-md-0 me-md-3 fs-5 fw-bold">10% Off Window Curtains and Blinds online - Sale End Today</p>
    <p className="mb-0 fs-5 fw-bold">
        <i className="bi bi-telephone"></i> <span>123-456-7890</span>
    </p>
</div>
      
    <div className={`container-fluid ${styles.main1}`} >
        
      <div className="container">
        <div className={`row ${styles.inner1}`}>
          {/* H1 Heading */}
          {mainHeading && (
            <div className="col-12 mb-4 text-center">
              <h1 className="mb-4">
                {mainHeading}
              </h1>
            </div>
          )}

          {/* Left Side - Text Content */}
          <div className={`col-md-6 ${styles.inner}`} style={mainStyle}>
            <h2 className={`mb-4 ${styles.h2}`} style={headingStyle}>
              {heading}
            </h2>
            <p className="mb-4" style={textStyle}>
              {text}
            </p>
            <p className="mb-4" style={textStyle}>
            Many Curtain Choices<br/>
            Quality Products<br/>
            Custom Designs<br/>
            Low Pricing
            </p>
            
          </div>

          {/* Right Side - Image */}
          <div className={`col-md-6 ${styles.inner}`} style={mainStyle}>
          <Image width={600} height={600} src={image} alt="banner" className={`img-fluid `} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContentSection8;
