"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            משרד עורכי דין
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-accent transition-colors">
              בית
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              אודות
            </Link>
            <Link href="/practice-areas" className="hover:text-accent transition-colors">
              תחומי התמחות
            </Link>
            <Link href="/blog" className="hover:text-accent transition-colors">
              מאמרים
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              יצירת קשר
            </Link>
            <Link href="/booking" className="btn-primary">
              קבעו פגישה
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="תפריט"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link
              href="/"
              className="block hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              בית
            </Link>
            <Link
              href="/about"
              className="block hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              אודות
            </Link>
            <Link
              href="/practice-areas"
              className="block hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              תחומי התמחות
            </Link>
            <Link
              href="/blog"
              className="block hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              מאמרים
            </Link>
            <Link
              href="/contact"
              className="block hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              יצירת קשר
            </Link>
            <Link
              href="/booking"
              className="btn-primary inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              קבעו פגישה
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
