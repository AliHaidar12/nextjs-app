import React from 'react'
import Image from 'next/image';
import styles from './contentServiceNew.module.css';
import TestimonialService from './NewTestimonialSection';
function CallToAction({testimonials, heading, subHeading, icon, image}) {
  return (
    <div className={styles.main}>
      <div className={` container`}>
        <div className={`${styles.innerRows1} row `} >
          <div className={`${styles.row3} col-12 col-md-6 p-5 position-relative`}>
            <div className={styles.imageBox}>
                <Image
                alt=""
                src={image}
                width={400}
                height={300}
                className={`${styles.image}`}
                />
                <div className={styles.videoIcon}>
                    <Image
                    alt=""
                    src={icon}
                    width={120}
                    height={120}
                    className={styles.icon}
                    />
                </div>
                
            </div>
          </div>
          
          <div className={`${styles.innerRow} col-12 col-md-6`}>
            {/* <div className={styles.callBox}>
                <h3 className={`${styles.heading}`}>{text}</h3>
                <h3 className={`${styles.heading} ${styles.titleColor}`}>{text1}</h3>
            </div>
            <Link className={`${styles.btnColor} mt-4 btn btn-outline-light btn-lg `} href="#!" role="button">
            CONTACT NOW
          </Link> */}
          <TestimonialService testimonials={testimonials} heading={heading} subHeading={subHeading}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction