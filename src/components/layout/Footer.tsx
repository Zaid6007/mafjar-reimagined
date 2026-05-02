import { Link } from "react-router-dom";
import { Anchor, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-brand-navy-deep text-white/85 mt-24">
    <div className="container-tight py-16 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-brand-red text-white flex items-center justify-center">
            <Anchor className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-white text-sm">MAFJAR MARINE</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">Trading & Services</div>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-white/65">
          Specialists in marine and port trading solutions across the Gulf region.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-brand-red transition-smooth">Home</Link></li>
          <li><Link to="/shop" className="hover:text-brand-red transition-smooth">Shop</Link></li>
          <li><Link to="/services" className="hover:text-brand-red transition-smooth">Services</Link></li>
          <li><Link to="/about" className="hover:text-brand-red transition-smooth">About</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><span>Zone 56, Street 205, Building 32, Ain Khalid, Doha — Qatar</span></li>
          <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><a href="tel:+97433754873" className="hover:text-brand-red">+974 33754873</a></li>
          <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><a href="mailto:info@mafjar.com" className="hover:text-brand-red">info@mafjar.com</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Hours</h4>
        <ul className="space-y-1.5 text-sm text-white/70">
          <li>Sun – Thu: 7:00 AM – 6:00 PM</li>
          <li>Sat: 7:00 AM – 6:00 PM</li>
          <li>Fri: Closed</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-tight py-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Mafjar Marine Trading and Services. All rights reserved.</span>
        <span>CR No. 21331 · PO Box 17533 · Doha, Qatar</span>
      </div>
    </div>
  </footer>
);
