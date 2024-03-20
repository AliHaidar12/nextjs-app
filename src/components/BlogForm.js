import React, { useState } from 'react';
import styles from "../styles/Home.module.css";

function BlogForm() {
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
        <div className='container'>
            <div className="row">
        <div className={` py-5 justify-content-center align-items-center col`}>
            <div>
                <h3 className="title mb-3"> Leave Your Comment</h3>
            </div>
          
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className={`${styles.formFields} form-control `}
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  onChange={handleChange}
                  type="email"
                  className={`${styles.formFields} form-control `}
                  placeholder="Your Email"
                />
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12 mb-3">
                <textarea
                  onChange={handleChange}
                  className={` ${styles.formFields} form-control `}
                  rows="4"
                  placeholder="Your Message"
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
    );
}

export default BlogForm;