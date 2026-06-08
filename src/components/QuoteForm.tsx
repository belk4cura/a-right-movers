"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fromZip: "",
    toZip: "",
    moveDate: "",
    homeSize: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          fromZip: "",
          toZip: "",
          moveDate: "",
          homeSize: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl shadow-[0_8px_24px_rgba(15,35,65,0.12)] p-8 md:p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-dark-navy mb-2">Quote Request Received!</h3>
        <p className="text-silver mb-4">
          We&apos;ll get back to you within 1 hour during business hours. For immediate assistance:
        </p>
        <a
          href="tel:7708640955"
          className="btn-primary inline-block px-8 py-3 text-lg"
        >
          Call (770) 864-0955
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-[0_8px_24px_rgba(15,35,65,0.12)] p-6 md:p-10">
      <h3 className="text-2xl font-bold text-dark-navy mb-1">
        Get Your Free Moving Quote
      </h3>
      <p className="text-silver mb-6 text-sm">
        No obligation · Free estimate · Response within 1 hour
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-dark-navy mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-medium-gray rounded text-dark-navy placeholder:text-silver"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark-navy mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="(770) 555-1234"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-medium-gray rounded text-dark-navy placeholder:text-silver"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-dark-navy mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="john@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-medium-gray rounded text-dark-navy placeholder:text-silver"
          />
        </div>

        {/* From / To */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-dark-navy mb-1">
              Moving From (Zip) *
            </label>
            <input
              type="text"
              required
              placeholder="30076"
              maxLength={5}
              value={formData.fromZip}
              onChange={(e) => setFormData({ ...formData, fromZip: e.target.value })}
              className="w-full px-4 py-3 border border-medium-gray rounded text-dark-navy placeholder:text-silver"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark-navy mb-1">
              Moving To (Zip) *
            </label>
            <input
              type="text"
              required
              placeholder="30301"
              maxLength={5}
              value={formData.toZip}
              onChange={(e) => setFormData({ ...formData, toZip: e.target.value })}
              className="w-full px-4 py-3 border border-medium-gray rounded text-dark-navy placeholder:text-silver"
            />
          </div>
        </div>

        {/* Date & Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-dark-navy mb-1">
              Preferred Move Date *
            </label>
            <input
              type="date"
              required
              value={formData.moveDate}
              onChange={(e) => setFormData({ ...formData, moveDate: e.target.value })}
              className="w-full px-4 py-3 border border-medium-gray rounded text-dark-navy"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark-navy mb-1">
              Home Size *
            </label>
            <select
              required
              value={formData.homeSize}
              onChange={(e) => setFormData({ ...formData, homeSize: e.target.value })}
              className="w-full px-4 py-3 border border-medium-gray rounded text-dark-navy bg-white"
            >
              <option value="">Select size...</option>
              <option value="studio">Studio / Room</option>
              <option value="1bed">1 Bedroom</option>
              <option value="2bed">2 Bedrooms</option>
              <option value="3bed">3 Bedrooms</option>
              <option value="4bed">4+ Bedrooms</option>
              <option value="office">Office / Commercial</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-dark-navy mb-1">
            Additional Details
          </label>
          <textarea
            rows={3}
            placeholder="Anything else we should know? (stairs, heavy items, special requests...)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 border border-medium-gray rounded text-dark-navy placeholder:text-silver resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            "Get My Free Quote →"
          )}
        </button>

        {status === "error" && (
          <p className="text-error text-sm text-center">
            Something went wrong. Please call us at (770) 864-0955 or try again.
          </p>
        )}

        {/* Trust microcopy */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-silver pt-2">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
            Your info is secure
          </span>
          <span>·</span>
          <span>No spam, ever</span>
          <span>·</span>
          <span>100% free estimate</span>
        </div>
      </form>
    </div>
  );
}
