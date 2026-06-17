import Link from "next/link";
import { aboutMetadata } from "@/lib/metadata";
import Button from "@/components/common/Button";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">About ElectroHub</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Your trusted partner for premium electronics since 2018
        </p>
      </header>

      <section className="mt-12 space-y-6 leading-relaxed text-slate-700">
        <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
        <p>
          ElectroHub was founded with a simple mission: make cutting-edge technology
          accessible to everyone. What started as a small online store in San Francisco
          has grown into a trusted destination for millions of tech enthusiasts
          worldwide.
        </p>
        <p>
          We partner directly with leading brands like Apple, Samsung, Sony, and Google
          to bring you authentic products at competitive prices. Every device in our
          catalog is carefully selected by our team of certified technology specialists.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
        <p>
          To empower people through technology by providing premium electronics,
          expert guidance, and exceptional service — making the latest innovations
          accessible to all.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">By the Numbers</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-6 text-center">
            <p className="text-3xl font-bold text-blue-600">2M+</p>
            <p className="mt-1 text-sm text-slate-600">Happy Customers</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-6 text-center">
            <p className="text-3xl font-bold text-blue-600">500+</p>
            <p className="mt-1 text-sm text-slate-600">Products Available</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-6 text-center">
            <p className="text-3xl font-bold text-blue-600">24/7</p>
            <p className="mt-1 text-sm text-slate-600">Expert Support</p>
          </div>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link href="/products">
          <Button size="lg">Explore Our Products</Button>
        </Link>
      </div>
    </div>
  );
}
