"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertTriangle, AlertCircle, Mail, User, MessageSquare, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/utils/emailjs";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "loading") return; // Guard against duplicate submissions

    if (!validate()) {
      setStatus("error");
      setStatusMessage("Please fix the validation errors before submitting.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Sending your message...");

    const result = await sendContactEmail(formData);

    if (result.unconfigured) {
      setStatus("unconfigured");
      setStatusMessage(result.message);
    } else if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 max-w-4xl mx-auto scroll-mt-20"
      aria-label="Contact Section"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800/40 mb-3">
          <span>04. GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
          Contact Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mb-6"></div>
        <p className="text-zinc-400 max-w-lg text-sm sm:text-base leading-relaxed">
          Have an opportunity, algorithmic inquiry, or project proposal? Send a message below.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-10 rounded-2xl bg-[#171717] border border-zinc-800 shadow-xl relative overflow-hidden"
      >
        {/* Ambient glow accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Live accessibility announcement status */}
        <div
          role="status"
          aria-live="polite"
          className="sr-only"
        >
          {statusMessage}
        </div>

        {/* Visible status banner */}
        {status !== "idle" && (
          <div
            className={`mb-6 p-4 rounded-xl border flex items-start gap-3 text-sm ${
              status === "success"
                ? "bg-emerald-950/30 border-emerald-800/50 text-emerald-300"
                : status === "unconfigured"
                ? "bg-amber-950/30 border-amber-800/50 text-amber-300"
                : status === "loading"
                ? "bg-cyan-950/30 border-cyan-800/50 text-cyan-300"
                : "bg-rose-950/30 border-rose-800/50 text-rose-300"
            }`}
          >
            {status === "success" && <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
            {status === "unconfigured" && <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
            {status === "loading" && <Loader2 className="w-5 h-5 flex-shrink-0 mt-0.5 animate-spin" />}
            {status === "error" && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
            <div className="flex-1">
              <p className="font-medium">{statusMessage}</p>
              {status === "unconfigured" && (
                <p className="text-xs text-amber-400/80 mt-1">
                  In development or before setting EmailJS, you can reach out directly via{" "}
                  <a
                    href="mailto:suyash.a.borse@gmail.com"
                    className="underline hover:text-white font-mono"
                  >
                    suyash.a.borse@gmail.com
                  </a>
                  .
                </p>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
              Your Name <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Johnson"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                disabled={status === "loading"}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                  errors.name
                    ? "border-rose-500/70 focus-visible:ring-rose-400"
                    : "border-zinc-800 focus-visible:border-cyan-500 focus-visible:ring-cyan-400"
                }`}
              />
            </div>
            {errors.name && (
              <p id="name-error" className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={status === "loading"}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 transition-colors ${
                  errors.email
                    ? "border-rose-500/70 focus-visible:ring-rose-400"
                    : "border-zinc-800 focus-visible:border-cyan-500 focus-visible:ring-cyan-400"
                }`}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
              Message <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-3.5 left-3.5 pointer-events-none text-zinc-500">
                <MessageSquare className="w-4 h-4" />
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here (e.g. project inquiry, collaboration)..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                disabled={status === "loading"}
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 transition-colors resize-y min-h-[110px] ${
                  errors.message
                    ? "border-rose-500/70 focus-visible:ring-rose-400"
                    : "border-zinc-800 focus-visible:border-cyan-500 focus-visible:ring-cyan-400"
                }`}
              />
            </div>
            {errors.message && (
              <p id="message-error" className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-glow-indigo/50 hover:shadow-glow-cyan/50 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono text-zinc-500 text-center sm:text-right">
              Direct:{" "}
              <a
                href="mailto:suyash.a.borse@gmail.com"
                className="text-zinc-400 hover:text-cyan-400 underline transition-colors"
              >
                suyash.a.borse@gmail.com
              </a>
            </span>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
