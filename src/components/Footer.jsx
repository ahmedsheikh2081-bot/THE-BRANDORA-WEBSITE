
import React from "react";
import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo braddora.png";

const Footer = () => {
  const whatsappLink =
    "https://wa.me/923099860405?text=Hi%2C%20I%27m%20interested%20in%20custom-branded%20water%20bottles.";

  const linkedinLink =
    "https://www.linkedin.com/in/muhammad-ahmed-56a42a3aa/";

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#123D32] text-[#F6F4EB] antialiased">
      <div className="h-1 w-full bg-gradient-to-r from-[#123D32] via-[#D6B779] to-[#123D32]" />

      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">

          {/* Brand */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <Link to="/" className="group inline-flex items-center gap-3.5">
                <img
                  src={logo}
                  alt="THE BRANDORA Logo"
                  className="h-12 w-12 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <div>
                  <h2 className="font-serif text-2xl font-bold tracking-wide text-white">
                    THE BRANDORA
                  </h2>
                  <p className="mt-0.5 text-[10px] font-bold tracking-[0.25em] text-[#D6B779]">
                    YOUR BRAND. YOUR BOTTLE.
                  </p>
                </div>
              </Link>

              <p className="mt-5 max-w-md text-xs leading-relaxed text-[#F6F4EB]/70 sm:text-sm sm:leading-7">
                Elevating business identities through custom-branded
                water bottles for cafés, corporate events, gyms,
                gaming zones, and special celebrations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#F6F4EB]/80">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#D6B779]" />
                <span>Karachi, Pakistan</span>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-[#D6B779]"
              >
                <Phone size={15} className="text-[#D6B779]" />
                <span>+92 309 9860405</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:pl-4 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#D6B779]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-xs font-medium text-[#F6F4EB]/75 transition-all duration-300 hover:translate-x-1 hover:text-[#D6B779] sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 lg:col-span-4">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#D6B779]">
                Let's Connect
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-[#F6F4EB]/75 sm:text-sm">
                Planning an event or building your brand identity?
                Let's discuss your custom bottle requirements.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D6B779] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#123D32] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E7CC91] hover:shadow-lg"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs text-[#F6F4EB]/60">
              © {new Date().getFullYear()}{" "}
              <strong className="font-semibold text-white">
                THE BRANDORA
              </strong>
              . All rights reserved.
            </p>

            <p className="mt-2 text-[11px] text-[#F6F4EB]/50">
              Designed & developed by{" "}
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#D6B779] transition hover:text-white"
              >
                Ahmed Sheikh
              </a>
            </p>
          </div>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ahmed Sheikh on LinkedIn"
            className="inline-flex items-center gap-2 text-xs text-[#F6F4EB]/70 transition hover:text-[#D6B779]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#D6B779] text-[11px] font-bold text-[#123D32]">
              in
            </span>
            Connect on LinkedIn
            <ArrowUpRight size={14} />
          </a>

          <p className="text-[11px] font-bold tracking-[0.22em] text-[#D6B779]">
            YOUR BRAND. YOUR BOTTLE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
