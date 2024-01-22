import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styles from './contentServiceNew.module.css';
function ContactForm({url}) {
  return (
    <section id="contact" className={`${styles.main1} contact py-5`}>
      <div className="container" data-aos="fade-up">

        
        <div className="row gx-lg-0 gy-4">

          <div className="col-lg-5">
            <Image
            alt=""
            src={url}
            width={400}
            height={350}
            className={`${styles.image} rounded`}/>

          </div>

          <div className="col-lg-7 px-4">
          <h2 className='mb-4'>Get a Free Price Estimate of Your Project</h2>
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-4 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-4">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-4">
                <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
              </div>
              <Link className={`${styles.btnColor} btn btn-outline-light btn-lg mt-4`} href="#!" role="button">
                Send
            </Link>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactForm