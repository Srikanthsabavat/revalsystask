"use client";

import { useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { formatPrice } from "@/utils/helpers";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CheckoutPageClient() {
  return (
    <ProtectedRoute>
      <CheckoutContent />
    </ProtectedRoute>
  );
}

function CheckoutContent() {
  const { items, summary, clearCart } = useCart();
  const { user } = useAuth();
  const [isComplete, setIsComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0 && !isComplete) {
    return <EmptyCart />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    clearCart();
    setIsComplete(true);
    setIsProcessing(false);
  };

  if (isComplete) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Order Placed!</h2>
        <p className="mt-2 text-slate-600">
          Thank you for your purchase. A confirmation email will be sent to{" "}
          {user?.email}.
        </p>
        <Link href="/products" className="mt-6 inline-block">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Shipping Information</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Input label="Full Name" defaultValue={user?.name ?? ""} required />
          <Input label="Email" type="email" defaultValue={user?.email ?? ""} required />
          <Input label="Address" className="sm:col-span-2" required />
          <Input label="City" required />
          <Input label="ZIP Code" required />
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
        <ul className="mt-4 divide-y divide-slate-200">
          {items.map((item) => (
            <li key={item.product.id} className="flex justify-between py-3 text-sm">
              <span>
                {item.product.name} × {item.quantity}
              </span>
              <span className="font-medium">
                {formatPrice(item.product.price * item.quantity)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-slate-200 pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-blue-600">{formatPrice(summary.total)}</span>
          </div>
        </div>
      </section>

      <Button type="submit" size="lg" className="w-full" isLoading={isProcessing}>
        Place Order — {formatPrice(summary.total)}
      </Button>
    </form>
  );
}
