import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './form.module.css'; // Import the CSS file

const ContactForm = () => {
  return (
    <div className="container-fluid text-center mt-5 bg-black text-white p-4">
      <p className="fs-6">Contact Us</p>
      <h2>Get in Touch</h2>
      <form className="mx-auto col-md-8"> {/* Set the form width to 60% using col-md-8 */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${styles.formInput}`}
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className={`form-control ${styles.formInput}`}
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="email"
                className={`form-control ${styles.formInput}`}
                placeholder="Your Email"
            />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <textarea
                className={`form-control ${styles.formInput}`}
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${styles.button}`}
          style={{ backgroundColor: '#1a808d' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
