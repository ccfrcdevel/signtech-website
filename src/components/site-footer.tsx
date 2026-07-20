import { Link } from "@tanstack/react-router";
import logo from "@/assets/signtech-wordmark.png";


export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <img src={logo} alt="SignTech" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-md text-sm text-cream/70">
            Family-owned in Geneva, IL since 1989.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-honey">Products</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/signs" className="hover:text-honey">Signs</Link></li>
            <li><Link to="/banners" className="hover:text-honey">Banners</Link></li>
            <li><Link to="/lettering" className="hover:text-honey">Lettering</Link></li>
            <li><Link to="/magnetics" className="hover:text-honey">Vehicle Magnetics</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-honey">Contact</h4>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/80">
            <div>SignTech Corporation</div>
            <div>Geneva, IL 60134</div>
            <div>Phone: <a href="tel:16303736340" className="hover:text-honey">1-630-373-6340</a></div>
            <div>Fax: 1-630-761-0765</div>
            <div><a href="mailto:info@SignTechCorp.com" className="hover:text-honey">info@SignTechCorp.com</a></div>
          </address>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-cream/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} SignTech Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
