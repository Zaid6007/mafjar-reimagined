import marineImg from "@/assets/products/marine-equipment.jpg";
import { Globe2, Heart, ShieldCheck, Target } from "lucide-react";

const About = () => (
  <>
    <section className="bg-brand-navy text-white py-20">
      <div className="container-tight">
        <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">About</div>
        <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
      </div>
    </section>

    <section className="py-20">
      <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-foreground/85 leading-relaxed mb-5">
            Mafjar Marine Trading and Services has grown from a small local supplier to become one of the Gulf region's most trusted names in marine and port equipment supply. Our journey began with a simple vision: to bridge the gap between world-class marine equipment manufacturers and the operational needs of the rapidly growing maritime industry in Qatar and the broader GCC region.
          </p>
          <p className="text-foreground/85 leading-relaxed">
            Over the years, we have built an extensive network of partnerships with leading international manufacturers, allowing us to offer our clients access to the latest technologies and innovations in marine equipment, diving systems, and port infrastructure solutions.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-elevated">
          <img src={marineImg} alt="Marine trading operations" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary/50">
      <div className="container-tight">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Our Values</div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Core Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Target, t: "Mission Driven", d: "To be the most trusted partner in marine and port equipment supply across the Gulf region." },
            { icon: Heart, t: "Client Focused", d: "Every decision we make is centered around delivering exceptional value to our clients." },
            { icon: Globe2, t: "Global Network", d: "Worldwide supplier relationships bringing you the best equipment at competitive prices." },
            { icon: ShieldCheck, t: "Quality Assured", d: "All products meet or exceed international maritime safety and quality standards." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-card p-7 rounded-3xl border border-border shadow-card">
              <div className="w-12 h-12 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
