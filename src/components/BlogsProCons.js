import React from 'react';
import styles from "./blog.module.css";

function BlogsProCons({proPoints, ConsPoints}) {
    return (
        <div class="container">
  <div class={`row ${styles.prosBox}`}>
    <div class={`${styles.proCol} col`} >
      <div className={styles.proHeading}>
        <h3>Pros</h3>
      </div>
      <div className={styles.points}>
        {proPoints}
      </div>
    </div>
    <div class={`${styles.consCol} col`} >
      <div className={styles.consHeading}>
        <h3>Cons</h3>
      </div>
      <div className={styles.points}>
        {ConsPoints}
      </div>
        
    </div>
  </div>
</div>
    );
}

export default BlogsProCons;