"use client";

import { useCart } from "@/hooks/useCart";
import CartItemRow from "@/components/cart/CartItem";
import CartSummaryPanel from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPageClient() {
  const { items, summary } = useCart();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <section aria-label="Cart items">
        <ul className="rounded-xl border border-slate-200 bg-white px-6 shadow-sm">
          {items.map((item) => (
            <CartItemRow key={item.product.id} item={item} />
          ))}
        </ul>
      </section>
      <CartSummaryPanel summary={summary} />
    </div>
  );
}
