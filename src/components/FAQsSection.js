import React, { useState } from 'react';
import styles from "./faqsection.module.css"
const FAQsSection = ({ faqsData, heading }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={`${styles.main} container-fluid`} >
      <h3 className="text-center mb-4">{heading}</h3>

      <div className="">
        {faqsData.map((faq, index) => (
          <div key={index} className="p-2 border mx-auto col-md-7 col-12">
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
  );
};

export default FAQsSection;
