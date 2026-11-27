import Hero from "@/components/hero";
import About from "@/components/Aboutus";
import Service from "@/components/Service";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallary from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";

export default function Home() {
  return (
   <>    
   <Hero />
    <About />
    <Service />
    <WhyChooseUs />
    <Gallary />
    <Testimonials />
    <FAQs />
    <Contact />
   </>
  );
}
