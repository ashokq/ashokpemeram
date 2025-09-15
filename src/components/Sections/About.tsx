import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { personalInfo, skills } from '@/data/portfolioData';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const skillCategories = [
    { name: 'Languages', skills: skills.languages, icon: '💻' },
    { name: 'Frontend', skills: skills.frontend, icon: '🎨' },
    { name: 'Backend', skills: skills.backend, icon: '⚡' },
    { name: 'Databases', skills: skills.databases, icon: '🗄️' },
    { name: 'Mobile', skills: skills.mobile, icon: '📱' },
    { name: 'Tools', skills: skills.tools, icon: '🛠️' }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img
                src={profilePhoto}
                alt="Ashok Pemeram"
                className="w-64 h-64 rounded-2xl object-cover mx-auto lg:mx-0 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl" />
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
              <p className="text-lg text-primary mb-4">{personalInfo.title}</p>
              <div className="space-y-2 text-muted-foreground">
                <p>📍 {personalInfo.location}</p>
                <p>📧 {personalInfo.email}</p>
                <p>📞 {personalInfo.phone}</p>
              </div>
            </div>
          </motion.div>

          {/* Bio and Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor's in Computer Science Engineering, 
                I've already gained valuable industry experience working as a Full Stack Developer 
                at Synxa IT, where I lead development teams and deliver high-quality web applications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 card-gradient hover:shadow-elegant transition-smooth">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-2">{category.icon}</span>
                        <h4 className="font-semibold">{category.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;