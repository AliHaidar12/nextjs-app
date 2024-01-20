// components/FullScreenBanner.js
import React from 'react';

const ServiceBanner2 = ({ imageUrl, heading }) => {
    const bgImageStyle = {  
      background: `rgba(0, 0, 0) url(${imageUrl}) center/cover no-repeat`,
        height: '30vh',
      };
  return (
    <div  className="container-fluid">
      <div className="row h-10">
        <div style={bgImageStyle} className="col d-flex align-items-center justify-content-center text-center">
          <div className="text-white">
            <h1>{heading}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner2;
