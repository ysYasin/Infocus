import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, Users, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">About INFOCUS</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Metropolis's leading glass, aluminium, and trading experts with a commitment to quality and precision.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-primary">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              INFOCUS Glass & Aluminium Works LLC was established to bridge the gap between high-end design and practical fabrication. We specialize in transforming spaces with premium glass and aluminium solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our General Trading division ensures that we have access to the finest materials and latest technologies, allowing us to deliver superior results for our commercial and residential clients.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-trust-bg p-6 rounded-xl">
                <span className="text-4xl font-black text-accent">10+</span>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mt-2">Years in Business</p>
              </div>
              <div className="bg-trust-bg p-6 rounded-xl">
                <span className="text-4xl font-black text-accent">500+</span>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mt-2">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <img src="https://picsum.photos/seed/team/800/600" alt="Our Team" className="rounded-2xl shadow-xl" referrerPolicy="no-referrer" />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-black/5 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-primary">Fully Licensed</p>
                  <p className="text-xs text-gray-500">Certified & Insured</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-trust-bg section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-primary mb-4">Our Core Values</h2>
          <p className="text-gray-500">The principles that guide every weld and every project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Award className="w-8 h-8 text-accent" />, title: "Precision", desc: "We measure twice and cut once. Accuracy is the foundation of our work." },
            { icon: <Clock className="w-8 h-8 text-accent" />, title: "Reliability", desc: "We respect your timelines and deliver on our promises every time." },
            { icon: <Users className="w-8 h-8 text-accent" />, title: "Partnership", desc: "We work closely with architects and owners to ensure the best outcome." }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 text-center">
              <div className="flex justify-center mb-6">{val.icon}</div>
              <h4 className="text-xl font-bold text-primary mb-4">{val.title}</h4>
              <p className="text-gray-500">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="bg-secondary text-white rounded-3xl p-12 md:p-20 overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black mb-8">Our Capabilities</h2>
            <div className="space-y-4">
              {[
                "Full CNC Plasma & Laser Cutting",
                "TIG & MIG Welding (All Metals)",
                "Structural Steel Fabrication",
                "Custom Architectural Detailing",
                "On-site Installation & Mobile Welding",
                "CAD Design & Engineering Support"
              ].map((cap, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-lg">{cap}</span>
                </div>
              ))}
            </div>
            <div className="pt-10">
              <Link to="/contact" className="btn-primary">WORK WITH US</Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 hidden lg:block">
             <img src="https://picsum.photos/seed/machine/400/800" alt="Machinery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </div>
  );
};
