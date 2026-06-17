import { Suspense } from "react";
import { loginMetadata } from "@/lib/metadata";
import LoginForm from "@/components/auth/LoginForm";
import GuestCheckout from "@/components/auth/GuestCheckout";
import Loader from "@/components/common/Loader";

export const metadata = loginMetadata;

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
        <p className="mt-2 text-slate-600">
          Sign in to your account or continue as a guest
        </p>
      </header>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <Suspense fallback={<Loader size="sm" />}>
          <LoginForm />
        </Suspense>
      </div>

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-sm text-slate-500">or</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <Suspense fallback={<Loader size="sm" />}>
        <GuestCheckout />
      </Suspense>
    </div>
  );
}
