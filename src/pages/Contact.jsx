
import { useState } from "react";
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

    const whatsappUrl = `https://wa.me/923433787019?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputStyle =
    "block w-full min-w-0 rounded-xl border border-[#E7E3D4] bg-white px-4 py-3 text-sm text-[#123D32] placeholder-[#A3A8A2] focus:border-[#D6B779] focus:outline-none";

  const cardStyle =
    "flex min-w-0 items-center gap-4 rounded-[1.25rem] border border-[#E7E3D4] bg-[#F9F7EF] p-4 transition-all duration-300 hover:border-[#D6B779] sm:p-5";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full min-w-0 scroll-mt-[84px] bg-[#F6F4EB] px-4 py-12 font-sans text-[#123D32] antialiased sm:scroll-mt-24 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto w-full min-w-0 max-w-[1200px]">

        <div className="mx-auto mb-10 w-full max-w-3xl text-center sm:mb-16">
          <span className="inline-block max-w-full rounded-full border border-[#D6B779]/60 bg-[#F2EFE3] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#66816C] sm:text-xs sm:tracking-[0.25em]">
            Get in Touch
          </span>

          <h2
            id="contact-heading"
            className="mt-4 break-words font-serif text-3xl font-semibold tracking-[-0.03em] text-[#123D32] sm:text-4xl md:text-5xl lg:text-[3.2rem]"
          >
            Order Custom Branded
            <span className="block text-[#66816C]">
              Water Bottles in Pakistan.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#53665A] sm:text-base">
            Looking for personalized water bottles for your
            business or event? THE BRANDORA provides custom
            branded water bottle solutions in Karachi and
            across Pakistan. Contact us for business orders,
            custom labels and event enquiries.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Left Column */}
          <div className="flex min-w-0 flex-col gap-5 lg:col-span-5">

            <a
              href="https://wa.me/923433787019?text=Hi%2C%20I%20want%20to%20order%20custom%20branded%20water%20bottles."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact THE BRANDORA on WhatsApp"
              className={`group ${cardStyle}`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123D32] text-[#D6B779]">
                <MessageCircle size={22} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-[#123D32]">
                  Chat on WhatsApp
                </h3>
                <p className="mt-0.5 text-xs text-[#53665A]">
                  Instant response for quick orders
                </p>
              </div>

              <ArrowUpRight size={18} className="shrink-0" />
            </a>

            <div className={cardStyle}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123D32] text-[#D6B779]">
                <MapPin size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#123D32]">
                  Location
                </h3>
                <p className="mt-0.5 text-xs text-[#53665A]">
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            <a
              href="mailto:support@thebrandora.com"
              aria-label="Email THE BRANDORA business support"
              className={cardStyle}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123D32] text-[#D6B779]">
                <Mail size={22} />
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold text-[#123D32]">
                  Business Support
                </h3>
                <p className="mt-0.5 break-all text-xs text-[#53665A]">
                  support@thebrandora.com
                </p>
              </div>
            </a>
          </div>

          {/* Inquiry Form */}
          <div className="w-full min-w-0 rounded-[1.5rem] border border-[#E7E3D4] bg-[#F9F7EF] p-4 shadow-sm sm:p-8 lg:col-span-7 lg:p-10">
            <h3 className="font-serif text-2xl font-semibold text-[#123D32]">
              Send Us a Message
            </h3>

            <p className="mt-1 text-xs text-[#53665A] sm:text-sm">
              Tell us about your business or event requirements.
              Your enquiry will be prepared for WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex min-w-0 flex-col gap-4"
            >
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">

                <div className="flex min-w-0 flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider">
                    Your Name
                  </label>

                  <div className="relative flex min-w-0 items-center">
                    <User size={16} className="pointer-events-none absolute left-3.5 text-[#718075]" />
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputStyle} pl-10`}
                    />
                  </div>
                </div>

                <div className="flex min-w-0 flex-col gap-1.5">
                  <label htmlFor="contact-business" className="text-xs font-bold uppercase tracking-wider">
                    Business / Event Name
                  </label>

                  <div className="relative flex min-w-0 items-center">
                    <Building size={16} className="pointer-events-none absolute left-3.5 text-[#718075]" />
                    <input
                      id="contact-business"
                      type="text"
                      name="business"
                      required
                      placeholder="e.g. Café & Restaurant"
                      value={formData.business}
                      onChange={handleChange}
                      className={`${inputStyle} pl-10`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 flex-col gap-1.5">
                <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider">
                  Phone Number
                </label>

                <div className="relative flex min-w-0 items-center">
                  <Phone size={16} className="pointer-events-none absolute left-3.5 text-[#718075]" />
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputStyle} pl-10`}
                  />
                </div>
              </div>

              <div className="flex min-w-0 flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider">
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
                  className={`${inputStyle} resize-y p-4`}
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#123D32] px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#1B7658] hover:shadow-lg"
              >
                <Send size={16} />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
