import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import marineImg from "@/assets/products/marine-equipment.jpg";
import portImg from "@/assets/products/port-equipment.jpg";
import divingImg from "@/assets/products/diving-equipment.jpg";
import industrialImg from "@/assets/products/industrial-support.jpg";
import controlImg from "@/assets/products/control-systems.png";

const catImg: Record<string, string> = {
  "Marine Equipment": marineImg,
  "Port Equipment": portImg,
  "Diving Equipment": divingImg,
  "Industrial Support": industrialImg,
  "Control Systems": controlImg,
};

const catContent: Record<string, { tagline: string; sections: { h: string; items: string[] }[] }> = {
  "Marine Equipment": {
    tagline: "Comprehensive marine equipment solutions for vessels of all sizes",
    sections: [
      { h: "Engine Systems", items: ["Main Engines & Auxiliaries", "Spare Parts & Components", "Engine Monitoring Systems", "Fuel Systems & Filters", "Cooling & Lubrication Systems"] },
      { h: "Navigation & Communication", items: ["GPS & Chartplotters", "Radar Systems", "VHF/UHF Radio Equipment", "Satellite Communication", "Electronic Chart Systems (ECDIS)"] },
      { h: "Safety Equipment", items: ["Life Rafts & Life Jackets", "Fire Fighting Systems", "Emergency Beacons (EPIRB)", "Survival Suits", "First Aid Equipment"] },
      { h: "Electrical Systems", items: ["Marine Generators", "Battery Systems", "Lighting Systems", "Control Panels", "Cable & Wiring Systems"] },
    ],
  },
  "Port Equipment": {
    tagline: "Heavy-duty equipment for cargo handling and port infrastructure",
    sections: [
      { h: "Cargo Handling", items: ["Container Cranes", "Forklifts & Reach Stackers", "Conveyor Systems", "Loading Platforms"] },
      { h: "Mooring & Dock", items: ["Bollards & Cleats", "Mooring Lines", "Dock Fenders", "Fairleads"] },
      { h: "Terminal Infrastructure", items: ["Yard Tractors", "Container Spreaders", "Terminal Lighting", "Site Power Systems"] },
    ],
  },
  "Diving Equipment": {
    tagline: "Professional grade diving systems for commercial operations",
    sections: [
      { h: "Diving Systems", items: ["Surface Supplied Diving Equipment", "Diving Helmets", "Umbilical Cables", "Hot Water Systems"] },
      { h: "Personal Gear", items: ["Diving Suits", "Masks & Regulators", "Fins & Boots", "Safety Harnesses"] },
      { h: "Underwater Tools", items: ["Cutting Equipment", "Welding Tools", "Lift Bags", "Inspection Cameras"] },
    ],
  },
  "Industrial Support": {
    tagline: "Industrial tools and supplies for marine and port operations",
    sections: [
      { h: "Welding & Fabrication", items: ["Welding Machines", "Cutting Tools", "Grinders & Sanders", "Welding Consumables"] },
      { h: "PPE & Workwear", items: ["Safety Helmets", "Work Boots", "Protective Clothing", "Eye Protection"] },
      { h: "General Supplies", items: ["Fasteners & Hardware", "Hydraulic Hoses", "Industrial Paints", "Coatings & Sealants"] },
    ],
  },
  "Control Systems": {
    tagline: "Advanced control and automation solutions for industrial applications",
    sections: [
      { h: "Power Systems", items: ["Power Distribution Panels", "Motor Control Centers", "UPS Systems", "Generator Controls"] },
      { h: "Automation", items: ["PLC Systems", "HMI Interfaces", "SCADA Systems", "Sensor Networks"] },
      { h: "Custom Solutions", items: ["Pump Control Systems", "Building Management", "ELV Systems", "Maintenance Services"] },
    ],
  },
};

const Services = () => {
  const [active, setActive] = useState<string>(CATEGORIES[0]);
  const c = catContent[active];

  return (
    <>
      <section className="bg-brand-navy text-white py-20">
        <div className="container-tight">
          <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Services</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Portfolio</h1>
          <p className="text-white/75 max-w-2xl">
            From marine equipment to diving systems, we provide comprehensive solutions for all your maritime operational needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight">
          <div className="text-sm text-muted-foreground mb-4">Tap a category to explore services</div>
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium border transition-smooth",
                  active === cat
                    ? "bg-brand-red text-white border-brand-red"
                    : "bg-card text-foreground border-border hover:border-brand-red"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-3xl overflow-hidden bg-secondary aspect-[4/3] shadow-card order-last lg:order-first">
              <img src={catImg[active]} alt={active} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-3">{active}</h2>
              <p className="text-muted-foreground mb-6">{c.tagline}</p>
              <Button asChild className="rounded-full bg-brand-red hover:bg-brand-red-hover text-white mb-8">
                <Link to="/contact">Request Quote</Link>
              </Button>

              <div className="grid sm:grid-cols-2 gap-6">
                {c.sections.map((s) => (
                  <div key={s.h}>
                    <h3 className="font-semibold text-brand-navy mb-3">{s.h}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {s.items.map((i) => (
                        <li key={i} className="flex gap-2"><span className="text-brand-red mt-1">•</span>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Service Process</h2>
            <p className="mt-3 text-muted-foreground">Streamlined to ensure you get exactly what you need, when you need it.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "1", t: "Consultation", d: "We discuss your specific requirements and project needs" },
              { n: "2", t: "Assessment", d: "Our experts evaluate and recommend the best solutions" },
              { n: "3", t: "Procurement", d: "We source the highest quality equipment from trusted suppliers" },
              { n: "4", t: "Delivery", d: "Fast and reliable delivery to your specified location" },
            ].map((step) => (
              <div key={step.n} className="bg-card p-7 rounded-3xl border border-border shadow-card">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white font-bold flex items-center justify-center mb-4">{step.n}</div>
                <h3 className="font-semibold text-brand-navy mb-2">{step.t}</h3>
                <p className="text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
