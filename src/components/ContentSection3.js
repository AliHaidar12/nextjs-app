import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import Link from 'next/link';
const ContentSection3 = ({ mainHeading,
   button="Get A Quote",
    heading,
     text,
      text1,
       image, 
       backgroundColor, 
       buttonColor,
        buttonTextColor,
         textColor, headingColor }) => {
  const mainStyle = {
    background: backgroundColor || '#ffffff',
  };

  const buttonStyle = {
    backgroundColor: buttonColor || '#1a808d',
    color: buttonTextColor || 'white',
  };

  const textStyle = {
    color: textColor || 'black',
  };

  const headingStyle = {
    color: headingColor || '#1A808D',
  };

  return (
    <div className={styles.main}>

    
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
          <div className={`col-md-7 ${styles.inner}`} style={mainStyle}>
            <h2 className={`mb-4 ${styles.h2}`} style={headingStyle}>
              {heading}
            </h2>
            <p className="mb-4 fs-6" style={textStyle}>
              {text}
            </p>
            <p className="mb-4" style={textStyle}>
              {text1}
            </p>
            <div className="d-flex align-items-center">
            <Link href="contact">
              <button className="btn btn-primary me-3" style={buttonStyle}>
                {button}
              </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className={`col-md-5 ${styles.inner}`} style={mainStyle}>
            <Image width={600} height={600} src={image} alt="banner" className={`img-fluid ${styles.imageWithBorder}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection3;
