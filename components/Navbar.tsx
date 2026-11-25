
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const data = categoryData as CategoryData;

const navLinks = data.common.navigation.filter(
  (link) => link.href !== "#contact"
);

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingNavigation = useRef<string | null>(null);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href))
      .filter(
        (section): section is HTMLElement => section !== null
      );

    const updateActiveLink = () => {
      const pending = pendingNavigation.current;

      if (pending) {
        const pendingSection = sections.find(
          (section) => `#${section.id}` === pending
        );

        if (
          pendingSection &&
          pendingSection.getBoundingClientRect().top > 140
        ) {
          setActiveLink(pending);
          return;
        }

        pendingNavigation.current = null;
      }

      const activationLine = 140;

      const activeSection = [...sections]
        .reverse()
        .find(
          (section) =>
            section.getBoundingClientRect().top <= activationLine
        );

      setActiveLink(
        activeSection ? `#${activeSection.id}` : "#home"
      );
    };

    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  const handleNavigation = (href: string) => {
    pendingNavigation.current = href;
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
   <header className="sticky top-0 z-50 w-full bg-[#3E0012]">
      <nav className="mx-auto flex min-h-[76px] w-full max-w-[1500px] items-center gap-3 px-4 sm:min-h-[100px] sm:gap-5 sm:px-6">

        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="flex shrink-0 items-center"
        >
          <Image
            src={data.common.site.logo}
            alt={`${data.common.site.name} - ${data.footer.subtitle}`}
            width={600}
            height={250}
            priority
            unoptimized
            sizes="(max-width: 640px) 170px, (max-width: 1024px) 220px, 240px"
            className="h-auto w-[170px] object-contain sm:w-[220px] lg:w-[240px]"
          />
        </Link>

        {/* Vertical Divider */}
        <div className="h-8 w-px shrink-0 bg-[#D6A14C]/50 sm:h-[42px]" />

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-between lg:flex">

          <div className="flex min-w-0 flex-1 items-center justify-evenly gap-4 xl:gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                aria-current={
                  activeLink === item.href ? "location" : undefined
                }
                className={`relative whitespace-nowrap py-3 text-[15px] font-medium transition-colors duration-300 xl:text-[16px] ${
                  activeLink === item.href
                    ? "text-[#FFD36B]"
                    : "text-white hover:text-[#FFD36B]"
                }`}
              >
                {item.label}

                {activeLink === item.href && (
                  <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#FFD36B]" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            href="#contact"
            onClick={() => handleNavigation("#contact")}
            className="ml-4 inline-flex h-[45px] shrink-0 items-center gap-3 rounded-xl bg-gradient-to-b from-[#FFF0BD] to-[#E9BD68] px-5 text-[15px] font-bold text-[#4B0719] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg xl:px-6 xl:text-base"
          >
            <Phone size={20} fill="currentColor" />
            {data.common.site.contactButtonLabel}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-auto flex shrink-0 items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex size-11 items-center justify-center rounded-lg border border-[#D8AD50]/50 text-[#FFDC87] transition-colors hover:bg-white/10"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-[#3E0012] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[450px] border-t border-[#D8AD50]/30 pb-5 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 pt-3">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleNavigation(item.href)}
              aria-current={
                activeLink === item.href ? "location" : undefined
              }
              className={`w-full border-b border-white/10 px-3 py-3 text-left text-sm font-medium transition-colors ${
                activeLink === item.href
                  ? "text-[#FFD36B]"
                  : "text-white hover:text-[#FFD36B]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => handleNavigation("#contact")}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#FFF0BD] to-[#E9BD68] px-4 py-3 text-sm font-bold text-[#4B0719]"
          >
            <Phone size={16} fill="currentColor" />
            {data.common.site.contactButtonLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
