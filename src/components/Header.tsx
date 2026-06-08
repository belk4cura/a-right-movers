"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark-navy text-white text-sm py-2 px-4">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <span className="hidden md:inline">
            Serving Atlanta, Roswell, Alpharetta &amp; the Southeast
          </span>
          <div className="flex items-center gap-4 mx-auto md:mx-0">
            <a
              href="tel:7708640955"
              className="flex items-center gap-1 font-bold hover:text-steel-blue transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (770) 864-0955
            </a>
            <span className="hidden sm:inline text-silver">|</span>
            <span className="hidden sm:inline">Mon–Sat 7AM–8PM</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white shadow-[0_1px_3px_rgba(15,35,65,0.08)]">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="A Right Movers"
              width={160}
              height={50}
              className="h-[50px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-dark-navy font-semibold hover:text-royal-blue transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-dark-navy font-semibold hover:text-royal-blue transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-dark-navy font-semibold hover:text-royal-blue transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-dark-navy font-semibold hover:text-royal-blue transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:7708640955"
              className="text-navy font-bold text-lg hover:text-royal-blue transition-colors"
            >
              (770) 864-0955
            </a>
            <Link
              href="/#quote"
              className="btn-primary px-6 py-3 text-sm inline-block"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-dark-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-light-gray px-4 pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              <Link
                href="/"
                className="py-3 px-2 text-dark-navy font-semibold hover:bg-cool-gray rounded"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="py-3 px-2 text-dark-navy font-semibold hover:bg-cool-gray rounded"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="py-3 px-2 text-dark-navy font-semibold hover:bg-cool-gray rounded"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="py-3 px-2 text-dark-navy font-semibold hover:bg-cool-gray rounded"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:7708640955"
                className="btn-secondary py-3 text-center block text-lg"
              >
                📞 (770) 864-0955
              </a>
              <Link
                href="/#quote"
                className="btn-primary py-3 text-center block"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
