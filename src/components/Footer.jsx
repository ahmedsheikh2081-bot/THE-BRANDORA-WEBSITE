
import {
  ArrowUpRight,
  MessageCircle,
  Phone,
} from "lucide-react";

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
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  const services = [
    "Custom Branded Water Bottles",
    "Business Bottle Branding",
    "Corporate Event Bottles",
    "Personalized Event Bottles",
  ];

  return (
    <footer
      className="w-full min-w-0 bg-[#123D32] text-[#FAF8F2]"
      aria-label="THE BRANDORA website footer"
    >
      <div className="h-[2px] w-full bg-[#D6B779]" />

      <div className="mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-8 lg:px-12">

        {/* Main Footer */}
        <div className="grid min-w-0 grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-10 lg:py-20">

          {/* Brand Section */}
          <div className="min-w-0 lg:col-span-4">
            <a
              href="#home"
              aria-label="THE BRANDORA - Back to home"
              className="inline-flex max-w-full items-center gap-3"
            >
              <img
                src={logo}
                alt="THE BRANDORA logo"
                className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
                loading="lazy"
                decoding="async"
              />

              <div className="min-w-0">
                <span className="block break-words font-serif text-xl font-bold tracking-wide text-[#FAF8F2] sm:text-2xl">
                  THE BRANDORA
                </span>

                <span className="mt-1 block text-[8px] font-semibold tracking-[0.2em] text-[#D6B779] sm:text-[9px] sm:tracking-[0.25em]">
                  YOUR BRAND. YOUR BOTTLE.
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#FAF8F2]/70">
              THE BRANDORA provides custom branded water bottles
              with personalized labels featuring your business
              logo and identity. We help cafes, restaurants,
              hotels, corporate businesses and events create
              a memorable brand presentation in Pakistan.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact THE BRANDORA on WhatsApp"
              className="mt-6 inline-flex max-w-full items-center gap-2 text-sm font-medium text-[#D6B779] transition-colors hover:text-[#FAF8F2]"
            >
              <Phone size={15} className="shrink-0" />
              +92 343 3787019
              <ArrowUpRight size={14} className="shrink-0" />
            </a>

            {/* Social Media */}
            <div className="mt-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6B779]">
                Follow THE BRANDORA
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow THE BRANDORA on ${social.name}`}
                    title={social.name}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D6B779]/30 text-sm font-bold text-[#FAF8F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:bg-[#D6B779] hover:text-[#123D32]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0 lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6B779]">
              Explore
            </h2>

            <nav aria-label="Footer navigation">
              <ul className="mt-6 space-y-4">
                {links.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      className="inline-flex max-w-full items-center text-sm text-[#FAF8F2]/70 transition-all duration-300 hover:translate-x-1 hover:text-[#D6B779]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className="min-w-0 lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6B779]">
              Our Services
            </h2>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="break-words text-sm text-[#FAF8F2]/70"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="min-w-0 rounded-2xl border border-[#D6B779]/25 bg-[#FAF8F2]/[0.04] p-5 sm:p-7 lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D6B779]">
              Let's Connect
            </span>

            <h2 className="mt-4 break-words font-serif text-2xl leading-snug text-[#FAF8F2]">
              Let's Make Your Brand Stand Out.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#FAF8F2]/65">
              Have a business or event in mind? Contact us to
              discuss your custom branded water bottle
              requirements.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order custom branded water bottles through WhatsApp"
              className="mt-7 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#D6B779] px-3 py-3.5 text-[11px] font-bold uppercase tracking-wide text-[#123D32] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FAF8F2] sm:px-5 sm:text-xs sm:tracking-wider"
            >
              <MessageCircle size={17} className="shrink-0" />
              Chat on WhatsApp
              <ArrowUpRight size={15} className="shrink-0" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FAF8F2]/15 py-7">
          <div className="flex min-w-0 flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
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
              className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 text-xs text-[#FAF8F2]/65 transition hover:text-[#D6B779]"
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
