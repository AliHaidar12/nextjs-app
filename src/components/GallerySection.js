import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contentSection.module.css'; // Import the CSS file
import Image from 'next/image';
import Link from 'next/link';

const GallerySection = ({ images = null, heading, showButton = true }) => {
  return (
    <div className="container mt-5 mb-5">
      {/* Heading */}
      <h2 className={`text-center mb-4 ${styles.h2}`}>{heading}</h2>

      {/* Gallery Images */}
      <div className="row">
        {/* Map through your array of image sources */}
        {images &&
          images.map((imageSrc, index) => (
            <div key={index} className="col-md-3 mb-4">
              <Image
                priority
                width={300}
                height={170}
                src={imageSrc}
                alt={`Gallery Image ${index + 1}`}
                className="img-fluid gallery-image"
              />
            </div>
          ))}
      </div>

      {/* "See More" Button */}
      {showButton && (
        <div className="text-center mt-4">
          <Link href="gallery"><button className="btn btn-primary" style={{ backgroundColor: '#1a808d' }}>
            View More Projects
          </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
