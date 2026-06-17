"use client";

import type { Category, ProductFilters } from "@/types/product";
import { PRICE_RANGES, SORT_OPTIONS } from "@/utils/constants";

interface ProductFilterProps {
  categories: Category[];
  filters: ProductFilters;
  onFilterChange: <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => void;
  onPriceRangeChange: (min: number, max: number) => void;
  onReset: () => void;
  resultCount: number;
}

export default function ProductFilter({
  categories,
  filters,
  onFilterChange,
  onPriceRangeChange,
  onReset,
  resultCount,
}: ProductFilterProps) {
  return (
    <aside
      className="space-y-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
      aria-label="Product filters"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
        <button
          onClick={onReset}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Reset
        </button>
      </div>

      <p className="text-sm text-slate-500">
        {resultCount} product{resultCount !== 1 ? "s" : ""} found
      </p>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-slate-700">
          Category
        </legend>
        <div className="space-y-2">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="category"
              value="all"
              checked={filters.category === "all"}
              onChange={() => onFilterChange("category", "all")}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700">All Categories</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={filters.category === cat.id}
                onChange={() => onFilterChange("category", cat.id)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">{cat.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-slate-700">
          Price Range
        </legend>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="price"
                checked={
                  filters.minPrice === range.min && filters.maxPrice === range.max
                }
                onChange={() => onPriceRangeChange(range.min, range.max)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">{range.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="sort" className="mb-2 block text-sm font-semibold text-slate-700">
          Sort By
        </label>
        <select
          id="sort"
          value={filters.sort}
          onChange={(e) =>
            onFilterChange("sort", e.target.value as ProductFilters["sort"])
          }
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}
