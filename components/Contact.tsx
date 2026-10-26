"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 md:px-20 bg-section-alt text-foreground scroll-mt-20"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-4 text-accent text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Connect
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-muted mb-10 text-sm sm:text-base leading-relaxed text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Feel free to reach out for collaborations, projects, internships, or just
        to say hi.
      </motion.p>

      <div className="max-w-2xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-card border ${
                  errors.name ? "border-red-500" : "border-card-border"
                } text-foreground placeholder-muted focus:outline-none focus:border-accent transition`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-card border ${
                  errors.email ? "border-red-500" : "border-card-border"
                } text-foreground placeholder-muted focus:outline-none focus:border-accent transition`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-card border ${
                errors.subject ? "border-red-500" : "border-card-border"
              } text-foreground placeholder-muted focus:outline-none focus:border-accent transition`}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-card border ${
                errors.message ? "border-red-500" : "border-card-border"
              } text-foreground placeholder-muted focus:outline-none focus:border-accent transition resize-none`}
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Sending...
              </>
            ) : status === "success" ? (
              <>
                <FiCheck size={18} />
                Message Sent!
              </>
            ) : status === "error" ? (
              <>
                <FiAlertCircle size={18} />
                Failed — Try Again
              </>
            ) : (
              <>
                <FiSend size={18} />
                Send Message
              </>
            )}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm">
              Thanks! Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </motion.form>

        <motion.div
          className="flex justify-center gap-6 mt-12 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a
            href="https://github.com/ghimirebabin07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/babin-ghimire-91403a32b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ghimirebabin92@gmail.com"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
