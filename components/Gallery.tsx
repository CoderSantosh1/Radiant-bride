"use client";

import Image from "next/image";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const data = (categoryData as CategoryData).gallery;
const items = data.items;

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-white py-10 sm:py-12"
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
            <svg
              viewBox="0 0 60 42"
              className="h-6 w-8 shrink-0 text-[#d49a3a]"
              fill="none"
            >
              <path
                d="M30 36C17 27 17 15 30 3C43 15 43 27 30 36Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M30 36C20 24 23 14 30 3C37 14 40 24 30 36Z"
                stroke="currentColor"
                strokeWidth="1.5"
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
            </svg>
            <span className="h-px flex-1 bg-[#d49a3a]" />
          </div>

          <p className="mt-4 max-w-[760px] text-[13px] text-[#3a3a3a] sm:text-[17px]">
            {data.description}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-6 grid auto-rows-[clamp(90px,19vw,230px)] grid-cols-4 gap-2 sm:gap-3">
          {items.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-[6px] shadow-[0_6px_16px_rgba(80,0,20,0.12)] sm:rounded-[8px] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 50vw, 600px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}