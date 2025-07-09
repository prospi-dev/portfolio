import React from 'react'
import { motion } from "framer-motion";
import profileImg from '../assets/images/manuel-prosperi.jpg'

const AboutMe = () => (
  <section id="about" className="py-16 px-4 scroll-mt-20">
    <div className="max-w-4xl mx-auto">
      <motion.div 
        className="flex flex-col items-center justify-center text-center lg:flex-row lg:gap-12 lg:text-left" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative mb-8 lg:mb-0 lg:flex-shrink-0">
          <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 p-1">
            <img
              src={profileImg}
              alt="Manuel Prosperi - Full Stack Developer"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="lg:flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              I've been surrounded by computers since I was a kid, and that curiosity about how things work eventually led me to{" "}
              <span className="text-teal-400 font-semibold">web development</span>.
            </p>
            <p>
              I love programming because it's all about solving problems and constantly learning new things. 
              Right now, I'm focused on growing as a{" "}
              <span className="text-yellow-300 font-semibold">Full-Stack Developer</span>, mainly working with technologies like{" "}
              <span className="text-blue-400 font-semibold">React</span> and{" "}
              <span className="text-cyan-400 font-semibold">.NET</span>.
            </p>
            <p>
              When I'm not coding, you'll probably find me playing video games or watching football.
            </p>
          </div>
        
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutMe;