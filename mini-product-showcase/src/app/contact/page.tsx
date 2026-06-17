import { contactMetadata } from "@/lib/metadata";
import ContactPageClient from "./ContactPageClient";

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Have a question? We&apos;d love to hear from you.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <section aria-labelledby="contact-info-heading">
          <h2 id="contact-info-heading" className="text-xl font-semibold text-slate-900">
            Get in Touch
          </h2>
          <address className="mt-4 space-y-4 not-italic text-slate-600">
            <div>
              <h3 className="font-medium text-slate-900">Address</h3>
              <p className="mt-1">123 Tech Boulevard<br />San Francisco, CA 94105</p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Phone</h3>
              <p className="mt-1">
                <a href="tel:+18005551234" className="text-blue-600 hover:underline">
                  +1 (800) 555-1234
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Email</h3>
              <p className="mt-1">
                <a href="mailto:support@electrohub.com" className="text-blue-600 hover:underline">
                  support@electrohub.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Business Hours</h3>
              <p className="mt-1">
                Mon – Fri: 9:00 AM – 8:00 PM PST<br />
                Sat – Sun: 10:00 AM – 6:00 PM PST
              </p>
            </div>
          </address>
        </section>

        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="sr-only">
            Contact Form
          </h2>
          <ContactPageClient />
        </section>
      </div>
    </div>
  );
}
