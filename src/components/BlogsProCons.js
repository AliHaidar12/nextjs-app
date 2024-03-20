import React from 'react';
import styles from "./blog.module.css";

function BlogsProCons({proPoints, ConsPoints}) {
    return (
        <div class="container">
  <div class={`row ${styles.prosBox}`}>
    <div class={`${styles.proCol} col`} >
      <div className={styles.proHeading}>
        <h4>Pros</h4>
      </div>
      <div className={styles.points}>
        {proPoints}
      </div>
    </div>
    <div class={`${styles.consCol} col`} >
      <div className={styles.consHeading}>
        <h4>Cons</h4>
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