import { createFileRoute, Link } from "@tanstack/react-router";
import signsHero from "@/assets/signs-hero.png";
import ban1 from "@/assets/signs-ban1.png";
import ban2 from "@/assets/signs-ban2.png";
import ban3 from "@/assets/signs-ban3.png";
import ban4 from "@/assets/signs-ban4.png";
import ban6 from "@/assets/signs-ban6.png";
import ban7 from "@/assets/signs-ban7.png";
import ban8 from "@/assets/signs-ban8.png";
import ban9 from "@/assets/signs-ban9.png";
import van5 from "@/assets/signs-van5.png";
import murray from "@/assets/signs-murray.jpg.asset.json";
import svnMedical from "@/assets/signs-svn-medical.jpg.asset.json";
import tcsa from "@/assets/signs-tcsa.jpg.asset.json";
import coleman from "@/assets/signs-coleman.jpg.asset.json";
import svnBricher from "@/assets/signs-svn-bricher.jpg.asset.json";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/signs")({
  head: () => ({
    meta: [
      { title: "Signs — Acrylic, Aluminum, Coroplast & More | SignTech" },
      { name: "description", content: "Custom signs on acrylic, aluminum, coroplast, foamcore, gatorfoam, lexan, posterboard, PVC, real estate, wooden site, and magnetic substrates." },
      { property: "og:title", content: "Signs by SignTech" },
      { property: "og:description", content: "Custom signs on every substrate—built to last." },
      { property: "og:image", content: signsHero },
    ],
  }),
  component: SignsPage,
});

const gallery = [
  { src: coleman.url, alt: "ColemanLand.com 'For Sale' three-sided commercial land sign" },
  { src: svnBricher.url, alt: "SVN Landmark 'For Lease' retail property sign at Bricher Crossing" },
  { src: ban4, alt: "Northwood product labels in die-cut vinyl" },
  { src: ban7, alt: "Summit Peak Builders site sign with crisp typography" },
  { src: murray.url, alt: "Murray Commercial 'For Lease' post-mounted property sign" },
  { src: ban3, alt: "M.I.C., Inc. general contractor sign in red and black" },
  { src: ban8, alt: "Clearflow Home Services door hangers in three colorways" },
  { src: tcsa.url, alt: "TCSA Soccer facility sign at Breen Park South" },
  { src: ban1, alt: "B & R Storage outdoor sign with multi-color vinyl" },
  { src: van5, alt: "Illinois service-area map sign with red vinyl regions" },
  { src: ban6, alt: "Spencer Construction, Inc. property sign in black vinyl" },
  { src: svnMedical.url, alt: "SVN Landmark 'For Lease' medical office property sign" },
  { src: ban2, alt: "Platforms by Wallace tradeshow sign with multi-color graphics" },
  { src: ban9, alt: "North Ridge Storage roadside sign with layered graphics" },
];

const materials = [
  { name: "Acrylic", desc: "Sleek, premium look for interior signage." },
  { name: "Aluminum", desc: "Weather-tough outdoor workhorse." },
  { name: "Coroplast", desc: "Lightweight, affordable yard and event signs." },
  { name: "Foamcore", desc: "Smooth-faced board for indoor displays." },
  { name: "Gatorfoam", desc: "Rigid foam with a dent-resistant surface." },
  { name: "Lexan", desc: "Impact-resistant polycarbonate." },
  { name: "Posterboard", desc: "Quick-turn temporary signage." },
  { name: "PVC Plastic", desc: "Durable, paintable, and waterproof." },
  { name: "Real Estate", desc: "Standard sizes and post-ready frames." },
  { name: "Wooden Site", desc: "Heavy-duty construction site signs." },
  { name: "Magnetic", desc: "Removable vehicle and door magnetics." },
];

export function SignsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Signs"
        copy="From storefront to job site, we build signs on the right substrate for the environment, the lifespan, and the budget."
        image={signsHero}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-ember">Recent work</div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">Signs in the wild</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-ink/60 sm:block">
            A small sampling of signs, layered graphics, and finished work we've produced.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.src} className="overflow-hidden rounded-2xl border border-ink/10 bg-cream">
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
            </figure>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream hover:bg-ink/90">
            Get a quote on a sign <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m) => (
            <div key={m.name} className="rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-ink/20 hover:shadow-md">
              <div className="font-display text-xl font-semibold text-ink">{m.name}</div>
              <p className="mt-2 text-sm text-ink/60">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function PageHeader({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 opacity-30">
        <img src={image} alt="" width={1280} height={896} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-honey">{eyebrow}</div>
          <h1 className="mt-3 font-display text-5xl font-bold sm:text-6xl">{title}</h1>
          <p className="mt-4 text-lg text-cream/80">{copy}</p>
        </div>
      </div>
    </section>
  );
}
