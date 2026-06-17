export const SITE_NAME = "ElectroHub";
export const SITE_TAGLINE = "Your Premier Electronics Destination";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://electrohub.example.com";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const SHIPPING_COST = 9.99;
export const TAX_RATE = 0.08;
export const FREE_SHIPPING_THRESHOLD = 100;

export const DEMO_CREDENTIALS = {
  email: "demo@electrohub.com",
  password: "demo123",
} as const;

export const CART_STORAGE_KEY = "electrohub-cart";
export const AUTH_STORAGE_KEY = "electrohub-auth";

export const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: 5000 },
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 – $500", min: 100, max: 500 },
  { label: "$500 – $1000", min: 500, max: 1000 },
  { label: "Over $1000", min: 1000, max: 5000 },
] as const;

export const SORT_OPTIONS = [
  { value: "rating-desc", label: "Highest Rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Premium Quality",
    description:
      "Every product is sourced from trusted brands and rigorously tested for quality assurance.",
    icon: "shield",
  },
  {
    title: "Fast Shipping",
    description:
      "Free shipping on orders over $100 with express delivery options available nationwide.",
    icon: "truck",
  },
  {
    title: "Expert Support",
    description:
      "Our certified tech specialists are available 24/7 to help you find the perfect device.",
    icon: "headphones",
  },
  {
    title: "Best Price Guarantee",
    description:
      "Found a lower price elsewhere? We'll match it and give you an additional 5% off.",
    icon: "tag",
  },
] as const;
