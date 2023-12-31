import Image from 'next/image';
import React from 'react';
import styles from './banner.module.css';

const ContentService = ({ heading, text, text1, text2, image }) => {
  

  const headingStyle = {
    color: '#1A808D',
  };

  return (
    <div className={`container-fluid ${styles.main}`}>
      <div className="container">
        <div className="row">

          <div className="col-md-6"> 
            <h2 className="mb-4" style={headingStyle}>
              {heading}
            </h2>
            <div className={styles.fontSize}>
            {text}
            
            {text1}
          
            {text2}
            </div>
              
          </div>

          <div className="col-md-6 px-4"> 
          <Image width={500} height={500} priority src={image} alt="banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentService;
