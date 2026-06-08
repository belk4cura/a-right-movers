import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us | A Right Movers – (770) 864-0955",
  description:
    "Contact A Right Movers for a free moving quote. Call (770) 864-0955 or fill out our form. Located in Roswell, GA serving Atlanta and the Southeast.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-brand text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-steel-blue font-semibold text-sm uppercase tracking-wider mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have questions? Need a quote? We&apos;re here to help. Reach out by
            phone, email, or fill out the form below.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="section-padding bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-dark-navy mb-8">
                Reach Us Directly
              </h2>

              {/* Phone — primary CTA */}
              <div className="bg-ice-blue rounded-lg p-6 mb-6">
                <p className="text-sm font-semibold text-royal-blue mb-1">
                  Fastest Way to Reach Us
                </p>
                <a
                  href="tel:7708640955"
                  className="text-3xl font-black text-dark-navy hover:text-royal-blue transition-colors"
                >
                  (770) 864-0955
                </a>
                <p className="text-silver text-sm mt-2">
                  Mon–Sat, 7:00 AM – 8:00 PM
                </p>
              </div>

              {/* Other contact methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-dark-navy">Email</p>
                    <a
                      href="mailto:jameshbelk@gmail.com"
                      className="text-royal-blue hover:underline"
                    >
                      jameshbelk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-dark-navy">Office Address</p>
                    <p className="text-silver text-sm">
                      JBM Group dba A Right Movers
                      <br />
                      10800 Ste 208-640 Alpharetta Hwy
                      <br />
                      Roswell, GA 30076
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-dark-navy">Business Hours</p>
                    <div className="text-silver text-sm space-y-1">
                      <p>Monday – Saturday: 7:00 AM – 8:00 PM</p>
                      <p>Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service area */}
              <div className="mt-8 pt-8 border-t border-light-gray">
                <h3 className="font-bold text-dark-navy mb-3">
                  Service Areas
                </h3>
                <p className="text-silver text-sm leading-relaxed">
                  We serve the entire Atlanta metropolitan area including
                  Roswell, Alpharetta, Marietta, Sandy Springs, Dunwoody, Johns
                  Creek, Kennesaw, Decatur, Buckhead, Smyrna, and Woodstock. We
                  also offer long-distance moving throughout the Southeast US.
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
