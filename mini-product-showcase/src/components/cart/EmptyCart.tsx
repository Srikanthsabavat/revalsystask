import Link from "next/link";
import Button from "@/components/common/Button";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 py-20 text-center">
      <svg
        className="mb-4 h-16 w-16 text-slate-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <h2 className="text-xl font-semibold text-slate-900">Your cart is empty</h2>
      <p className="mt-2 max-w-sm text-slate-500">
        Looks like you haven&apos;t added any products yet. Start shopping to fill your cart!
      </p>
      <Link href="/products" className="mt-6">
        <Button size="lg">Browse Products</Button>
      </Link>
    </div>
  );
}
