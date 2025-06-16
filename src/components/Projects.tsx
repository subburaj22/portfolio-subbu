import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "AI-Powered Smart Shopping Trolley",
      year: "2023",
      description: "Built a smart shopping trolley that can follow a specific person inside stores, especially helping elderly or physically challenged people. Used Raspberry Pi 4B and a Pi Camera to capture live video. A lightweight YOLOv5 Nano model (optimized with TensorFlow Lite) detects a special image marker worn by the user, helping the trolley follow them even in crowded places.",
      technologies: ["Raspberry Pi 4B", "YOLOv5 Nano", "TensorFlow Lite", "Python", "OpenCV", "Flask", "Motor Control"],
      highlights: ["Real-time person tracking", "Obstacle avoidance", "Web dashboard", "Edge computing"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Blog Generator using LLama 2",
      year: "2024",
      description: "Developed an advanced blog generator utilizing the LLama 2 large language model and Streamlit for an intuitive web interface. Implemented features for prompt-based content generation, title and keyword extraction, and content summaries to enhance SEO. The project streamlined the content creation process, significantly reducing the time required to produce high-quality blog posts.",
      technologies: ["LLama 2", "Streamlit", "Python", "Transformers", "NLP", "SEO Optimization"],
      highlights: ["AI-powered content generation", "SEO optimization", "User-friendly interface", "Quick deployment"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Deep Fake Detection using CNN",
      year: "2024",
      description: "Developed a deep fake detection system leveraging Convolutional Neural Networks (CNN) to accurately identify manipulated images. Implemented a robust CNN architecture to analyze and detect subtle inconsistencies in facial features and textures. The project demonstrated advanced capabilities in computer vision and deep learning, contributing to the fight against digital misinformation.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision", "Image Processing"],
      highlights: ["High accuracy detection", "Real-time processing", "Robust architecture", "Anti-misinformation"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative AI/ML projects that solve real-world problems and showcase technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 flex items-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.year}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs border border-indigo-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View Details</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;