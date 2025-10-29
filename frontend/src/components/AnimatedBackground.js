
import React, { useRef, useMemo, useContext, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ThemeContext } from '../ThemeContext';

const Star = ({ position, color }) => {
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.005, 8, 8]} /> {/* Tiny stars */}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
    </mesh>
  );
};

const Stars = ({ stars }) => {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.01;
      group.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <group ref={group}>
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}
    </group>
  );
};

const AnimatedBackground = () => {
  const { theme } = useContext(ThemeContext);
  const [themeColors, setThemeColors] = useState([]);

  useEffect(() => {
    const computedStyle = getComputedStyle(document.documentElement);
    const colors = [
      computedStyle.getPropertyValue('--text-primary').trim(),
      computedStyle.getPropertyValue('--text-secondary').trim(),
      computedStyle.getPropertyValue('--accent-primary').trim(),
    ].filter(color => color);

    if (colors.length > 0) {
        setThemeColors(colors);
    } else {
        setThemeColors(['#FFFFFF', '#CCCCCC', '#999999']);
    }
  }, [theme]);

  const stars = useMemo(() => {
    if (themeColors.length === 0) return [];
    const temp = [];
    for (let i = 0; i < 2000; i++) { // Lots of stars
      const x = THREE.MathUtils.randFloatSpread(100);
      const y = THREE.MathUtils.randFloatSpread(100);
      const z = THREE.MathUtils.randFloatSpread(100);
      const color = new THREE.Color(themeColors[Math.floor(Math.random() * themeColors.length)]);
      temp.push({ position: [x, y, z], color });
    }
    return temp;
  }, [themeColors]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <Stars stars={stars} />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
