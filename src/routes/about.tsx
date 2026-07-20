import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Lock, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SignTech — Family-Owned Sign Shop in Geneva, IL" },
      { name: "description", content: "SignTech is a family-owned vinyl sign business in Geneva, IL serving customers since May 1989." },
      { property: "og:title", content: "About SignTech" },
      { property: "og:description", content: "Family-owned in Geneva, IL since 1989." },
    ],
  }),
  component: AboutPage,
});

const promises = [
  { Icon: HeartHandshake, t: "Quality you can see", d: "We design and produce products that reflect your image and needs, using high-quality materials." },
  { Icon: Lock, t: "Your info stays yours", d: "We don't sell, rent, or share client information with outside parties." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <div className="text-xs font-semibold uppercase tracking-widest text-ember">About us</div>
          <h1 className="mt-3 font-display text-5xl font-bold text-ink sm:text-6xl">
            A family sign shop in Geneva, IL.
          </h1>
          <p className="mt-6 text-lg text-ink/70">
            SignTech designs and produces quality products that reflect our clients' image and needs,
            using high-quality materials. We've been a family-owned business serving Geneva, IL since May 1989.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {promises.map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-ink/10 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-honey/20 text-ember">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display text-lg font-semibold text-ink">{t}</div>
              <p className="mt-1 text-sm text-ink/60">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-ink/10 bg-cream p-10 text-center">
          <div className="font-display text-6xl font-bold text-ember">Since 1989</div>
          <div className="mt-2 text-sm text-ink/70">Family-owned and operated in Geneva, IL</div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink/90">
            Start your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
