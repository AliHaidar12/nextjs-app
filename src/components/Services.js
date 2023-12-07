// components/Services.js
import React from 'react';
import styles from './services.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Services = () => {
  return (
    <div className={`container ${styles.iconRowContainer}`}>
      <div className="row">
        {/* On Mobile: 2 icons in 1 row */}
        <div className={`col-6 col-md-2 ${styles.iconBox}`}>
          {/* Replace 'icon1.svg' with your actual SVG icon file */}
          <Image width={100} height={100} src="/static/images/svgexport-2.svg" alt="Icon 1" className={`img-fluid ${styles.icon}`} />
        </div>
        <div className={`col-6 col-md-2 ${styles.iconBox}`}>
          {/* Replace 'icon2.svg' with your actual SVG icon file */}
          <Image width={100} height={100} src="static/images/svgexport-3.svg" alt="Icon 2" className={`img-fluid ${styles.icon}`} />
        </div>

        {/* On Laptop and PC: 6 icons in 1 row */}
        <div className={`col-6 col-md-2 ${styles.iconBox}`}>
          {/* Replace 'icon3.svg' with your actual SVG icon file */}
          <Image width={100} height={100} src="static/images/svgexport-4.svg" alt="Icon 3" className={`img-fluid ${styles.icon}`} />
        </div>
        <div className={`col-6 col-md-2 ${styles.iconBox}`}>
          {/* Replace 'icon4.svg' with your actual SVG icon file */}
          <Image width={100} height={100} src="static/images/svgexport-5.svg" alt="Icon 4" className={`img-fluid ${styles.icon}`} />
        </div>
        <div className={`col-6 col-md-2 ${styles.iconBox}`}>
          {/* Replace 'icon5.svg' with your actual SVG icon file */}
          <Image width={100} height={100} src="static/images/svgexport-6.svg" alt="Icon 5" className={`img-fluid ${styles.icon}`} />
        </div>
        <div className={`col-6 col-md-2 ${styles.iconBox}`}>
          {/* Replace 'icon6.svg' with your actual SVG icon file */}
          <Image width={100} height={100} src="static/images/svgexport-7.svg" alt="Icon 6" className={`img-fluid ${styles.icon}`} />
        </div>
      </div>
    </div>
  );
};

export default Services;
