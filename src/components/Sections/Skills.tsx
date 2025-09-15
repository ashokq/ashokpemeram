import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/data/portfolioData';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 85, icon: '📜' },
        { name: 'Tailwind CSS', level: 88, icon: '💨' },
        { name: 'Responsive Design', level: 92, icon: '📱' }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'RESTful APIs', level: 88, icon: '🔗' },
        { name: 'MongoDB', level: 78, icon: '🍃' },
        { name: 'Firebase', level: 75, icon: '🔥' }
      ]
    },
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript', level: 85, icon: '📜' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Java', level: 75, icon: '☕' },
        { name: 'C', level: 70, icon: '🔧' }
      ]
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git', level: 85, icon: '🔀' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Flutter', level: 70, icon: '📱' },
        { name: 'React Native', level: 68, icon: '📲' },
        { name: 'Figma', level: 75, icon: '🎨' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My expertise across different technologies and domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-gradient">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-primary">
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.items.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: index * 0.1 + 0.3,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto card-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">What Makes Me Different</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-2">Problem Solver</h4>
                  <p className="text-sm text-muted-foreground">
                    I approach challenges with analytical thinking and creative solutions
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold mb-2">Fast Learner</h4>
                  <p className="text-sm text-muted-foreground">
                    Quick to adapt to new technologies and frameworks as needed
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">👥</div>
                  <h4 className="font-semibold mb-2">Team Player</h4>
                  <p className="text-sm text-muted-foreground">
                    Experienced in leading teams and collaborating effectively
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;