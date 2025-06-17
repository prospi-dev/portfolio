import React from 'react'
import { motion } from "framer-motion";
import profileImg from '../assets/images/manuel-prosperi.jpg'

const AboutMe = () => (
  <motion.section
    id="about"
    className="flex flex-col items-center justify-center px-4 py-8 text-center lg:flex-row lg:gap-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <div className="w-32 h-32 rounded-full overflow-hidden lg:w-100 lg:h-100 lg:rounded-xl">
      <img
        src={profileImg}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h2 className="text-2xl font-semibold mb-4 pt-2">About Me</h2>
      <p className="max-w-md text-gray-300 mb-2">
        I’ve been surrounded by computers since I was a kid, and that curiosity about how things work eventually led me to{" "}
        <span className="text-teal-400">web development</span>.<br />
        I love programming because it’s all about solving problems and constantly learning new things.<br />
        Right now, I’m focused on growing as a{" "}
        <span className="text-yellow-300 font-medium">Full-Stack Developer</span>, mainly working with technologies like{" "}
        <span className="text-blue-400 font-medium">React</span> and{" "}
        <span className="text-cyan-400 font-medium">.NET</span>.<br />
        When I’m not coding, you’ll probably find me playing video games or watching football.
      </p>
    </div>
  </motion.section>
);

export default AboutMe;