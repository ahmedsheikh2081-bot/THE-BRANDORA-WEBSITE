
import React from "react";
import { Droplets, Sparkles, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Droplets,
    title: "Custom Branding",
    description:
      "Showcase your business with custom-branded water bottles.",
  },
  {
    icon: Sparkles,
    title: "Premium Presentation",
    description:
      "Clean, attractive labels that make your brand stand out.",
  },
  {
    icon: ShieldCheck,
    title: "Made for Your Business",
    description:
      "Ideal for cafes, offices, gyms, gaming zones, and events.",
  },
];

function About() {
  return (
    <main
      id="about"
      className="scroll-mt-24 px-5 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#F6F4EB] px-5 py-10 text-[#123D32] sm:px-10 sm:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-[#D6B779]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#66816C]">
            About THE BRANDORA
          </span>

          <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Your Brand.
            <span className="block text-[#66816C]">
              Your Bottle.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#53665A] sm:text-base">
            We help businesses turn everyday water bottles into a
            memorable part of their brand with customized labels
            and professional presentation.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#E7E5D9] bg-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123D32] text-[#D6B779] transition-transform duration-300 group-hover:scale-105">
                <Icon size={21} strokeWidth={1.8} />
              </div>

              <h2 className="mt-4 font-serif text-lg font-semibold">
                {title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#53665A]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;
