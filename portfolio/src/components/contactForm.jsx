import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    } catch (err) {
      setError("There was an error sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-white/10 p-8 rounded-xl flex flex-col gap-10 shadow lg:row-span-2 self-start transition hover:scale-[1.02] hover:shadow-2xl h-full max-w-md"
    >
      <h2 className="text-2xl font-semibold mb-2 text-center">Contact Me</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="p-3 rounded bg-white/20 text-white placeholder-gray-300 outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="p-3 rounded bg-white/20 text-white placeholder-gray-300 outline-none"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="p-3 rounded bg-white/20 text-white placeholder-gray-300 outline-none resize-none"
      />
      <button
        type="submit"
        className={"bg-[#00c3ff] hover:bg-[#0099cc] text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2" + (sent ? " cursor-not-allowed bg-green-500 hover:bg-green-400" : "")}
        disabled={sent || sending}
      >
        {sending ? (
          <>
            <span className="animate-spin rounded-full border-2 border-white border-t-transparent w-5 h-5 inline-block" />
            Sending...
          </>
        ) : sent ? (
          "Message Sent!"
        ) : (
          "Send Message"
        )}
      </button>
      {error && <p className="text-red-400 text-center">{error}</p>}
    </form>
  );
};

export default ContactForm;