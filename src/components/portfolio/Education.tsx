import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    id: "1",
    degree: "Bachelor's in Computer Science and Engineering",
    institution: "G.Pulla Reddy Engineering College",
    location: "Kurnool",
    period: "Aug 2023 – June 2026",
    status: "Currently Pursuing",
    description: "Specializing in software engineering, data structures, algorithms, and modern web technologies.",
    achievements: [
      "Active participation in coding competitions",
      "Member of technical clubs and societies",
      "Projects in MERN stack and mobile development"
    ],
    gpa: "Expected: 8.5/10",
    type: "Bachelor's Degree"
  },
  {
    id: "2",
    degree: "Diploma in Computer Engineering",
    institution: "Sri Venkateswara Govt Polytechnic College",
    location: "Tirupati",
    period: "Dec 2020 – May 2023",
    status: "Completed",
    description: "Comprehensive program covering computer fundamentals, programming languages, and basic software development.",
    achievements: [
      "Strong foundation in programming concepts",
      "Hands-on experience with multiple programming languages",
      "Completed various technical projects"
    ],
    gpa: "Distinction",
    type: "Diploma"
  }
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and qualifications that shaped my technical expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
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
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-primary font-medium mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        {edu.institution}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-success/10 text-success' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {edu.status}
                      </span>
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        {edu.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      {edu.gpa}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                      Key Highlights:
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
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

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">
              Continuous <span className="text-gradient">Learning</span>
            </h3>
            <p className="text-muted-foreground">
              Beyond formal education, I'm committed to staying updated with the latest technologies 
              through online courses, workshops, and hands-on projects. I believe in lifelong learning 
              and constantly expanding my skill set to meet industry demands.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};