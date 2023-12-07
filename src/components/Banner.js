import React from 'react';
import Image from 'next/image';
import styles from './banner.module.css';
const Banner = ({heading=null, text=null,text1=null, side_image=null}) => {
  return (
    <div className={"container-fluid", styles.mainContainer}>
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            <h1 className="mb-4" style={{color: "#1A808D"}}>{heading}</h1>
            <p className="mb-4">{text}</p>
            <p className="mb-4">{text1}</p>
            <div className="d-flex align-items-center">
                <button className="btn btn-primary me-3" style={{ backgroundColor: "#1a808dff" }}>
                    Get A Quote
                </button>
                <p className="mb-0" style={{ color: "#1a808dff" }}>
                    <i className="bi bi-telephone"></i> <span className="fw-bold">+971581535184</span>
                </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
          <Image
            src={side_image} // Replace with the path to your image
            alt="Banner"
            width={600} // Set the desired width
            height={400} // Set the desired height
            className={"img-fluid", styles.image}
          />
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Banner;