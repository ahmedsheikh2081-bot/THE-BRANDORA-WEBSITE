
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
  "https://wa.me/923433787019?text=Hi%2C%20I%20want%20to%20order%20custom%20branded%20water%20bottles.";

const features = [
  { icon: ShieldCheck, title: "Premium Quality", sub: "Bottles & Pure Water" },
  { icon: Tags, title: "Custom Labels", sub: "High-Res Branding" },
  { icon: Truck, title: "Fast & Reliable", sub: "Doorstep Delivery" },
  { icon: Users, title: "Bulk Orders", sub: "Event & Business Rates" },
];

export default function Home() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="w-full min-w-0 bg-[#F6F4EB] px-3 py-4 text-[#123D32] antialiased sm:px-6 sm:py-6 lg:px-10 lg:py-8"
    >
      <div className="mx-auto w-full min-w-0 max-w-[1400px]">
        <div className="relative w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-[#E1DDCF] bg-[#F6F3E9] p-4 shadow-2xl shadow-[#123D32]/[0.05] sm:rounded-[2.25rem] sm:p-10 lg:p-14">

          <div className="grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">

            {/* Left Content */}
            <div className="flex min-w-0 flex-col justify-center lg:col-span-6 xl:col-span-7">
              <div className="mb-6 inline-flex w-fit max-w-full items-center gap-2.5 rounded-full border border-[#123D32]/15 bg-white/80 px-3 py-2 shadow-sm backdrop-blur-md sm:px-4">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#47765D]" />
                <span className="break-words text-[9px] font-bold uppercase tracking-[0.15em] text-[#123D32] sm:text-xs sm:tracking-[0.25em]">
                  Custom Bottle Branding Agency
                </span>
              </div>

              <h1
                id="hero-heading"
                className="break-words font-serif text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#123D32] sm:text-5xl md:text-6xl xl:text-7xl"
              >
                Custom Branded
                <br />
                Water Bottles
                <br />
                <span className="font-normal italic text-[#38634e]">
                  Your Brand. Your Bottle.
                </span>
              </h1>

              <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-[#4F6256] sm:mt-6 sm:text-base sm:leading-8">
                THE BRANDORA provides custom branded water bottles
                in Pakistan for cafes, restaurants, hotels, corporate
                offices, gaming zones and special events. Showcase
                your business identity with personalized bottle labels
                designed to make your brand stand out.
              </p>

              <div className="mt-7">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Order custom branded water bottles from THE BRANDORA on WhatsApp"
                  className="group inline-flex min-h-[54px] w-full items-center justify-between gap-3 rounded-full bg-[#D6B779] px-4 py-3.5 text-xs font-semibold text-[#123D32] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8D8B2] hover:shadow-xl sm:w-auto sm:min-w-[250px] sm:px-7 sm:text-sm"
                >
                  <span className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#123D32]/10">
                      <MessageCircle size={18} />
                    </span>
                    <span>Order on WhatsApp</span>
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex min-w-0 items-center justify-center lg:col-span-6 xl:col-span-5">
              <div className="group relative w-full min-w-0 max-w-[530px] overflow-hidden rounded-[1.7rem] border border-[#123D32]/10 bg-gradient-to-br from-white/80 via-[#F3EFE0]/60 to-[#E6DFC9]/50 p-2.5 shadow-2xl sm:rounded-[2.2rem] sm:p-4">
                <div className="relative overflow-hidden rounded-[1.2rem] bg-stone-200 sm:rounded-[1.6rem]">
                  <img
                    src={heroBgImage}
                    alt="Custom branded water bottles with personalized business logo and labels by THE BRANDORA"
                    fetchPriority="high"
                    decoding="async"
                    className="block h-auto max-h-[500px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:max-h-[580px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Features */}
          <div className="mt-10 border-t border-[#123D32]/10 pt-7 sm:mt-16 sm:pt-8">
            <div className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {features.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex min-w-0 items-center gap-4 rounded-2xl border border-[#123D32]/[0.08] bg-white/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123D32]/[0.07] text-[#123D32]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-xs font-bold leading-snug text-[#123D32] sm:text-sm">
                      {title}
                    </h2>
                    <p className="mt-0.5 break-words text-[11px] font-medium text-[#53665A]">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
