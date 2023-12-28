import Image from 'next/image';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./blog.module.css";
function BlogInfoSection({image, mainHeading, subHeading, text, backgroundColor}) {
    const containerStyles = {
        ...(backgroundColor && {
          backgroundColor,
          color: "white",
          padding: "14px",
          border: '1px solid #ccc',
          boxShadow: '0 5px 15px 0 rgb(191 217 194)',
          // Add more styles as needed
        }),
      };
    return (
        <div className={`container `}  >
      <div className="row ">
          <div className="col   text-left">
          <div className='mb-3' style={containerStyles}>
            {mainHeading && <h2>{mainHeading}</h2>}
            </div>
            <div className='mb-3' style={{ backgroundColor: backgroundColor }}>
            {subHeading && <h3>{subHeading}</h3>}
            </div>
                
                <div className='mb-3'>
                <Image
                src={image} // Replace with your image source
                className="card-img-top"
                width={400}
                height={400}
                alt={"Blog" }
              />
                </div>
              
                <div className={`md-4 ${styles.fontSize}`} >
                    {text}
                </div>
              </div>
              
          </div>
      </div>
    );
}

export default BlogInfoSection;