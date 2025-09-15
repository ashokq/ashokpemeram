import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/ashok-profile.jpg";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Node.js", 
  "Express.js", "MongoDB", "Python", "Java", "C",
  "Flutter", "React Native", "Firebase", "Git", 
  "RESTful APIs", "Responsive Design"
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-elegant"
              >
                <img
                  src={profileImage}
                  alt="Ashok Pemeram"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Passionate <span className="text-gradient">Developer</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm an innovative and dedicated Computer Science Engineering student from Kurnool, India, 
                with hands-on experience in full-stack development. Currently pursuing my Bachelor's degree 
                at G.Pulla Reddy Engineering College.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My expertise lies in building scalable web applications, with a strong foundation in 
                the MERN stack, Python, and mobile development. I've successfully led development teams 
                and delivered production-ready applications for various clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about creating user-centric designs, implementing efficient backend systems, 
                and staying updated with the latest technology trends. My goal is to contribute to innovative 
                projects that make a positive impact.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Kurnool, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">ashokpemeram@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground">+91 9515461257</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Status</h4>
                <p className="text-success font-medium">Available for Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Technical <span className="text-gradient">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="glass p-4 text-center rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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