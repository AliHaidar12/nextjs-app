import React from 'react';

const IconSection = ({ iconPosition , src }) => {
  const flexDirection = iconPosition === 'top' ? 'column' : 'row';

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection }}>
        <div style={{ flexBasis: '30%' }}>
          <img src={src} alt="Icon" width={60} height={60} />
        </div>
        <div style={{ flexBasis: '70%', marginLeft: iconPosition === 'top' ? 0 : '20px' }}>
          <h3 style={{ marginBottom: '10px' }}>Icon Title</h3>
          <p>Icon Description goes here. This is a longer description for demonstration purposes.</p>
        </div>
      </div>
    </div>
  );
};

export default IconSection;