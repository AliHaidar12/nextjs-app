import React from 'react';
import Image from 'next/image';
import styles from './contentServiceNew.module.css';

function NewServiceSection1({title, heading, text, points,  image,}) {
  return (
    <div className={styles.main}>
      <div className={` container py-5 px-md-5`}>
        <div className={`${styles.innerRows} row align-items-start`} >
          
          
          <div className={`${styles.innerRowd} col-12 col-md-5`}>
            <div className="">
              <div className=''>
              <p className={`${styles.titleColosr} fw-bold`}>{title}</p>
                  <h2 className={`${styles.heading1} mb-3`}>{heading}</h2>
                  
              </div>
              <div className='mt-5'>
              {points &&
                points.map((point, index) => (
                  <div key={index}>
                        <div className="mb-4">
                        <div className="d-flex align-items-center">
                          <div className={`${styles.icon} me-3 mb-3`}>
                            <i className="bi bi-check2-square "></i>
                          </div>
                          <div>
                            <h4>{point.title}</h4>
                            <p>{point.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div> 
            </div>
          </div>
          <div className={`${styles.row1} col-12 col-md-7`}>
            <div>
              <div className={styles.fontSize}>{text}</div>
                <Image
                alt=""
                src={image}
                width={200}
                height={200}
                className={`${styles.image}`}
                />
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewServiceSection1