import Image from 'next/image';
import React from 'react';
import styles from './banner.module.css';

const ContentService2 = ({ heading, text, text1, image }) => {
  const textStyle = {
    color: 'black',
  };

  const headingStyle = {
    color: '#1A808D',
  };

  return (
    <div className={`container-fluid  ${styles.main}`}>
      <div className="container">
        <div className="row">
            <div className="col-md-6 px-4"> 
            <Image width={600} priority height={600} src={image} alt="banner" className="img-fluid" />
            </div>

          <div className="col-md-6"> 
            <h2 className="mb-2" style={headingStyle}>
              {heading}
            </h2>
            <div className='fs-6'>
              {text}
              
              {text1}
            </div>
              
            
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default ContentService2;
