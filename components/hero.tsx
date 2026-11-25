"use client";

import Image from "next/image";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";
import LotusIcon from "@/components/LotusIcon";

const data = (categoryData as CategoryData).hero;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#fffaf7] py-0 lg:py-10"
    >
      {/* Top maroon bar */}
      <div className="absolute inset-x-0 top-0 z-30 hidden h-1 bg-[#720d2b] lg:block" />

      <div className="mx-auto grid min-h-0 max-w-[1600px] items-center gap-0 px-4 py-6 sm:px-9 sm:py-8 lg:min-h-[650px] lg:grid-cols-[1fr_1fr] lg:gap-0 lg:px-[5.3vw] lg:py-0">
        {/* Left Content */}
        <div className="reveal-on-load relative z-20 flex w-full flex-col items-start lg:-translate-y-20">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-7 sm:gap-5">
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
          <div className="mt-5 hidden w-[225px] items-center gap-4 sm:mt-6 sm:flex">
            <span className="h-px flex-1 bg-[#e9a32a]" />
            <LotusIcon className="h-9 w-12 shrink-0 text-[#e99b19]" />
            <span className="h-px flex-1 bg-[#e9a32a]" />
          </div>

          {/* Description */}
          <p className="mt-4 max-w-[460px] text-[17px] leading-[1.45] text-[#292929] sm:mt-1 sm:text-[27px] sm:leading-[1.25]">
            {data.description}
          </p>
        </div>

        {/* Right Image Composition */}
        <div className="relative mx-auto mt-6 h-[380px] w-full max-w-[440px] sm:mt-8 sm:h-[500px] sm:max-w-[600px] lg:mt-0 lg:h-[min(720px,calc(100svh-30px))] lg:max-w-none lg:translate-x-[3%]">
          {/* Maroon Background Shape */}
          <div className="absolute right-[2%] top-[17%] h-[57%] w-[46%] rounded-l-[35px] rounded-r-[85px] bg-gradient-to-br from-[#98083a] via-[#790b32] to-[#620020] lg:right-[-15%]" />

          {/* Offset red panel behind the foreground photo */}
          <div className="absolute bottom-[8%] left-[3%] h-[42%] w-[48%] -rotate-[8deg] rounded-[24px] bg-gradient-to-br from-[#a10a40] via-[#85002f] to-[#690021] sm:rounded-[30px] lg:left-[-4%]" />

          {/* Main Bride Image */}
          <div className="absolute right-[4%] top-[0%] z-10 h-[85%] w-[70%] rotate-[3deg] overflow-hidden rounded-[32px] border-[5px] border-white shadow-[0_15px_35px_rgba(80,0,20,0.12)] sm:right-[3%] sm:h-[92%] sm:w-[75%] sm:rotate-[5deg] sm:rounded-[55px] sm:border-[7px] lg:right-[-3%] lg:h-[95%]">
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
          <div className="absolute bottom-[1%] left-[1%] z-20 h-[46%] w-[44%] -rotate-[6deg] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_15px_35px_rgba(80,0,20,0.14)] sm:bottom-[-2%] sm:left-[-2%] sm:h-[54%] sm:w-[49%] sm:-rotate-[8deg] sm:rounded-[42px] sm:border-[7px]">
            <Image
              src={data.artistImage}
              alt={data.artistImageAlt}
              fill
              sizes="(max-width: 768px) 55vw, 320px"
              className="object-cover object-center"
            />
          </div>

          {/* Golden Decorative Curve */}
          {/* <div className="pointer-events-none absolute bottom-[1%] right-[2%] h-[54%] w-[38%] rounded-br-[40px] border-b-2 border-r-2 border-[#e9a32a] sm:bottom-[-3%] sm:right-[-3%] sm:h-[65%] sm:w-[43%] sm:rounded-br-[60px]" /> */}
        </div>
      </div>
    </section>
  );
}