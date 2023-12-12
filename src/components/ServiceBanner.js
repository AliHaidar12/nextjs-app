// components/FullScreenBanner.js
import Image from 'next/image';
import React from 'react';

const FullScreenBanner = ({ imageUrl }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Image priority width={1500} height={500} src={imageUrl} alt="Banner Image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default FullScreenBanner;
