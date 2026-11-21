
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const data = categoryData as CategoryData;
const navLinks = data.common.navigation.filter((link) => link.href !== "#contact");

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveLink(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.01, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    const syncFromHash = () => setActiveLink(window.location.hash || "#home");
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  const handleNavigation = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#490014] via-[#75001F] to-[#490014]">
      <nav className="mx-auto flex min-h-[100px] w-full max-w-[1500px] items-center gap-5 ">

        {/* Original Transparent Logo */}
        <Link
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="flex shrink-0 items-center"
        >
          <Image
            src={data.common.site.logo}
            alt={`${data.common.site.name} - ${data.footer.subtitle}`}
            width={300}
            height={130}
            priority
            sizes="(max-width: 640px) 190px, (max-width: 1024px) 220px, 280px"
            className="h-auto w-[190px] object-contain sm:w-[220px] lg:w-[240px]"
          />
        </Link>

        {/* Vertical Divider */}
        <div className="hidden h-[42px] w-px shrink-0 bg-[#d6a14c]/50 lg:block" />

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-between lg:flex">

          {/* Navigation Links */}
          <div className="flex min-w-0 flex-1 items-center justify-evenly gap-4 xl:gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`relative whitespace-nowrap py-3 text-[15px] font-medium transition-colors duration-300 xl:text-[16px] ${
                  activeLink === item.href
                    ? "text-[#ffd36b]"
                    : "text-white hover:text-[#ffd36b]"
                }`}
              >
                {item.label}

                {activeLink === item.href && (
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#ffd36b]" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            href="#contact"
            onClick={() => handleNavigation("#contact")}
            className="ml-4 inline-flex h-[45px] shrink-0 items-center gap-3 rounded-xl bg-gradient-to-b from-[#fff0bd] to-[#e9bd68] px-5 text-[15px] font-bold text-[#4b0719] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg xl:px-6 xl:text-base"
          >
            <Phone size={20} fill="currentColor" />
            {data.common.site.contactButtonLabel}
          </Link>
        </div>

        {/* Mobile Contact + Menu */}
        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <Link
            href="#contact"
            onClick={() => handleNavigation("#contact")}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#fff0bd] to-[#e9bd68] px-3 py-2 text-sm font-bold text-[#4b0719]"
          >
            <Phone size={16} fill="currentColor" />
            {data.common.site.contactButtonLabel}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex size-10 items-center justify-center rounded-lg border border-[#d8ad50]/50 text-[#ffdc87]"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-[#65001C] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[450px] border-t border-[#d8ad50]/30 pb-5 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 pt-3">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleNavigation(item.href)}
              className={`border-b border-white/10 px-3 py-3 text-sm font-medium transition-colors ${
                activeLink === item.href
                  ? "text-[#ffd36b]"
                  : "text-white hover:text-[#ffd36b]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
