import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, Phone } from 'lucide-react';

export const ThankYou = () => {
  return (
    <div className="section-padding min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-16 h-16 text-accent" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-primary">Thank You!</h1>
          <p className="text-xl text-gray-500">
            Your quote request has been received. One of our fabrication experts will contact you within <span className="text-primary font-bold">24 hours</span> to discuss your project.
          </p>
        </div>

        <div className="bg-trust-bg p-8 rounded-2xl border border-black/5 space-y-6">
          <h3 className="text-xl font-bold text-primary">While you wait...</h3>
          <p className="text-gray-500">Download our fabrication capability profile to see our full range of equipment and certifications.</p>
          <button className="btn-primary w-full py-4">
            <Download className="w-5 h-5 mr-2" /> DOWNLOAD CAPABILITY PROFILE
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="text-primary font-bold hover:text-accent transition-colors">
            Back to Homepage
          </Link>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="tel:5550123" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
            <Phone className="w-4 h-4" /> Need immediate help? Call (555) 012-3456
          </a>
        </div>
      </div>
    </div>
  );
};
