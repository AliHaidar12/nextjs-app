import Image from 'next/image';
import React from 'react';
import styles from "./contentService.module.css";
function ContentService7({heading, text, image}) {
    return (
        <div class="container mb-4">
            <div class={`${styles.maniRow1} row`}>
                <div class="col-4">
                        <Image
                            className={styles.imageStyle1}
                            src={image}
                            width={270}
                            height={270}
                            alt='service image'
                        />
                    
                </div>
                <div class="col-8">
                <h3 className={styles.h2heading1}>{heading}</h3>
                    <div className={styles.fontSize}>
                        {text}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ContentService7;