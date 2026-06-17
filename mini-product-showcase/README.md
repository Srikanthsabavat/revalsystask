# ElectroHub — Mini Product Showcase

A production-quality electronics e-commerce showcase built with **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **Context API**.

![ElectroHub](https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop)

## Live Demo

Run locally with `npm run dev` and visit [http://localhost:3000](http://localhost:3000).

## Project Setup

### Prerequisites

- Node.js 18.17 or later
- npm 9+

### Installation

```bash
cd mini-product-showcase
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Demo Login Credentials

| Field    | Value               |
| -------- | ------------------- |
| Email    | `demo@electrohub.com` |
| Password | `demo123`           |

You can also **Continue as Guest** from the login page.

## Features Implemented

### Pages

| Page | Route | Description |
| ---- | ----- | ----------- |
| Home | `/` | Hero banner, featured products, why choose us |
| Products | `/products` | Grid with search, category/price filters, sort |
| Product Detail | `/products/[id]` | Image, specs, add to cart, related products |
| Cart | `/cart` | Quantity management, remove items, summary |
| Login | `/login` | Sign in + guest access |
| Checkout | `/checkout` | Protected route (auth required) |
| About | `/about` | Company story and stats |
| Contact | `/contact` | Contact form and business info |

### Technical Features

- **Next.js 15 App Router** with Server and Client Components
- **TypeScript Strict Mode** with fully typed interfaces
- **Tailwind CSS v4** — mobile-first responsive design
- **Context API + useReducer** for cart state management
- **Auth Context** with localStorage persistence
- **Custom Hooks**: `useCart`, `useAuth`, `useProducts`
- **Static JSON** product data (16 products, 6 categories)
- **SEO**: Metadata API, dynamic meta tags, Open Graph, canonical URLs, sitemap, robots.txt, JSON-LD
- **Accessibility**: Semantic HTML, ARIA labels, keyboard focus, heading hierarchy
- **UX**: Loading states, empty states, 404 page, error handling

## Folder Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── common/           # Button, Input, Loader, Badge
│   ├── layout/           # Header, Footer, Navbar, MobileMenu
│   ├── home/             # Hero, FeaturedProducts, WhyChooseUs
│   ├── products/         # ProductCard, Grid, Filter, Search
│   ├── cart/             # CartItem, CartSummary, EmptyCart
│   └── auth/             # LoginForm, GuestCheckout, ProtectedRoute
├── context/              # CartContext, AuthContext
├── hooks/                # useCart, useAuth, useProducts
├── data/                 # products.json, categories.json
├── services/             # productService.ts
├── types/                # product, cart, auth interfaces
├── utils/                # constants, helpers, seo
└── lib/                  # metadata presets
```

## Architectural Decisions

1. **Server Components by default** — Product data is fetched on the server for SEO and performance; interactive UI uses client components only where needed.

2. **Context + useReducer for cart** — Provides predictable state updates, localStorage sync, and avoids prop drilling without external dependencies.

3. **Service layer abstraction** — `productService.ts` wraps JSON data access, making it easy to swap in a real API later.

4. **Centralized SEO utilities** — `buildMetadata()` in `utils/seo.ts` ensures consistent Open Graph, Twitter cards, and canonical URLs across all pages.

5. **Protected checkout via client guard** — `ProtectedRoute` redirects unauthenticated users to login with a return URL.

6. **Unsplash images via remotePatterns** — Product images use CDN URLs configured in `next.config.ts` for optimized delivery via `next/image`.

## Evaluation Criteria Coverage

| Criterion | How It Is Addressed |
| --------- | ------------------- |
| **Next.js Fundamentals** | App Router file-based routing, dynamic `[id]` routes, `generateStaticParams`, Server/Client component split, `loading.tsx`, `not-found.tsx`, root layout, `next/image`, `next/font` |
| **TypeScript & Code Quality** | `strict: true`, typed interfaces in `src/types/`, typed hooks/context/reducers, ESLint, path aliases (`@/*`), shared utilities |
| **Reusability & Maintainability** | Feature-based folders, reusable `Button`/`Input`/`Badge`/`Loader`, custom hooks, service layer (`productService.ts`), centralized constants and metadata |
| **SEO & Performance** | `buildMetadata()` utility, per-page and dynamic product metadata, `sitemap.ts`, `robots.ts`, JSON-LD on product pages, static generation, image optimization |
| **Responsiveness & UX** | Mobile-first Tailwind breakpoints, `MobileMenu`, responsive grids, loading/empty states, ARIA labels, cart quantity controls, protected checkout |
| **AI-Assisted Development** | Cursor AI used for scaffolding and iteration; manual review and refinement documented below |

## SEO Implementation

### Metadata

- **Global defaults** — `src/lib/metadata.ts` via root `layout.tsx`
- **Per-page metadata** — static exports on each route (`products`, `about`, `contact`, etc.)
- **Dynamic product metadata** — `generateMetadata()` on `/products/[id]` using product name, description, and image
- **Central builder** — `buildMetadata()` in `src/utils/seo.ts` sets title, description, canonical URL, Open Graph, Twitter cards, and `robots`

### Crawling & Indexing

| File | Purpose |
| ---- | ------- |
| `src/app/sitemap.ts` | Auto-generates `/sitemap.xml` for static pages and all 16 product URLs |
| `src/app/robots.ts` | Serves `/robots.txt`; allows public pages, disallows `/cart`, `/login`, `/checkout` |

### Structured Data

Product detail pages inject **JSON-LD** (`schema.org/Product`) including name, brand, price, availability, and aggregate rating — rendered server-side in `products/[id]/page.tsx`.

### Performance

- Server Components fetch product data at build/request time (better initial HTML for SEO)
- `generateStaticParams()` pre-renders all product detail pages at build time
- `next/image` with `sizes` and `remotePatterns` for optimized Unsplash delivery
- `next/font` (Geist) for self-hosted font loading without layout shift

### SEO Configuration

Set your production URL before deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Defaults to `https://electrohub.example.com` for local development.

## AI-Assisted Development

This project was built with **Cursor AI (Claude)** as a development accelerator. AI was used effectively as a pair-programming tool — not as a substitute for review and testing.

### What AI Helped Generate

| Area | AI Contribution |
| ---- | --------------- |
| Project scaffolding | Initial Next.js 15 App Router structure, folder layout, and `package.json` setup |
| TypeScript interfaces | `Product`, `CartItem`, `AuthUser`, and filter/sort types |
| Component architecture | Separation of Server pages vs `*Client.tsx` interactive components |
| Reusable UI | `Button`, `ProductCard`, `ProductGrid`, cart and auth flows |
| Documentation | README structure, architectural decision notes, and setup instructions |

### What Was Manually Reviewed & Refined

| Area | Human / Iterative Fix |
| ---- | --------------------- |
| Broken Unsplash image URLs | Replaced 404 image links in `products.json` with verified working URLs |
| Product card layout | Fixed misaligned cards, fixed heights, brand visibility, price/button alignment |
| Hero section | Adjusted padding, image sizing, and responsive two-column layout |
| Cart UX on cards | Added full-width Add button and `−` / `+` quantity stepper after add-to-cart |
| Type safety | Restored `brand` field on `Product` interface after it was dropped during iteration |
| SEO gaps | Added `sitemap.ts`, `robots.ts`, JSON-LD, and fixed default OG image URL |

### AI Development Workflow

1. **Prompt with context** — Describe the feature, constraints (e.g. "don't change UI height"), and file scope
2. **Generate** — Let AI produce component or data changes
3. **Verify in browser** — Run `npm run dev` and check terminal for image/runtime errors
4. **Iterate** — Refine spacing, alignment, and edge cases (empty cart, few filter results, out-of-stock)
5. **Document** — Record decisions and limitations in this README

### Lessons Learned

- AI-generated external URLs (Unsplash) should always be verified — several returned 404 at runtime
- Layout fixes (`h-full`, `flex-1`, `mt-auto`) need testing with **varying content lengths** (short vs long titles, few vs many grid items)
- Keeping a **service layer** and **typed interfaces** makes AI-suggested refactors safer to apply incrementally

## AI Tools Utilized

- **Chat GPT, ClaudeAI and Coiplot** — Project scaffolding, component architecture, TypeScript interfaces, UI iteration, bug fixes, and documentation

## Assumptions and Limitations

- **No real backend** — Authentication and checkout are simulated with localStorage; demo credentials are hardcoded.
- **Static product data** — Products are served from JSON files, not a live database or API.
- **No payment integration** — Checkout collects shipping info and shows a success message without processing payments.
- **Contact form** — Submissions are simulated client-side; no email service is connected.
- **Image assets** — Product images use Unsplash URLs rather than local files in `public/images/`.
- **Guest sessions** — Guest users have full checkout access but no order history persistence.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## License

This project was created as a technical assignment submission.
