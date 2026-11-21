"use client";

import Image from "next/image";
import { useState } from "react";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const data = (categoryData as CategoryData).faqs;
const faqs = data.items;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 shrink-0 transition-transform duration-300 ${
        open ? "text-[#8e0f30]" : "text-[#0b0b0b] rotate-180"
      }`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 15l7-7 7 7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-12 sm:px-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-[3.5vw] lg:px-[1.2vw] lg:py-0">
        {/* Left Image */}
        <div className="relative mx-auto h-[460px] w-full max-w-[460px] sm:h-[560px] lg:mx-0 lg:h-[min(660px,calc(100svh-10px))] lg:max-w-none">
          {/* Pink offset panel */}
          <div className="absolute -top-2 bottom-[8%] left-0 w-[70%] bg-[#fdeceb] lg:left-0 lg:top-[3%]" />

          {/* Photo */}
          <div className="absolute inset-y-0 left-[16%] right-[4%] z-10 overflow-hidden shadow-[0_15px_35px_rgba(80,0,20,0.1)] lg:top-[10%] lg:h-auto">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="relative z-20 flex w-full flex-col items-start lg:py-6 lg:pr-[2.2vw]">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="h-[2px] w-10 bg-[#c0820f] sm:w-14" />
            <span className="text-[16px] font-bold tracking-[6px] text-[#0f172a] sm:text-[21px] sm:tracking-[8px]">
              {data.eyebrow.toUpperCase()}
            </span>
            <span className="h-[2px] w-10 bg-[#c0820f] sm:w-14" />
          </div>

          {/* Heading */}
          <h2 className="mt-3 font-serif text-[clamp(34px,4.7vw,68px)] font-bold italic leading-[1.05] tracking-[-0.04em] text-[#0f172a]">
            {data.title} <span className="text-[#8e0f30]">{data.titleAccent}</span>
          </h2>

          <p className="mt-3 text-[15px] text-[#2f2f2f] sm:text-[19px]">
            {data.description}
          </p>

          {/* Accordion */}
          <div className="mt-7 flex w-full flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[12px] transition-colors ${
                    isOpen
                      ? "border border-[#f6dedb] bg-[#fdf4f1]"
                      : "bg-[#fdefea]"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-[18px] ${
                      isOpen ? "bg-[#fde4e3]" : ""
                    }`}
                  >
                    <span
                      className={`font-serif text-[17px] font-bold sm:text-[22px] ${
                        isOpen ? "text-[#8e0f30]" : "text-[#0b0b0b]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <Chevron open={isOpen} />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 py-4 text-[15px] leading-[1.7] text-[#1f1f1f] sm:px-6 sm:text-[18px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}