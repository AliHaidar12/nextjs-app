import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Testimonial from './Testimonial';

const TestimonialsSection = ({ testimonials = null }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check on mount
    handleResize();

    // Attach event listener for resizing
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  // Adjust the number of testimonials based on the screen size
  const visibleTestimonials = isMobile ? 1 : 2;

  // Group testimonials into pairs
  const pairedTestimonials = testimonials.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / visibleTestimonials);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);

    return result;
  }, []);

  return (
    <div className="container mt-5 bg-light">
      <p className="text-center fw-bold" style={{ color: "#1a808d" }}>Testimonials</p>
      <h2 className="text-center">How Our Happy Clients Talk About Us</h2>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {pairedTestimonials.map((pair, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {pair.map((testimonial, itemIndex) => (
                <div key={itemIndex} className={`col-md-${12 / visibleTestimonials}`}>
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
