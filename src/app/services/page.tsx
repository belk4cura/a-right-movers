import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moving Services | A Right Movers – Atlanta & Southeast",
  description:
    "Full-service moving solutions: local, long-distance, commercial, packing, storage, and specialty item moves. Serving Atlanta, Roswell, Alpharetta & the Southeast US.",
};

const services = [
  {
    icon: "🏠",
    title: "Local Moving",
    desc: "Whether you're moving across town or just a few blocks away, our local moving service covers the entire Atlanta metro area.",
    features: [
      "Same-day availability for small moves",
      "Apartment, condo, and house moves",
      "Furniture disassembly & reassembly",
      "Floor and doorway protection",
      "Transparent hourly pricing",
    ],
  },
  {
    icon: "🚛",
    title: "Long-Distance Moving",
    desc: "Moving across state lines or across the Southeast? We handle every detail of your long-distance relocation with care.",
    features: [
      "Interstate moves throughout the Southeast",
      "Dedicated truck — no shared loads",
      "GPS tracking and real-time updates",
      "Full-value protection options",
      "Guaranteed delivery dates",
    ],
  },
  {
    icon: "🏢",
    title: "Commercial & Office Moving",
    desc: "Minimize downtime with our efficient commercial moving services. We work nights and weekends to keep your business running.",
    features: [
      "Office furniture & cubicle moves",
      "IT equipment handling",
      "After-hours and weekend scheduling",
      "Employee relocation coordination",
      "Secure document transport",
    ],
  },
  {
    icon: "📦",
    title: "Packing Services",
    desc: "Don't want to deal with packing? Our crew brings professional-grade materials and packs everything carefully.",
    features: [
      "Full-service packing & unpacking",
      "Custom crating for fragile items",
      "Quality boxes and packing materials",
      "Wardrobe boxes for clothing",
      "Labeling and inventory system",
    ],
  },
  {
    icon: "🏗️",
    title: "Storage Solutions",
    desc: "Need to store your items before, during, or after your move? We offer secure, climate-controlled storage facilities.",
    features: [
      "Short-term and long-term options",
      "Climate-controlled units",
      "24/7 security monitoring",
      "Easy access during business hours",
      "Competitive monthly rates",
    ],
  },
  {
    icon: "🎹",
    title: "Specialty Item Moving",
    desc: "Some items need extra care. Our specialty movers are trained and equipped to handle your most valuable possessions.",
    features: [
      "Piano and organ moving",
      "Antique and art transport",
      "Pool table disassembly & setup",
      "Gun safes and heavy items",
      "Custom protective wrapping",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-brand text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-steel-blue font-semibold text-sm uppercase tracking-wider mb-3">
            Full-Service Moving
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Our Moving Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From studio apartments to corporate offices, we have the experience,
            equipment, and crew to handle any move — big or small.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto space-y-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h2 className="text-2xl md:text-3xl font-black text-dark-navy mb-3">
                  {s.title}
                </h2>
                <p className="text-silver leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-dark-navy">
                      <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-cool-gray rounded-lg p-8 md:p-12 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="text-6xl mb-4">{s.icon}</div>
                  <Link
                    href="/#quote"
                    className="btn-primary inline-block px-6 py-3 text-sm"
                  >
                    Get a Quote for {s.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-brand text-white section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Tell us about your move and we&apos;ll recommend the right services
            for your budget and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="bg-white text-navy font-bold px-8 py-4 rounded hover:bg-ice-blue transition-colors text-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:7708640955"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-colors text-lg"
            >
              📞 (770) 864-0955
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
