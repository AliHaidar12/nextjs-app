// pages/index.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './mobileSection.module.css';

const MobileSection = ({imagesData}) => {
  return (
    <div className="container d-md-none">
        <div className='row'>
      {imagesData.map((image, index) => (
        <div key={index} className="col-4 mb-4">
          <Link className='text-decoration-none' href={image.href}>
          
          <div className={styles.box}>
            <Image
              src={image.src}
              alt={image.alt}
              width={60}
              height={60}
            />
          </div>
          <div className={`${styles.textBox} text-center`}>
            <p >{image.title}</p>
          </div>
          </Link>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default MobileSection;
