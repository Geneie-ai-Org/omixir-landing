import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Omixir Bioinformatics — Request a Demo" },
      { name: "description", content: "Reach the Omixir team for Assure inquiries, Geneie demos, partnerships, and general questions. Based in Bengaluru, Karnataka, India." },
      { property: "og:title", content: "Contact Omixir" },
      { property: "og:description", content: "Request a demo, partner with us, or ask a question." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="gradient-brand-soft">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Get in touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We'd love to hear from you — whether you're exploring Assure, evaluating Geneie, or looking to partner.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold text-foreground">Contact information</h2>
            <p className="mt-2 text-sm text-muted-foreground">Reach us directly through any of the following channels.</p>
            <div className="mt-8 space-y-5">
              <ContactItem icon={<Mail className="h-5 w-5" />} label="Email">
                <a href="mailto:support@omixir.com" className="hover:text-primary">support@omixir.com</a>
              </ContactItem>
              <ContactItem icon={<Phone className="h-5 w-5" />} label="Phone">
                <a href="tel:+918903266203" className="hover:text-primary">+91 89032 66203</a>
              </ContactItem>
              <ContactItem icon={<MapPin className="h-5 w-5" />} label="Location">
                Bengaluru, Karnataka, India
              </ContactItem>
            </div>
          </div>

          <div className="md:col-span-3">
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl border border-border bg-card p-6 md:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-secondary" />
                  <h3 className="mt-4 text-xl font-semibold text-foreground">Message sent</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Thanks for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Organization" name="org" />
                  </div>
                  <Field label="Email" name="email" type="email" required />
                  <div>
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <select name="subject" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                      <option>Assure Inquiry</option>
                      <option>Geneie Demo</option>
                      <option>Partnership</option>
                      <option>General</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90">
                    Send message <Send className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md gradient-brand text-primary-foreground">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">
        {label}{required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      <input name={name} type={type} required={required} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}