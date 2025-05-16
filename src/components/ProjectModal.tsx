import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover object-center"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/70 dark:bg-gray-800/70 rounded-full"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-900 dark:text-white" />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {project.details}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center gap-2"
            >
              <ExternalLink size={18} />
              <span>View Live Site</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center gap-2"
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;