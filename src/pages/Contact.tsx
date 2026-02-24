import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { QuoteForm } from '../components/QuoteForm';

export const Contact = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get a free estimate for your project. Our team is ready to help with your metal fabrication needs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-primary mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Phone</h4>
                    <p className="text-gray-500">(555) 012-3456</p>
                    <p className="text-xs text-accent font-bold uppercase mt-1">Click to call</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-gray-500">info@forgesteel.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Our Workshop</h4>
                    <p className="text-gray-500">123 Industrial Way, Suite 100<br />Metropolis, ST 12345</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Business Hours</h4>
                    <p className="text-gray-500">Mon - Fri: 8:00 AM - 5:00 PM<br />Sat: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] bg-trust-bg border border-black/5">
              {/* Placeholder for Google Map */}
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                <MapPin className="w-12 h-12 mb-4 opacity-20" />
                <p className="font-bold">Google Map Integration</p>
                <p className="text-sm">123 Industrial Way, Metropolis</p>
              </div>
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
};
