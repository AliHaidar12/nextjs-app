import React from 'react';
import Image from 'next/image';
import styles from './contentServiceNew.module.css';

function NewServiceSection1({title, heading, text,  image,}) {
  return (
    <div className={styles.background}>
      <div className={` container py-5 px-5`}>
        <div className={`${styles.innerRows} row align-items-start`} >
          <div className={`${styles.row} col-12 col-md-6 p-0 mb-md-0 order-md-2`}>
            <div>
                <Image
                alt=""
                src={image}
                width={200}
                height={200}
                className={`${styles.image}`}
                />
            </div>
            {/* <div className={styles.background}>
              <div className={`${styles.background1} p-0  px-md-3`}>
                  <p className={`${styles.titleColosr} fw-bold`}>{title}</p>
                  <h2 className={`${styles.heading} mb-3`}>{heading}</h2>
                  <div className={styles.fontSize}>{text}</div>
              </div>
              <Link className={`${styles.btnColor} btn btn-outline-light btn-lg `} href="#!" role="button">
                Order Now
            </Link>
            </div> */}
            
          </div>
          
          <div className={`${styles.innerRow} col-12 col-md-6`}>
            <div className={styles.background}>
              <div className='px-0  py-md-5 '>
              <p className={`${styles.titleColosr} fw-bold`}>{title}</p>
                  <h2 className={`${styles.heading} mb-3`}>{heading}</h2>
                  <div className={styles.fontSize}>{text}</div>
              </div>
              {/* <Link className={`${styles.btnColor} btn btn-outline-light btn-lg `} href="#!" role="button">
                Order Now
            </Link> */}
            </div>
            
          
            {/* <div>
            <Image
              alt=""
              src={image}
              width={200}
              height={200}
              className={`${styles.image}`}
            />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewServiceSection1