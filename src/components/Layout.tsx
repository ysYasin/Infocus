import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, CheckCircle2, Star, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';

const serviceCategories = [
  {
    name: 'Glass Products',
    href: '/services/glass-products',
    subcategories: [
      { name: 'Glass Partitions', href: '/services/glass-partitions' },
      { name: 'Shower Glass', href: '/services/shower-glass' },
      { name: 'Custom Mirrors', href: '/services/custom-mirrors' },
      { name: 'Office Glass Solutions', href: '/services/office-glass' },
      { name: 'Decorative Glass', href: '/services/decorative-glass' },
      { name: 'Glass Doors', href: '/services/glass-doors' },
      { name: 'Glass Installation Services', href: '/services/glass-installation' },
    ]
  },
  {
    name: 'Digital Screens',
    href: '/services/digital-screens',
    subcategories: [
      { name: 'Indoor LED Screens', href: '/services/indoor-led' },
      { name: 'Outdoor LED Screens', href: '/services/outdoor-led' },
      { name: 'Digital Signage Displays', href: '/services/digital-signage' },
      { name: 'Video Wall Solutions', href: '/services/video-walls' },
      { name: 'Interactive Screens', href: '/services/interactive-screens' },
      { name: 'Commercial Display Panels', href: '/services/commercial-panels' },
    ]
  },
  {
    name: 'Print Products',
    href: '/services/print-products',
    subcategories: [
      { name: 'Metal Printing', href: '/services/metal-printing' },
      { name: 'Glass Printing', href: '/services/glass-printing' },
      { name: 'Wood Printing', href: '/services/wood-printing' },
      { name: 'Tile Printing', href: '/services/tile-printing' },
      { name: 'Large Format Printing', href: '/services/large-format' },
      { name: 'Custom Signage Printing', href: '/services/custom-signage' },
      { name: 'Branding & Display Solutions', href: '/services/branding-solutions' },
    ]
  },
  {
    name: 'General Trading',
    href: '/services/general-trading',
    subcategories: [
      { name: 'Stainless Steel Fabrication', href: '/services/stainless-steel' },
      { name: 'Aluminum Fabrication', href: '/services/aluminum' },
      { name: 'Architectural Metal Works', href: '/services/architectural' },
      { name: 'Kitchen Cabinets (Metal & Custom)', href: '/services/kitchen-cabinets' },
      { name: 'CNC Cutting & Engraving', href: '/services/cnc-cutting' },
      { name: 'Custom Metal Signage', href: '/services/metal-signage' },
      { name: 'Carpentry & Fabrication', href: '/services/carpentry' },
    ]
  }
];

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '#', isMega: true },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent flex flex-col relative overflow-hidden rounded-sm">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20"></div>
              <div className="flex-grow flex items-center justify-center">
                <span className="text-white font-black text-2xl italic">i</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-primary leading-tight text-2xl tracking-tighter">INFOCUS</span>
            <span className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase">Glass & Aluminium Works</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full flex items-center group"
              onMouseEnter={() => link.isMega && setActiveCategory(null)}
            >
              <Link
                to={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-accent flex items-center gap-1",
                  location.pathname === link.href ? "text-accent" : "text-primary"
                )}
              >
                {link.name}
                {link.isMega && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Mega Menu */}
              {link.isMega && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-2xl border border-black/5 rounded-b-xl w-[800px] p-8 grid grid-cols-4 gap-8">
                    {serviceCategories.map((cat) => (
                      <div 
                        key={cat.name} 
                        className="space-y-4"
                        onMouseEnter={() => setActiveCategory(cat.name)}
                      >
                        <Link 
                          to={cat.href} 
                          className="font-bold text-primary text-sm hover:text-accent flex items-center justify-between group/cat"
                        >
                          {cat.name}
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover/cat:opacity-100 transition-opacity" />
                        </Link>
                        <ul className="space-y-2">
                          {cat.subcategories.map((sub) => (
                            <li key={sub.name}>
                              <Link 
                                to={sub.href} 
                                className="text-xs text-gray-600 hover:text-accent font-medium transition-colors block"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:5550123" className="flex items-center gap-2 text-primary font-bold">
            <Phone className="w-4 h-4 text-accent" />
            <span>(555) 012-3456</span>
          </a>
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            GET FREE QUOTE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden shadow-xl"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.isMega ? (
                    <div className="space-y-2">
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                        className="w-full flex items-center justify-between text-lg font-semibold text-primary py-2"
                      >
                        {link.name}
                        <ChevronDown className={cn("w-5 h-5 transition-transform", mobileExpanded === 'services' && "rotate-180")} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileExpanded === 'services' && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-4 overflow-hidden"
                          >
                            {serviceCategories.map((cat) => (
                              <div key={cat.name} className="space-y-2">
                                <button 
                                  onClick={() => setMobileExpanded(mobileExpanded === cat.name ? 'services' : cat.name)}
                                  className="w-full flex items-center justify-between text-md font-bold text-gray-700 py-1"
                                >
                                  {cat.name}
                                  <ChevronDown className={cn("w-4 h-4 transition-transform", mobileExpanded === cat.name && "rotate-180")} />
                                </button>
                                
                                <AnimatePresence>
                                  {mobileExpanded === cat.name && (
                                    <motion.ul 
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="pl-4 space-y-2 overflow-hidden border-l border-gray-100"
                                    >
                                      {cat.subcategories.map((sub) => (
                                        <li key={sub.name}>
                                          <Link 
                                            to={sub.href} 
                                            onClick={() => setIsOpen(false)}
                                            className="block text-sm text-gray-500 py-1"
                                          >
                                            {sub.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-semibold text-primary py-2"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-black/5 flex flex-col gap-4">
                <a href="tel:5550123" className="flex items-center justify-center gap-2 text-primary font-bold py-3 bg-trust-bg rounded-lg">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>(555) 012-3456</span>
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                  GET FREE QUOTE
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-tighter text-accent">INFOCUS</span>
          </div>
          <p className="text-gray-400 text-sm">
            Premium Glass and Aluminium Works LLC & General Trading LLC. Delivering excellence in fabrication and trading solutions.
          </p>
          <div className="flex gap-2">
             <Star className="w-4 h-4 text-accent fill-accent" />
             <Star className="w-4 h-4 text-accent fill-accent" />
             <Star className="w-4 h-4 text-accent fill-accent" />
             <Star className="w-4 h-4 text-accent fill-accent" />
             <Star className="w-4 h-4 text-accent fill-accent" />
             <span className="text-xs font-bold">5.0 Google Rating</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/services/glass-products" className="hover:text-accent">Glass Products</Link></li>
            <li><Link to="/services/digital-screens" className="hover:text-accent">Digital Screens</Link></li>
            <li><Link to="/services/print-products" className="hover:text-accent">Print Products</Link></li>
            <li><Link to="/services/general-trading" className="hover:text-accent">General Trading</Link></li>
            <li><Link to="/services/stainless-steel" className="hover:text-accent">Stainless Steel</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-accent">Our Projects</Link></li>
            <li><Link to="/reviews" className="hover:text-accent">Client Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-accent mt-1" />
              <div>
                <p className="text-white font-bold">(555) 012-3456</p>
                <p className="text-xs">Call for a free estimate</p>
              </div>
            </li>
            <li>123 Industrial Way, Suite 100<br />Metropolis, ST 12345</li>
            <li>info@forgesteel.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} INFOCUS Glass & Aluminium Works LLC. All rights reserved. | General Trading LLC
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/5 p-3 flex gap-3 z-50">
        <a href="tel:5550123" className="flex-1 btn-secondary py-3 text-sm">
          <Phone className="w-4 h-4 mr-2" /> CALL NOW
        </a>
        <Link to="/contact" className="flex-1 btn-primary py-3 text-sm">
          GET QUOTE
        </Link>
      </div>
    </footer>
  );
};
