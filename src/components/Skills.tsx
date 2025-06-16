import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Database, Globe, Wrench, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "JavaScript", "SQL"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "AI/ML Technologies",
      icon: Brain,
      skills: [
        "Machine Learning",
        "Deep Learning", 
        "TensorFlow",
        "Computer Vision",
        "Natural Language Processing (NLP)",
        "YOLOv5",
        "TensorFlow Lite",
        "OpenCV"
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        "React.js",
        "Node.js", 
        "Express.js",
        "MongoDB",
        "RESTful APIs",
        "Flask",
        "Streamlit"
      ],
      color: "from-green-400 to-emerald-400"
    },
    {
      title: "Database & Query Languages",
      icon: Database,
      skills: ["SQL (Basics)", "MongoDB", "Database Design"],
      color: "from-indigo-400 to-purple-400"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        "Git/GitHub",
        "VS Code",
        "Raspberry Pi",
        "IoT Development",
        "Motor Control (L298N)",
        "Ultrasonic Sensors (HC-SR04)",
        "Pi Camera"
      ],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Design & Analytics Tools",
      icon: Award,
      skills: [
        "Canva",
        "Power BI", 
        "Google Analytics",
        "SEO Tools",
        "Social Media Management"
      ],
      color: "from-cyan-400 to-blue-400"
    }
  ];

  const additionalSkills = [
    "Data Structures & Algorithms",
    "AWS Cloud Practitioner",
    "Problem Solving",
    "Team Collaboration", 
    "Agile Methodology",
    "Project Management",
    "Technical Documentation",
    "Code Optimization",
    "System Design",
    "Edge Computing"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive skill set spanning AI/ML, full-stack development, and modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 flex-shrink-0`} />
                    <span className="text-sm">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Additional Skills & Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded-full border border-indigo-500/30 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;