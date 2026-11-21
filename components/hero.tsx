"use client";

import Image from "next/image";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const data = (categoryData as CategoryData).hero;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#fffaf7] py-10"
    >
      {/* Top maroon bar */}
      <div className="absolute inset-x-0 top-0 z-30 h-1 bg-[#720d2b]" />

      <div className="mx-auto grid min-h-[calc(100svh-100px)] max-w-[1600px] items-center gap-2 px-6 py-12 sm:px-9 lg:min-h-[650px] lg:grid-cols-[1fr_1fr] lg:gap-0 lg:px-[5.3vw] lg:py-0">
        {/* Left Content */}
        <div className="reveal-on-load relative z-20 flex w-full flex-col items-start lg:-translate-y-20">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4 sm:gap-5">
            <span className="h-[2px] w-8 shrink-0 bg-[#e99b19] sm:w-15" />

            <span className="whitespace-nowrap text-[11px] font-medium tracking-[3px] text-[#171717] sm:text-[25px] sm:tracking-[5px]">
              {data.eyebrow.toUpperCase()}
            </span>

            <span className="h-[2px] w-8 shrink-0 bg-[#e99b19] sm:w-15" />
          </div>

          {/* Main Heading */}
          <h1 className="whitespace-nowrap font-serif text-[clamp(42px,6.7vw,96px)] font-bold leading-[0.94] tracking-[-0.055em] text-[#720d2b]">
            {data.title}
            <span className="block italic text-[#171717]">{data.titleAccent}</span>
          </h1>

          {/* Lotus Decoration */}
          <div className="mt-5 flex w-[225px] items-center gap-4 sm:mt-6">
            <span className="h-px flex-1 bg-[#e9a32a]" />

            <svg
              viewBox="0 0 60 42"
              className="h-9 w-12 shrink-0 text-[#e99b19]"
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
              <path d="M13 39H47" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            <span className="h-px flex-1 bg-[#e9a32a]" />
          </div>

          {/* Description */}
          <p className="mt-5 max-w-[460px] text-[19px] leading-[1.62] text-[#292929] sm:mt-1 sm:text-[27px] sm:leading-[1.25]">
            {data.description}
          </p>
        </div>

        {/* Right Image Composition */}
        <div className="relative mx-auto mt-8 h-[480px] w-full max-w-[680px] sm:h-[570px] lg:mt-0 lg:h-[min(720px,calc(100svh-30px))] lg:max-w-none lg:translate-x-[3%]">
          {/* Maroon Background Shape */}
          <div className="absolute right-[-15%] top-[17%] h-[57%] w-[46%] rounded-l-[35px] rounded-r-[85px] bg-gradient-to-br from-[#98083a] via-[#790b32] to-[#620020]" />

          {/* Offset red panel behind the foreground photo */}
          <div className="absolute bottom-[8%] left-[-4%] h-[42%] w-[48%] -rotate-[8deg] rounded-[24px] bg-gradient-to-br from-[#a10a40] via-[#85002f] to-[#690021] sm:rounded-[30px]" />

          {/* Main Bride Image */}
          <div className="absolute right-[-3%] top-[0%] z-10 h-[95%] w-[75%] rotate-[5deg] overflow-hidden rounded-[45px] border-[7px] border-white shadow-[0_15px_35px_rgba(80,0,20,0.12)] sm:rounded-[55px]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 75vw, 460px"
              className="object-cover object-center"
            />
          </div>

          {/* Makeup Artist Image */}
          <div className="absolute bottom-[-2%] left-[-2%] z-20 h-[54%] w-[49%] -rotate-[8deg] overflow-hidden rounded-[35px] border-[7px] border-white shadow-[0_15px_35px_rgba(80,0,20,0.14)] sm:rounded-[42px]">
            <Image
              src={data.artistImage}
              alt={data.artistImageAlt}
              fill
              sizes="(max-width: 768px) 55vw, 320px"
              className="object-cover object-center"
            />
          </div>

          {/* Golden Decorative Curve */}
          <div className="pointer-events-none absolute bottom-[-3%] right-[-3%] h-[65%] w-[43%] rounded-br-[60px] border-b-2 border-r-2 border-[#e9a32a]" />
        </div>
      </div>
    </section>
  );
}