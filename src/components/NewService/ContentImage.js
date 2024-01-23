import React from 'react';
import Image from 'next/image';
import styles from './contentServiceNew.module.css';

function ContentImage({ url, surl, logo, heading, title, text }) {
  return (
    <div className={styles.main}>
      <div className={` container py-5`}>
        <div className="row align-items-start">
          {/* Text Section */}
          <div className={`${styles.row} col-12 col-md-6 mb-4 mb-md-0`}>
            <p>{title}</p>
            <h2 className="mb-3">{heading}</h2>
            <div className={styles.fontSize}>{text}</div>

            <div className="mb-4">
              <div className="d-flex align-items-center">
                <div className={`${styles.iconBox} me-3 mb-3`}>
                  <i className="bi bi-telephone-plus "></i>
                </div>
                <div>
                  <h5>Call any time</h5>
                  <p>+971581535184</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="col-12 col-md-6 position-relative">
            <Image
              alt=""
              src={url}
              width={200}
              height={200}
              className={`${styles.image} rounded`}
            />
            <Image
              alt=""
              src={surl}
              width={200}
              height={200}
              className={`${styles.image1} rounded`}
            />
            <Image
              alt=""
              src={logo}
              width={200}
              height={200}
              className={`${styles.image2}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentImage;
