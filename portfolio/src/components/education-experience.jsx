import { FaRegCalendarAlt, FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

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
      <motion.div 
        variants={itemVariants}
        className="bg-white/10 backdrop-blur-sm border border-blue-400/50 rounded-xl p-6 text-left hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-lg w-xs lg:w-lg"
      >
        <div className="flex items-start gap-3 mb-3 ">
          <FaCertificate className="text-yellow-400 text-xl mt-1"/>
          <div className="flex-1">
            <h3 className="text-yellow-300 font-semibold text-lg mb-1">
              English Certificate Level B2
            </h3>
            <p className="text-gray-300 font-medium">IES Martín Miranda</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Spain</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-blue-400" />
            <span>2023</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="bg-white/10 backdrop-blur-sm border border-blue-400/50 rounded-xl p-6 text-left hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-lg w-xs lg:w-lg"
      >
        <div className="flex items-start gap-3 mb-3">
          <FaGraduationCap className="text-blue-400 text-xl mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-yellow-300 font-semibold text-lg mb-1">
              Higher National Diploma in Web Application Development
            </h3>
            <p className="text-gray-300 font-medium">CIFP César Manrique</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Spain</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-blue-400" />
            <span>2023 - 2025</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </motion.section>
);

const Experience = () => (
  <motion.section 
    id="experience"
    className="py-8 flex flex-col items-center max-w-lg mx-auto"
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
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="bg-white/10 backdrop-blur-sm border border-yellow-400/50 rounded-xl p-6 text-left hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-lg w-xs lg:w-max">
        <div className="flex items-start gap-3 mb-4">
          <FaBriefcase className="text-yellow-400 text-xl mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-yellow-300 font-bold text-xl mb-1">
              PRODANET INTERNATIONAL
            </h3>
            <p className="text-cyan-300 font-semibold text-lg mb-3">Trainee Developer</p>
            
            <div className="bg-black/20 rounded-lg p-4 mb-4">
              <h4 className="text-white font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 text-xs mt-2">●</span>
                  <span>Web data extraction using JavaScript and regular expressions (RegExp)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 text-xs mt-2">●</span>
                  <span>Automation of scraping and structured storage in databases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 text-xs mt-2">●</span>
                  <span>Management and analysis of obtained data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>Santa Cruz de Tenerife, Spain</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-yellow-400" />
            <span>Feb 2025 - May 2025</span>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.section>
);

export { Education, Experience };