import { Suspense } from "react";
import { productsMetadata } from "@/lib/metadata";
import ProductsPageClient from "./ProductsPageClient";
import { getAllProducts, getAllCategories } from "@/services/productService";
import Loader from "@/components/common/Loader";

export const metadata = productsMetadata;

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
        <p className="mt-2 text-slate-600">
          Browse our complete collection of premium electronics
        </p>
      </header>

      <Suspense fallback={<Loader label="Loading products..." />}>
        <ProductsPageClient products={products} categories={categories} />
      </Suspense>
    </div>
  );
}
