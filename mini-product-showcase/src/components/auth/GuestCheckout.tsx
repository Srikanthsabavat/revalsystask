"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/common/Button";

export default function GuestCheckout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loginAsGuest } = useAuth();
  const redirect = searchParams.get("redirect") ?? "/";

  const handleGuestLogin = () => {
    loginAsGuest();
    router.push(redirect);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
      <h2 className="text-lg font-semibold text-slate-900">Continue as Guest</h2>
      <p className="mt-2 text-sm text-slate-600">
        Shop without creating an account. You can always register later.
      </p>
      <Button
        variant="outline"
        className="mt-4 w-full"
        size="lg"
        onClick={handleGuestLogin}
      >
        Continue as Guest
      </Button>
    </div>
  );
}
