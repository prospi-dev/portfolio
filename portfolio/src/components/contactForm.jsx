import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaCheck } from "react-icons/fa";

const SERVICE_ID = "service_m2mkjvm";
const TEMPLATE_ID = "template_uw4h4xj";
const PUBLIC_KEY = "xcv0Xq248XSJ4SKZv";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setSent(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    } catch (err) {
      setError("There was an error sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl flex flex-col gap-6 shadow-xl lg:row-span-2 self-start transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/15 h-full max-w-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-4">
        <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
          Mail Me
        </h2>
      </div>

      <div className="space-y-4 flex-1">
        {/* Name Input */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaUser />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaEnvelope />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
          />
        </div>

        {/* Message Input */}
        <div className="relative">
          <div className="absolute left-3 top-4 text-gray-400">
            <FaComment />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
          sent 
            ? "bg-green-500 hover:bg-green-400 cursor-not-allowed" 
            : sending 
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 hover:scale-105 text-black"
        }`}
        disabled={sent || sending}
      >
        {sending ? (
          <>
            <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-5 h-5" />
            <span className="text-white">Sending...</span>
          </>
        ) : sent ? (
          <>
            <FaCheck className="text-white" />
            <span className="text-white">Message Sent!</span>
          </>
        ) : (
          <>
            <FaPaperPlane />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Error Message */}
      {error && (
        <motion.p 
          className="text-red-400 text-center text-sm bg-red-400/10 border border-red-400/30 rounded-lg p-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;