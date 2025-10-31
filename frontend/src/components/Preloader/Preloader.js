import React from 'react';
import './Preloader.css';

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="preloader-overlay">
      <div className="preloader-spinner"></div>
    </div>
  );
};

export default Preloader;