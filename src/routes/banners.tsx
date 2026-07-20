import { createFileRoute, Link } from "@tanstack/react-router";
import bannersHero from "@/assets/banners-hero.png";
import ban1 from "@/assets/banners-ban1.png";
import ban2 from "@/assets/banners-ban2.png";
import ban3 from "@/assets/banners-ban3.png";
import ban4 from "@/assets/banners-ban4.png";
import ban5 from "@/assets/banners-ban5.png";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "./signs";

const gallery = [
  { src: ban1, alt: "Hinsdale Nurseries Incorporated vinyl banner with red tree logo" },
  { src: ban4, alt: "Willow Creek Garden Center vinyl banner with willow tree illustration" },
  { src: ban2, alt: "Northern Illinois Gas Education Fair chalkboard-style banner" },
  { src: ban3, alt: "Welcome New Members banner with balloons and confetti" },
  { src: ban5, alt: "Welcome New Families Community Open House banner" },
];

export const Route = createFileRoute("/banners")({
  head: () => ({
    meta: [
      { title: "Banners — Vinyl, Nylon, Poly, Tyvek | SignTech" },
      { name: "description", content: "Custom banners for street, table, parade, boulevard, and convention—built on vinyl, nylon, poly, and tyvek." },
      { property: "og:title", content: "Banners by SignTech" },
      { property: "og:description", content: "Banners for every use case, in every material." },
      { property: "og:image", content: bannersHero },
    ],
  }),
  component: BannersPage,
});

const materials = ["Vinyl", "Nylon", "Poly", "Tyvek"];
const useCases = [
  { t: "Street", d: "Pole-mounted, wind-rated street banners." },
  { t: "Table", d: "Trade show table runners and skirts." },
  { t: "Parade", d: "Lightweight, hand-carried parade banners." },
  { t: "Boulevard", d: "Large-format city and seasonal display." },
  { t: "Convention", d: "Stage and booth backdrops." },
];

function BannersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Banners"
        copy="From hand-carried parade banners to wind-rated boulevard installs, we print on the right fabric for the job."
        image={bannersHero}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-ember">Recent work</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Banners in the wild</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-ink/60 sm:block">
            A small sampling of banners we've produced.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.src} className="overflow-hidden rounded-2xl border border-ink/10 bg-cream">
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
            </figure>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink/90">
            Get a quote on a banner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">Materials</h2>
            <p className="mt-2 text-ink/70">Choose by environment, lifespan, and weight.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {materials.map((m) => (
                <div key={m} className="rounded-xl border border-ink/10 bg-cream px-4 py-5 text-center font-display text-lg font-semibold text-ink">
                  {m}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">Use cases</h2>
            <p className="mt-2 text-ink/70">Sized and finished for the way it'll hang.</p>
            <ul className="mt-6 space-y-3">
              {useCases.map((u) => (
                <li key={u.t} className="flex gap-4 rounded-xl border border-ink/10 bg-white p-4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-honey font-display font-bold text-ink">
                    {u.t[0]}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-ink">{u.t}</div>
                    <div className="text-sm text-ink/60">{u.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
