"use client";

import Image from "next/image";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const data = (categoryData as CategoryData).about;

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[1600px] items-start gap-10 px-6 py-12 sm:px-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-[4vw] lg:px-[3.2vw] lg:py-10">
        {/* Left Image */}
        <div className="relative mx-auto h-[420px] w-full max-w-[520px] overflow-hidden rounded-[36px] border-[5px] border-white shadow-[0_18px_45px_rgba(80,0,20,0.15)] sm:h-[520px] sm:rounded-[50px] lg:mx-0 lg:h-[min(560px,calc(100svh-60px))] lg:max-w-none">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            sizes="(max-width: 1024px) 90vw, 520px"
            className="object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex w-full flex-col items-start lg:pt-2">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-4">
            <span className="h-px w-10 shrink-0 bg-[#a5092f] sm:w-14" />
            <span className="font-serif text-[26px] italic leading-none text-[#a5092f] sm:text-[32px]">
              {data.eyebrow}
            </span>
            <span className="h-px w-10 shrink-0 bg-[#a5092f] sm:w-14" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[clamp(38px,4.6vw,66px)] font-semibold italic leading-[0.98] tracking-[-0.03em] text-[#111827]">
            {data.title}
            <span className="block text-[#a5092f]">{data.titleAccent}</span>
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-[600px] text-[17px] leading-[1.6] text-[#1a1a1a] sm:text-[20px]">
            {data.description}
          </p>

          {/* Small Accent Image */}
          <div className="relative mt-10 h-[170px] w-[180px] self-end overflow-hidden rounded-[24px] border-[4px] border-white shadow-[0_12px_30px_rgba(80,0,20,0.18)] sm:h-[210px] sm:w-[220px] sm:rounded-[28px] lg:mt-16">
            <Image
              src={data.accentImage}
              alt={data.accentImageAlt}
              fill
              sizes="(max-width: 768px) 180px, 220px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}