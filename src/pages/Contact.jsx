
import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  User,
  Phone,
  Building,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hi, I want to order custom branded water bottles.

*Name:* ${formData.name.trim()}
*Business/Event:* ${formData.business.trim()}
*Phone:* ${formData.phone.trim()}
*Order Details:* ${formData.message.trim()}`;

    const whatsappUrl = `https://wa.me/923099860405?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main
      id="contact"
      className="scroll-mt-24 min-h-screen bg-[#F6F4EB] px-4 py-12 font-sans text-[#123D32] antialiased sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Header Section */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-block rounded-full border border-[#D6B779]/60 bg-[#F2EFE3] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#66816C] sm:text-xs">
            Get in Touch
          </span>

          <h1 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.03em] text-[#123D32] sm:text-4xl md:text-5xl lg:text-[3.2rem]">
            Let's Build Your{" "}
            <span className="text-[#66816C]">
              Brand Together.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#53665A] sm:text-base">
            Have an idea or want custom-branded water bottles for
            your business? Fill out the form below or chat with us
            directly on WhatsApp.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Contact Info Cards */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/923099860405?text=Hi%2C%20I%20want%20to%20order%20custom%20branded%20water%20bottles."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-[1.25rem] border border-[#E7E3D4] bg-[#F9F7EF] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:bg-white hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123D32] text-[#D6B779] shadow-sm transition-transform duration-300 group-hover:scale-105">
                <MessageCircle size={22} />
              </div>

              <div className="flex-1">
                <h2 className="text-base font-bold text-[#123D32]">
                  Chat on WhatsApp
                </h2>
                <p className="mt-0.5 text-xs text-[#53665A]">
                  Instant response for quick orders
                </p>
              </div>

              <ArrowUpRight
                className="shrink-0 text-[#123D32] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={18}
              />
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 rounded-[1.25rem] border border-[#E7E3D4] bg-[#F9F7EF] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123D32] text-[#D6B779] shadow-sm">
                <MapPin size={22} />
              </div>

              <div>
                <h2 className="text-base font-bold text-[#123D32]">
                  Location
                </h2>
                <p className="mt-0.5 text-xs text-[#53665A]">
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            {/* Business Support Card */}
            <a
              href="mailto:support@thebrandora.com"
              className="flex items-center gap-4 rounded-[1.25rem] border border-[#E7E3D4] bg-[#F9F7EF] p-5 transition-colors hover:border-[#D6B779]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123D32] text-[#D6B779] shadow-sm">
                <Mail size={22} />
              </div>

              <div>
                <h2 className="text-base font-bold text-[#123D32]">
                  Business Support
                </h2>
                <p className="mt-0.5 text-xs text-[#53665A]">
                  support@thebrandora.com
                </p>
              </div>
            </a>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="rounded-[1.5rem] border border-[#E7E3D4] bg-[#F9F7EF] p-6 shadow-sm sm:p-8 lg:col-span-7 lg:p-10">
            <h2 className="font-serif text-2xl font-semibold text-[#123D32]">
              Send Us a Message
            </h2>

            <p className="mt-1 text-xs text-[#53665A] sm:text-sm">
              Fill out this quick form and it will automatically
              generate your message for WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase tracking-wider text-[#123D32]"
                  >
                    Your Name
                  </label>

                  <div className="relative flex items-center">
                    <User
                      size={16}
                      className="absolute left-3.5 text-[#718075]"
                    />
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#E7E3D4] bg-white px-4 py-3 pl-10 text-xs text-[#123D32] placeholder-[#A3A8A2] focus:border-[#D6B779] focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                {/* Business / Event */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-business"
                    className="text-xs font-bold uppercase tracking-wider text-[#123D32]"
                  >
                    Business / Event Name
                  </label>

                  <div className="relative flex items-center">
                    <Building
                      size={16}
                      className="absolute left-3.5 text-[#718075]"
                    />
                    <input
                      id="contact-business"
                      type="text"
                      name="business"
                      required
                      placeholder="e.g. Café & Restaurant"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#E7E3D4] bg-white px-4 py-3 pl-10 text-xs text-[#123D32] placeholder-[#A3A8A2] focus:border-[#D6B779] focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-phone"
                  className="text-xs font-bold uppercase tracking-wider text-[#123D32]"
                >
                  Phone Number
                </label>

                <div className="relative flex items-center">
                  <Phone
                    size={16}
                    className="absolute left-3.5 text-[#718075]"
                  />
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E7E3D4] bg-white px-4 py-3 pl-10 text-xs text-[#123D32] placeholder-[#A3A8A2] focus:border-[#D6B779] focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              {/* Order Details */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold uppercase tracking-wider text-[#123D32]"
                >
                  Order Details / Requirements
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Mention quantity, preferred bottle design or any specific requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E7E3D4] bg-white p-4 text-xs text-[#123D32] placeholder-[#A3A8A2] focus:border-[#D6B779] focus:outline-none sm:text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#123D32] px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#1B7658] hover:shadow-lg"
              >
                <Send size={16} />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
