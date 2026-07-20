import { createFileRoute, Link } from "@tanstack/react-router";
import magneticsHero from "@/assets/signtech-logo.png";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "./signs";

export const Route = createFileRoute("/magnetics")({
  head: () => ({
    meta: [
      { title: "Vehicle Magnetics — Removable Door Signs | SignTech" },
      { name: "description", content: "Durable, washable, removable vehicle magnetic signs starting at $50/pair. Professional appearance, easy to install, fade resistant." },
      { property: "og:title", content: "Vehicle Magnetics by SignTech" },
      { property: "og:description", content: "Removable vehicle magnetic signs. Three tiers from $50/pair." },
      { property: "og:image", content: magneticsHero },
    ],
  }),
  component: MagneticsPage,
});

const features = ["Durable", "Long lasting", "Removable", "Washable", "Professional appearance", "Strong", "Easy to install", "Fade resistant"];

const tiers = [
  { name: "Basic", price: "$50", per: "/ pair", desc: "1-color on white", highlight: false },
  { name: "Step-up", price: "$60", per: "/ pair", desc: "2-colors on white with border", highlight: true },
  { name: "Professional", price: "$80", per: "/ pair", desc: "2-colors on background color", highlight: false },
];

function MagneticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Magnetics"
        copy="Removable, washable, fade-resistant door magnetics—perfect for personal vehicles, side gigs, and small fleets."
        image={magneticsHero}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-bold text-ink">Built to stick around.</h2>
            <p className="mt-3 text-ink/70">Every magnetic ships ready to mount and stays put through wash cycles, weather, and miles.</p>
            <ul className="mt-6 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink">
                  <Check className="h-4 w-4 text-ember" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-3">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className={
                    "flex flex-col rounded-2xl border p-6 " +
                    (t.highlight ? "border-honey bg-honey/10 shadow-lg" : "border-ink/10 bg-white")
                  }
                >
                  {t.highlight && (
                    <div className="mb-3 inline-flex w-fit rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-honey">
                      Most popular
                    </div>
                  )}
                  <div className="font-display text-xl font-semibold text-ink">{t.name}</div>
                  <p className="mt-1 text-sm text-ink/60">{t.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-ink">{t.price}</span>
                    <span className="text-sm text-ink/60">{t.per}</span>
                  </div>
                  <div className="mt-1 text-xs text-ink/50">starting from</div>
                  <Link to="/quote" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream hover:bg-ink/90">
                    Quote this tier <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
