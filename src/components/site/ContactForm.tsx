import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const serviceOptions = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Business Consultation",
  "Other",
];

const fieldClass =
  "tap-feedback w-full rounded-xl border border-border bg-background/40 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary focus:shadow-[0_0_0_1px_var(--primary),0_0_32px_-10px_var(--primary)]";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return setError("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
      return setError("Please enter a valid email address.");
    if (!service) return setError("Please select a service.");
    if (!enquiry.trim()) return setError("Please describe your enquiry.");
    setError(null);
    setSent(true);
    setName("");
    setEmail("");
    setService("");
    setEnquiry("");
  }

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.3em] text-primary uppercase">Contact</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">Let&apos;s Connect</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            For business enquiries, digital projects, partnerships and networking conversations.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-3xl"
              style={{ animation: "float-slow 12s ease-in-out infinite" }}
            />
            <form
              onSubmit={onSubmit}
              noValidate
              className="glass-panel relative grid gap-4 rounded-[1.75rem] border-primary/20 p-6 shadow-[var(--shadow-lift)] sm:p-9"
            >
              <input
                className={fieldClass}
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Name"
              />
              <input
                type="email"
                className={fieldClass}
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Mail ID"
              />
              <select
                className={`${fieldClass} appearance-none`}
                value={service}
                onChange={(e) => setService(e.target.value)}
                aria-label="Services"
              >
                <option value="">Services</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option} className="bg-card text-foreground">
                    {option}
                  </option>
                ))}
              </select>
              <textarea
                rows={5}
                className={`${fieldClass} resize-none`}
                placeholder="How can we work together?"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                aria-label="Enquiry"
              />

              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              {sent ? (
                <p className="flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Thank you! Your enquiry has been submitted successfully.
                </p>
              ) : null}

              <button
                type="submit"
                className="tap-feedback magnetic mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-[0.2em] text-primary-foreground uppercase shadow-[var(--shadow-lift)] transition-all duration-300 hover:brightness-110"
              >
                Submit <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
