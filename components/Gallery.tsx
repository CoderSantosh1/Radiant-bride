"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";
import LotusIcon from "@/components/LotusIcon";

const data = (categoryData as CategoryData).gallery;
const items = data.items;

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);
  const showPrevious = () =>
    setSelectedIndex((index) =>
      index === null ? null : (index - 1 + items.length) % items.length,
    );
  const showNext = () =>
    setSelectedIndex((index) =>
      index === null ? null : (index + 1) % items.length,
    );

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((index) =>
          index === null ? null : (index - 1 + items.length) % items.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((index) =>
          index === null ? null : (index + 1) % items.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const handleTouchEnd = (touchEnd: number) => {
    if (touchStart === null) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > 50) {
      if (distance > 0) showNext();
      else showPrevious();
    }
    setTouchStart(null);
  };

  return (
    <section
      id="gallery"
      className="relative bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-9">
        {/* Heading */}
        <div className="flex flex-col items-center rounded-[10px] bg-[#fffaf6] px-4 py-6 text-center shadow-[0_6px_20px_rgba(80,0,20,0.06)] sm:py-8">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="h-px w-10 bg-[#d49a3a] sm:w-16" />
            <span className="text-[13px] font-bold tracking-[6px] text-[#0f172a] sm:text-[17px] sm:tracking-[8px]">
              {data.eyebrow.toUpperCase()}
            </span>
            <span className="h-px w-10 bg-[#d49a3a] sm:w-16" />
          </div>

          <h2 className="mt-3 font-serif text-[clamp(32px,4.4vw,60px)] font-semibold italic leading-tight tracking-[-0.02em] text-[#0f172a]">
            {data.title} <span className="text-[#8e0f30]">{data.titleAccent}</span>
          </h2>

          {/* Lotus divider */}
          <div className="mt-1 flex w-[300px] max-w-full items-center gap-3">
            <span className="h-px flex-1 bg-[#d49a3a]" />
            <LotusIcon className="h-6 w-8 shrink-0 text-[#d49a3a]" />
            <span className="h-px flex-1 bg-[#d49a3a]" />
          </div>

          <p className="mt-4 max-w-[760px] text-[13px] text-[#3a3a3a] sm:text-[17px]">
            {data.description}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-6 grid auto-rows-[clamp(90px,19vw,230px)] grid-cols-4 gap-2 sm:gap-3">
          {items.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() =>
                setSelectedIndex(items.findIndex((galleryItem) => galleryItem.src === item.src))
              }
              className={`group relative cursor-zoom-in overflow-hidden rounded-[6px] shadow-[0_6px_16px_rgba(80,0,20,0.12)] outline-none focus-visible:ring-4 focus-visible:ring-[#d49a3a] sm:rounded-[8px] ${item.className}`}
              aria-label={`Open image: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[#470212]/0 transition-colors duration-300 group-hover:bg-[#470212]/10" />
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-12 py-16 sm:px-20"
          onClick={closeLightbox}
          onTouchStart={(event) =>
            setTouchStart(event.changedTouches[0].clientX)
          }
          onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/40 bg-black/40 text-white transition hover:bg-white hover:text-[#470212] sm:right-6 sm:top-6"
            aria-label="Close image viewer"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/40 text-white transition hover:bg-white hover:text-[#470212] sm:left-6 sm:h-14 sm:w-14"
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="relative h-full max-h-[80vh] w-full max-w-[1100px]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={items[selectedIndex].src}
              alt={items[selectedIndex].alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/40 text-white transition hover:bg-white hover:text-[#470212] sm:right-6 sm:h-14 sm:w-14"
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
            {selectedIndex + 1} / {items.length}
          </span>
        </div>
      )}
    </section>
  );
}