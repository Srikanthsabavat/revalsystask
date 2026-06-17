import { checkoutMetadata } from "@/lib/metadata";
import CheckoutPageClient from "./CheckoutPageClient";

export const metadata = checkoutMetadata;

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
        <p className="mt-2 text-slate-600">Complete your order securely</p>
      </header>
      <CheckoutPageClient />
    </div>
  );
}
