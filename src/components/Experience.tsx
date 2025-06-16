import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "GenAI Developer Intern",
      company: "GenAI Global Technology",
      duration: "2024",
      location: "Remote",
      description: "Applied generative AI and machine learning skills to real-world projects focusing on data preprocessing, model fine-tuning, and prompt engineering. Enhanced expertise in AI-driven solutions and automation.",
      skills: ["Generative AI", "Machine Learning", "Data Preprocessing", "Model Fine-tuning", "Prompt Engineering"]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "REACT",
      duration: "2023",
      location: "Remote",
      description: "Applied MERN Stack expertise to develop secure APIs and implement database connections for user authentication in dynamic web applications. Collaborated within a team environment to gain practical experience with cutting-edge technologies.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "API Development", "Authentication"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional internships and hands-on experience in AI/ML and full-stack development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-40 bg-gradient-to-b from-amber-400 to-emerald-400" />
              )}
              
              <div className="flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-amber-400">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-4">{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm border border-amber-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;