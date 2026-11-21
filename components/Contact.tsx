"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const category = categoryData as CategoryData;
const data = category.contact;
const site = category.common.site;
const services = category.services.items.map((item) => item.title);

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PinIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.6" fill="currentColor" />
  </svg>
);

const PhoneIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const MailIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" />
    <path d="m3.5 6.5 8.5 7 8.5-7" stroke="#fdeceb" />
  </svg>
);

const UserIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </svg>
);

const LayersIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 17.5 9 5 9-5" />
  </svg>
);

const CalendarIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

const MessageIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg {...svgProps} className={className}>
    <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    <path d="M8 10h8M8 13h5" />
  </svg>
);

function InfoItem({
  icon,
  title,
  children,
  divider = false,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  divider?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 sm:gap-4 ${
        divider ? "sm:border-l sm:border-[#e6c9c5] sm:pl-5" : ""
      }`}
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[12px] bg-[#fbdcdc] text-[#8e0f30] sm:h-[52px] sm:w-[52px]">
        {icon}
      </span>
      <div>
        <h3 className="font-serif text-[20px] font-bold leading-tight text-[#0f172a]">
          {title}
        </h3>
        <div className="mt-1 text-[14px] leading-[1.45] text-[#1f1f1f] sm:text-[15px]">
          {children}
        </div>
      </div>
    </div>
  );
}

function Label({
  icon,
  children,
  required = false,
}: {
  icon: ReactNode;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <span className="mb-2 flex items-center gap-2 text-[15px] font-semibold text-[#0f172a]">
      <span className="text-[#8e0f30]">{icon}</span>
      {children}
      {required && <span className="text-[#8e0f30]">*</span>}
    </span>
  );
}

const fieldClass =
  "w-full rounded-[8px] border border-[#cfcfcf] bg-white px-4 py-2.5 text-[15px] text-[#1f1f1f] outline-none transition placeholder:text-[#7a7a7a] focus:border-[#8e0f30] focus:ring-2 focus:ring-[#8e0f30]/15";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Appointment request - ${String(data.get("service") ?? "")}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${String(data.get("name") ?? "")}`,
        `Phone: ${String(data.get("phone") ?? "")}`,
        `Service: ${String(data.get("service") ?? "")}`,
        `Date: ${String(data.get("date") ?? "")}`,
        `Message: ${String(data.get("message") ?? "Not provided")}`,
      ].join("\n"),
    );

    const mailLink = document.createElement("a");
    mailLink.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    mailLink.click();
    setSubmitted(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-9">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4 sm:gap-5">
            <span className="h-[2px] w-10 bg-[#c0820f] sm:w-14" />
            <span className="text-[14px] font-medium tracking-[7px] text-[#0f172a] sm:text-[19px] sm:tracking-[9px]">
              {data.eyebrow.toUpperCase()}
            </span>
            <span className="h-[2px] w-10 bg-[#c0820f] sm:w-14" />
          </div>

          <h2 className="mt-2 font-serif text-[clamp(38px,5vw,72px)] font-bold italic leading-[1.05] tracking-[-0.04em] text-[#0f172a]">
            {data.title} <span className="text-[#7a0b28]">{data.titleAccent}</span>
          </h2>

          <p className="mt-3 max-w-[820px] text-[15px] text-[#2f2f2f] sm:text-[19px]">
            {data.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_1fr] lg:gap-[2.4vw]">
          {/* Left: details + map */}
          <div className="rounded-[26px] bg-[#fdeeed] p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-3 sm:gap-4">
              <InfoItem icon={<PinIcon />} title="Our Address">
                {site.addressLine1}
                <br />
                {site.addressLine2}
              </InfoItem>

              <InfoItem icon={<PhoneIcon />} title="Call Us" divider>
                <a href={site.phoneHref} className="hover:text-[#8e0f30]">
                  {site.phone}
                </a>
              </InfoItem>

              <InfoItem icon={<MailIcon />} title="Email Us" divider>
                <a href={site.emailHref} className="hover:text-[#8e0f30]">
                  {site.email}
                </a>
              </InfoItem>
            </div>

            {/* Get Direction */}
            <div className="mt-8 flex items-center gap-3 text-[#8e0f30]">
              <PinIcon className="h-8 w-8" />
              <h3 className="font-serif text-[28px] font-bold text-[#0f172a] sm:text-[32px]">
                Get Direction
              </h3>
              <span className="h-[2px] w-24 bg-[#c0820f]" />
            </div>

            <div className="mt-4 overflow-hidden rounded-[16px] shadow-[0_8px_22px_rgba(80,0,20,0.12)]">
              <iframe
                title="Studio location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full border-0 sm:h-[330px]"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: booking form */}
          <div className="overflow-hidden rounded-[26px] border border-[#f1e1de] bg-[#fffafa] shadow-[0_10px_30px_rgba(80,0,20,0.08)]">
            <div className="flex items-center gap-4 bg-gradient-to-br from-[#a10a40] via-[#85002f] to-[#690021] px-6 pb-10 pt-6 text-white sm:px-8">
              <CalendarIcon className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" />
              <div>
                <h3 className="font-serif text-[28px] font-bold leading-tight sm:text-[34px]">
                  {data.formTitle}
                </h3>
                <p className="mt-0.5 text-[14px] text-white/90 sm:text-[16px]">
                  {data.formDescription}
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="-mt-5 rounded-t-[26px] bg-white px-5 pb-8 pt-7 sm:px-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <Label icon={<UserIcon />} required>
                    Your Name
                  </Label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className={fieldClass}
                  />
                </label>

                <label className="block">
                  <Label icon={<PhoneIcon className="h-5 w-5" />} required>
                    Phone Number
                  </Label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    placeholder="Enter your phone number"
                    className={fieldClass}
                  />
                </label>

                <label className="block">
                  <Label icon={<LayersIcon />} required>
                    Select Service
                  </Label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <Label icon={<CalendarIcon />} required>
                    Appointment Date
                  </Label>
                  <input
                    name="date"
                    type="date"
                    required
                    className={fieldClass}
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <Label icon={<MessageIcon />}>Message</Label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  className={`${fieldClass} resize-y`}
                />
              </label>

              <div className="mt-7 flex flex-col items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-[#e0a21f] bg-gradient-to-r from-[#8e0f30] to-[#6f0a26] px-10 py-3 text-[18px] font-semibold text-white shadow-[0_8px_20px_rgba(110,10,38,0.3)] transition hover:brightness-110 sm:text-[20px]"
                >
                  Book Appointment
                  <svg viewBox="0 0 28 16" className="h-4 w-6" fill="none">
                    <path
                      d="M1 8h24M19 2l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="text-center text-[15px] font-medium text-[#2e7d32]"
                  >
                    {data.successMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}