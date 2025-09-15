import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experience } from '@/data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-primary opacity-30" />
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow" />

              <div className="ml-16 mb-12">
                <Card className="card-gradient hover:shadow-elegant transition-smooth">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          {exp.role}
                        </h3>
                        <h4 className="text-xl font-semibold text-foreground">
                          {exp.company}
                        </h4>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3 mb-6">
                      {exp.description.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 * idx }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{item}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Skills Used */}
                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        Key Technologies & Skills
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                      <h5 className="font-semibold mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Successfully finished a project as Project Lead</li>
                        <li>• Lead the Team of 5 Frontend Developer Interns</li>
                        <li>• Improved application performance and user experience</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}

          {/* Current Status */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="font-medium">Currently Working & Open to New Opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;