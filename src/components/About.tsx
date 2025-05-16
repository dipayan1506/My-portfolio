import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap, User } from 'lucide-react';
import Typed from 'typed.js';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Hello, I am Dipayan Debnath'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
            <div className="relative w-48 h-48 overflow-hidden rounded-full shadow-lg">
              <img
                src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional portrait"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-600/10 dark:bg-primary-900/20"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-lg bg-secondary-500 dark:bg-secondary-600 z-0 opacity-20"></div>
            <div className="absolute -top-5 -left-5 h-20 w-20 rounded-lg bg-accent-500 dark:bg-accent-600 z-0 opacity-20"></div>
          </motion.div>

          {/* Text Content/Right Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              <span ref={typedRef}></span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              As a developer and designer with over 5 years of experience, I blend technical expertise with creative vision to build 
              meaningful, user-centric web applications. I'm passionate about creating digital experiences that are both visually 
              stunning and functionally powerful.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My approach combines clean code practices with innovative design thinking, 
              ensuring that every project not only meets client objectives but exceeds user expectations. I specialize in frontend 
              development with React, but I'm equally comfortable working across the full stack.
            </p>

            {/* Stats/Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <User size={24} className="mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Name</p>
                <p className="font-semibold text-gray-900 dark:text-white">Dipayan Debnath</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Briefcase size={24} className="mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                <p className="font-semibold text-gray-900 dark:text-white">5+ Years</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Award size={24} className="mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Specialty</p>
                <p className="font-semibold text-gray-900 dark:text-white">Frontend Dev</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <GraduationCap size={24} className="mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Degree</p>
                <p className="font-semibold text-gray-900 dark:text-white">CS & Design</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="/resume.pdf" className="btn btn-outline">
                Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;