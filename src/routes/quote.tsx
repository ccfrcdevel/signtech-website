import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Printer, PenTool, FileUp, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Quote & Order — SignTech | Geneva, IL" },
      { name: "description", content: "Get a custom quote for signs, banners, or vinyl lettering. Email or fax your sketch or specs and we'll send back a proof and a price." },
      { property: "og:title", content: "Get a Quote from SignTech" },
      { property: "og:description", content: "Email or fax your specs—we'll send back a proof and a quote." },
    ],
  }),
  component: QuotePage,
});

const options = [
  {
    Icon: PenTool,
    t: "Let us design it",
    d: "Email or fax your sketch or specifications for your sign, banner, or lettering project. We'll design it and send back a proof and a quote.",
  },
  {
    Icon: FileUp,
    t: "You design it",
    d: "Email us your Illustrator or EPS file, or fax a printed proof with your specifications, and we'll send back a quote.",
  },
  {
    Icon: HelpCircle,
    t: "Questions",
    d: "Call, fax, or email us with any questions about products, materials, or capabilities.",
  },
];

function QuotePage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-ember">Quote / Order</div>
          <h1 className="mt-3 font-display text-5xl font-bold text-ink sm:text-6xl">
            Tell us about your project.
          </h1>
          <p className="mt-6 text-lg text-ink/70">
            Three ways to get started. Pick whichever fits how you work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {options.map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-ink/10 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-honey text-ink">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{t}</h2>
              <p className="mt-2 text-sm text-ink/70">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-ink text-cream">
          <div className="grid gap-8 p-10 sm:p-12 md:grid-cols-3">
            <a href="tel:16303736340" className="group flex items-start gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-honey text-ink">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-honey">Call</div>
                <div className="mt-1 font-display text-lg font-semibold group-hover:text-honey">1-630-373-6340</div>
              </div>
            </a>
            <a href="mailto:info@SignTechCorp.com" className="group flex items-start gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-honey text-ink">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-honey">Email</div>
                <div className="mt-1 font-display text-lg font-semibold group-hover:text-honey">info@SignTechCorp.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-honey text-ink">
                <Printer className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-honey">Fax</div>
                <div className="mt-1 font-display text-lg font-semibold">1-630-761-0765</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
