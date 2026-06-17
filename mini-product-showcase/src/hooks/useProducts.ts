"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Category, Product, ProductFilters } from "@/types/product";
import { DEFAULT_FILTERS } from "@/types/product";
import { filterProducts } from "@/utils/helpers";

interface UseProductsOptions {
  initialProducts: Product[];
  initialCategories?: Category[];
}

export function useProducts({
  initialProducts,
  initialCategories = [],
}: UseProductsOptions) {
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = useMemo(
    () => filterProducts(initialProducts, filters),
    [initialProducts, filters]
  );

  const updateFilter = useCallback(
    <K extends keyof ProductFilters>(key: K, value: ProductFilters[K]) => {
      setIsLoading(true);
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 200);
    return () => clearTimeout(timer);
  }, [filters]);

  const featuredProducts = useMemo(
    () => initialProducts.filter((p) => p.featured),
    [initialProducts]
  );

  return {
    products: filteredProducts,
    allProducts: initialProducts,
    categories: initialCategories,
    filters,
    isLoading,
    featuredProducts,
    updateFilter,
    resetFilters,
    setFilters,
    resultCount: filteredProducts.length,
  };
}
