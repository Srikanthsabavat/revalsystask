export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  category: string;
  categoryId: string;
  brand: string;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
  specifications: ProductSpecification[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export type SortOption = "price-asc" | "price-desc" | "rating-desc" | "name-asc";

export interface ProductFilters {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  sort: SortOption;
}

export const DEFAULT_FILTERS: ProductFilters = {
  search: "",
  category: "all",
  minPrice: 0,
  maxPrice: 5000,
  sort: "rating-desc",
};
