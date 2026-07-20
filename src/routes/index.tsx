import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Home as HomeIcon, Sparkles } from "lucide-react";
import wordmark from "@/assets/signtech-wordmark.png";

import signsCard from "@/assets/signs-ban1.png";
import bannersCard from "@/assets/banners-ban1.png";
import letteringCard from "@/assets/lettering-truck1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SignTech Corporation — Custom Signs, Banners & Vehicle Lettering | Geneva, IL" },
      { name: "description", content: "Family-owned sign shop in Geneva, IL designing and producing custom signs, banners, vehicle lettering, and magnetics since 1989." },
      { property: "og:title", content: "SignTech Corporation — Let Us BEE Your Source For Signs" },
      { property: "og:description", content: "Custom signs, banners, lettering and magnetics from Geneva, IL. Family-owned since 1989." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_right,theme(colors.honey)/40,transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs font-medium text-ink/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-ember" />
            Geneva, IL · Family-owned since 1989
          </div>
          <div className="mx-auto mt-8 max-w-3xl">
            <img
              src={wordmark}
              alt="SignTech"
              className="mx-auto w-full max-w-xl"
            />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-ink/70">
            Custom signs, banners, vehicle lettering, and magnetics—designed and produced
            by a family shop serving Geneva, IL and beyond.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-ink/90"
            >
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/signs"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-cream"
            >
              Browse products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-ink/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { Icon: Calendar, t: "Since 1989", s: "Over three decades of vinyl craft" },
            { Icon: HomeIcon, t: "Family-owned", s: "Geneva, IL — the same people, every order" },
            { Icon: Sparkles, t: "Made for your image", s: "Designs that reflect your brand and needs" },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-honey/20 text-ember">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-ink">{t}</div>
                <div className="text-xs text-ink/60">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">What we make</h2>
            <p className="mt-4 text-ink/70">
              From storefronts to fleet vehicles, we produce signage on the materials that fit the job.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
            { to: "/signs", title: "Signs", img: signsCard, desc: "Acrylic, aluminum, coroplast, lexan, real estate, and more." },
              { to: "/banners", title: "Banners", img: bannersCard, desc: "Vinyl, nylon, poly, tyvek—for street, table, parade, or convention." },
              { to: "/lettering", title: "Lettering", img: letteringCard, desc: "Vehicle, window, boat/RV, logos, and multi-colored vinyl graphics." },
            ].map((card) => (
              <Link
                key={card.to}
                to={card.to}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:border-ink/20 hover:shadow-lg"
              >
                <div className="aspect-[5/4] overflow-hidden bg-cream">
                  <img
                    src={card.img}
                    alt={card.title}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-semibold text-ink">{card.title}</h3>
                    <ArrowRight className="h-5 w-5 text-ink/40 transition group-hover:translate-x-1 group-hover:text-ember" />
                  </div>
                  <p className="mt-2 text-sm text-ink/60">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-honey">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-ink/70">Send us a sketch or specs and we'll send back a proof and a quote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink/90">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:16303736340" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-cream">
              Call 1-630-373-6340
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
