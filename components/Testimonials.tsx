"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import categoryData from "@/data/category.json";
import type { CategoryData, Testimonial } from "@/types/category";

const data = (categoryData as CategoryData).testimonials;
const testimonials: Testimonial[] = data.items;

function usePerPage() {
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
}

function Stars() {
  return (
    <div className="mt-1 flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-5 w-5 text-[#b8860b] sm:h-[22px] sm:w-[22px]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.1 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="relative flex h-full flex-col rounded-[18px] bg-[#fdeeec] px-5 pb-6 pt-14 shadow-[0_10px_28px_rgba(80,0,20,0.10)] sm:px-6">
      {/* Quote mark */}
      <span
        aria-hidden="true"
        className="absolute left-5 top-[-22px] font-serif text-[88px] font-bold leading-none text-[#8e0f30] sm:left-6"
      >
        &ldquo;
      </span>

      <div className="absolute left-5 top-3 sm:left-6">
        <Stars />
      </div>

      <p className="mt-2 text-[16px] italic leading-[1.55] text-[#141414] sm:text-[18px]">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-4 pt-6">
        <span className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#8e0f30]">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="60px"
            className="object-cover object-center"
          />
        </span>

        <span className="h-10 w-px bg-[#d9b9b6]" />

        <div>
          <p className="font-serif text-[19px] font-bold leading-tight text-[#0f172a] sm:text-[21px]">
            {item.name}
          </p>
          <p className="mt-1 text-[15px] text-[#6b6b6b] sm:text-[17px]">
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);

  const pageCount = Math.ceil(testimonials.length / perPage);
  const current = Math.min(page, pageCount - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (Math.min(p, pageCount - 1) + 1) % pageCount);
    }, 6000);
    return () => clearInterval(timer);
  }, [pageCount]);

  const visible = testimonials.slice(
    current * perPage,
    current * perPage + perPage,
  );

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden  bg-white"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-12 sm:px-9 lg:grid-cols-[1.45fr_0.75fr] lg:gap-[3vw] lg:px-[3.5vw] lg:py-0">
        {/* Left Content */}
        <div className="relative z-20 flex w-full flex-col items-start lg:py-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="h-[2px] w-10 bg-[#b8741a] sm:w-12" />
            <span className="text-[15px] font-medium tracking-[6px] text-[#0f172a] sm:text-[20px] sm:tracking-[8px]">
              {data.eyebrow.toUpperCase()}
            </span>
            <span className="h-[2px] w-10 bg-[#b8741a] sm:w-12" />
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-serif text-[clamp(38px,4.6vw,68px)] font-bold italic leading-[1.02] tracking-[-0.04em] text-[#0f172a]">
            {data.title} <span className="text-[#8e0f30]">{data.titleAccent}</span>
          </h2>

          <p className="mt-5 max-w-[540px] text-[17px] leading-[1.5] text-[#3a3a3a] sm:text-[21px]">
            {data.description}
          </p>

          {/* Cards */}
          <div
            className={`mt-14 grid w-full gap-6 sm:gap-[38px] ${
              perPage === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {visible.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex w-full items-center justify-center gap-2 lg:justify-start lg:pl-[40%]">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to testimonials page ${i + 1}`}
                className={`h-3 w-3 rounded-full border-2 border-[#8e0f30] transition ${
                  i === current ? "bg-[#8e0f30]" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto h-[460px] w-full max-w-[460px] sm:h-[560px] lg:ml-[calc(-3vw-14px)] lg:mr-0 lg:h-[min(640px,calc(100svh-10px))] lg:w-auto lg:max-w-none">
          {/* Pink offset panel */}
          <div className="absolute -top-8 left-[22%] right-[-12%] h-[80%] bg-[#fae4de] lg:-top-12" />

          {/* Photo */}
          <div className="absolute inset-y-0 left-0 right-[2%] z-10 overflow-hidden shadow-[0_15px_35px_rgba(80,0,20,0.1)] lg:top-[8%] lg:h-auto">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
