import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Sparkles } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown, Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import HeroBackground from './three/HeroBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <HeroBackground />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
          />
          <Sparkles 
            count={100}
            scale={10}
            size={1}
            speed={0.3}
            opacity={0.5}
            color={0x4f46e5}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-gray-900 dark:text-white">
              <span className="block">Creative Developer</span>
              <span className="text-primary-600 dark:text-primary-400 block mt-2">& Designer</span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build exceptional digital experiences that combine creativity with technical precision.
            Transforming ideas into beautiful, functional realities is my passion.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="https://github.com/dipayan1506" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dipayan-debnath-50655b24a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <a href="#about" className="text-gray-600 dark:text-gray-400 flex flex-col items-center">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;