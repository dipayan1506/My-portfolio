import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Plus } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
  details: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Chatting Application',
      category: 'web',
      image: 'https://images.pexels.com/photos/7014766/pexels-photo-7014766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Express.js', 'Node.js', 'Socket.io'],
      description: 'Real-time chatting platform with secure user authentication and instant messaging capabilities.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/dipayan1506/chat-app',
      details: 'Built a real-time chatting platform that supports user registration, login, and secure real-time communication, allowing multiple users to engage in instantaneous conversations on a responsive, cross-device interface. Integrated robust authentication using JWT and bcrypt for hashing passwords, ensuring secure data storage and user privacy. Utilized MongoDB for efficient storage of chat histories and user data.',
    },
    {
      id: 2,
      title: 'Decentralized Arbitration System',
      category: 'blockchain',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Next.js', 'Solidity', 'Hardhat', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
      description: 'A blockchain-based platform for secure and transparent dispute resolution.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/dipayan1506/Decentralised-Arbiteration-System',
      details: 'Built a decentralized platform allowing clients to create disputes and enabling jury members to stake tokens, ensuring fair and secure dispute resolution through blockchain. Implemented a weighted random selection mechanism for jury selection and voting, achieving decentralized and transparent decision-making in a secure manner.',
    },
    {
      id: 3,
      title: 'Cloth Shop Site',
      category: 'web',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Express.js', 'Node.js'],
      description: 'Full-featured e-commerce platform with secure payment integration.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      details: 'Designed and developed a full-featured e-commerce platform with user registration, a dynamic product marketplace, and secure payment integration, allowing users to browse, add to cart, and complete transactions seamlessly. Enhanced performance, optimized load times, ensured smooth user experience, and secured authentication.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'blockchain', label: 'Blockchain' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container-custom">
        <h2 className="section-title">My Projects</h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-white rounded-full shadow-lg"
                    aria-label="View project details"
                  >
                    <Plus size={24} className="text-primary-600" />
                  </motion.button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {/* <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live</span>
                  </a> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;