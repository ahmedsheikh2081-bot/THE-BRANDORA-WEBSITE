
import React from "react";
import {
  Coffee,
  Briefcase,
  Calendar,
  Dumbbell,
  Gamepad2,
  ArrowUpRight,
} from "lucide-react";

import cafeImg from "../assets/cafe bottel.jpg";
import corporateImg from "../assets/coprate meet .jpg";
import eventsImg from "../assets/event bottel .jpg";
import gamingImg from "../assets/gaming zone.jpg";
import gymImg from "../assets/gym bottel.jpg";

const whatsappLink = "https://wa.me/923099860405";

const services = [
  {
    id: 1,
    title: "Cafes & Restaurants",
    description: "Enhance your dining experience with branded bottles.",
    icon: Coffee,
    image: cafeImg,
  },
  {
    id: 2,
    title: "Corporate Meetings",
    description: "Professional branding for your business and team.",
    icon: Briefcase,
    image: corporateImg,
  },
  {
    id: 3,
    title: "Events & Celebrations",
    description:
      "Make your special occasions memorable with custom labels.",
    icon: Calendar,
    image: eventsImg,
  },
  {
    id: 4,
    title: "Gyms & Fitness Centers",
    description: "Keep your members refreshed with your brand.",
    icon: Dumbbell,
    image: gymImg,
  },
  {
    id: 5,
    title: "Gaming Zones",
    description:
      "Custom bottles for gaming lounges and eSports events.",
    icon: Gamepad2,
    image: gamingImg,
  },
];

export default function Services() {
  const handleEnquiry = (title) => {
    const message = `Hi, I want to order custom branded water bottles.

I'm interested in: ${title}

Please share your details and pricing.`;

    const url = `${whatsappLink}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main
      id="services"
      className="scroll-mt-24 min-h-screen bg-[#F6F4EB] px-4 py-12 font-sans text-[#123D32] antialiased sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#718075] sm:text-xs">
            OUR SERVICES
          </p>

          <h1 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em] text-[#123D32] sm:text-4xl lg:text-5xl">
            Perfect for Every Business
          </h1>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {services.map(({ id, title, description, icon: Icon, image }) => (
            <article
              key={id}
              className="group relative flex flex-col overflow-hidden rounded-[1.25rem] border border-[#E7E3D4] bg-[#F9F7EF] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:bg-white hover:shadow-lg hover:shadow-[#123D32]/5"
            >
              {/* Service Image */}
              <div className="relative h-[240px] w-full overflow-hidden bg-[#EFECE4] sm:h-[220px]">
                <img
                  src={image}
                  alt={`${title} custom branded water bottles`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Icon Badge */}
              <div className="absolute left-5 top-[210px] z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#E7E3D4] bg-[#F2EFE3] text-[#16362C] shadow-md transition-colors duration-300 group-hover:bg-[#16362C] group-hover:text-white sm:top-[190px]">
                <Icon size={20} strokeWidth={1.8} />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-5 pt-8">
                <div>
                  <h3 className="text-base font-bold text-[#16362C] sm:text-[17px]">
                    {title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#52665A] sm:text-[13px]">
                    {description}
                  </p>
                </div>

                {/* WhatsApp Enquiry */}
                <button
                  type="button"
                  onClick={() => handleEnquiry(title)}
                  className="mt-5 inline-flex w-full cursor-pointer items-center justify-between border-t border-[#E7E3D4] pt-3.5 text-left text-xs font-bold tracking-wide text-[#16362C] transition-colors hover:text-[#66816C]"
                  aria-label={`Enquire on WhatsApp about ${title}`}
                >
                  Enquire Now
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
