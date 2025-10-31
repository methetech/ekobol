import React from 'react';
import './Select.css';

const Select = ({ children, onChange, value, className = '' }) => {
  return (
    <select onChange={onChange} value={value} className={`select-component ${className}`}>
      {children}
    </select>
  );
};

export default Select;