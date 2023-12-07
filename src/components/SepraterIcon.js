import React from 'react';
import styles from './banner.module.css';

const SepraterIcon = () => {
  return (
    <div class={styles.custom_divider}>
        <div class={styles.icon_container}>
            <i class="fas fa-dot-circle"></i>
        </div>
        <div class={styles.line}></div>
    </div>
  );
};

export default SepraterIcon;
