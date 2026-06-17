"use client";

import { useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { DEMO_CREDENTIALS } from "@/utils/constants";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const redirect = searchParams.get("redirect") ?? "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = await login({ email, password });

    if (success) {
      router.push(redirect);
    } else {
      setError("Invalid email or password. Try the demo credentials below.");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        autoComplete="email"
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
        autoComplete="current-password"
      />

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
        Sign In
      </Button>

      <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-800">
        <p className="font-medium">Demo Credentials:</p>
        <p className="mt-1">
          Email: {DEMO_CREDENTIALS.email} | Password: {DEMO_CREDENTIALS.password}
        </p>
      </div>
    </form>
  );
}
