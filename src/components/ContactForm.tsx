"use client";

import React, { useState } from "react";
import { CheckCircle, AlertTriangle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/utils/emailjs";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "unconfigured">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
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

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const formattedMessage = formData.phone
      ? `Phone: ${formData.phone}\n\n${formData.message}`
      : formData.message;

    const result = await sendContactEmail({
      name: fullName,
      email: formData.email,
      message: formattedMessage,
    });

    if (result.unconfigured) {
      setStatus("unconfigured");
      setStatusMessage(result.message);
    } else if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  return (
    <section
      id="contact"
      className="mt-16 sm:mt-28 mb-16 md:mb-28 max-w-5xl mx-auto px-4 scroll-mt-20 w-full"
      aria-label="Work and Contact Section"
    >
      {/* Section Header matching Dino Kupinic */}
      <h3 className="font-semibold tracking-tighter text-2xl sm:text-3xl text-white mb-5 sm:mb-6">
        Work
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="border border-zinc-800 bg-[#09090b] rounded-lg p-4 sm:p-5 flex flex-col md:flex-row gap-5 items-stretch shadow-sm hover:border-zinc-700 transition-colors"
      >
        {/* Left Visual Container: Gradient Hero Banner */}
        <div className="w-full md:w-1/2 flex items-center justify-center rounded-lg bg-gradient-to-t from-[#09090b] via-zinc-900 to-zinc-800/80 border border-zinc-800/80 p-8 sm:p-12 min-h-[220px] md:min-h-auto">
          <h3 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight select-none">
            Let&#39;s make something great.
          </h3>
        </div>

        {/* Right Container: Contact Form */}
        <div className="w-full md:w-1/2 max-w-md flex flex-col justify-center mx-auto py-2">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <h4 className="text-base sm:text-lg font-medium text-white mb-1">
                Contact me
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-normal">
                Fill out the form below and I will get back to you as soon as possible. Fields marked * are required.
              </p>
            </div>

            {/* 2-Column Name and Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* Firstname */}
              <div>
                <label htmlFor="firstName" className="block text-xs font-medium text-zinc-300 mb-1">
                  Firstname *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  className={`h-9 w-full rounded-md border ${
                    errors.firstName ? "border-rose-500/80" : "border-zinc-800"
                  } bg-zinc-950/60 px-3 py-1 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors`}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="mt-1 text-xs text-rose-400 font-mono">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Lastname */}
              <div>
                <label htmlFor="lastName" className="block text-xs font-medium text-zinc-300 mb-1">
                  Lastname *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  aria-invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  className={`h-9 w-full rounded-md border ${
                    errors.lastName ? "border-rose-500/80" : "border-zinc-800"
                  } bg-zinc-950/60 px-3 py-1 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors`}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="mt-1 text-xs text-rose-400 font-mono">
                    {errors.lastName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1">
                  E-Mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`h-9 w-full rounded-md border ${
                    errors.email ? "border-rose-500/80" : "border-zinc-800"
                  } bg-zinc-950/60 px-3 py-1 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-rose-400 font-mono">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-zinc-300 mb-1">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="h-9 w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Suyash, I would like to discuss a project..."
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full rounded-md border ${
                  errors.message ? "border-rose-500/80" : "border-zinc-800"
                } bg-zinc-950/60 p-3 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors min-h-[90px] max-h-[180px] resize-y`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-rose-400 font-mono">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full h-9 rounded-md bg-white text-zinc-950 hover:bg-zinc-200 font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 select-none shadow-xs"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </form>

          {/* Feedback & Status Message */}
          {status !== "idle" && (
            <div
              className={`mt-4 p-3 rounded-md border flex items-start gap-2.5 text-xs font-mono ${
                status === "success"
                  ? "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
                  : status === "unconfigured"
                  ? "bg-zinc-900 border-zinc-800 text-zinc-300"
                  : status === "loading"
                  ? "bg-zinc-900 border-zinc-800 text-zinc-400"
                  : "bg-rose-950/30 border-rose-800/60 text-rose-300"
              }`}
            >
              {status === "success" && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
              {status === "unconfigured" && <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />}
              {status === "error" && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
              <div className="flex-1">
                <p>{statusMessage}</p>
                {status === "unconfigured" && (
                  <p className="mt-1 text-zinc-400">
                    You can reach out directly via{" "}
                    <a
                      href="mailto:suyash.a.borse@gmail.com"
                      className="underline text-white hover:text-zinc-200"
                    >
                      suyash.a.borse@gmail.com
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
