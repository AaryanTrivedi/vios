// src/CRT.js
import React from 'react';
import './CRT.css'; // Import the CSS file for styling

const CRT = ({ children }) => {
  return (
    <div className="crt-container">
      {children}
    </div>
  );
};

export default CRT;

