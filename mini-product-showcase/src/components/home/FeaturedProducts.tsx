import Link from "next/link";
import type { Product } from "@/types/product";
import ProductGrid from "@/components/products/ProductGrid";
import Button from "@/components/common/Button";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 id="featured-heading" className="text-3xl font-bold text-slate-900">
              Featured Products
            </h2>
            <p className="mt-2 text-slate-600">
              Hand-picked electronics our customers love most
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>

        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
