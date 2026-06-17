"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice, calculateDiscount } from "@/utils/helpers";
import { useCart } from "@/hooks/useCart";
import ProductSpecification from "@/components/products/ProductSpecification";
import ProductGrid from "@/components/products/ProductGrid";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { addItem, isInCart, getItemQuantity } = useCart();
  const discount = calculateDiscount(product.price, product.originalPrice);
  const inCart = isInCart(product.id);
  const quantity = getItemQuantity(product.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-slate-900" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      <article>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {discount && (
              <Badge variant="danger" className="absolute left-4 top-4 text-sm">
                Save {discount}%
              </Badge>
            )}
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
              {product.brand} · {product.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex text-amber-400" aria-label={`Rating: ${product.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-current" : "fill-slate-200"}`}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-600">
                {product.rating} ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-slate-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-slate-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-slate-600">
              {product.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="info">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="flex-1"
                disabled={!product.inStock}
                onClick={() => addItem(product)}
              >
                {!product.inStock
                  ? "Out of Stock"
                  : inCart
                    ? `In Cart (${quantity}) — Add More`
                    : "Add to Cart"}
              </Button>
              <Link href="/cart" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  View Cart
                </Button>
              </Link>
            </div>

            {!product.inStock && (
              <p className="mt-3 text-sm text-amber-600" role="status">
                This item is currently out of stock. Check back soon!
              </p>
            )}
          </div>
        </div>

        <div className="mt-12">
          <ProductSpecification specifications={product.specifications} />
        </div>
      </article>

      {relatedProducts.length > 0 && (
        <section className="mt-16" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold text-slate-900">
            Related Products
          </h2>
          <p className="mt-2 text-slate-600">
            More great products in {product.category}
          </p>
          <div className="mt-8">
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  );
}
