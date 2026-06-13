import Link from "next/link";

export default function Footer() {
  return (
    <footer className="gradient-brand text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">A Right Movers</h3>
            <p className="text-white text-sm mb-4 leading-relaxed">
              JBM Group dba A Right Movers
              <br />
              10800 Ste 208-640 Alpharetta Hwy
              <br />
              Roswell, GA 30076
            </p>
            <a
              href="tel:7708640955"
              className="text-white font-bold text-lg hover:text-steel-blue transition-colors"
            >
              (770) 864-0955
            </a>
            <p className="text-white text-sm mt-2">Mon–Sat 7AM–8PM</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-white hover:text-steel-blue transition-colors">
                  Local Moving
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-steel-blue transition-colors">
                  Long-Distance Moving
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-steel-blue transition-colors">
                  Commercial Moving
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-steel-blue transition-colors">
                  Packing Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-steel-blue transition-colors">
                  Storage Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-steel-blue transition-colors">
                  Specialty Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white hover:text-steel-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-steel-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#quote" className="text-white hover:text-steel-blue transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold mb-4">Ready to Move?</h4>
            <p className="text-white text-sm mb-4">
              Get your free, no-obligation moving quote in under 2 minutes.
            </p>
            <Link
              href="/#quote"
              className="inline-block bg-white text-navy font-bold px-6 py-3 rounded hover:bg-ice-blue transition-colors text-sm"
            >
              Get a Free Quote
            </Link>
            <div className="mt-6 flex items-center gap-2 text-white text-sm">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Licensed &amp; Insured
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
          <p>© {new Date().getFullYear()} JBM Group dba A Right Movers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-steel-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-steel-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
