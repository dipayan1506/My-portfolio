import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind',
  'Node.js', 'Three.js', 'Express', 'MongoDB', 'Git', 'Figma',
  'UI/UX', 'Responsive', 'REST API'
];

const Word = ({ children, ...props }: { children: React.ReactNode; position: [number, number, number]; fontSize?: number }) => {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: props.fontSize || 1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  };
  
  const ref = useRef<THREE.Mesh>(null);
  const [, rand] = React.useState(Math.random());
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();
      ref.current.rotation.x = Math.sin(time / 10) * 0.5;
      ref.current.rotation.y = Math.sin(time / 10) * 0.5;
      ref.current.rotation.z = Math.sin(time / 10) * 0.5;
      ref.current.position.y = Math.sin(time / 2 + rand * 1000) * 0.3;
      
      const hue = Math.sin(time / 10 + rand * 10) * 0.5 + 0.5;
      color.setHSL(hue, 0.8, 0.5);
      if (ref.current.material) {
        (ref.current.material as THREE.MeshBasicMaterial).color = color;
      }
    }
  });

  return (
    <Text
      ref={ref}
      {...props}
      {...fontProps}
      color="#4f46e5"
    >
      {children}
    </Text>
  );
};

const Cloud = () => {
  const group = useRef<THREE.Group>(null);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(clock.getElapsedTime() / 20) * 0.1;
      group.current.rotation.y = Math.sin(clock.getElapsedTime() / 15) * 0.1;
    }
  });
  
  const words = skills.map((text, i) => {
    const pos = new THREE.Vector3(
      (Math.random() * 2 - 1) * 10,
      (Math.random() * 2 - 1) * 10,
      (Math.random() * 2 - 1) * 10
    );
    
    pos.normalize().multiplyScalar(10 + Math.random() * 10);
    
    return (
      <Word key={i} position={[pos.x, pos.y, pos.z]} fontSize={Math.random() * 0.5 + 1}>
        {text}
      </Word>
    );
  });
  
  return <group ref={group}>{words}</group>;
};

const SkillsCanvas: React.FC = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud />
    </Canvas>
  );
};

export default SkillsCanvas;