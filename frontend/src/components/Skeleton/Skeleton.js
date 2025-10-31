import React from 'react';
import './Skeleton.css';

const Skeleton = ({ width, height, className }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default Skeleton;