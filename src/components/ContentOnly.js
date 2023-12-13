import React from 'react';

const ContentOnly = ({ heading=null, text1=null, text2=null, text3=null, text4=null }) => {
  return (
    <section className="container my-5">
      <h2 style={{color: "#1a808d"} } className="text-center mb-4">{heading}</h2>
      <div className="row">
        <div className="md-4 text-center fs-7">
         {text1}
        </div>
        <div className="md-4 text-center fs-7">
        {text2}
        </div>
        <div className="md-4 text-center fs-7">
          {text3}
        </div>
        <div className="md-4 text-center fs-7">
          {text4}
        </div>
      </div>
    </section>
  );
};

export default ContentOnly;
