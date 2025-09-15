import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Users, Trophy } from "lucide-react";

const experiences = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "Synxa IT Pvt Ltd",
    location: "Remote",
    period: "Jul 2023 - Jun 2025",
    type: "Internship",
    description: [
      "Developed and maintained web applications with a focus on performance, usability, and client requirements",
      "Collaborated with designers and backend developers to implement features that improved user experience and reduced load times",
      "Successfully finished a project as Project Lead",
      "Lead a team of 5 Frontend Developer Interns"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    achievements: [
      "Project Lead for major client project",
      "Led team of 5 frontend developers",
      "Improved application performance by 40%"
    ]
  }
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and achievements in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-xl shadow-lg hover:shadow-elegant transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-primary font-medium mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {experience.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-1">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2 mb-4">
                    {experience.description.map((point, i) => (
                      <div key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-warning" />
                      Key Achievements:
                    </h4>
                    <div className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-warning rounded-full mt-2 mr-3 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};