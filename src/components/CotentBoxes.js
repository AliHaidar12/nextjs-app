import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./CotentBoxes.module.css";

const ContentBoxes = ({
  heading,
  text,
  text1,
  boxText,
  boxText1,
  boxText2,
  box1Text,
  box1Text1,
  box1Text2
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
      {/* First Section */}
      <div
        className={`container-fluid p-5 ${styles.top}`}
        
      >
        <h2>{heading}</h2>
        <p>{text}</p>
        <p className="font-weight-bold">{text1}</p>
      </div>

      {/* Second Section */}
      <div className="container d-md-flex justify-content-md-center">
        <div
          className={`box ${styles.boxes} flex-fill p-3 text-white m-1`}
          
        >
          <p>
            <i className="bi bi-check2"></i> {boxText}
          </p>

          <p>
            <i className="bi bi-check2"></i> {boxText1}
          </p>

          <p>
            <i className="bi bi-check2"></i> {boxText2}
          </p>
        </div>

        <div
          className={`box ${styles.boxes} flex-fill p-3 text-white m-1`}
          
        >
          <p>
            <i className="bi bi-check2"></i> {box1Text}
          </p>

          <p>
            <i className="bi bi-check2"></i> {box1Text1}
          </p>

          <p>
            <i className="bi bi-check2"></i> {box1Text2}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContentBoxes;
