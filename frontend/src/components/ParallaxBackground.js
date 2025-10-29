import React from 'react';
import GlassSurface from './GlassSurface';
import AnimatedBackground from './AnimatedBackground';

const ParallaxBackground = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 -z-10">
      <AnimatedBackground />
      <GlassSurface />
    </div>
  );
};

export default ParallaxBackground;
