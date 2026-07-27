import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { educationData, experienceData } from "../data/experience.jsx";
import TimelineCard from "./TimelineCard.jsx";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const TimelineGroup = ({ items, renderCard, dotColorClass }) => (
  <motion.div
    className="relative flex flex-col gap-6 pl-8 sm:pl-10"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="absolute left-1.5 top-2 bottom-2 w-px bg-white/15" aria-hidden="true" />
    {items.map((item) => (
      <motion.div key={item.title ?? item.company} className="relative" variants={itemVariants}>
        <span className={`absolute -left-8 sm:-left-10 top-6 w-3 h-3 rounded-full ${dotColorClass} ring-4 ring-[#090a0f]`} />
        {renderCard(item)}
      </motion.div>
    ))}
  </motion.div>
);

const Education = () => (
  <motion.section
    id="education"
    className="w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-8">
      <FaGraduationCap className="text-3xl text-fuchsia-400" />
      <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 bg-clip-text text-transparent">
        Education
      </h2>
    </div>

    <TimelineGroup
      items={educationData}
      dotColorClass="bg-fuchsia-400"
      renderCard={(item) => (
        <TimelineCard
          icon={item.icon}
          iconColor={item.iconColor}
          borderColor="border-fuchsia-400/50"
          title={item.title}
          subtitle={item.institution}
          location={item.location}
          date={item.date}
          accentColor="text-fuchsia-400"
        />
      )}
    />
  </motion.section>
);

const Experience = () => (
  <motion.section
    id="experience"
    className="w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex items-center gap-3 mb-8">
      <FaBriefcase className="text-3xl text-cyan-400" />
      <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
        Experience
      </h2>
    </div>

    <TimelineGroup
      items={experienceData}
      dotColorClass="bg-cyan-400"
      renderCard={(item) => (
        <TimelineCard
          icon={item.icon}
          iconColor="text-cyan-400"
          borderColor="border-cyan-400/50"
          title={item.company}
          titleClassName="text-gray-100 font-bold text-xl mb-1"
          subtitle={item.role}
          subtitleClassName={`text-cyan-300 font-semibold text-lg ${item.summary ? "mb-1" : "mb-3"}`}
          summary={item.summary}
          responsibilities={item.responsibilities}
          techStack={item.techStack}
          accentColor="text-cyan-400"
          location={item.location}
          date={item.date}
        />
      )}
    />
  </motion.section>
);

export { Education, Experience };
