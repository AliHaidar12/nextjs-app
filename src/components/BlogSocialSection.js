import React from 'react';
import styles from "./footer.module.css";
import Link from 'next/link';
function BlogSocialSection() {
    return (
        <div className='container mt-5'>
      <div className='row'>

        {/* Single column with social sharing and contact information */}
        <div className='col'>

          {/* Share text and social icons */}
          <div className="d-flex align-items-center mb-3 bg-light">
            <p className="me-3 mt-3 fw-bold fs-5">Share :</p>
            <ul className={`list-inline mb-0 ${styles.socialIcons}`}>
              <li className={`${styles.social} list-inline-item me-3`}>
                <Link href="https://www.facebook.com/Closing-Curtain-104753588695284" className="text-white">
                  <i className="bi bi-facebook fs-5"></i>
                </Link>
              </li>
              <li className={`${styles.social} list-inline-item me-3`}>
                <Link href="https://twitter.com/closingcurtain" className="text-white">
                  <i className="bi bi-twitter fs-5"></i>
                </Link>
              </li>
              <li className={`${styles.social} list-inline-item me-3`}>
                <Link href="https://www.instagram.com/closingcurtain.ae/" className="text-white">
                  <i className="bi bi-instagram fs-5"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="d-flex align-items-center mb-5 mt-3">
  <div className={`${styles.iconBox} me-4`}>
      <i className="bi bi-person-fill "></i>
  </div>
  <div className="d-flex flex-column align-items-start me-3">
    <p className=" fs-4 fw-bold">Info@closingcurtain.ae</p>
    <div className={styles.social}>
    <Link href="/" className="text-white mt-1">
      <i className="bi bi-globe fs-5"></i>
    </Link>
    </div>
    
  </div>
</div>

        </div>

      </div>
    </div>
    );
}

export default BlogSocialSection;