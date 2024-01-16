// components/ContactUs.js
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from "../styles/Home.module.css";
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Head from 'next/head';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // You can redirect or show a success message here
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
      <div>
        <Head>
        <link rel="icon" href="/closing-curtains.png" />
        </Head>
          <Header logo='/static/images/logo.png'/>
    <div className="container mt-5">
        <h1 className="text-center mb-3">Contact Closing Curtain - Get in Touch with Us</h1>
  <div  >
  <div className={`${styles.contactInfo} row`}>
  <div className={`${styles.box} col`}>
    {/* Box 1: Phone */}
    <div className="d-flex align-items-start">
      <div className="me-3 mb-3">
        <i className="bi bi-phone fs-1"></i>
      </div>
      <div>
        <h5>Call any time</h5>
        <p>+971581535184</p>
      </div>
    </div>
  </div>

  <div className={`${styles.box1}  col`}>
    {/* Box 2: Location */}
    <div className="d-flex align-items-start">
      <div className="me-3 mb-3">
        <i className="bi bi-geo-alt fs-1"></i>
      </div>
      <div>
        <h5>Location</h5>
        <p>Al quoz first behind<br/> bmw showroom sheikh zayed <br/>road DUBAI</p>
      </div>
    </div>
  </div>

  <div className={`${styles.box}  col`}>
    {/* Box 3: Email */}
    <div className="  d-flex align-items-start">
      <div className="me-3 mb-3">
        <i className="bi bi-envelope fs-1"></i>
      </div>
      <div>
        <h5>Email Now</h5>
        <p>info@closingcurtain.ae</p>
      </div>
    </div>
  </div>
</div>

</div>

      {/* Map */}
      <div className="row">
        <div className="col mx-0 my-5">
          {/* Add your map component or embed a map here */}
          {/* Example: */}
          
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0327923354!2d54.89781965402701!3d25.075658375512862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1702639195962!5m2!1sen!2s"
  width="100%"
  height="450"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
      </div>

      {/* Contact form */}
      <div className="row">
        <div className={`${styles.formComtainer} text-center py-5 justify-content-center align-items-center col`}>
            <div>
                <h6 className="sub-title text-primary"> CONTACT US</h6>
                <h2 className="title mb-3"> Get in Touch with Our Curtain and Blind Experts</h2>
            </div>
          
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className={`${styles.formFields} form-control `}
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  onChange={handleChange}
                  type="email"
                  className={`${styles.formFields} form-control `}
                  placeholder="Your Email"
                  name="email"
                />
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12 mb-3">
                <input
                  onChange={handleChange}
                  className={`${styles.formFields} form-control `}
                  placeholder="Your Phone"
                  name="phone"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <textarea
                  onChange={handleChange}
                  className={` ${styles.formFields} form-control `}
                  rows="4"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className={`btn btn-primary `}
              style={{ backgroundColor: '#1a808d' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ContactUs;
