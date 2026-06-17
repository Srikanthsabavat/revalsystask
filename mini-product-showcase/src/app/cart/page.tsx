import { cartMetadata } from "@/lib/metadata";
import CartPageClient from "./CartPageClient";

export const metadata = cartMetadata;

export default function CartPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
        <p className="mt-2 text-slate-600">Review your items before checkout</p>
      </header>
      <CartPageClient />
    </div>
  );
}
