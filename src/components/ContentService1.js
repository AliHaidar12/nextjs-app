import Image from 'next/image';
import React from 'react';
import styles from './banner.module.css';
const ContentService1 = ({heading, text,text1, image}) => {
  return (
    <div className={"container-fluid", styles.mainContainer1}>
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6">
            <h2 className="mb-4" style={{color: "#1A808D"}}>{heading}</h2>
            <p className="mb-4">{text}</p>
            <p className="mb-4">{text1}</p>
            <div className="d-flex align-items-center">
                <button className="btn btn-primary me-3" style={{ backgroundColor: "#1a808dff" }}>
                    Get A Quote
                </button>
                <p className="mb-0" style={{ color: "#1a808dff" }}>
                    <i className="bi bi-telephone"></i> <span className="fw-bold">123-456-7890</span>
                </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6">
          <Image width={600} height={600} src={image} alt="image" className={"img-fluid"} />
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default ContentService1;
