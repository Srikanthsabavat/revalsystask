import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import type { Category, Product, ProductFilters } from "@/types/product";
import { filterProducts } from "@/utils/helpers";

const products = productsData as Product[];
const categories = categoriesData as Category[];

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter((p) => p.featured);
}

export async function getProductsByCategory(
  categoryId: string
): Promise<Product[]> {
  return products.filter((p) => p.categoryId === categoryId);
}

export async function getAllCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategoryById(
  id: string
): Promise<Category | undefined> {
  return categories.find((c) => c.id === id);
}

export async function searchAndFilterProducts(
  filters: ProductFilters
): Promise<Product[]> {
  return filterProducts(products, filters);
}

export async function getRelatedProductsForProduct(
  productId: string,
  categoryId: string,
  limit = 4
): Promise<Product[]> {
  return products
    .filter((p) => p.id !== productId && p.categoryId === categoryId)
    .slice(0, limit);
}

export function getProductIds(): string[] {
  return products.map((p) => p.id);
}

export function getPriceRange(): { min: number; max: number } {
  const prices = products.map((p) => p.price);
  return {
    min: Math.floor(Math.min(...prices)),
    max: Math.ceil(Math.max(...prices)),
  };
}
