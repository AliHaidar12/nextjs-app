import React from 'react'
import styles from './contentServiceNew.module.css';
import Image from 'next/image';

function CallToAction({title, image}) {
  return (
    <div className={styles.main3}>
      <div className={`container`}>
        <div className={`row`} >
          <div className={`col-12 col-md-6 p-md-5 position-relative`}>
            <h2 className={styles.heading2}>{title}</h2>
          </div>
          
          <div className={` col-12 py-4 col-md-6`}>
          <div className={styles.innerAction}>
              <div className={`${styles.actionBox} d-flex`}>
                    <div className='rounded-circle overflow-hidden me-3'>
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt="Call to Action"
                        className=''
                      />
                    </div>
                    <div className='d-block mt-3'>
                      <p className={styles.actionText}>Consult With An Expert</p>
                      <p className={styles.contactFont}>+971581535184</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction