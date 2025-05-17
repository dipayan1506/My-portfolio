import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import pic from '../images/profilepic.jpeg';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Hey there, I’m Dipayan Debnath'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title mb-16">About Me</h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image/Left Column */}
          <motion.div variants={itemVariants} className="relative flex justify-center">
            <div className="relative w-60 h-60 overflow-hidden rounded-full shadow-xl">
              <img
                src={pic}
                alt="Professional portrait"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-600/10 dark:bg-primary-900/20"></div>
            </div>
          </motion.div>

          {/* Text Content/Right Column */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              <span ref={typedRef}></span>
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I’m a creative technologist passionate about building digital experiences that blend functionality with finesse. With 5+ years of experience, I specialize in crafting responsive, user-friendly interfaces that delight and perform.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My toolkit includes React, TypeScript, Node, and modern web technologies — but what drives me is solving problems and delivering intuitive solutions that make an impact. Whether I’m writing code or shaping UX, I aim to turn ideas into seamless experiences.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <a href="#contact" className="btn btn-primary">
                Let’s Connect
              </a>
              <a href="https://drive.google.com/file/d/1dG2ChnRNUU2dnsXSUiMFnvGc9HQ5VBFz/view?usp=sharing" className="btn btn-outline">
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
