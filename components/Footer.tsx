"use client";

import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const category = categoryData as CategoryData;
const navLinks = category.common.navigation;
const site = category.common.site;
const footer = category.footer;


const goldCircle =
  "grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-gradient-to-b from-[#ffd95e] to-[#d99b12] text-[#4a0214] shadow-[0_2px_8px_rgba(0,0,0,0.3)]";

function Lotus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 42" className={className} fill="none">
      <path
        d="M30 36C17 27 17 15 30 3C43 15 43 27 30 36Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M30 36C20 24 23 14 30 3C37 14 40 24 30 36Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M30 36C13 37 5 26 11 20C18 27 24 32 30 36Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M30 36C47 37 55 26 49 20C42 27 36 32 30 36Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M17 38C22 33 26 31 30 36C34 31 38 33 43 38"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

function SmallLotus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 42" className={className} fill="currentColor">
      <path d="M30 36C17 27 17 15 30 3C43 15 43 27 30 36Z" />
      <path
        d="M30 36C13 37 5 26 11 20C18 27 24 32 30 36Z"
        opacity="0.9"
      />
      <path
        d="M30 36C47 37 55 26 49 20C42 27 36 32 30 36Z"
        opacity="0.9"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#470212] text-white">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center px-5 pb-6 pt-6 text-center sm:px-9">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-center">
          <Lotus className="h-[54px] w-[76px] text-[#f5c542] sm:h-[66px] sm:w-[92px]" />
          <span className="mt-1 font-serif text-[clamp(44px,6vw,80px)] font-medium leading-none tracking-[-0.02em] text-white">
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
          <SmallLotus className="h-6 w-8 shrink-0 text-[#f5c542]" />
          <span className="h-[2px] flex-1 bg-gradient-to-r from-[#e0a21f] to-[#f5c542]" />
        </div>

        {/* Nav */}
        <nav
          aria-label="Footer"
          className="mt-6 flex flex-wrap items-center justify-center gap-y-3"
        >
          {navLinks.map((link, index) => (
            <div key={link.label} className="flex items-center">
              <a
                href={link.href}
                className="px-4 font-serif text-[16px] text-white transition hover:text-[#f5c542] sm:px-8 sm:text-[21px]"
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
        <div className="mt-7 flex flex-col items-center gap-5 sm:flex-row sm:gap-0">
          <div className="flex items-center gap-4 sm:px-10">
            <span className={goldCircle}>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            </span>
            <span className="text-left font-serif text-[16px] leading-[1.35] sm:text-[19px]">
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </span>
          </div>

          <span className="hidden h-12 w-[2px] bg-[#f5c542] sm:block" />

          <a
            href={site.phoneHref}
            className="flex items-center gap-4 sm:px-10"
          >
            <span className={goldCircle}>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M6.6 3h3l1.6 4.4-2 1.3a11 11 0 0 0 5.1 5.1l1.3-2L20 13.400v3A3.600 3.600 0 0 1 16.400 20 15.400 15.400 0 0 1 4 7.600 3.600 3.600 0 0 1 6.600 3Z" />
              </svg>
            </span>
            <span className="font-serif text-[16px] sm:text-[20px]">
              {site.phone}
            </span>
          </a>

          <span className="hidden h-12 w-[2px] bg-[#f5c542] sm:block" />

          <a href={site.emailHref} className="flex items-center gap-4 sm:px-10">
            <span className={goldCircle}>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.500v.3l-9 6.200-9-6.200v-.3ZM3 9.200V17.500A1.500 1.500 0 0 0 4.500 19h15a1.500 1.500 0 0 0 1.500-1.500V9.200l-8.400 5.800a1 1 0 0 1-1.200 0L3 9.200Z" />
              </svg>
            </span>
            <span className="font-serif text-[16px] sm:text-[20px]">
              {site.email}
            </span>
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
