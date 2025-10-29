import React from 'react';
import './GlassSurface.css';

const GlassSurface = ({ children, className }) => {
  return (
    <div className={`glass-surface ${className}`}>
      <div className="glass-surface-inner">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
