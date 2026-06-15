import React, { useState } from "react";
import { X, MapPin, Calendar, Compass, Layers, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioItem } from "../data";

interface PortfolioDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBookSpecialSession: (itemId: string) => void;
}

export default function PortfolioDetailModal({ item, onClose, onBookSpecialSession }: PortfolioDetailModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#1c1b1b]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-[#fcf9f8] shadow-2xl border border-[#eae7e7] flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Left Side: Images & Interactive Gallery */}
        <div className="w-full md:w-[45%] h-[300px] md:h-auto bg-neutral-900 relative flex flex-col justify-between overflow-hidden">
          <img 
            src={item.gallery[activeImageIndex]} 
            alt={item.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-500"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] via-transparent to-transparent pointer-events-none" />

          {/* Close button for small screen */}
          <button 
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 rounded-full bg-[#1c1b1b]/40 backdrop-blur-md p-2 text-white hover:bg-[#1c1b1b]/60 transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Image indicator bullets */}
          <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-1.5">
            {item.gallery.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  activeImageIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          <div className="absolute top-4 left-4 font-mono text-[10px] bg-[#1c1b1b]/60 backdrop-blur-md text-white border border-[#eae7e7]/10 rounded-full px-2.5 py-1">
            ARCHITECTURAL FRAME {activeImageIndex + 1} OF {item.gallery.length}
          </div>
        </div>

        {/* Right Side: Detailed Narrative Information */}
        <div className="w-full md:w-[55%] flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-none p-6 md:p-8">
          
          {/* Header */}
          <div className="relative">
            {/* Desktop close */}
            <button 
              onClick={onClose}
              className="hidden md:flex absolute top-0 right-0 rounded-full bg-neutral-100 hover:bg-neutral-200 p-2 text-neutral-400 hover:text-brand-ink transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="font-mono text-[10px] tracking-wider uppercase text-brand-primary font-bold">
              {item.category}
            </span>
            <h3 className="font-display text-2xl font-bold text-brand-ink mt-1">
              {item.title}
            </h3>
            <p className="mt-3 font-sans text-sm text-neutral-500 leading-relaxed">
              {item.longDescription}
            </p>
          </div>

          {/* Key Architectural Specs Grid */}
          <div className="grid grid-cols-2 gap-4 my-6 bg-brand-surface-container-low p-4 rounded-xl border border-brand-surface-container">
            <div className="flex items-center gap-2.5 text-xs text-brand-ink">
              <Compass className="h-4 w-4 text-brand-primary shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Total Area</span>
                <span className="font-semibold font-mono">{item.specs.area}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-brand-ink">
              <MapPin className="h-4 w-4 text-brand-primary shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Location</span>
                <span className="font-semibold">{item.specs.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-brand-ink">
              <Calendar className="h-4 w-4 text-brand-primary shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Fabrication Time</span>
                <span className="font-semibold">{item.specs.timeline}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-brand-ink">
              <Layers className="h-4 w-4 text-brand-primary shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-mono text-neutral-400 block">Design Style</span>
                <span className="font-semibold">{item.specs.style}</span>
              </div>
            </div>
          </div>

          {/* Highlights & Features Checklist */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-2 font-bold select-none">
              Signature Design Elements
            </span>
            <ul className="space-y-2">
              {item.features.map((feat, idx) => (
                <li key={idx} className="flex gap-2 text-xs font-sans text-[#414755] leading-relaxed">
                  <CheckCircle className="h-3.5 w-3.5 text-brand-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Crafted Materials Palette */}
          <div className="mt-6 pt-4 border-t border-brand-surface-container">
            <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-2.5 font-bold select-none">
              Crafted Materials Palette
            </span>
            <div className="flex flex-wrap gap-2.5">
              {item.materials.map((matGroup, gIdx) => (
                <div key={gIdx} className="bg-white p-2.5 rounded-xl border border-brand-outline-variant/15 text-xs">
                  <span className="font-mono text-[9px] text-[#006687] font-semibold tracking-wider block uppercase mb-1">
                    {matGroup.category}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {matGroup.items.map((mat, mIdx) => (
                      <span key={mIdx} className="text-[11px] text-brand-ink font-sans">
                        {mat}{mIdx < matGroup.items.length - 1 ? " • " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-8 pt-4 border-t border-brand-surface-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Inspired by <strong className="text-brand-ink font-medium">{item.title}</strong>? Build yours.
            </div>
            <button
              onClick={() => onBookSpecialSession(item.id)}
              className="group flex items-center justify-center gap-1.5 bg-brand-primary text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-brand-primary/10 hover:bg-brand-primary-container transition-all"
            >
              Book Consultation <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
