"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { Category, Product } from "@/types/product";
import { useProducts } from "@/hooks/useProducts";
import ProductSearch from "@/components/products/ProductSearch";
import ProductFilter from "@/components/products/ProductFilter";
import ProductGrid from "@/components/products/ProductGrid";

interface ProductsPageClientProps {
  products: Product[];
  categories: Category[];
}

export default function ProductsPageClient({
  products,
  categories,
}: ProductsPageClientProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const {
    products: filteredProducts,
    filters,
    isLoading,
    updateFilter,
    resetFilters,
    setFilters,
    resultCount,
  } = useProducts({ initialProducts: products, initialCategories: categories });

  const handlePriceRangeChange = (min: number, max: number) => {
    setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
  };

  useEffect(() => {
    if (categoryParam) {
      setFilters((prev) => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam, setFilters]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="space-y-6">
        <ProductSearch
          value={filters.search}
          onChange={(value) => updateFilter("search", value)}
        />
        <ProductFilter
          categories={categories}
          filters={filters}
          onFilterChange={updateFilter}
          onPriceRangeChange={handlePriceRangeChange}
          onReset={resetFilters}
          resultCount={resultCount}
        />
      </div>

      <ProductGrid products={filteredProducts} isLoading={isLoading} />
    </div>
  );
}
