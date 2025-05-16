import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Build My Guild',
      period: 'Nov 2024 - Feb 2025',
      location: 'Remote',
      description: [
        'Contributed to the development of A Memecoin launchpad supporting both EVM and Non-EVM chains',
        'Developed a Decentralised Escrow Solution with smart contracts and integrated with the frontend and backend',
      ],
    },
    {
      title: 'Blockchain Developer Intern',
      company: 'HyDRAULIC',
      period: 'Jun 2024 - Nov 2024',
      location: 'Remote',
      description: [
        'Developed smart contracts and the tech infrastructure for tokenizing Intellectual Property as on-chain NFTs',
        'Created an IP financing marketplace enabling IP loans and sales to SMEs globally',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-12 relative"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500 z-10"></div>

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10'
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <h4 className="text-primary-600 dark:text-primary-400 font-medium mb-4">{exp.company}</h4>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-2 mr-2"></span>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/resume.pdf"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            <Briefcase size={18} />
            <span>View Full Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;