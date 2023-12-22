// TestimonialsSection.js
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Testimonial from './Testimonial';

const TestimonialsSection = ({ testimonials = null }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  // Group testimonials into pairs
  const pairedTestimonials = testimonials.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / 2);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);

    return result;
  }, []);

  return (
    <div className="container mt-5 bg-light">
      <p className="text-center fw-bold" style={{color : "#1a808d"}}>Testimonials</p>
      <h2 className="text-center">How Our Happy Clients Talk About Us</h2>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {pairedTestimonials.map((pair, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {pair.map((testimonial, itemIndex) => (
                <div key={itemIndex} className="col-md-6">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialsSection;
