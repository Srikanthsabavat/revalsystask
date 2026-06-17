"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { CartSummary } from "@/types/cart";
import { formatPrice } from "@/utils/helpers";
import { FREE_SHIPPING_THRESHOLD } from "@/utils/constants";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/common/Button";

interface CartSummaryProps {
  summary: CartSummary;
}

export default function CartSummaryPanel({ summary }: CartSummaryProps) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleCheckout = () => {
    if (isAuthenticated) {
      router.push("/checkout");
    } else {
      router.push("/login?redirect=/checkout");
    }
  };

  return (
    <aside
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      aria-label="Cart summary"
    >
      <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>

      <dl className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <dt className="text-slate-600">Subtotal ({summary.itemCount} items)</dt>
          <dd className="font-medium text-slate-900">{formatPrice(summary.subtotal)}</dd>
        </div>
        <div className="flex justify-between text-sm">
          <dt className="text-slate-600">Shipping</dt>
          <dd className="font-medium text-slate-900">
            {summary.shipping === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              formatPrice(summary.shipping)
            )}
          </dd>
        </div>
        <div className="flex justify-between text-sm">
          <dt className="text-slate-600">Tax (8%)</dt>
          <dd className="font-medium text-slate-900">{formatPrice(summary.tax)}</dd>
        </div>
        <div className="border-t border-slate-200 pt-3">
          <div className="flex justify-between">
            <dt className="text-base font-semibold text-slate-900">Grand Total</dt>
            <dd className="text-xl font-bold text-blue-600">
              {formatPrice(summary.total)}
            </dd>
          </div>
        </div>
      </dl>

      {summary.subtotal > 0 && summary.subtotal < FREE_SHIPPING_THRESHOLD && (
        <p className="mt-3 text-xs text-slate-500">
          Add {formatPrice(FREE_SHIPPING_THRESHOLD - summary.subtotal)} more for free shipping!
        </p>
      )}

      <Button
        className="mt-6 w-full"
        size="lg"
        disabled={summary.itemCount === 0}
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>

      <Link href="/products">
        <Button variant="ghost" className="mt-2 w-full">
          Continue Shopping
        </Button>
      </Link>
    </aside>
  );
}
