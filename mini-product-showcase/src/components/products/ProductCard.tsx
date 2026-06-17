"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import { formatPrice, calculateDiscount } from "@/utils/helpers";
import Badge from "@/components/common/Badge";
import { useCart } from "@/hooks/useCart";
import Button from "@/components/common/Button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, updateQuantity, getItemQuantity } = useCart();
  const discount = calculateDiscount(product.price, product.originalPrice);
  const quantity = getItemQuantity(product.id);

  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/products/${product.id}`}
        className="relative block h-[220px] w-full shrink-0 overflow-hidden bg-slate-100"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {discount && (
          <Badge variant="danger" className="absolute left-3 top-3">
            -{discount}%
          </Badge>
        )}
        {!product.inStock && (
          <Badge variant="warning" className="absolute right-3 top-3">
            Out of Stock
          </Badge>
        )}
      </Link>

      <div className="flex h-[156px] flex-col justify-between px-4 pb-4 pt-3">
        <div className="space-y-2.5">
          <span className="inline-flex w-fit items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-700">
            {product.brand}
          </span>

          <div className="flex items-center justify-between gap-2">
            <Link href={`/products/${product.id}`} className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-slate-900 hover:text-blue-600">
                {product.name}
              </h3>
            </Link>
            <div
              className="flex shrink-0 items-center gap-0.5"
              aria-label={`Rating: ${product.rating} out of 5`}
            >
              <div className="flex text-amber-400" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-current" : "fill-slate-200"}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-green-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-2 flex justify-center">
        {quantity > 0 ? (
          <div className="flex h-8 w-[88%] overflow-hidden rounded-lg border border-blue-200 bg-blue-50">
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="flex flex-1 cursor-pointer items-center justify-center text-base font-medium text-blue-600 transition-colors hover:bg-blue-100"
              aria-label={`Decrease quantity of ${product.name}`}
            >
              −
            </button>
            <span
              className="flex flex-1 items-center justify-center border-x border-blue-200 text-xs font-semibold text-slate-900"
              aria-label={`Quantity: ${quantity}`}
            >
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              disabled={!product.inStock}
              className="flex flex-1 cursor-pointer items-center justify-center text-base font-medium text-blue-600 transition-colors hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label={`Increase quantity of ${product.name}`}
            >
              +
            </button>
          </div>
        ) : (
          <Button
            size="sm"
            variant="primary"
            disabled={!product.inStock}
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to cart`}
            className="h-8 w-[88%] text-xs"
          >
            Add
          </Button>
        )}
        </div>
      </div>
    </article>
  );
}
