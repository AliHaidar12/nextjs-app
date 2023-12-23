import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contentSection.module.css'; // Import the CSS file


const ContentSection = ({ heading=null, image=null, paragraph1=null, paragraph2=null, paragraph3=null, backgroundColor=null, textColor=null }) => {
  const sectionStyle = {
    
    backgroundColor: backgroundColor || '#1a808d',
    color: textColor || 'white',
  };

  return (
    <div className={`${styles.mainSection} container-fluid `}  style={sectionStyle}>
      <div className={`row ${styles.inner}` } >
        {/* Heading */}
        <div className="col-12 mb-4 text-center">
          <h2>{heading}</h2>
        </div>

        {/* Left Side: Text Content */}
        <div className="col-md-6">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6">
          <Image
            src={image}
            width={688}
            height={356}
            alt="Your Image Alt Text"
            className="img-fluid"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
