import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import styles from './newTestimonials.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className={styles.star} />);
  }

  // Half star
  if (hasHalfStar) {
    stars.push(<FaStarHalf key={fullStars} className={styles.star} />);
  }

  return <div className={styles.rating}>{stars}</div>;
};

const TestimonialService = ({ testimonials, heading, subHeading }) => {
  return (
    <div>
      <div className='text-center mt-5'>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{subHeading}</p>
      </div>

      <div className="row w-100 m-auto">
        <div className="col-md-12">
          <Carousel>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className={`col-md-12 mb-4 ${styles.testimonialCol} ${styles.testimonialCard} text-center`}>
                  <div className={styles.comment}>
                    <p>{testimonial.comment}</p>
                  </div>
                  <div className={`${styles.top} mt-3 d-flex mx-auto`}>
                    <div className='rounded-circle overflow-hidden me-3'>
                      <Image
                        src={testimonial.image}
                        width={75}
                        height={75}
                        alt="testimonial_icon"
                        className=''
                      />
                    </div>
                    <div className='d-block mt-3'>
                      <p className={styles.name}>{testimonial.name}</p>
                      <StarRating rating={testimonial.rating} className={styles.space} />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialService;
