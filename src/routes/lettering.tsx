import { createFileRoute, Link } from "@tanstack/react-router";
import letteringHero from "@/assets/lettering-hero.png";
import united from "@/assets/lettering-united.jpg.asset.json";

import truck1 from "@/assets/lettering-truck1.png";
import truck3 from "@/assets/lettering-truck3.png";
import truck4 from "@/assets/lettering-truck4.png";
import jennair2 from "@/assets/lettering-jennair2.png";
import { ArrowRight, Car, AppWindow, Ship, Layers, Shapes, Palette } from "lucide-react";
import { PageHeader } from "./signs";

const gallery = [
  { src: united.url, alt: "United Door & Dock service truck lettering" },
  { src: truck1, alt: "Kin-Ko Ace Hardware box truck lettering" },
  { src: truck4, alt: "Unique Products & Service Corp box truck lettering" },
  { src: truck3, alt: "L. Dover Service Auto Glass van lettering" },
  { src: jennair2, alt: "Jenn-Air Central Distributing entrance door lettering" },
];

export const Route = createFileRoute("/lettering")({
  head: () => ({
    meta: [
      { title: "Vinyl Lettering — Vehicle, Window, Boat, Logos | SignTech" },
      { name: "description", content: "Custom vinyl lettering for vehicles, windows, boats and RVs, plus pre-spaced ready-to-apply, logos, and multi-colored vinyl graphics." },
      { property: "og:title", content: "Vinyl Lettering by SignTech" },
      { property: "og:description", content: "Clean, durable vinyl lettering for every surface." },
      { property: "og:image", content: letteringHero },
    ],
  }),
  component: LetteringPage,
});

const services = [
  { Icon: Car, t: "Vehicle", d: "Cars, vans, trucks, and fleets." },
  { Icon: AppWindow, t: "Window", d: "Storefronts and office glass." },
  { Icon: Ship, t: "Boat / RV", d: "Marine-grade vinyl that holds up." },
  { Icon: Layers, t: "Pre-spaced ready-to-apply", d: "Drop-shipped and ready to install." },
  { Icon: Shapes, t: "Logos", d: "Reproduce your brand crisply." },
  { Icon: Palette, t: "Multi-colored vinyl graphics", d: "Layered color work, registered tight." },
];

function LetteringPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Vinyl Lettering"
        copy="Clean, durable vinyl that reads well from the curb—on any surface that holds a graphic."
        image={letteringHero}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Lettering in the wild</h2>
          <Link to="/quote" className="hidden shrink-0 text-sm font-semibold text-ember hover:underline sm:inline">Get a quote →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <div key={g.alt} className="overflow-hidden rounded-2xl border border-ink/10 bg-cream">
              <img src={g.src} alt={g.alt} className="h-64 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-ink/10 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-honey/20 text-ember">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-xl font-semibold text-ink">{t}</div>
              <p className="mt-1 text-sm text-ink/60">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 rounded-3xl border border-ink/10 bg-cream px-6 py-12 sm:px-10">
          <div className="text-center text-xs font-semibold uppercase tracking-widest text-ember">Our specialty</div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-ink/70">
            Vinyl lettering is where it all started. From a single window decal to a full fleet,
            we cut, weed, and apply every job with the same care.
          </p>
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink/90">
            Get a quote on lettering <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
