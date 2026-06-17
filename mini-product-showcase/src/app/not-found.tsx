import Link from "next/link";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center">
      <p className="text-6xl font-bold text-blue-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mt-2 text-slate-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/" className="mt-8">
        <Button size="lg">Back to Home</Button>
      </Link>
    </div>
  );
}
