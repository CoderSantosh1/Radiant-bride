import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import categoryData from "@/data/category.json";
import type { CategoryData } from "@/types/category";

const data = (categoryData as CategoryData).common.site;

export const metadata: Metadata = {
  title: `${data.name} | ${data.tagline}`,
  description: data.description,
  keywords: [
    "bridal makeup",
    "makeup artist",
    "bridal makeup studio",
    "Noida makeup artist",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
