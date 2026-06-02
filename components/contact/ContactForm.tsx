"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const services = [
  "Building & Construction",
  "Facilities Management",
  "Logistics & Transport",
  "Sanitation & Waste Management",
  "Safety Solutions",
  "Plant & Tool Hire",
  "Multiple Services",
  "General Inquiry",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={56} className="text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
        <p className="text-slate">We&apos;ll be in touch within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-gold font-semibold hover:underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1.5">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-border text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-1.5">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-border text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="Acme Corp"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-1.5">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-border text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-border text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            placeholder="+27 xx xxx xxxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-1.5">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-border text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-border text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
          placeholder="Describe your project or requirements..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded px-4 py-3">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email us directly at info@bonram.co.za
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold py-4 px-8 rounded hover:bg-navy-dark transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : (<><Send size={18} /> Send Message</>)}
      </button>
    </form>
  );
}
