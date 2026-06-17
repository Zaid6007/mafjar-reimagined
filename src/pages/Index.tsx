import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-port.jpg";
import { SearchBar } from "@/components/search/SearchBar";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import marineImg from "@/assets/products/marine-equipment.jpg";
import portImg from "@/assets/products/port-equipment.jpg";
import divingImg from "@/assets/products/diving-equipment.jpg";
import industrialImg from "@/assets/products/industrial-support.jpg";
import controlImg from "@/assets/products/control-systems.png";
import { ArrowRight, Award, Globe2, ShieldCheck, Truck } from "lucide-react";
import gasDetectorImg from "@/assets/products/GasDT01.jpg";

const categoryImages: Record<string, string> = {
  "Marine Equipment": marineImg,
  "Port Equipment": portImg,
  "Diving Equipment": divingImg,
  "Industrial Support": industrialImg,
  "Control Systems": controlImg,
  "Gas Detectors": gasDetectorImg,
};

const focusBullets: Record<string, string[]> = {
  "Marine Equipment": ["Engines & Spare Parts", "Navigation & Communication", "Safety & Life-Saving Appliances", "Electrical & Mechanical Systems"],
  "Port Equipment": ["Cargo & Container Handling", "Mooring & Dock Accessories", "Terminal & Yard Infrastructure"],
  "Diving Equipment": ["Diving Umbilical & ROV Cable", "Control Panels & Video Systems", "Personal Gear (Helmets, Suits)", "Underwater Tools"],
  "Industrial Support": ["Welding & Fabrication Tools", "Industrial PPE & Workwear", "Fasteners & Hydraulic Hoses", "Paints, Coatings & Materials"],
  "Control Systems": ["Power & Control Panels", "ELV & Pump Control Systems", "Service & Maintenance", "Custom Solution Design"],
 "Gas Detectors": [
    "Portable Gas Detection",
    "Multi-Gas Monitoring",
    "Confined Space Safety",
    "Industrial Hazard Detection"]
  };

const testimonials = [
  "Mafjar Marine has been our trusted partner. Their reliability in supplying quality equipment and exceptional customer service have made them indispensable to our operations.",
  "The diving equipment and marine supplies from Mafjar Marine are top-notch. Their technical expertise and prompt delivery have saved us countless hours during critical operations.",
  "Exceptional quality and competitive pricing. Mafjar Marine understands our industry needs and consistently delivers solutions that exceed our expectations.",
];

const Index = () => {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Industrial seaport at sunset with cranes and container ships"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="container-tight relative z-10 py-24 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-wider uppercase mb-6 animate-fade-in">
            
            Trusted Across the Gulf Region
          </div>
          <h1 className="text-balance text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-5xl mx-auto animate-fade-in">
            Specialists in Marine & Port Trading Solutions
          </h1>
          <div className="mt-6 max-w-3xl mx-auto text-white/80 italic max w-2xl mx auto animate-fade-in">
  <ul className="flex flex-wrap justify-center gap-x-3 gap-y-0.2 text-base md:text-lg font-small">
    <li>• Empowering Ports</li>
    <li>• Supporting Ships</li>
    <li>• Trading with Integrity</li>
    <li>• Safer Diving Operations</li>
    <li>• Reliable Marine Solutions</li>
  </ul>
</div>

          <div className="mt-10 max-w-3xl mx-auto animate-fade-in">
            <SearchBar />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in">
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red-hover text-white rounded-full h-12 px-7">
              <Link to="/shop">Browse Catalog <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 bg-white/5 border-white/30 text-white hover:bg-white hover:text-brand-navy">
             
  <a
    href="https://mafjar.com/forms/mafjar-inquery-form.html"
  
    rel="noopener noreferrer"
  >
    Request a Quote
  </a>
</Button>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Featured Products</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-balance">
              Premium marine & port equipment trusted by industry leaders
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brand-navy hover:bg-brand-navy-deep text-white rounded-full px-8">
              <Link to="/shop">View Full Catalog <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Our Track Record</div>
            <h2 className="text-3xl md:text-4xl font-bold">Numbers that speak to our excellence</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "80+", t: "Projects Completed", d: "Successful deliveries across the Gulf region" },
              { n: "15+", t: "Trusted Clients", d: "Leading maritime companies worldwide" },
              { n: "24/7", t: "Support Available", d: "Round-the-clock customer service" },
            ].map((s) => (
              <div key={s.t} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth">
                <div className="text-5xl md:text-6xl font-bold text-brand-red mb-3">{s.n}</div>
                <h3 className="text-xl font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-white/65">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRADING FOCUS AREAS */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">What We Do</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Trading Focus Areas</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((c) => (
              <div key={c} className="rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-smooth group">
                <div className="aspect-video overflow-hidden bg-secondary">
                  <img src={categoryImages[c]} alt={c} className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-brand-navy mb-3">{c}</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {focusBullets[c].map((b) => (
                      <li key={b} className="flex gap-2"><span className="text-brand-red mt-1">•</span>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-secondary/50">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Why Choose Mafjar Marine?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe2, t: "Global Sourcing", d: "Reliable international brands at competitive prices." },
              { icon: Truck, t: "On-Time Delivery", d: "Major-port logistics with real-time tracking." },
              { icon: ShieldCheck, t: "Certified & Compliant", d: "Meets IMO, SOLAS, and international standards." },
              { icon: Award, t: "Tailored Solutions", d: "Engineered to your operation's specific needs." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-card rounded-3xl p-6 border border-border shadow-card text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-brand-navy mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-card rounded-3xl p-7 border border-border shadow-card">
                <div className="text-4xl text-brand-red leading-none mb-3">"</div>
                <p className="text-sm text-foreground/85 leading-relaxed">{t}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy-deep text-white">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to discuss your marine equipment needs?</h2>
          <p className="text-white/70 mb-8">Our expert team is ready to source the right equipment for your operations.</p>
         <Button
  asChild
  size="lg"
  className="bg-brand-red hover:bg-brand-red-hover text-white rounded-full h-12 px-8"
>
  <a
    href="https://mafjar.com/forms/mafjar-inquery-form.html"
  
    rel="noopener noreferrer"
  >
    Request a Quote
  </a>
</Button>
        </div>
      </section>
    </>
  );
};

export default Index;
