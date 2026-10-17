"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertTriangle, AlertCircle, Loader2 } from "lucide-react";
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
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "loading") return;

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
      className="mt-20 sm:mt-32 mb-20 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Contact Section"
    >
      <div className="mb-6 sm:mb-8">
        <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white">
          Contact
        </h3>
        <p className="text-zinc-500 font-mono text-xs sm:text-sm mt-1">
          Send a direct message or proposal
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="glass-card rounded-xl p-5 sm:p-8 shadow-xl"
      >
        {/* Screen reader live status */}
        <div role="status" aria-live="polite" className="sr-only">
          {statusMessage}
        </div>

        {/* Visible status banner */}
        {status !== "idle" && (
          <div
            className={`mb-6 p-4 rounded-md border flex items-start gap-3 text-xs sm:text-sm font-mono ${
              status === "success"
                ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
                : status === "unconfigured"
                ? "bg-amber-950/30 border-amber-800/60 text-amber-300"
                : status === "loading"
                ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                : "bg-rose-950/30 border-rose-800/60 text-rose-300"
            }`}
          >
            {status === "success" && <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
            {status === "unconfigured" && <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
            {status === "loading" && <Loader2 className="w-4 h-4 flex-shrink-0 mt-0.5 animate-spin" />}
            {status === "error" && <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
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

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase tracking-tight mb-1.5">
                Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Johnson"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                disabled={status === "loading"}
                className={`w-full px-3.5 py-2.5 rounded-md bg-zinc-900 border text-xs sm:text-sm text-white placeholder-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 transition-colors ${
                  errors.name ? "border-rose-500" : "border-zinc-800"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="text-xs font-mono text-rose-400 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase tracking-tight mb-1.5">
                Email <span className="text-rose-400">*</span>
              </label>
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
                className={`w-full px-3.5 py-2.5 rounded-md bg-zinc-900 border text-xs sm:text-sm text-white placeholder-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 transition-colors ${
                  errors.email ? "border-rose-500" : "border-zinc-800"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-xs font-mono text-rose-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase tracking-tight mb-1.5">
              Message <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi Suyash, I'd like to talk about..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              disabled={status === "loading"}
              className={`w-full px-3.5 py-2.5 rounded-md bg-zinc-900 border text-xs sm:text-sm text-white placeholder-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 transition-colors resize-y ${
                errors.message ? "border-rose-500" : "border-zinc-800"
              }`}
            />
            {errors.message && (
              <p id="message-error" className="text-xs font-mono text-rose-400 mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono text-zinc-500">
              Direct:{" "}
              <a
                href="mailto:suyash.a.borse@gmail.com"
                className="text-zinc-400 hover:text-white underline decoration-dotted"
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
