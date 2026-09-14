export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface FeatureItem {
  id: string;
  category: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText?: string;
  bgLightCyan?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}
