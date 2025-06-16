import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "B.E Computer Science Engineering (AI-ML)",
      institution: "Sri Eshwar College of Engineering",
      duration: "2022 - 2026",
      grade: "CGPA: 7.38 (up to 5th sem)",
      description: "Specializing in Artificial Intelligence and Machine Learning with focus on deep learning, neural networks, and advanced algorithms."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dr.V.Gengusamy.Matric.Hr.Sec.School",
      duration: "2020 - 2022",
      grade: "91.1%",
      description: "Completed with distinction in Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Dr.V.Gengusamy.Matric.Hr.Sec.School",
      duration: "2019 - 2020",
      grade: "89.6%",
      description: "Strong foundation in science and mathematics with excellent academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey in computer science and artificial intelligence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-emerald-400 to-cyan-400" />
              )}
              
              <div className="flex items-start gap-6">
                {/* Timeline Dot */}
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-emerald-400">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-medium">{edu.grade}</span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;