// ContactService3.js
import React, {useState} from 'react';
import styles from './faqsection.module.css'; // Import your styles module

const ContentService3 = ({ faqHeading, leftSectionTitle, leftSectionParagraph1, leftSectionParagraph2, leftSectionPoints, faqsData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={` container-fluid p-5`}>
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6 col-12">
          <div className="mb-4">
            <h2>{leftSectionTitle}</h2>
            <p>{leftSectionParagraph1}</p>
            <p>{leftSectionParagraph2}</p>
          </div>

          {leftSectionPoints && leftSectionPoints.length > 0 && (
            <div className="mb-4">
              <ul>
                {leftSectionPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <div className="d-flex align-items-center">
              <div className="me-3 mb-3">
                <i class="bi bi-phone  fs-1"></i>

              </div>
              <div>
                <h5>Call any time</h5>
                <p>123132323</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right FAQ Section */}
        <div className={` ${styles.faq} col-md-6 col-12`}>
        <div className="mb-4">
            <h2>{faqHeading}</h2>
          </div>
        {faqsData.map((faq, index) => (
          <div key={index} className={` p-2 border mx-auto col-md-12 col-12`}>
            <div
              className="question d-flex justify-content-between align-items-center"
              onClick={() => handleToggle(index)}
              style={{ cursor: 'pointer' }}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <i className="fas fa-minus text-white"></i> : <i className="fas fa-plus text-white"></i>}
            </div>
            {openIndex === index && (
              <div className="answer  mt-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ContentService3;
