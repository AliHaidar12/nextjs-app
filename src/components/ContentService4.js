import React from 'react';
import styles from './contentService.module.css'; // Import the CSS file

const ContentService4 = ({ heading=null, text1=null, text2=null, text3=null, text4=null }) => {
  return (
    <section className={`${styles.main} container my-5`}>
      <h2  className="text-center text-white mb-4">{heading}</h2>
      <div className={` ${styles.box} p-4 row`}>
        <div className={`md-4 text-center ${styles.fontSize}`}>
         {text1 }
        </div>
        <div className={`md-4 text-center ${styles.fontSize}`}>
        {text2}
        </div>
        <div className={`md-4 text-center ${styles.fontSize}`}>
          {text3}
        </div>
        <div className={`md-4 text-center ${styles.fontSize}`}>
          {text4}
        </div>
      </div>
    </section>
  );
};

export default ContentService4;
