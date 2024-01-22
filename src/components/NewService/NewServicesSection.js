import React from 'react';
import Image from 'next/image';
import styles from './contentServiceNew.module.css';

function ServiceSection({ mainImageUrl, heading, title, text, subImages }) {
  return (
    <div className={styles.main1}>
      <div className={` container py-5`}>
        <div className="row align-items-start">
          {/* Main Image Section */}
          <div className="col-12 col-md-6">
            <Image
              alt=""
              src={mainImageUrl}
              width={200}
              height={200}
              className={` ${styles.imageDesign}`}
            />
          </div>

          {/* Text Section */}
          <div className={` col-12 col-md-6 mb-4 mb-md-0`}>
            <div className={styles.contentBox}>
                <p className={`${styles.titleColor} fw-bold`}>{title}</p>
                <h2 className={`${styles.heading} mb-3`}>{heading}</h2>
                <div className={styles.fontSize}>{text}</div>
            </div>
            

            <div className="row mt-4">
              {subImages.map((imageUrl, index) => (
                <div key={index} className="col-6 col-md-3 mb-3">
                  <Image
                    alt=""
                    src={imageUrl}
                    width={150}
                    height={150}
                    className={` ${styles.imageDesign1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
