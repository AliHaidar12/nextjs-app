import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import styles from './service.module.css'; 

function ServicesSection({ items, heading }) {
    return (
        <div>
            <div className={`container ${styles.main} d-flex align-items-center justify-content-center`}>
                <div className="row gx-4">
                    <div className={`${styles.heading} text-center py-3`}>
                        <h2>{heading}</h2>
                    </div>
                    
                    {items.map((item, index) => (
                        <div key={index} className={`col-md-3 col-sm-6 mb-4 d-flex flex-column align-items-center`}>
                            <Link href={item.pageUrl} className='text-decoration-none'>
                                <div className={`box px-0 py-4 ${styles.inner_container}`}>
                                    <div className='text-center'>
                                    <Image
                                        src={item.icon}
                                        alt="Icon"
                                        width={250}
                                        height={150}
                                    />

                                    </div>
                                    
                                    <div className={`${styles.box_container} number-container`}>
                                        <p className={styles.text_number}>{item.title}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
