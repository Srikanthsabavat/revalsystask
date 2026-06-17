import Link from "next/link";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/utils/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold text-white">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {SITE_TAGLINE}. Premium electronics at unbeatable prices since 2018.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/products?category=cat-smartphones" className="text-sm text-slate-400 hover:text-white">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/products?category=cat-laptops" className="text-sm text-slate-400 hover:text-white">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/products?category=cat-audio" className="text-sm text-slate-400 hover:text-white">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="/products?category=cat-wearables" className="text-sm text-slate-400 hover:text-white">
                  Wearables
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-slate-400">
              <p>123 Tech Boulevard</p>
              <p>San Francisco, CA 94105</p>
              <p>
                <a href="tel:+18005551234" className="hover:text-white">
                  +1 (800) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:support@electrohub.com" className="hover:text-white">
                  support@electrohub.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
