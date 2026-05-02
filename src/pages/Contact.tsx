import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Message sent — we'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  };

  return (
    <>
      <section className="bg-brand-navy text-white py-20">
        <div className="container-tight">
          <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Contact</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-white/75 max-w-2xl">
            Ready to discuss your marine equipment needs? Our expert team is here to help you find the perfect solutions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-tight grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            {[
              { icon: MapPin, t: "Visit Our Office", lines: ["Zone 56, Street 205, Building 32", "Ain Khalid, Doha — Qatar"], cta: { href: "https://maps.google.com/?q=Ain+Khalid,+Doha,+Qatar", label: "Get Directions" } },
              { icon: Phone, t: "Call Us", lines: ["+974 33754873", "Available 24/7 for emergencies"], cta: { href: "tel:+97433754873", label: "Call Now" } },
              { icon: Mail, t: "Email Us", lines: ["info@mafjar.com"], cta: { href: "mailto:info@mafjar.com", label: "Send Email" } },
              { icon: Clock, t: "Business Hours", lines: ["Sun – Thu: 7:00 AM – 6:00 PM", "Sat: 7:00 AM – 6:00 PM", "Fri: Closed"] },
            ].map(({ icon: Icon, t, lines, cta }) => (
              <div key={t} className="bg-card p-6 rounded-3xl border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">{t}</h3>
                    {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
                    {cta && (
                      <a href={cta.href} className="inline-block mt-2 text-sm font-medium text-brand-red hover:underline">
                        {cta.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-2 bg-card p-8 rounded-3xl border border-border shadow-card space-y-5">
            <h2 className="text-2xl font-bold text-brand-navy">Send Us a Message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" required maxLength={50} className="rounded-full mt-1.5" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" required maxLength={50} className="rounded-full mt-1.5" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required maxLength={120} className="rounded-full mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" maxLength={30} className="rounded-full mt-1.5" />
              </div>
            </div>
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input id="company" maxLength={120} className="rounded-full mt-1.5" />
            </div>
            <div>
              <Label>Inquiry Type *</Label>
              <Select required>
                <SelectTrigger className="rounded-full mt-1.5"><SelectValue placeholder="Select inquiry type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="quote">Request Quote</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="customer-service">Customer Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" required maxLength={1000} rows={5} className="rounded-2xl mt-1.5" />
            </div>
            <Button type="submit" disabled={submitting} className="w-full bg-brand-red hover:bg-brand-red-hover text-white rounded-full h-12 text-base">
              {submitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
