"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import categoryData from "@/data/category.json";
import type { CategoryData, ServiceItem } from "@/types/category";

const data = (categoryData as CategoryData).services;

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-10 w-10",
};

const BridalIcon = (
  <svg {...iconProps}>
    <path d="M24 5c-7 0-11 5-11 12 0 4 1 7 1 10l-4 14h28l-4-14c0-3 1-6 1-10 0-7-4-12-11-12Z" />
    <path d="M18 18c2 5 10 5 12 0" />
    <path d="M20 24c1 2 7 2 8 0" />
    <path d="M15 40c3-6 15-6 18 0" />
  </svg>
);

const HairIcon = (
  <svg {...iconProps}>
    <rect x="8" y="6" width="9" height="16" rx="2" transform="rotate(-25 12 14)" />
    <path d="M17 24 38 42" />
    <path d="M38 6 20 28" />
    <circle cx="14" cy="38" r="4" />
    <path d="M17 35 36 14" />
    <path d="M27 18l8 8" />
  </svg>
);

const FaceIcon = (
  <svg {...iconProps}>
    <path d="M24 5c-8 0-13 6-13 14 0 9 5 17 13 17s13-8 13-17c0-8-5-14-13-14Z" />
    <path d="M11 20c4-1 9-5 11-11 3 5 8 9 15 11" />
    <path d="M17 22c1.5-1 4-1 5 0" />
    <path d="M26 22c1.5-1 4-1 5 0" />
    <path d="M21 31c2 2 4 2 6 0" />
    <path d="M12 42c3-4 7-6 12-6s9 2 12 6" />
  </svg>
);

const PartyIcon = (
  <svg {...iconProps}>
    <path d="M24 6l3.5 9 9.5.8-7.2 6.2 2.3 9.3L24 26l-8.1 5.3 2.3-9.3L11 16.8l9.5-.8L24 6Z" />
    <path d="M12 40h24" />
    <path d="M17 44h14" />
  </svg>
);

const EngagementIcon = (
  <svg {...iconProps}>
    <path d="M17 8h14l5 7-12 9-12-9 5-7Z" />
    <path d="M12 15h24" />
    <circle cx="24" cy="34" r="8" />
  </svg>
);

const StylingIcon = (
  <svg {...iconProps}>
    <path d="M10 8h20a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H10" />
    <path d="M10 8v12" />
    <path d="M22 20v6" />
    <rect x="18" y="26" width="8" height="14" rx="3" />
    <path d="M36 12h4" />
  </svg>
);

const iconMap: Record<string, ReactNode> = {
  bridal: BridalIcon,
  hair: HairIcon,
  face: FaceIcon,
  party: PartyIcon,
  engagement: EngagementIcon,
  styling: StylingIcon,
};

function usePerPage() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[380px] pt-4 sm:h-[420px]">
      {/* Back peach layer */}
      <div className="absolute right-0 top-0 h-[92%] w-[86%] rounded-[10px] bg-[#fce6d3]" />

      {/* Front peach panel */}
      <div className="absolute bottom-0 left-0 right-[2%] top-[4%] rounded-[12px] bg-gradient-to-br from-[#fdeedd] to-[#fbe3cf] shadow-[0_10px_25px_rgba(160,90,40,0.15)]" />

      {/* Inner light panel behind the label */}
      <div className="absolute bottom-[3%] left-[10%] right-[5%] top-[10%] rounded-[10px] bg-[#fff6ee]" />

      {/* Photo */}
      <div className="absolute bottom-[3%] left-[2%] top-[8%] z-10 w-[72%] overflow-hidden rounded-[6px] shadow-[0_8px_20px_rgba(80,0,20,0.18)]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 70vw, 300px"
          className="object-cover object-center"
        />
      </div>

      {/* Label */}
      <div className="absolute bottom-[3%] right-[6%] top-[10%] z-20 flex w-[22%] flex-col items-center gap-3 pt-3 text-[#8e0f30]">
        {iconMap[service.icon]}
        <span
          className="font-serif text-[20px] font-semibold italic leading-none sm:text-[22px]"
          style={{ writingMode: "vertical-rl" }}
        >
          - {service.title}
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(data.items.length / perPage);
  const current = Math.min(page, pageCount - 1);

  const prev = () => setPage((current - 1 + pageCount) % pageCount);
  const next = () => setPage((current + 1) % pageCount);

  const visible = data.items.slice(current * perPage, current * perPage + perPage);

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#fffaf6] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-9">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="h-px w-10 bg-[#d49a3a] sm:w-16" />
            <span className="text-[14px] font-bold tracking-[6px] text-[#0f172a] sm:text-[19px] sm:tracking-[8px]">
              {data.eyebrow.toUpperCase()}
            </span>
            <span className="h-px w-10 bg-[#d49a3a] sm:w-16" />
          </div>

          <h2 className="mt-3 font-serif text-[clamp(34px,4.6vw,64px)] font-semibold italic leading-tight tracking-[-0.02em] text-[#0f172a]">
            {data.title} <span className="text-[#8e0f30]">{data.titleAccent}</span>
          </h2>

          {/* Lotus divider */}
          <div className="mt-1 flex w-[320px] max-w-full items-center gap-3">
            <span className="h-px flex-1 bg-[#d49a3a]" />
            <svg
              viewBox="0 0 60 42"
              className="h-7 w-9 shrink-0 text-[#d49a3a]"
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

          <p className="mt-5 max-w-[900px] text-[15px] text-[#3a3a3a] sm:text-[19px]">
            {data.description}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous services"
            className="absolute left-0 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border-2 border-[#c58a2e] bg-[#fffaf6] text-[#8e0f30] transition hover:bg-[#8e0f30] hover:text-white sm:-left-1 lg:-left-2"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M15 5l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className={`mx-auto grid max-w-[1300px] gap-8 px-10 sm:px-14 ${
              perPage === 1
                ? "grid-cols-1"
                : perPage === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
            }`}
          >
            {visible.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next services"
            className="absolute right-0 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border-2 border-[#c58a2e] bg-[#fffaf6] text-[#8e0f30] transition hover:bg-[#8e0f30] hover:text-white sm:-right-1 lg:-right-2"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-3 w-3 rounded-full border-2 border-[#8e0f30] transition ${
                i === current ? "bg-[#8e0f30]" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}