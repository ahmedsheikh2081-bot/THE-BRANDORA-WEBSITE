
import { Droplets, Sparkles, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Droplets,
    title: "Custom Branded Water Bottles",
    description:
      "Promote your business with personalized water bottles featuring your own brand logo and custom bottle labels.",
  },
  {
    icon: Sparkles,
    title: "Premium Brand Presentation",
    description:
      "Create a professional impression with attractive, high-quality custom labels that make your brand more recognizable.",
  },
  {
    icon: ShieldCheck,
    title: "Branding for Every Occasion",
    description:
      "Our custom bottle branding solutions are ideal for cafes, restaurants, hotels, corporate offices, gyms, gaming zones and events.",
  },
];

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 px-5 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#F6F4EB] px-5 py-10 text-[#123D32] sm:px-10 sm:py-12">

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-block rounded-full border border-[#D6B779]/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#66816C]">
            About THE BRANDORA
          </span>

          {/* SEO Heading */}
          <h2
            id="about-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl"
          >
            Custom Bottle Branding
            <span className="block text-[#66816C]">
              That Builds Your Identity.
            </span>
          </h2>

          {/* SEO Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#53665A] sm:text-base">
            THE BRANDORA is a custom water bottle branding service
            helping businesses create a memorable brand identity.
            We provide personalized water bottle labels featuring
            your business logo, making everyday bottled water a
            professional branding opportunity for restaurants,
            cafes, hotels, corporate offices and special events
            across Pakistan.
          </p>
        </div>

        {/* Brand Values */}
        <div className="mt-9 grid gap-4 sm:grid-cols-3">

          {values.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-[#E7E5D9] bg-white/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123D32] text-[#D6B779] transition-transform duration-300 group-hover:scale-105">
                <Icon size={21} strokeWidth={1.8} />
              </div>

              <h3 className="mt-4 font-serif text-lg font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#53665A]">
                {description}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default About;
