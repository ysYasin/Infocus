import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Projects = () => {
  const projects = [
    { title: "Commercial Staircase", loc: "Metropolis City Center", type: "Architectural", img: "https://picsum.photos/seed/stairs/800/600", desc: "Custom steel staircase with glass balustrades for a modern office lobby." },
    { title: "Industrial Platform", loc: "West Port Logistics", type: "Structural", img: "https://picsum.photos/seed/industrial/800/600", desc: "Heavy-duty mezzanine floor and safety railings for a distribution center." },
    { title: "Custom Kitchen Fit-out", loc: "Harbor View Restaurant", type: "Stainless Steel", img: "https://picsum.photos/seed/kitchen/800/600", desc: "Full commercial kitchen installation including custom extraction hoods." },
    { title: "Decorative Facade", loc: "The Grand Hotel", type: "Architectural", img: "https://picsum.photos/seed/facade/800/600", desc: "Laser-cut aluminum panels for a luxury hotel exterior." },
    { title: "Marine Fuel Tanks", loc: "Metropolis Marina", type: "Aluminum", img: "https://picsum.photos/seed/marine/800/600", desc: "Custom-fabricated aluminum fuel tanks for commercial vessels." },
    { title: "Residential Gate", loc: "North Heights", type: "Custom", img: "https://picsum.photos/seed/gate/800/600", desc: "Automated wrought iron style driveway gate with custom motifs." }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of our precision metal work across commercial, industrial, and residential sectors.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group flex flex-col">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] shadow-lg">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {project.type}
                </div>
              </div>
              <h3 className="text-2xl font-black text-primary mb-2">{project.title}</h3>
              <p className="text-accent font-bold text-sm mb-4">{project.loc}</p>
              <p className="text-gray-500 mb-6 flex-grow">{project.desc}</p>
              <Link to="/contact" className="inline-flex items-center font-bold text-primary hover:text-accent transition-colors">
                ENQUIRE ABOUT SIMILAR PROJECT <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary text-white rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-black mb-6">Have a specific project in mind?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">We specialize in custom solutions. Send us your drawings and we'll provide a detailed quote.</p>
          <Link to="/contact" className="btn-primary inline-flex">START YOUR QUOTE</Link>
        </div>
      </section>
    </div>
  );
};
