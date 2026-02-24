import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Phone, HelpCircle } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';

const serviceData: Record<string, any> = {
  "metal-fabrication": {
    title: "Metal Fabrication Services in Metropolis",
    heroDesc: "Custom structural and general fabrication for industrial, commercial, and residential projects.",
    benefits: ["Custom Engineering", "Structural Integrity", "Fast Turnaround", "Certified Welders"],
    industries: ["Construction", "Manufacturing", "Infrastructure", "Residential"],
    faq: [
      { q: "What types of metal do you work with?", a: "We work with carbon steel, stainless steel, aluminum, brass, and copper." },
      { q: "Do you offer on-site welding?", a: "Yes, we have mobile welding units for on-site installation and repairs." }
    ]
  },
  "stainless-steel": {
    title: "Stainless Steel Fabrication in Metropolis",
    heroDesc: "High-grade stainless steel solutions for food service, medical, and architectural applications.",
    benefits: ["Corrosion Resistance", "Hygienic Surfaces", "Aesthetic Finish", "Durability"],
    industries: ["Restaurants", "Hospitals", "Laboratories", "Luxury Residential"],
    faq: [
      { q: "What grades of stainless steel do you use?", a: "We primarily use 304 and 316 grades depending on the application requirements." },
      { q: "Can you provide polished finishes?", a: "Yes, we offer various finishes from brushed (No. 4) to mirror polish (No. 8)." }
    ]
  },
  "aluminum": {
    title: "Aluminum Fabrication Services in Metropolis",
    heroDesc: "Lightweight and durable aluminum fabrication for marine, transport, and construction industries.",
    benefits: ["Lightweight", "Weather Resistant", "Precision Welding", "Versatile"],
    industries: ["Marine", "Automotive", "Signage", "Aerospace"],
    faq: [
      { q: "Is aluminum harder to weld than steel?", a: "It requires specialized equipment and skill, which our certified team possesses." },
      { q: "Do you offer anodizing?", a: "We partner with local specialists to provide anodized and powder-coated finishes." }
    ]
  },
  "architectural": {
    title: "Architectural Metal Works in Metropolis",
    heroDesc: "Bespoke metal features including stairs, railings, and decorative panels that elevate any space.",
    benefits: ["Unique Designs", "High-End Finish", "Structural Safety", "Creative Solutions"],
    industries: ["Interior Design", "Architecture", "Retail", "Hospitality"],
    faq: [
      { q: "Can you work from my architect's drawings?", a: "Absolutely. We specialize in translating architectural visions into physical reality." },
      { q: "Do you handle installation?", a: "Yes, our team manages the entire process from fabrication to final installation." }
    ]
  },
  "cnc-cutting": {
    title: "CNC Cutting & Laser Services in Metropolis",
    heroDesc: "High-precision CNC cutting for complex parts, industrial components, and decorative patterns.",
    benefits: ["Extreme Precision", "Complex Shapes", "Material Efficiency", "Repeatability"],
    industries: ["Prototyping", "Manufacturing", "Art & Design", "Signage"],
    faq: [
      { q: "What is the maximum thickness you can cut?", a: "Our equipment can handle up to 25mm steel and 15mm aluminum." },
      { q: "What file formats do you accept?", a: "We prefer DXF, DWG, or AI files for CNC processing." }
    ]
  },
  "kitchen-cabinets": {
    title: "Custom Stainless Steel Kitchens in Metropolis",
    heroDesc: "Professional-grade stainless steel cabinetry and countertops for commercial and luxury home kitchens.",
    benefits: ["Lifetime Durability", "Easy Maintenance", "Modern Aesthetic", "Custom Fit"],
    industries: ["Commercial Kitchens", "Outdoor Kitchens", "Modern Homes", "Catering"],
    faq: [
      { q: "Are stainless cabinets noisy?", a: "We use sound-deadening backing to ensure a quiet, solid feel." },
      { q: "Can you integrate appliances?", a: "Yes, we custom-build around your specific appliance dimensions." }
    ]
  }
};

export const ServicePage = () => {
  const { slug } = useParams();
  const data = serviceData[slug || "metal-fabrication"];

  if (!data) return <div>Service not found</div>;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{data.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{data.heroDesc}</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:5550123" className="btn-primary">
                <Phone className="w-5 h-5 mr-2" /> CALL FOR QUOTE
              </a>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                REQUEST ESTIMATE
              </Link>
            </div>
          </motion.div>
          <div className="hidden lg:block">
             <img src={`https://picsum.photos/seed/${slug}/800/600`} alt={data.title} className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.benefits.map((benefit: string, idx: number) => (
            <div key={idx} className="card flex items-center gap-4">
              <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0" />
              <span className="font-bold text-primary">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-trust-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-primary">Industries We Serve</h2>
            <div className="grid grid-cols-2 gap-4">
              {data.industries.map((industry: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">{industry}</span>
                </div>
              ))}
            </div>
            
            <h2 className="text-3xl font-black text-primary pt-8">Our Process</h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Consultation", desc: "We discuss your project needs, dimensions, and material preferences." },
                { step: "02", title: "Design & Quote", desc: "Our engineers provide a detailed quote and technical drawings if required." },
                { step: "03", title: "Fabrication", desc: "Precision work in our local workshop using state-of-the-art equipment." },
                { step: "04", title: "Delivery & Install", desc: "Safe transport and professional installation at your site." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="text-4xl font-black text-accent/20">{step.step}</span>
                  <div>
                    <h4 className="font-bold text-primary text-xl">{step.title}</h4>
                    <p className="text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <QuoteForm projectTypeDefault={slug} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <h2 className="text-3xl font-black text-primary mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {data.faq.map((item: any, idx: number) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <div className="flex gap-4 items-start">
                <HelpCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">{item.q}</h4>
                  <p className="text-gray-500">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">Providing {data.title} across Metropolis and surrounding areas including:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
            <span>Downtown</span> • <span>West End</span> • <span>North Harbor</span> • <span>South Industrial Park</span> • <span>East Heights</span>
          </div>
        </div>
      </section>
    </div>
  );
};
