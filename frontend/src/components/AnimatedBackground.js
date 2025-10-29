import React, { useRef, useContext, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { ThemeContext } from '../ThemeContext';

const themeColors = {
  'asfalt-kemik': '#FFFFFF',
  'light': '#000000',
  'dark': '#FFFFFF',
  'cupcake': '#000000',
  'bumblebee': '#000000',
  'emerald': '#FFFFFF',
  'corporate': '#000000',
  'synthwave': '#FFFFFF',
  'retro': '#000000',
  'cyberpunk': '#FFFFFF',
  'valentine': '#000000',
  'halloween': '#FFFFFF',
};

function AnimatedStars() {
  const stars = useRef();
  const { theme } = useContext(ThemeContext);
  const color = useMemo(() => themeColors[theme] || '#FFFFFF', [theme]);

  useFrame(() => {
    if (stars.current) {
      stars.current.rotation.x += 0.0001;
      stars.current.rotation.y += 0.0001;
    }
  });

  return (
    <Stars ref={stars} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} color={color} />
  );
}

function AnimatedBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <AnimatedStars />
      </Canvas>
    </div>
  );
}

export default AnimatedBackground;