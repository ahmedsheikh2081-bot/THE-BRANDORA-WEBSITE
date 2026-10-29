
import {
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  Tags,
  Truck,
  Users,
} from "lucide-react";

import heroBgImage from "../assets/home page bg image.jpg";

const whatsappLink =
  "https://wa.me/923099860405?text=Hi%2C%20I%20want%20to%20order%20custom%20branded%20water%20bottles.";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    sub: "Bottles & Pure Water",
  },
  {
    icon: Tags,
    title: "Custom Labels",
    sub: "High-Res Branding",
  },
  {
    icon: Truck,
    title: "Fast & Reliable",
    sub: "Doorstep Delivery",
  },
  {
    icon: Users,
    title: "Bulk Orders",
    sub: "Event & Business Rates",
  },
];

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen bg-[#F6F4EB] px-3 py-4 text-[#123D32] antialiased sm:px-6 sm:py-6 lg:px-10 lg:py-8"
    >
      <section className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E1DDCF] bg-[#F6F3E9] p-6 shadow-2xl shadow-[#123D32]/[0.05] sm:rounded-[2.25rem] sm:p-10 lg:p-14">
          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
            {/* Left Content Column */}
            <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-7">
              {/* Premium Badge */}
              <div className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#123D32]/15 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#47765D]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#123D32] sm:text-xs">
                  Custom Bottle Branding Agency
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#123D32] sm:text-5xl md:text-6xl xl:text-7xl">
                Your Brand. <br />
                Your Bottle. <br />
                <span className="font-serif font-normal italic text-[#38634e]">
                  Your Identity.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-[520px] font-sans text-sm leading-relaxed text-[#4F6256] sm:text-base sm:leading-8">
                Elevate your corporate image with custom-labelled premium
                water bottles crafted for cafes, restaurants, luxury resorts,
                corporate events, and gaming zones.
              </p>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order custom branded bottles on WhatsApp"
                  className="group inline-flex min-h-[54px] w-full items-center justify-between gap-4 rounded-full bg-[#D6B779] px-7 py-3.5 text-sm font-semibold text-[#123D32] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8D8B2] hover:shadow-xl sm:w-auto sm:min-w-[250px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123D32]/10 transition-colors duration-300 group-hover:bg-[#123D32]/15">
                      <MessageCircle
                        size={18}
                        className="text-[#123D32]"
                      />
                    </div>
                    <span className="tracking-wide">
                      Order on WhatsApp
                    </span>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>

            {/* Right Product Image */}
            <div className="relative flex items-center justify-center lg:col-span-6 xl:col-span-5">
              <div className="group relative w-full max-w-[530px] overflow-hidden rounded-[2.2rem] border border-[#123D32]/10 bg-gradient-to-br from-white/80 via-[#F3EFE0]/60 to-[#E6DFC9]/50 p-3.5 shadow-2xl backdrop-blur-md sm:p-4">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-stone-200">
                  <img
                    src={heroBgImage}
                    alt="Brandora custom branded water bottles"
                    className="h-auto max-h-[500px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:max-h-[580px]"
                  />
                </div>

                {/* Decorative Accent */}
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#D6B779]/20 blur-2xl" />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 border-t border-[#123D32]/10 pt-8 sm:mt-16">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {features.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="group flex items-center gap-4 rounded-2xl border border-[#123D32]/[0.08] bg-white/70 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123D32]/[0.07] text-[#123D32] transition-colors duration-300 group-hover:bg-[#123D32] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-bold leading-snug text-[#123D32] sm:text-sm">
                      {title}
                    </span>
                    <span className="mt-0.5 text-[11px] font-medium text-[#53665A]">
                      {sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
