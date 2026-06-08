import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | A Right Movers – Roswell, GA",
  description:
    "Learn about A Right Movers (JBM Group). Family-owned moving company based in Roswell, GA serving Atlanta and the Southeast. Licensed, insured, and committed to excellence.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-brand text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-steel-blue font-semibold text-sm uppercase tracking-wider mb-3">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            About A Right Movers
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A professional moving company built on trust, reliability, and a
            commitment to doing things the right way — every time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-black text-dark-navy mb-6">
            Moving Done Right
          </h2>
          <div className="space-y-4 text-dark-navy leading-relaxed">
            <p>
              A Right Movers is a division of JBM Group, based in Roswell,
              Georgia. We started with a simple mission: make moving less
              stressful, more affordable, and always reliable.
            </p>
            <p>
              Moving is one of life&apos;s most stressful events. We believe it
              doesn&apos;t have to be. Our team is trained to handle your
              belongings with the same care we&apos;d give our own — because we
              know every box, every piece of furniture, and every keepsake has a
              story behind it.
            </p>
            <p>
              Whether you&apos;re moving across Atlanta or across the Southeast,
              we bring the same level of professionalism, communication, and
              care. No hidden fees, no surprises, no shortcuts.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cool-gray">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-black text-dark-navy mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Trust & Transparency",
                desc: "Honest pricing with no hidden fees. We give you a clear quote upfront and stick to it. What we say is what you pay.",
              },
              {
                icon: "💪",
                title: "Reliability",
                desc: "We show up on time, every time. Our on-time guarantee means you can plan your move with confidence.",
              },
              {
                icon: "❤️",
                title: "Care & Respect",
                desc: "Your belongings matter. Our movers are trained to treat your home and possessions with genuine care and respect.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-dark-navy mb-2">
                  {v.title}
                </h3>
                <p className="text-silver text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-dark-navy mb-6">
                Company Details
              </h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-navy font-bold w-32 shrink-0">Legal Name</span>
                  <span className="text-dark-navy">JBM Group dba A Right Movers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-navy font-bold w-32 shrink-0">Address</span>
                  <span className="text-dark-navy">
                    10800 Ste 208-640 Alpharetta Hwy
                    <br />
                    Roswell, GA 30076
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-navy font-bold w-32 shrink-0">Phone</span>
                  <a href="tel:7708640955" className="text-royal-blue font-bold">
                    (770) 864-0955
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-navy font-bold w-32 shrink-0">Hours</span>
                  <span className="text-dark-navy">Mon–Sat, 7:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-navy font-bold w-32 shrink-0">Service Area</span>
                  <span className="text-dark-navy">Atlanta Metro &amp; Southeast US</span>
                </div>
              </div>
            </div>
            <div className="bg-ice-blue rounded-lg p-8">
              <h3 className="text-xl font-bold text-dark-navy mb-4">
                Our Guarantees
              </h3>
              <ul className="space-y-3">
                {[
                  "Licensed & fully insured",
                  "On-time arrival guarantee",
                  "No hidden fees — ever",
                  "Careful handling of all items",
                  "Satisfaction guaranteed",
                  "Free, no-obligation quotes",
                ].map((g) => (
                  <li key={g} className="flex items-center gap-2 text-dark-navy text-sm">
                    <svg className="w-5 h-5 text-success shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-brand text-white section-padding">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join hundreds of happy customers who chose A Right Movers for their
            move.
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
