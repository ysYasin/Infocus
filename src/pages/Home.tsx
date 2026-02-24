import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, Users, Star, CheckCircle2 } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';

export const Home = () => {
  const services = [
    {
      title: "Metal Fabrication",
      desc: "Custom structural and general fabrication for industrial and residential needs.",
      link: "/services/metal-fabrication",
      icon: "🏗️"
    },
    {
      title: "Stainless Steel",
      desc: "High-grade stainless steel fabrication for kitchens, labs, and architectural features.",
      link: "/services/stainless-steel",
      icon: "✨"
    },
    {
      title: "Aluminum Fabrication",
      desc: "Lightweight, durable aluminum solutions for marine, transport, and construction.",
      link: "/services/aluminum",
      icon: "✈️"
    },
    {
      title: "Architectural Metal",
      desc: "Stunning custom stairs, railings, and decorative metal works that define spaces.",
      link: "/services/architectural",
      icon: "🏛️"
    },
    {
      title: "CNC Cutting",
      desc: "Precision laser and plasma cutting for complex shapes and industrial parts.",
      link: "/services/cnc-cutting",
      icon: "⚙️"
    },
    {
      title: "Custom Kitchens",
      desc: "Professional-grade stainless steel kitchen cabinets and countertops.",
      link: "/services/kitchen-cabinets",
      icon: "🍳"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/welding/1920/1080?blur=2" 
            alt="Metal Fabrication Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold border border-accent/30">
              <Star className="w-4 h-4 fill-accent" />
              <span>#1 Glass & Aluminium Specialists in Metropolis</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Premium Glass, Aluminium & General Trading by <span className="text-accent">INFOCUS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-xl">
              Custom stainless steel, aluminum, CNC cutting and structural metal works for commercial and residential projects. Get a fast, accurate quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="btn-primary text-lg px-10">
                GET FREE QUOTE
              </Link>
              <a href="tel:5550123" className="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-10">
                <Phone className="w-5 h-5 mr-2" /> CALL NOW
              </a>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">10+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Years Exp.</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">500+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Projects Done</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">5.0</span>
                <div className="flex gap-1">
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <Star className="w-3 h-3 text-accent fill-accent" />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <QuoteForm />
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-trust-bg border-y border-black/5 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold text-primary">
            <ShieldCheck className="w-6 h-6 text-accent" />
            <span>LICENSED & INSURED</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-primary">
            <Clock className="w-6 h-6 text-accent" />
            <span>FAST TURNAROUND</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-primary">
            <Award className="w-6 h-6 text-accent" />
            <span>PRECISION ENGINEERING</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-primary">
            <Users className="w-6 h-6 text-accent" />
            <span>LOCAL EXPERTS</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black tracking-[0.2em] text-accent uppercase mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-6">Comprehensive Metal Solutions</h3>
          <p className="text-gray-500 text-lg">From heavy structural steel to fine architectural details, we deliver precision and quality in every weld.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="card group flex flex-col"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h4>
              <p className="text-gray-500 mb-8 flex-grow">{service.desc}</p>
              <Link to={service.link} className="flex items-center font-bold text-primary hover:text-accent transition-colors">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary text-white overflow-hidden">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/workshop/800/600" 
              alt="Our Workshop" 
              className="rounded-2xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-2xl -z-0"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black">Why Choose INFOCUS?</h2>
            <p className="text-gray-400 text-lg">We bring precision to every project, from high-end glass partitions to complex aluminium structures and general trading needs.</p>
            
            <div className="space-y-4">
              {[
                "Custom design & precision engineering",
                "Fast production turnaround times",
                "Competitive pricing for all project sizes",
                "Commercial & residential expertise",
                "Local, experienced, and dedicated team"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Link to="/about" className="btn-primary inline-flex">
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-black tracking-[0.2em] text-accent uppercase mb-4">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-black text-primary">Recent Projects</h3>
          </div>
          <Link to="/projects" className="btn-secondary">VIEW ALL PROJECTS</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Commercial Staircase", loc: "Metropolis City Center", type: "Architectural", img: "https://picsum.photos/seed/stairs/600/400" },
            { title: "Industrial Platform", loc: "West Port Logistics", type: "Structural", img: "https://picsum.photos/seed/industrial/600/400" },
            { title: "Custom Kitchen Fit-out", loc: "Harbor View Restaurant", type: "Stainless Steel", img: "https://picsum.photos/seed/kitchen/600/400" }
          ].map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/2]">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {project.type}
                </div>
              </div>
              <h4 className="text-xl font-bold text-primary">{project.title}</h4>
              <p className="text-gray-500 text-sm">{project.loc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-trust-bg section-padding">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-accent fill-accent" />)}
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-primary mb-4">Trusted by Local Businesses</h3>
          <p className="text-gray-500">See why we are the top-rated metal works company in the area.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "David Miller", role: "Project Manager", text: "Forge & Steel delivered our structural beams ahead of schedule. The precision was spot on, making installation a breeze." },
            { name: "Sarah Jenkins", role: "Interior Designer", text: "The custom brass railings they fabricated for our boutique project are stunning. True artists in metal work." },
            { name: "Robert Chen", role: "Restaurant Owner", text: "Our entire commercial kitchen was outfitted by them. Durable, easy to clean, and looks professional. Highly recommend." }
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h5 className="font-bold text-primary">{review.name}</h5>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/reviews" className="text-accent font-bold hover:underline transition-colors underline-offset-4">
            READ MORE GOOGLE REVIEWS
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="bg-accent rounded-3xl p-8 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-accent/20">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/80">Get a free, no-obligation estimate for your metal fabrication needs today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link to="/contact" className="bg-white text-accent font-black py-4 px-10 rounded-xl text-xl hover:bg-trust-bg transition-colors text-center">
              GET FREE QUOTE
            </Link>
            <a href="tel:5550123" className="bg-primary text-white font-black py-4 px-10 rounded-xl text-xl hover:bg-secondary transition-colors text-center flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" /> CALL NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
