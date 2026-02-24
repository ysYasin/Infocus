import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Send, Loader2, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

interface QuoteFormProps {
  className?: string;
  projectTypeDefault?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ className, projectTypeDefault = "" }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("bg-white p-8 rounded-2xl shadow-xl border border-black/5", className)}>
      <h3 className="text-2xl font-bold text-primary mb-2">Request a Free Project Estimate</h3>
      <p className="text-gray-500 mb-8 text-sm">Upload your blueprints or drawings for a faster, more accurate quote.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-gray-500">Full Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-primary placeholder:text-gray-400 focus:bg-white focus:border-accent outline-none transition-all"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-gray-500">Phone Number</label>
            <input
              required
              name="phone"
              type="tel"
              placeholder="(555) 000-0000"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-primary placeholder:text-gray-400 focus:bg-white focus:border-accent outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-gray-500">Email Address</label>
          <input
            required
            name="email"
            type="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-primary placeholder:text-gray-400 focus:bg-white focus:border-accent outline-none transition-all"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-gray-500">Project Type</label>
          <div className="relative">
            <select
              name="projectType"
              defaultValue={projectTypeDefault}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-primary focus:bg-white focus:border-accent outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="" className="text-primary">Select Project Type</option>
              <option value="glass-partitions" className="text-primary">Glass Partitions</option>
              <option value="shower-glass" className="text-primary">Shower Glass</option>
              <option value="led-screens" className="text-primary">Digital LED Screens</option>
              <option value="stainless" className="text-primary">Stainless Steel Work</option>
              <option value="aluminum" className="text-primary">Aluminum Fabrication</option>
              <option value="cnc" className="text-primary">CNC Cutting & Engraving</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-gray-500">Project Details</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project requirements, dimensions, and timeline..."
            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-primary placeholder:text-gray-400 focus:bg-white focus:border-accent outline-none transition-all resize-none"
          ></textarea>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase text-gray-400">Upload Blueprint / Drawing (Optional)</label>
          <div className="relative">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center gap-2 w-full px-4 py-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-accent cursor-pointer transition-all bg-trust-bg/50"
            >
              <Upload className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-500">
                {file ? file.name : "Click to upload or drag and drop"}
              </span>
            </label>
          </div>
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="btn-primary w-full py-4 text-lg mt-4"
        >
          {isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              GET MY FREE QUOTE <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
