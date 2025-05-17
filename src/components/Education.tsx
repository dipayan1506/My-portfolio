import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <GraduationCap size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Indian Institute of Technology (IIT) Dhanbad
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  B.Tech in Electrical Engineering
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>2022 - 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Dhanbad, Jharkhand</span>
              </div>
            </div>

            {/* <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2 mr-2"></span>
                  <span>Pursuing B.Tech in Electrical Engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2 mr-2"></span>
                  <span>Focusing on core electrical concepts while exploring software development</span>
                </li>
              </ul>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;