import { FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => (
  <motion.section id="education"
    className="py-6 flex flex-col items-center scroll-mt-30"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <h2 className="text-2xl font-semibold mb-6">Education</h2>
    <div className="flex flex-col gap-4 w-xs lg:w-sm">
      <div className="border border-blue-400 rounded-lg p-4 text-left">
        <span className="text-yellow-300 font-semibold">English Certificate level B2</span>
        <div>IES Martín Miranda, Spain</div>
        <div className="flex items-center gap-2 mt-1 text-gray-300">
          <FaRegCalendarAlt /> 2023
        </div>
      </div>
      <div className="border border-blue-400 rounded-lg p-4 text-left">
        <span className="text-yellow-300 font-semibold">Higher National Diploma in Web Application Development</span>
        <div>CIFP César Manrique, Spain</div>
        <div className="flex items-center gap-2 mt-1 text-gray-300">
          <FaRegCalendarAlt /> 2023 - 2025
        </div>
      </div>
    </div>
  </motion.section>
);

const Experience = () => (
  <motion.section id="experience"
    className="flex flex-col items-center scroll-mt-40"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <h2 className="text-2xl font-semibold mb-6">Experience</h2>
    <div className="border border-yellow-400 rounded-lg p-4 w-xs text-left lg:w-lg">
      <span className="text-yellow-300 font-semibold">PRODANET INTERNATIONAL</span>
      <div className="text-gray-300 text-sm mb-2">Trainee Developer</div>
      <ul className="list-disc list-inside text-gray-200 mb-2 text-sm">
        <li>Web data extraction using JavaScript and regular expressions (RegExp).</li>
        <li>Automation of scraping and structured storage in databases.</li>
        <li>Management and analysis of obtained data.</li>
      </ul>
      <div className="text-gray-300 text-sm">Santa Cruz de Tenerife, Spain</div>
      <div className="flex items-center gap-2 mt-1 text-gray-300 text-sm">
        <FaRegCalendarAlt /> February 2025 - May 2025
      </div>
    </div>
  </motion.section>
);

export { Education, Experience };