"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import categoryData from "@/data/category.json";
import type { CategoryData, FeatureItem } from "@/types/category";

const data = (categoryData as CategoryData).whyChooseUs;

const iconClass = "h-9 w-9 text-[#a5092f]";

const CrownIcon = (
  <svg
    viewBox="0 0 48 48"
    className={iconClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 16l8 8 10-14 10 14 8-8-4 20H10L6 16Z" />
    <path d="M10 41h28" />
    <circle cx="6" cy="14" r="1.5" />
    <circle cx="24" cy="8" r="1.5" />
    <circle cx="42" cy="14" r="1.5" />
  </svg>
);

const SatisfactionIcon = (
  <svg
    viewBox="0 0 48 48"
    className={iconClass}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M24 4l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L24 4Z"
      fill="currentColor"
    />
    <path
      d="M10 12l1.4 2.8 3.1.5-2.2 2.2.5 3.1L10 19l-2.8 1.5.5-3.1-2.2-2.2 3.1-.5L10 12Z"
      fill="currentColor"
    />
    <path
      d="M38 12l1.4 2.8 3.1.5-2.2 2.2.5 3.1L38 19l-2.8 1.5.5-3.1-2.2-2.2 3.1-.5L38 12Z"
      fill="currentColor"
    />
    <circle cx="24" cy="27" r="5" />
    <path d="M15 42c0-5 4-8 9-8s9 3 9 8" />
    <circle cx="11" cy="31" r="3.5" />
    <path d="M4 42c0-4 3-6.5 7-6.5" />
    <circle cx="37" cy="31" r="3.5" />
    <path d="M44 42c0-4-3-6.5-7-6.5" />
  </svg>
);

const iconMap: Record<string, ReactNode> = {
  crown: CrownIcon,
  satisfaction: SatisfactionIcon,
};

const features: FeatureItem[] = data.features;

function ArrowRight() {
  return (
    <svg viewBox="0 0 40 16" className="h-4 w-9" fill="none">
      <path
        d="M1 8h36M30 1.5 37.5 8 30 14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden bg-white"
    >
      <div className="mx-auto grid max-w-[1600px] items-start gap-10 px-6 py-12 sm:px-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-[3vw] lg:px-[3.2vw] lg:py-8">
        {/* Left Image */}
        <div className="relative mx-auto h-[460px] w-full max-w-[460px] sm:h-[560px] lg:mx-0 lg:h-[min(620px,calc(100svh-80px))] lg:max-w-none">
          {/* Pink offset panel */}
          <div className="absolute -top-12 left-[26%] right-[-5%] h-[92%] bg-[#fbe9ea] lg:-top-0" />

          {/* Photo */}
          <div className="absolute inset-y-0 left-0 right-[8%] z-10 overflow-hidden shadow-[0_15px_35px_rgba(80,0,20,0.1)] lg:top-[7%] lg:h-auto">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="relative z-20 flex min-w-0 w-full flex-col items-start lg:py-2">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-4 sm:ml-[3.5%]">
            <span className="text-[16px] font-bold tracking-[4px] text-[#a5092f] sm:text-[21px]">
              {data.eyebrow.toUpperCase()}
            </span>
            <span className="h-[2px] w-12 bg-[#a5092f] sm:w-16" />
          </div>

          {/* Heading */}
          <h2 className="max-w-[680px] font-serif text-[clamp(32px,8vw,66px)] font-medium leading-[1.02] tracking-[-0.04em] text-[#0b0b0b] sm:text-[clamp(36px,4.5vw,66px)] sm:tracking-[-0.035em]">
            {data.title}
            <span className="block font-semibold italic text-[#a5092f]">
              {data.titleAccent}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.55] text-[#2a2a2a] sm:text-[21px]">
            {data.description}
          </p>

          {/* Divider */}
          <div className="mt-8 h-px w-full max-w-[720px] bg-[#cfcfcf]" />

          {/* Features */}
          <div className="relative mt-7 grid w-full max-w-[720px] gap-10 sm:grid-cols-2 sm:gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col items-start ${
                  index === 1
                    ? "sm:border-l sm:border-[#cfcfcf] sm:pl-[10%]"
                    : "sm:pr-[6%]"
                }`}
              >
                <span className="grid h-[86px] w-[86px] place-items-center rounded-full bg-[#fbe9ea]">
                  {iconMap[feature.icon]}
                </span>

                <h3 className="mt-5 font-serif text-[24px] font-bold text-[#0b0b0b] sm:text-[27px]">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-[270px] text-[16px] leading-[1.45] text-[#2a2a2a] sm:text-[19px]">
                  {feature.description}
                </p>

                <a
                  href={feature.href}
                  className="mt-6 inline-flex items-center gap-4 text-[14px] font-bold tracking-[3px] text-[#a5092f] transition hover:gap-5 sm:text-[16px]"
                >
                  LEARN MORE
                  <ArrowRight />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}