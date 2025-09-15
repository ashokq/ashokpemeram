import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Smartphone, Globe, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Responsive Design", level: 92 },
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "RESTful APIs", level: 88 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Git", level: 90 },
      { name: "Cloud Deployment", level: 78 },
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Flutter", level: 80 },
      { name: "React Native", level: 75 },
      { name: "Mobile UI/UX", level: 82 },
      { name: "Cross-platform", level: 78 },
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    color: "from-teal-500 to-cyan-500",
    skills: [
      { name: "WordPress", level: 85 },
      { name: "SEO Optimization", level: 80 },
      { name: "Performance", level: 83 },
      { name: "Web Security", level: 75 },
    ]
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Postman", level: 85 },
      { name: "Problem Solving", level: 90 },
    ]
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </motion.div>
  );

  const SkillCategory = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
    const Icon = category.icon;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass p-6 rounded-xl hover-lift"
      >
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mr-4`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold">{category.title}</h3>
        </div>
        
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <SkillBar key={skill.name} skill={skill} index={skillIndex} />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and proficiency levels across different technologies and tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="glass p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Technical <span className="text-gradient">Proficiency</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              With a strong foundation in both frontend and backend technologies, I specialize in creating 
              full-stack applications that are scalable, maintainable, and user-friendly. My experience 
              spans from modern web frameworks to mobile development and cloud deployment.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Team Members Led</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};