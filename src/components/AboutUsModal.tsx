import React from "react";
import { X, Award, Eye, Heart, Landmark } from "lucide-react";
import { motion } from "motion/react";

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutUsModal({ isOpen, onClose }: AboutUsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#1c1b1b]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Main Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#fcf9f8] shadow-2xl border border-[#eae7e7]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#f0eded] px-6 py-4">
          <div>
            <span className="font-mono text-[10px] tracking-wider uppercase text-brand-primary font-bold">Studio Heritage</span>
            <h3 className="font-display text-xl font-bold text-brand-ink">Manifesto & Philosophy</h3>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-neutral-400 hover:bg-[#f0eded] hover:text-brand-ink transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Narrative & Manifesto */}
        <div className="max-h-[75vh] overflow-y-auto p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <h4 className="font-display text-lg font-bold text-brand-ink">
              "We don't construct rooms; we frame atmospheres."
            </h4>
            <p className="font-sans text-sm text-neutral-500 leading-relaxed">
              Founded in Lucerne in 2018, <strong className="text-brand-ink">The Inner Story</strong> emerged as a reaction to mass-produced, repetitive interiors. We specialize in bespoke residential developments and private villa refurbishments, treating every space as a blank canvas meant for high-contrast living and peaceful, structured rest.
            </p>
          </div>

          {/* Pillars of Design */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-brand-surface-container">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary mb-3">
                <Eye className="h-4 w-4" />
              </div>
              <span className="block font-sans font-bold text-sm text-brand-ink">High-CRI Integrity</span>
              <p className="font-sans text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Mimicking natural light. We map spatial paths according to solar rotations, ensuring spaces feel healthy and expansive.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-brand-surface-container">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#006687]/10 text-[#006687] mb-3">
                <Landmark className="h-4 w-4" />
              </div>
              <span className="block font-sans font-bold text-sm text-brand-ink">Swiss Precision</span>
              <p className="font-sans text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Every flush joint, concealed groove, and alignment corresponds to strict architectural, millimeter-level layouts.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-brand-surface-container">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#894d00]/10 text-[#894d00] mb-3">
                <Heart className="h-4 w-4" />
              </div>
              <span className="block font-sans font-bold text-sm text-brand-ink">Tactile Materials</span>
              <p className="font-sans text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Honest, bio-sourced textures: travertine romano slabs, Belgian linen, and brushed metals that acquire history over years.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-brand-surface-container">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 mb-3">
                <Award className="h-4 w-4" />
              </div>
              <span className="block font-sans font-bold text-sm text-brand-ink">Acoustic Containment</span>
              <p className="font-sans text-xs text-neutral-400 mt-1.5 leading-relaxed">
                By integrating tailored fabric backing panels and acoustic ceiling insulation, we ensure absolute, tranquil silence.
              </p>
            </div>
          </div>

          {/* Leaders profile info */}
          <div className="pt-6 border-t border-[#f0eded] flex flex-col sm:flex-row gap-5 items-center">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
              alt="Elena Rossi - Principal Architect" 
              className="w-16 h-16 rounded-full object-cover shrink-0 grayscale hover:grayscale-0 transition-all border border-brand-surface-container"
              referrerPolicy="no-referrer"
            />
            <div className="text-center sm:text-left space-y-1">
              <span className="block font-display text-sm font-bold text-brand-ink">Elena Rossi</span>
              <span className="font-mono text-[10px] text-brand-primary uppercase tracking-widest block font-bold">Principal Architect & Founder</span>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
                Elena earned her Master of Architecture at ETH Zurich and spent 6 years leading villa renovations before establishing The Inner Story.
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-[#f0eded] px-6 py-4 flex justify-between items-center bg-brand-surface-container-low text-[10px] text-neutral-400 font-mono">
          <span>ESTABLISHED 2018</span>
          <span>CURATED ARCHITECTURAL MINIMALISM</span>
        </div>
      </div>
    </div>
  );
}
