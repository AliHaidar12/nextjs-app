// components/TestimonialsService.js
import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import styles from './Testimonials.module.css'; // Import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

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

const TestimonialsService = ({ testimonials, heading, subHeading }) => {
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

  const testimonialsToShow = isMobile ? 1 : 3; // Show 1 testimonial on mobile, 3 on larger screens

  const chunkedTestimonials = testimonials.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / testimonialsToShow);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div>
      <div className='text-center mt-4'>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>{subHeading}</p>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            {chunkedTestimonials.map((chunk, chunkIndex) => (
              <Carousel.Item key={chunkIndex}>
                <div className="row">
                  {chunk.map((testimonial, itemIndex, array) => (
                    <div
                      key={testimonial.id}
                      className={`col-md-${12 / testimonialsToShow} mb-4 ${styles.testimonialCol} ${
                        itemIndex === 1 ? styles.secondItem : ''
                      } ${
                        itemIndex === Math.floor(array.length / 2)
                          ? styles.middleItem
                          : styles.otherItems
                      }`}
                    >
                      <div className={`testimonial-card p-4 ${styles.testimonialCard}`}>
                        <div className={`${styles.top} `}>
                          <Image
                            src={testimonial.image}
                            width={50}
                            height={50}
                            alt="testimunal_icon"
                          />
                          <strong className="">{testimonial.name}</strong>
                        </div>
                        <div className={styles.comment}>
                          <p>{testimonial.comment}</p>
                        </div>
                        <div
                          className={`testimonial-footer ${styles.testimonialFooter} d-flex align-items-center`}
                        >
                          <StarRating
                            rating={testimonial.rating}
                            className={styles.space}
                          />
                          <span className='font-weight-bold'>{testimonial.position}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsService;
