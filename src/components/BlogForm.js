import React from 'react';
import styles from "../styles/Home.module.css";

function BlogForm(props) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    return (
        <div className='container'>
            <div className="row">
        <div className={` py-5 justify-content-center align-items-center col`}>
            <div>
                <h2 className="title mb-3"> Leave Your Comment</h2>
            </div>
          
          <form >
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  onChange={handleInputChange}
                  type="text"
                  className={`${styles.formFields} form-control `}
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  onChange={handleInputChange}
                  type="email"
                  className={`${styles.formFields} form-control `}
                  placeholder="Your Email"
                />
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-12 mb-3">
                <textarea
                  onChange={handleInputChange}
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