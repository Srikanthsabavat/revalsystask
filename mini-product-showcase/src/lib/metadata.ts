import { buildMetadata } from "@/utils/seo";
import { SITE_NAME, SITE_TAGLINE } from "@/utils/constants";

export const defaultMetadata = buildMetadata({
  title: SITE_NAME,
  description: `${SITE_TAGLINE}. Shop the latest smartphones, laptops, headphones, and smart home devices at unbeatable prices.`,
  path: "/",
});

export const productsMetadata = buildMetadata({
  title: "All Products",
  description:
    "Browse our complete collection of premium electronics. Filter by category, price, and rating to find your perfect device.",
  path: "/products",
});

export const cartMetadata = buildMetadata({
  title: "Shopping Cart",
  description: "Review your cart items and proceed to checkout.",
  path: "/cart",
  noIndex: true,
});

export const loginMetadata = buildMetadata({
  title: "Login",
  description: "Sign in to your ElectroHub account or continue as a guest.",
  path: "/login",
  noIndex: true,
});

export const aboutMetadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about ElectroHub's mission to deliver premium electronics with exceptional customer service since 2018.",
  path: "/about",
});

export const contactMetadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with ElectroHub. We're here to help with product inquiries, orders, and technical support.",
  path: "/contact",
});

export const checkoutMetadata = buildMetadata({
  title: "Checkout",
  description: "Complete your ElectroHub purchase securely.",
  path: "/checkout",
  noIndex: true,
});
