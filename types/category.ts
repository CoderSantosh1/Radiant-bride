export type NavigationLink = {
  label: string;
  href: string;
};

export type SiteData = {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  address: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  contactButtonLabel: string;
  mapQuery: string;
};

export type HeroData = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  image: string;
  imageAlt: string;
  artistImage: string;
  artistImageAlt: string;
};

export type ImageSectionData = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ServiceIcon =
  | "bridal"
  | "hair"
  | "face"
  | "party"
  | "engagement"
  | "styling";

export type ServiceItem = {
  title: string;
  image: string;
  icon: ServiceIcon;
};

export type ServicesData = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  items: ServiceItem[];
};

export type FeatureIcon = "crown" | "satisfaction";

export type FeatureItem = {
  title: string;
  description: string;
  href: string;
  icon: FeatureIcon;
};

export type WhyChooseUsData = ImageSectionData & {
  features: FeatureItem[];
};

export type GalleryItem = {
  src: string;
  alt: string;
  className: string;
};

export type GalleryData = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  items: GalleryItem[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export type TestimonialsData = ImageSectionData & {
  items: Testimonial[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type FAQsData = ImageSectionData & {
  items: FAQ[];
};

export type ContactData = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  formTitle: string;
  formDescription: string;
  successMessage: string;
};

export type CategoryData = {
  common: {
    site: SiteData;
    navigation: NavigationLink[];
  };
  hero: HeroData;
  about: ImageSectionData & {
    accentImage: string;
    accentImageAlt: string;
  };
  services: ServicesData;
  whyChooseUs: WhyChooseUsData;
  gallery: GalleryData;
  testimonials: TestimonialsData;
  faqs: FAQsData;
  contact: ContactData;
  footer: {
    subtitle: string;
    description: string;
    copyright: string;
  };
};