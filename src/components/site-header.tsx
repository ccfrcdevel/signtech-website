import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/signtech-wordmark.png";

const nav = [
  { to: "/signs", label: "Signs" },
  { to: "/banners", label: "Banners" },
  { to: "/lettering", label: "Lettering" },
  { to: "/magnetics", label: "Magnetics" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 text-ink backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="SignTech home">
          <img src={logo} alt="SignTech" className="h-10 w-auto sm:h-12" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-ink/70 transition hover:text-ember"
              activeProps={{ className: "text-ember" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/quote"
            className="inline-flex items-center rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream transition hover:bg-ink/90"
          >
            Get a quote
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-2 text-sm font-semibold text-cream"
            >
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
