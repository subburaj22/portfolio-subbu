import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Code2, Award, Target, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: "Inter College ProjectExpo",
      subtitle: "Second Place",
      description: "Secured second position in ML domain at ProjectExpo, showcasing innovative AI solutions",
      color: "from-yellow-400 to-orange-500",
      stats: "2nd Position"
    },
    {
      icon: Code2,
      title: "LeetCode Excellence",
      subtitle: "Max Rating: 1303",
      description: "Solved 70+ problems with global rank of 5,549,948, demonstrating strong problem-solving skills",
      color: "from-green-400 to-emerald-500",
      stats: "70+ Problems"
    },
    {
      icon: Star,
      title: "CodeChef Performance",
      subtitle: "Max Rating: 841",
      description: "Consistent performance with 60+ problems solved, showcasing algorithmic expertise",
      color: "from-blue-400 to-cyan-500",
      stats: "60+ Problems"
    },
    {
      icon: Award,
      title: "HackerRank Badges",
      subtitle: "C Programming",
      description: "Earned badges in C programming, demonstrating proficiency in foundational programming concepts",
      color: "from-purple-400 to-pink-500",
      stats: "C Badge"
    },
    {
      icon: Target,
      title: "SkillRack Achievement",
      subtitle: "240+ Problems Solved",
      description: "Extensive problem-solving practice with consistent performance across various domains",
      color: "from-indigo-400 to-purple-500",
      stats: "240+ Solved"
    },
    {
      icon: Zap,
      title: "Certifications",
      subtitle: "Multiple Platforms",
      description: "AWS Cloud Practitioner, Data Structures & Algorithms (Udemy), Python Basics (Beycan Institute)",
      color: "from-cyan-400 to-blue-500",
      stats: "3 Certs"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Programming excellence, competitive achievements, and professional certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {achievement.title}
                </h3>
                
                <div className={`text-lg font-semibold mb-3 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                  {achievement.subtitle}
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {achievement.description}
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${achievement.color} bg-opacity-20 rounded-full border border-opacity-30`}>
                  <span className={`text-sm font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.stats}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Problems Solved", value: "370+", color: "text-green-400" },
            { label: "Certifications", value: "3", color: "text-blue-400" },
            { label: "Max LeetCode Rating", value: "1303", color: "text-yellow-400" },
            { label: "Competition Rank", value: "2nd", color: "text-purple-400" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;