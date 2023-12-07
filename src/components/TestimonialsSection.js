// TestimonialsSection.js
import React from 'react';
import Testimonial from './Testimonial';

const TestimonialsSection = ({testimonials=null}) => {
  

  return (
    <div className="container mt-5 bg-light">
      <h1 className="text-center">Testimonials</h1>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-6">
            <Testimonial {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
