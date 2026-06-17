"use client";

import Image from "next/image";
import Link from "next/link";
import type { CartItem } from "@/types/cart";
import { formatPrice } from "@/utils/helpers";
import { useCart } from "@/hooks/useCart";
import Button from "@/components/common/Button";

interface CartItemProps {
  item: CartItem;
}

export default function CartItemRow({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <li className="flex gap-4 border-b border-slate-200 py-6 last:border-b-0">
      <Link
        href={`/products/${product.id}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>

      <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href={`/products/${product.id}`}
            className="font-semibold text-slate-900 hover:text-blue-600"
          >
            {product.name}
          </Link>
          <p className="mt-1 text-sm text-slate-500">{product.brand}</p>
          <p className="mt-1 font-medium text-slate-900">
            {formatPrice(product.price)}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4 sm:mt-0">
          <div className="flex items-center rounded-lg border border-slate-300">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="px-3 py-1.5 text-slate-600 hover:bg-slate-50"
              aria-label={`Decrease quantity of ${product.name}`}
            >
              −
            </button>
            <span className="min-w-[2rem] px-2 text-center text-sm font-medium" aria-label={`Quantity: ${quantity}`}>
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="px-3 py-1.5 text-slate-600 hover:bg-slate-50"
              aria-label={`Increase quantity of ${product.name}`}
            >
              +
            </button>
          </div>

          <p className="hidden min-w-[5rem] text-right font-semibold text-slate-900 sm:block">
            {formatPrice(product.price * quantity)}
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeItem(product.id)}
            aria-label={`Remove ${product.name} from cart`}
            className="text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
}
