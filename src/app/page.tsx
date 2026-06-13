import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

const services = [
  {
    icon: "🏠",
    title: "Local Moving",
    desc: "Same-city moves in the Atlanta metro area. Our team handles everything from packing to unloading so you can focus on settling in.",
  },
  {
    icon: "🚛",
    title: "Long-Distance Moving",
    desc: "Southeast and nationwide moves with careful planning, transparent pricing, and real-time updates every step of the way.",
  },
  {
    icon: "🏢",
    title: "Commercial Moving",
    desc: "Office relocations with minimal downtime. We work around your schedule to get your business back up and running fast.",
  },
  {
    icon: "📦",
    title: "Packing Services",
    desc: "Professional packing with quality materials. From fragile items to heavy furniture — we pack it right so it arrives right.",
  },
  {
    icon: "🏗️",
    title: "Storage Solutions",
    desc: "Secure short-term and long-term storage options. Climate-controlled facilities to keep your belongings safe.",
  },
  {
    icon: "🎹",
    title: "Specialty Items",
    desc: "Pianos, antiques, artwork, and oversized items. Specialized equipment and trained movers for your most valuable pieces.",
  },
];

const steps = [
  {
    num: "1",
    title: "Get a Quote",
    desc: "Fill out our quick form or call us. We'll give you a free, no-obligation estimate based on your specific move.",
  },
  {
    num: "2",
    title: "Book Your Date",
    desc: "Choose your preferred moving date. We'll confirm your booking and send you a moving checklist to prepare.",
  },
  {
    num: "3",
    title: "We Move You",
    desc: "Our professional crew arrives on time, handles everything with care, and doesn't leave until you're satisfied.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Roswell, GA",
    stars: 5,
    text: "A Right Movers made our move completely stress-free. The crew was on time, professional, and careful with all our belongings. Highly recommend!",
  },
  {
    name: "David & Lisa T.",
    location: "Atlanta, GA",
    stars: 5,
    text: "We've moved 4 times in the last 10 years, and this was by far the best experience. Fair pricing, no hidden fees, and they even helped us rearrange furniture.",
  },
  {
    name: "Marcus J.",
    location: "Alpharetta, GA",
    stars: 5,
    text: "Moved our entire office in one weekend. Zero downtime on Monday morning. These guys know what they're doing. Will use again for sure.",
  },
];

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="gradient-brand text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: headline */}
            <div className="pt-4">
              <p className="text-steel-blue font-semibold text-sm uppercase tracking-wider mb-3">
                Atlanta&apos;s Trusted Moving Company
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-3">
                We Can Move
                <br />
                <span className="text-white">Mountains.</span>
              </h1>
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                — Mark 11:23
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
                Professional, reliable moving services in Atlanta, Roswell,
                Alpharetta &amp; throughout the Southeast. Licensed, insured, and
                committed to making your move stress-free.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-semibold">Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-semibold">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-semibold">On-Time Guarantee</span>
                </div>
              </div>

              {/* Phone CTA for mobile */}
              <a
                href="tel:7708640955"
                className="lg:hidden inline-flex items-center gap-2 bg-white text-navy font-bold px-6 py-3 rounded hover:bg-ice-blue transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call (770) 864-0955
              </a>
            </div>

            {/* Right: Quote form */}
            <div id="quote">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-royal-blue font-semibold text-sm uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-dark-navy">
              Our Moving Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="card-hover bg-white border border-light-gray rounded-lg p-8 shadow-[0_4px_12px_rgba(15,35,65,0.06)]"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-dark-navy mb-2">{s.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="btn-secondary inline-block px-8 py-3"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="section-padding bg-cool-gray">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-royal-blue font-semibold text-sm uppercase tracking-wider mb-2">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-dark-navy">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-navy text-white rounded-full flex items-center justify-center text-2xl font-black">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-dark-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-silver text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-royal-blue font-semibold text-sm uppercase tracking-wider mb-2">
              Customer Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-dark-navy">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cool-gray rounded-lg p-8"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-dark-navy text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-bold text-dark-navy text-sm">{t.name}</p>
                <p className="text-silver text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRUST SIGNALS ========== */}
      <section className="section-padding bg-ice-blue">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-dark-navy">
              Why Choose A Right Movers?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🛡️", label: "Licensed & Insured", sub: "Full coverage protection" },
              { icon: "⏰", label: "On-Time Guarantee", sub: "We arrive when we say" },
              { icon: "💰", label: "No Hidden Fees", sub: "Transparent pricing" },
              { icon: "⭐", label: "5-Star Rated", sub: "Trusted by hundreds" },
            ].map((b) => (
              <div
                key={b.label}
                className="bg-white rounded-lg p-6 text-center border border-light-gray"
              >
                <div className="text-3xl mb-2">{b.icon}</div>
                <p className="font-bold text-dark-navy text-sm">{b.label}</p>
                <p className="text-silver text-xs mt-1">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICE AREA ========== */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-royal-blue font-semibold text-sm uppercase tracking-wider mb-2">
            Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-dark-navy mb-6">
            Areas We Serve
          </h2>
          <p className="text-silver max-w-2xl mx-auto mb-8">
            Based in Roswell, GA, we serve the entire Atlanta metro area and
            provide long-distance moves throughout the Southeast United States
            and beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Atlanta",
              "Roswell",
              "Alpharetta",
              "Marietta",
              "Sandy Springs",
              "Dunwoody",
              "Johns Creek",
              "Kennesaw",
              "Decatur",
              "Buckhead",
              "Smyrna",
              "Woodstock",
            ].map((city) => (
              <span
                key={city}
                className="bg-cool-gray text-dark-navy px-4 py-2 rounded-full text-sm font-semibold"
              >
                {city}
              </span>
            ))}
          </div>
          <p className="text-silver text-sm">
            Don&apos;t see your area? Call us — we likely serve your location too!
          </p>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="gradient-brand text-white section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get your free, no-obligation quote in under 2 minutes. Or call us
            now for immediate assistance.
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
