import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

const ImageCarousel = ({ images=null, heading }) => {
  return (
    <div className="container text-center mt-5">
      <h2>{heading}</h2>

      <Carousel className="mt-4">
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            {images.map((imageUrl, index) => (
              <Image
              width={80}
              height={80}
                key={index}
                className="w-25 border border-dark m-2 p-3"  // Corrected comment syntax
                src={imageUrl}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
