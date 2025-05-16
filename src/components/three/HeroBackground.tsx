import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const HeroBackground: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main sphere */}
      <Sphere args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#4338ca" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </Sphere>
      
      {/* Smaller decorative geometry */}
      {Array.from({ length: 20 }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 2.5 + Math.random() * 1.5;
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        const scale = 0.05 + Math.random() * 0.1;
        
        return (
          <Box key={i} args={[scale, scale, scale]} position={[x, y, z]}>
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#4f46e5" : "#14b8a6"} 
              emissive={i % 3 === 0 ? "#4f46e5" : "#14b8a6"}
              emissiveIntensity={0.3}
            />
          </Box>
        );
      })}
      
      {/* Orbiting particles */}
      {Array.from({ length: 100 }).map((_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 3 + Math.random() * 3;
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        const scale = 0.01 + Math.random() * 0.03;
        
        return (
          <Sphere key={`particle-${i}`} args={[scale, 8, 8]} position={[x, y, z]}>
            <meshBasicMaterial 
              color={Math.random() > 0.7 ? "#f43f5e" : "#4f46e5"} 
              transparent 
              opacity={0.7} 
            />
          </Sphere>
        );
      })}
    </group>
  );
};

export default HeroBackground;