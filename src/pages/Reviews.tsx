import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Reviews = () => {
  const reviews = [
    { name: "David Miller", role: "Project Manager, BuildCorp", text: "Forge & Steel delivered our structural beams ahead of schedule. The precision was spot on, making installation a breeze. Their attention to detail is unmatched in the Metropolis area.", rating: 5 },
    { name: "Sarah Jenkins", role: "Interior Designer", text: "The custom brass railings they fabricated for our boutique project are stunning. True artists in metal work. They understood our vision perfectly and executed it with flawless finishes.", rating: 5 },
    { name: "Robert Chen", role: "Owner, Harbor Grill", text: "Our entire commercial kitchen was outfitted by them. Durable, easy to clean, and looks professional. They handled the custom dimensions of our old building with ease.", rating: 5 },
    { name: "Michael Ross", role: "Homeowner", text: "I needed a custom gate for my driveway. Forge & Steel provided a beautiful design that adds so much value to my home. Fast, clean installation.", rating: 5 },
    { name: "Elena Rodriguez", role: "Architect", text: "As an architect, I appreciate their technical knowledge. They don't just weld; they understand the structural implications of the design. A reliable partner.", rating: 5 }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="section-padding text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-8 h-8 text-accent fill-accent" />)}
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Client Reviews</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We take pride in our work and our reputation. See what our clients have to say about our metal fabrication services.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-accent fill-accent" />)}
              </div>
              <p className="text-lg text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <h5 className="font-bold text-primary text-lg">{review.name}</h5>
                  <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-trust-bg rounded-3xl p-12 text-center border border-black/5">
          <h2 className="text-3xl font-black text-primary mb-6">Ready to be our next success story?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Join hundreds of satisfied clients in Metropolis who trust INFOCUS for their glass and aluminium needs.</p>
          <Link to="/contact" className="btn-primary inline-flex">GET YOUR FREE QUOTE TODAY</Link>
        </div>
      </section>
    </div>
  );
};
