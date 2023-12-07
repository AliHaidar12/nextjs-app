// Testimonial.js
import Image from 'next/image';
import React from 'react';

const Testimonial = ({ image, rating, message, name }) => {
  // Function to generate star icons based on the rating
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star-icon fs-lg">&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="testimonial-box mx-auto p-1 bg-white"> {/* or bg-light */}
      <div className="testimonial-row d-flex align-items-center justify-content-center">
        <div className="testimonial-image" style={{ width: '60%' }}>
          <Image width={300} height={300} src={image} alt={`Testimonial from ${name}`} className="img-fluid rounded-circle" />
        </div>
        <div className="testimonial-content ml-4">
          <div className="testimonial-rating mb-2 fs-2">{generateStars()}</div>
          <div className="testimonial-message mb-2 fs-lg">{message}</div>
          <div className="testimonial-name font-weight-bold fs-5">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
