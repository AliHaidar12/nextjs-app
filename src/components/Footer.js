// components/ContactInfo.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './footer.module.css'; 
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className={`d-flex align-items-center justify-content-center ${styles.inner} flex-md-row flex-column`}>
        <p className={styles.text}>
          Buy Customized Curtains Dubai: <br/> Free Installation in 48 Hour
        </p>
        <div className={`d-flex align-items-center ${styles.contact}`}>
          <i className={`bi bi-phone  fs-5 text-white ${styles.icon}`}></i>
          <p className="mb-0 ml-2 text-white" style={{ fontSize: '18px' }}>+971581535184</p>
        </div>
        <Link href="contact"><button className={`btn btn-primary ${styles.button}`}>Get A Quote</button></Link>
      </div>

      <div className={`d-flex flex-wrap justify-content-around ${styles.secondSection}`}>
      {/* 1st Column */}
      <div className={`col-md-3 col-12 ${styles.column}`}>
        <h4>About Us</h4>
        <p>Closingcurtain.ae is the stellar platform to choose the best Blinds and Curtains for your place from. Our services take the right care of your perfect home maintenance.</p>
              <ul className="list-inline mb-0 d-none d-sm-block">
                <li className={`${styles.social} list-inline-item me-3`}>
                  <Link href="https://www.facebook.com/Closing-Curtain-104753588695284" className="text-white"><i className="bi bi-facebook fs-5"></i></Link>
                </li>
                <li className={`${styles.social} list-inline-item me-3`}>
                  <Link href="https://twitter.com/closingcurtain" className="text-white"><i className="bi bi-twitter fs-5"></i></Link>
                </li>
                <li className={`${styles.social} list-inline-item me-3`}>
                  <Link href="https://www.instagram.com/closingcurtain.ae/" className="text-white"><i className="bi bi-instagram fs-5"></i></Link>
                </li>
                <li className={`${styles.social} list-inline-item me-3`}>
                  <Link href="https://www.linkedin.com/in/closing-curtain-bb0588225/" className="text-white"><i className="bi bi-linkedin fs-5"></i></Link>
                </li>
              </ul>

      </div>

      {/* 2nd Column */}
      <div className={`col-md-3 col-12 ${styles.column}`}>
        <h4>Curtains</h4>
        <p><a className={styles.links} href="/service/sheer-curtains/"> Sheer Curtains</a></p>
        <p><a className={styles.links} href="/service/electric-curtains/"> Electric Curtains</a></p>
        <p><a className={styles.links} href="/service/blackout-curtains/">Blackout Curtains</a></p>
        <p><a className={styles.links} href="/service/office-curtains/"> Office Curtains</a></p>
        <p><a className={styles.links} href="/service/bedroom-curtains/">Bedroom Curtains</a></p>
            
      </div>

      {/* 3rd Column */}
      <div className={`col-md-3 col-12 ${styles.column}`}>
        <h4>Blinds</h4>
        
        <p><a className={styles.links} href="/service/blackout-blinds-dubai/"> Blackout Blinds</a></p>
        <p><a className={styles.links} href="/service/office-blinds-dubai/"> Office Blinds</a></p>
        <p><a className={styles.links} href="/service/outdoor-blinds-dubai/">Outdoor Blinds</a></p>
        <p><a className={styles.links} href="/service/roller-blinds-dubai/"> Roller Blinds</a></p>
        <p><a className={styles.links} href="/service/roman-blinds-dubai/"> Roman Blinds</a></p>
        <p><a className={styles.links} href="/service/vertical-blinds-dubai/">Vertical Blinds</a></p>
      </div>

      {/* 4th Column */}
      <div className={`col-md-3 col-12 ${styles.column}`}>
        <h4>Contact Us</h4>
        <div className="contact-section">
            <div className="d-flex align-items-center">
                <i className={`${styles.contectIcon}bi bi-telephone fs-2 me-2`}></i> {/* Phone icon on the left */}
                <div>
                <p className={`${styles.phoneText} mb-0`}>Phone Number</p> {/* "Contact Us" at the top */}
                <p className="mb-0">+971581535184</p> {/* Phone number below */}
                </div>
            </div>
        </div>
        <div className="contact-section">
            <div className="d-flex align-items-center mt-3">
                <i className={`${styles.contectIcon}bi bi-envelope fs-2 me-2`}></i> {/* Phone icon on the left */}
                <div>
                <p className={`${styles.phoneText} mb-0`}>Email Address</p> {/* "Contact Us" at the top */}
                <p className="mb-0">info@closingcurtain.ae</p> {/* Phone number below */}
                </div>
            </div>
        </div>
        <div className="contact-section">
            <div className="d-flex align-items-center mt-3">
                <i className={`${styles.contectIcon}bi bi-geo-alt fs-2 me-2`}></i> {/* Phone icon on the left */}
                <div>
                <p className={`${styles.phoneText} mb-0`}>Office Address</p> {/* "Contact Us" at the top */}
                <p className="mb-0">Al quoz first behind bmw showroom sheikh zayed road DUBAI</p> {/* Phone number below */}
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
