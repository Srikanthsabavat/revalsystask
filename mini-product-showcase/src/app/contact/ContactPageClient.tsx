"use client";

import { useState, type FormEvent } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-slate-900">Message Sent!</h2>
        <p className="mt-2 text-slate-600">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="First Name" required />
        <Input label="Last Name" required />
      </div>
      <Input label="Email Address" type="email" required />
      <Input label="Subject" required />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="How can we help you?"
        />
      </div>
      <Button type="submit" size="lg" isLoading={isLoading}>
        Send Message
      </Button>
    </form>
  );
}
