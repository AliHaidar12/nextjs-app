import React from 'react';

const ContentOnly = ({ heading=null, text1=null, text2=null, text3=null, text4=null }) => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">{heading}</h2>
      <div className="row">
        <div className="md-4 text-center">
          <p className="fs-5">{text1}</p>
        </div>
        <div className="md-4 text-center">
          <p className="fs-5">{text2}</p>
        </div>
        <div className="md-4 text-center">
          <p className="fs-5">{text3}</p>
        </div>
        <div className="md-4 text-center">
          <p className="fs-5">{text4}</p>
        </div>
      </div>
    </section>
  );
};

export default ContentOnly;
