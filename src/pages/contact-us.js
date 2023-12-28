// components/ContactUs.js
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from "../styles/Home.module.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("form");
    e.preventDefault();

    // Log the form data to the console
    console.log('Form Data:', formData);

    try {
      // Form submission logic
      const response = await axios.post('/api/contact', formData);
      console.log(response.data.message);

      // Email sending logic
      const transporter = nodemailer.createTransport({
        // Configure your email transporter here
        service: 'gmail',
        auth: {
          user: 'your-email@gmail.com',
          pass: 'your-email-password',
        },
      });

      const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'info@closingcurtain.ae',
        subject: 'New Contact Form Submission',
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Message: ${formData.message}
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form or sending email:', error);
    }
  };




  return (
      <div>
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
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0327923354!2d54.89781965402701!3d25.075658375512862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1702639195962!5m2!1sen!2s"
          width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
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
                <input
                  onChange={handleInputChange}
                  className={`${styles.formFields} form-control `}
                  placeholder="Your Phone"
                ></input>
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
    <Footer/>
    </div>
  );
};

export default ContactUs;
