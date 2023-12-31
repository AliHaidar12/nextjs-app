import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './contentSection.module.css';

const TypesSection = ({ heading, images = null, showButton = true }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{heading}</h2>

      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-6">
        {images &&
          images.map((image, index) => (
            <div key={index} className="col mb-2">
              <div
                className={`image-container ${styles.imageWithBorder}`}
              >
                <Image
                  priority
                  width={200}
                  height={200}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          ))}
      </div>

      {/* View More Button */}
      {showButton && (
        <div className="text-center">
          <Link href="fabric-collection"><button style={{background: "#1a808d"}} className="btn btn-primary mt-4">View More</button></Link>
        </div>
      )}

      {/* Media Query for Mobile Devices */}
      <style jsx>{`
        @media (max-width: 767px) {
          .row-cols-md-3 {
            column-count: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default TypesSection;
