import React, { useState } from "react";
import { Sparkles, Check, Info, Shield, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { expertiseItems, ExpertiseItem } from "../data";

export default function ExpertiseSection() {
  const [selectedItem, setSelectedItem] = useState<ExpertiseItem>(expertiseItems[0]);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, number>>({
    // Store selected indexes for each material option
    "Island Countertop": 0,
    "Cabinet Cabinetry": 0,
    "Dining Table Wood": 0,
    "Chairs Textile": 0,
    "Wall Panel Stone": 0,
    "Fitting Accents": 0,
    "Headboard Textile": 0,
    "Wardrobe Facing": 0
  });

  const handleSelectVariant = (optionName: string, variantIndex: number) => {
    setSelectedVariants(prev => ({
      ...prev,
      [optionName]: variantIndex
    }));
  };

  return (
    <div className="space-y-8">
      {/* Selector Cards (4 Column Grid from screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {expertiseItems.map((item) => {
          const isActive = selectedItem.id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group cursor-pointer overflow-hidden rounded-2xl bg-white border transition-all duration-300 ${
                isActive 
                  ? "border-brand-primary ring-2 ring-brand-primary/5 shadow-lg shadow-brand-primary/5" 
                  : "border-brand-surface-container hover:border-neutral-300 shadow-sm"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-neutral-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-brand-primary/10 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-30"
                }`} />
              </div>

              {/* Text Padding (matches screenshot description style) */}
              <div className="p-5 space-y-2">
                <h4 className="font-display text-base font-bold text-brand-ink">{item.title}</h4>
                <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Material Customization Board */}
      <div className="rounded-3xl bg-white p-6 md:p-8 border border-brand-surface-container shadow-sm flex flex-col lg:flex-row gap-8">
        
        {/* Left Hand: Image & Active Design Quote Overlay */}
        <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group h-[300px] lg:h-auto min-h-[320px] bg-neutral-900">
          <img 
            src={selectedItem.image} 
            alt={selectedItem.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
          
          <div className="absolute top-4 left-4 bg-brand-primary text-white text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full font-bold">
            Interactive Moodboard
          </div>

          <div className="absolute bottom-6 left-6 right-6 space-y-3">
            <span className="font-mono text-[9px] text-[#006687] font-semibold tracking-widest block uppercase">
              STUDIO INTENT
            </span>
            <p className="text-white font-sans text-sm italic leading-relaxed">
              "{selectedItem.quote}"
            </p>
            <div className="flex gap-1.5 pt-1.5">
              {selectedItem.designNotes.map((note, index) => (
                <span key={index} className="text-[10px] text-neutral-300 font-sans bg-white/15 px-2.5 py-1 rounded-full border border-white/5">
                  ✓ {note.split(" ").slice(0, 2).join(" ")}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Hand: Material Form Selector */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="font-mono text-[9px] tracking-widest font-semibold text-brand-primary uppercase">
                MATERIAL RENDERING CONTROLS
              </span>
              <h4 className="font-display text-xl font-bold text-brand-ink mt-0.5">
                Bespoke Finish Selector for {selectedItem.title}
              </h4>
              <p className="text-xs text-neutral-400 font-sans mt-1">
                Toggle variants to explore authentic combinations of European woodwork, stone finishes, and tactile handloom fibers curated by our team.
              </p>
            </div>

            {/* Material groups */}
            <div className="space-y-5">
              {selectedItem.materialOptions.map((opt) => {
                const selectedIndex = selectedVariants[opt.name] ?? 0;
                return (
                  <div key={opt.name} className="space-y-2">
                    <span className="font-mono text-[10px] text-neutral-400 font-semibold uppercase tracking-wider block">
                      {opt.name}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {opt.variants.map((variant, vIdx) => {
                        const isChosen = selectedIndex === vIdx;
                        return (
                          <div
                            key={variant.label}
                            onClick={() => handleSelectVariant(opt.name, vIdx)}
                            className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                              isChosen 
                                ? "border-brand-primary bg-[#fcf9f8]" 
                                : "border-brand-surface-container hover:border-neutral-300 bg-white"
                            }`}
                          >
                            <div className="relative mt-0.5 shrink-0">
                              <span className={`w-5 h-5 rounded-full inline-block border border-neutral-300 ${variant.colorClass}`} />
                              {isChosen && (
                                <span className="absolute -top-1 -right-1 bg-brand-primary text-white p-0.5 rounded-full scale-75">
                                  <Check className="w-2 h-2" />
                                </span>
                              )}
                            </div>
                            <div className="text-left">
                              <span className="block text-xs font-semibold text-brand-ink">{variant.label}</span>
                              <span className="block text-[10px] text-neutral-400 leading-tight mt-0.5">{variant.desc}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Specification Preview footer */}
          <div className="p-4 bg-brand-surface-container-low rounded-2xl border border-brand-surface-container space-y-2.5">
            <span className="font-mono text-[9px] text-neutral-400 font-bold uppercase block">
              ACTIVE COMBINATION CHARACTERISTICS
            </span>
            <div className="grid grid-cols-2 gap-4 text-xs font-sans">
              <div>
                <span className="text-neutral-400 block text-[10px]">Luminous Reflection Vibe</span>
                <span className="font-semibold text-brand-ink">Class Balanced (High CRI)</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px]">Structural Complexity</span>
                <span className="font-semibold text-brand-ink">Architectural Alignment</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
