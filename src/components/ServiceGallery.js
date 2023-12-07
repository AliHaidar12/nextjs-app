import Image from 'next/image';
import React from 'react';

const ServiceGallery = ({ heading, images=null }) => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">{heading}</h2>

      <div className="row">
        {images.map((imageUrl, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Image
              width={350}
              height={350}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="img-fluid rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceGallery;
