
import React from "react";
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo braddora.png";

const Footer = () => {
  const whatsappLink =
    "https://wa.me/923433787019?text=Hi%2C%20I%27m%20interested%20in%20custom-branded%20water%20bottles.";

  const socialLinks = [
    {
      name: "Instagram",
      label: "ig",
      url: "https://www.instagram.com/infothebrandora/",
    },
    {
      name: "TikTok",
      label: "♪",
      url: "https://www.tiktok.com/@thebrandora?is_from_webapp=1&sender_device=pc",
    },
    {
      name: "Facebook",
      label: "f",
      url: "https://www.facebook.com/profile.php?id=61596068822386",
    },
    {
      name: "LinkedIn",
      label: "in",
      url: "https://www.linkedin.com/in/muhammad-ahmed-56a42a3aa/",
    },
  ];

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Custom Branded Bottles",
    "Business Branding",
    "Corporate Events",
    "Personalized Event Bottles",
  ];

  return (
    <footer className="bg-[#123D32] text-[#FAF8F2]">
      {/* Top Gold Line */}
      <div className="h-[2px] w-full bg-[#D6B779]" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">

          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="THE BRANDORA Logo"
                className="h-14 w-14 object-contain"
              />

              <div>
                <h2 className="font-serif text-2xl font-bold tracking-wide text-[#FAF8F2]">
                  THE BRANDORA
                </h2>

                <p className="mt-1 text-[9px] font-semibold tracking-[0.25em] text-[#D6B779]">
                  YOUR BRAND. YOUR BOTTLE.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#FAF8F2]/70">
              Give your brand a personal touch with custom-branded
              water bottles. We help businesses and events stand
              out through personalized bottle branding.
            </p>

            {/* WhatsApp Number */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D6B779] transition-colors hover:text-[#FAF8F2]"
            >
              <Phone size={15} />
              +92 343 3787019
              <ArrowUpRight size={14} />
            </a>

            {/* Social Media */}
            <div className="mt-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6B779]">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6B779]/30 text-sm font-bold text-[#FAF8F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:bg-[#D6B779] hover:text-[#123D32]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6B779]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-sm text-[#FAF8F2]/70 transition-all duration-300 hover:translate-x-1 hover:text-[#D6B779]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6B779]">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-[#FAF8F2]/70"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="rounded-2xl border border-[#D6B779]/25 bg-[#FAF8F2]/[0.04] p-6 sm:p-7 lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6B779]">
              Let's Connect
            </span>

            <h3 className="mt-4 font-serif text-2xl leading-snug text-[#FAF8F2]">
              Let's make your brand stand out.
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#FAF8F2]/65">
              Have a business or event in mind? Let's discuss your
              custom bottle requirements.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#D6B779] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#123D32] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FAF8F2]"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FAF8F2]/15 py-7">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-xs text-[#FAF8F2]/55">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#FAF8F2]">
                THE BRANDORA
              </span>
              . All rights reserved.
            </p>

            <a
              href="https://www.linkedin.com/in/muhammad-ahmed-56a42a3aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#FAF8F2]/65 transition hover:text-[#D6B779]"
            >
              <span className="font-bold">in</span>
              Designed & Developed by Ahmed Sheikh
              <ArrowUpRight size={13} />
            </a>

            <p className="text-[10px] font-bold tracking-[0.2em] text-[#D6B779]">
              YOUR BRAND. YOUR BOTTLE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
