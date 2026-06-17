import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import { SITE_NAME } from "@/utils/constants";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 ring-1 ring-blue-400/30">
              New Arrivals — Up to 30% Off
            </p>
            <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Power Your World with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {SITE_NAME}
              </span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Discover cutting-edge smartphones, laptops, audio gear, and smart home
              devices. Premium quality, expert support, and fast shipping on every order.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden justify-end lg:flex">
            <div className="relative h-[400px] w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
              <Image
                src={HERO_IMAGE}
                alt="People exploring the latest electronics at ElectroHub"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 0vw, 512px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
