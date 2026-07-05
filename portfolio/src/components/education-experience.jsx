import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { educationData, experienceData } from "../data/experience.jsx";
import TimelineCard from "./TimelineCard.jsx";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
};

const Education = () => (
  <motion.section
    id="education"
    className="py-8 flex flex-col items-center max-w-lg mx-auto"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-8">
      <FaGraduationCap className="text-3xl text-green-400" />
      <h2 className="text-2xl lg:text-3xl text-green-400 font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
        Education
      </h2>
    </div>

    <motion.div
      className="flex flex-col gap-6 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {educationData.map((item) => (
        <motion.div key={item.title} variants={itemVariants}>
          <TimelineCard
            icon={item.icon}
            iconColor={item.iconColor}
            borderColor="border-blue-400/50"
            title={item.title}
            subtitle={item.institution}
            location={item.location}
            date={item.date}
            accentColor="text-blue-400"
          />
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

const Experience = () => (
  <motion.section
    id="experience"
    className="py-8 flex flex-col items-center mx-auto"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-8">
      <FaBriefcase className="text-3xl text-yellow-400" />
      <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        Experience
      </h2>
    </div>

    <motion.div
      className="w-full flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {experienceData.map((item) => (
        <TimelineCard
          key={item.company}
          icon={item.icon}
          iconColor="text-yellow-400"
          borderColor="border-yellow-400/50"
          title={item.company}
          titleClassName="text-yellow-300 font-bold text-xl mb-1"
          subtitle={item.role}
          subtitleClassName={`text-cyan-300 font-semibold text-lg ${item.summary ? "mb-1" : "mb-3"}`}
          summary={item.summary}
          responsibilities={item.responsibilities}
          techStack={item.techStack}
          accentColor="text-yellow-400"
          location={item.location}
          date={item.date}
          fullWidth
        />
      ))}
    </motion.div>
  </motion.section>
);

export { Education, Experience };
