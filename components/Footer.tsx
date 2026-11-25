"use client";

import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";
import LotusIcon from "@/components/LotusIcon";
import { Mail, MapPin, Phone } from "lucide-react";

const category = categoryData as CategoryData;
const navLinks = category.common.navigation;
const site = category.common.site;
const footer = category.footer;


const goldCircle =
  "grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-gradient-to-b from-[#ffd95e] to-[#d99b12] text-[#4a0214] shadow-[0_2px_8px_rgba(0,0,0,0.3)]  lg:border lg:border-[#ffe584]/70 lg:bg-gradient-to-br lg:from-[#ffe27a] lg:to-[#d99b12] lg:shadow-[0_6px_18px_rgba(217,155,18,0.28)]";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#470212] text-white">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center px-5 pb-6 pt-6 text-center sm:px-9">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-center">
          <LotusIcon className="h-[42px] w-[60px] text-[#f5c542] sm:h-[54px] sm:w-[76px]" />
          <span className="mt-1 font-serif text-[clamp(34px,4.5vw,62px)] font-medium leading-none tracking-[-0.02em] text-white">
            {site.name}
          </span>
        </a>

        <div className="mt-3 flex items-center gap-3 sm:gap-4">
          <span className="h-[2px] w-8 bg-[#f5c542] sm:w-14" />
          <span className="text-[13px] font-bold tracking-[3px] text-[#f5d04a] sm:text-[22px] sm:tracking-[4px]">
            {footer.subtitle.toUpperCase()}
          </span>
          <span className="h-[2px] w-8 bg-[#f5c542] sm:w-14" />
        </div>

        {/* Description */}
        <p className="mt-4 max-w-[900px] font-serif text-[15px] leading-[1.45] text-white sm:text-[22px]">
          {footer.description}
        </p>

        {/* Lotus divider */}
        <div className="mt-5 flex w-full max-w-[350px] items-center gap-3">
          <span className="h-[2px] flex-1 bg-gradient-to-r from-[#f5c542] to-[#e0a21f]" />
          <LotusIcon className="h-6 w-8 shrink-0 text-[#f5c542]" />
          <span className="h-[2px] flex-1 bg-gradient-to-r from-[#e0a21f] to-[#f5c542]" />
        </div>


            {/* Nav */}
            <nav
              aria-label="Footer"
              className="mt-6 flex w-full flex-nowrap items-center justify-between gap-1 overflow-x-auto whitespace-nowrap max-sm:grid max-sm:grid-cols-4 max-sm:gap-x-2 max-sm:gap-y-3 max-sm:overflow-visible"
            >
              {navLinks.map((link, index) => (
                <div
                  key={link.label}
                  className="flex items-center max-sm:justify-center"
                >
                  <a
                    href={link.href}
                    className="px-1.5 font-serif text-[12px] text-white transition hover:text-[#f5c542] sm:px-3 sm:text-[18px] max-sm:whitespace-nowrap"
                  >
                    {link.label}
                  </a>

                  {index < navLinks.length - 1 && (
                    <span className="hidden h-6 w-[2px] bg-[#f5c542] sm:block" />
                  )}
                </div>
              ))}
            </nav>

        {/* Contact row */}
        <div className="mt-7 flex w-full max-w-[680px] flex-col items-stretch gap-5 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-0">
          <div className="flex items-start gap-4 sm:px-6">
            <span className={goldCircle}>
              <svg viewBox="0 0 24 24" className="h-6 w-6 lg:hidden" fill="currentColor" aria-hidden="true">
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              <MapPin className="hidden h-4 w-4 lg:block" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span className="text-left font-serif text-[16px] leading-[1.35] sm:text-[19px]">
              {site.addressLine1 && (
                <>
                  {site.addressLine1}
                  <br />
                </>
              )}
              {site.addressLine2}
            </span>
          </div>

          <span className="hidden h-12 w-[2px] bg-[#f5c542] sm:block" />

          <a
            href={site.phoneHref}
            className="flex items-center gap-4 sm:px-6"
          >
            <span className={goldCircle}>
              <svg viewBox="0 0 24 24" className="h-6 w-6 lg:hidden" fill="currentColor" aria-hidden="true">
                <path d="M6.6 3h3l1.6 4.4-2 1.3a11 11 0 0 0 5.1 5.1l1.3-2L20 13.400v3A3.600 3.600 0 0 1 16.400 20 15.400 15.400 0 0 1 4 7.600 3.600 3.600 0 0 1 6.600 3Z" />
              </svg>
              <Phone className="hidden h-4 w-4 lg:block" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span className="font-serif text-[16px] sm:text-[20px]">
              {site.phone}
            </span>
          </a>

          <span className="hidden h-12 w-[2px] bg-[#f5c542] sm:block" />

          <a href={site.emailHref} className="flex items-center gap-4 sm:px-6">
            <span className={goldCircle}>
              <svg viewBox="0 0 24 24" className="h-6 w-6 lg:hidden" fill="currentColor" aria-hidden="true">
                <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.500v.3l-9 6.200-9-6.200v-.3ZM3 9.200V17.500A1.500 1.500 0 0 0 4.500 19h15a1.500 1.500 0 0 0 1.500-1.500V9.200l-8.400 5.800a1 1 0 0 1-1.200 0L3 9.200Z" />
              </svg>
              <Mail className="hidden h-4 w-4 lg:block" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span className="font-serif text-[16px] sm:text-[20px]">
              {site.email}
            </span>
          </a>
        </div>

              <div
          className="mt-6 flex items-center gap-4"
          role="group"
          aria-label="Social media"
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-[#E4405F] active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-[#1877F2] active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8h3.4Z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="text-white transition-all duration-300 hover:scale-110 hover:text-[#FF0000] active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.5v-7l6 3.5-6 3.5Z" />
            </svg>
          </a>
        </div>

        {/* Bottom line + copyright */}
        <div className="mt-6 h-[3px] w-full max-w-[1230px] rounded-full bg-gradient-to-r from-transparent via-[#f5c542] to-transparent" />

        <p className="mt-3 font-serif text-[14px] text-white sm:text-[21px]">
          &copy; 2026 {site.name}. {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
