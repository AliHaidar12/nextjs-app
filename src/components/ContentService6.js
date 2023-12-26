import Image from 'next/image';
import React from 'react';
import styles from "./contentService.module.css";
function ContentService6({heading, text, image}) {
    return (
        <div class="container mb-4">
            <div class={`${styles.maniRow} row`}>
                <div class="col-8">
                    <h3 className={styles.h2heading}>{heading}</h3>
                    <div className={styles.fontSize}>
                        {text}
                    </div>
                </div>
                <div class="col-4">
                    <div >
                        <Image
                            className={styles.imageStyle}
                            src={image}
                            width={200}
                            height={200}
                            alt='service image'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentService6;