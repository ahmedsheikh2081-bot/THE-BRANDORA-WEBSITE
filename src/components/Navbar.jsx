
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import brandoraLogo from "../assets/logo braddora.png";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

const whatsappLink =
  "https://wa.me/923433787019?text=Hi%2C%20I%20want%20to%20order%20custom%20branded%20water%20bottles.";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyles =
    "relative whitespace-nowrap py-2 text-[13px] font-semibold text-[#123D32]/70 transition-colors duration-200 hover:text-[#123D32]";

  const whatsappButton =
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#D6B779] px-4 py-2.5 text-sm font-semibold text-[#123D32] transition-colors duration-200 hover:bg-[#E8D8B2]";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D6B779]/40 bg-[#FAF8F2]">
      <nav className="relative mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-2 px-4 sm:h-[76px] sm:px-6 lg:h-[84px] lg:gap-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="THE BRANDORA Home"
          className="flex shrink-0 items-center"
        >
          <img
            src={brandoraLogo}
            alt="THE BRANDORA - Your Brand. Your Bottle."
            className="block h-[42px] w-[145px] object-contain object-left sm:h-[48px] sm:w-[175px] lg:h-[54px] lg:w-[210px] xl:w-[230px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={linkStyles}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${whatsappButton} hidden shrink-0 lg:inline-flex`}
        >
          Order on WhatsApp
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="brandora-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#123D32]/15 text-[#123D32] transition-colors hover:bg-[#D6B779]/20 active:bg-[#D6B779]/30 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          id="brandora-mobile-menu"
          className="absolute left-0 top-full z-50 w-full border-t border-[#D6B779]/40 bg-[#FAF8F2] px-4 pb-5 pt-3 shadow-lg lg:hidden"
        >
          <div className="mx-auto w-full max-w-md">

            <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#123D32]/45">
              Navigation
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#123D32]/10 bg-white/60 px-3">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={closeMenu}
                  className="flex min-h-[48px] items-center justify-between border-b border-[#123D32]/10 px-2 text-sm font-semibold text-[#123D32]/70 transition-colors hover:text-[#123D32] last:border-b-0"
                >
                  {link.name}
                  <ArrowUpRight size={16} className="text-[#B89A5A]" />
                </a>
              ))}
            </div>

            {/* Mobile WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${whatsappButton} mt-4 min-h-[48px] w-full`}
            >
              Order on WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <p className="mt-3 text-center text-[10px] tracking-[0.18em] text-[#123D32]/45">
              YOUR BRAND. YOUR BOTTLE.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
