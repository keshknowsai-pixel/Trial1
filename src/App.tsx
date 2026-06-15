import React, { useState } from "react";
import { 
  ArrowRight, 
  Share2, 
  Globe, 
  HelpCircle, 
  Calendar, 
  Sparkles, 
  Check, 
  Compass, 
  MapPin, 
  Clock, 
  ChevronRight,
  User,
  Heart,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Importers
import { portfolioItems, processSteps, PortfolioItem, ProcessStep } from "./data";
import ConsultationModal from "./components/ConsultationModal";
import PortfolioDetailModal from "./components/PortfolioDetailModal";
import AboutUsModal from "./components/AboutUsModal";
import ExpertiseSection from "./components/ExpertiseSection";

export default function App() {
  // Modal states
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreFilledItem, setConsultationPreFilledItem] = useState("villa");
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  // Process timeline active state
  const [selectedProcessStep, setSelectedProcessStep] = useState<string>("01");

  // Share action simulation
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "The Inner Story - Architectural Minimalism",
        text: "Experience curated high-end residential architecture and minimalist interior styling.",
        url: window.location.href
      }).catch(() => {});
    } else {
      alert("Link copied to clipboard: " + window.location.href);
    }
  };

  const triggerConsultation = (initialId: string = "villa") => {
    setConsultationPreFilledItem(initialId);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] overflow-x-hidden">
      
      {/* 1. Header / Navigation (matches 64px height and blurs) */}
      <header className="sticky top-0 z-40 w-full h-16 bg-[#ffffff]/80 backdrop-blur-md border-b border-[#f0eded] transition-all">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo Header */}
          <a href="#" className="flex items-center gap-2 select-none group">
            <span className="font-display text-lg font-bold tracking-tight text-brand-ink group-hover:text-brand-primary transition-colors">
              The Inner Story
            </span>
          </a>

          {/* Nav items */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-xs font-semibold tracking-wider text-[#414755]">
            <a href="#" className="hover:text-brand-primary transition-colors">HOME</a>
            <button 
              onClick={() => setIsAboutUsOpen(true)}
              className="hover:text-brand-primary transition-colors cursor-pointer"
            >
              ABOUT US
            </button>
            <a href="#process" className="hover:text-brand-primary transition-colors">PROCESS</a>
          </nav>

          {/* Book Consultation Trigger */}
          <div>
            <button 
              onClick={() => triggerConsultation("villa")}
              className="rounded-full bg-brand-primary hover:bg-brand-primary-container text-white px-5 py-2 z-10 text-xs font-semibold shadow-sm transition-all"
            >
              Book Consultation
            </button>
          </div>

        </div>
      </header>

      {/* 2. Hero Section (Dusk Villa and swimming pool) */}
      <section className="relative w-full h-[85vh] md:h-[90vh] bg-neutral-950 flex flex-col justify-center overflow-hidden">
        
        {/* Background photo of premium modern villa */}
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80" 
          alt="Architectural villa exterior" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 filter saturate-100"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Darkened Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,27,27,0.7)] via-[rgba(28,27,27,0.2)] to-[rgba(28,27,27,0.5)]" />

        {/* Hero Content Area */}
        <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 select-none">
          <div className="max-w-2xl space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tighter">
              Every home has a story. Let us help you tell yours.
            </h1>
            
            {/* CTA Buttons in single line */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:w-max">
              <button
                onClick={() => triggerConsultation("villa")}
                className="rounded-full bg-brand-primary hover:bg-brand-primary-container text-white px-8 py-3.5 text-xs font-semibold shadow-lg shadow-brand-primary/20 transition-all text-center"
              >
                Book a Consultation
              </button>
              
              <a
                href="#portfolio"
                className="rounded-full bg-[#ffffff]/10 hover:bg-[#ffffff]/25 text-white border border-white/20 backdrop-blur-md px-8 py-3.5 text-xs font-semibold transition-all text-center"
              >
                Get to know us
              </a>
            </div>
          </div>
        </div>

        {/* Elegant overlay line tag */}
        <div className="absolute bottom-6 left-6 md:left-12 font-mono text-[9px] text-white/55 tracking-widest hidden sm:block">
          THE INNER STORY • HIGH-CRI ARCHITECTURAL MASTERPIECE © 2026
        </div>
      </section>

      {/* 3. Portfolio Segment: "Curated Narratives" */}
      <section id="portfolio" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Title area with text on right-hand */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-brand-surface-container pb-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-primary font-bold">
              PORTFOLIO
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-ink">
              Curated Narratives
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-neutral-400 max-w-sm leading-relaxed md:text-right">
            Tailored living spaces designed to evoke emotion and reflect identity.
          </p>
        </div>

        {/* 3 Column Grid with Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedPortfolioItem(item)}
              className="group cursor-pointer space-y-4"
            >
              {/* Card Surface Frame */}
              <div className="relative h-[420px] rounded-3xl overflow-hidden bg-brand-surface-container bg-cover transition-all duration-500 shadow-sm border border-brand-surface-container-high hover:shadow-md">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro Category Overlay */}
                <div className="absolute top-4 left-4 bg-white/75 backdrop-blur-md border border-brand-surface-container text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full text-brand-ink">
                  {item.specs.area}
                </div>

                {/* Ambient dark bottom shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1b]/50 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title & Undertext Details */}
              <div className="space-y-1 pl-1">
                <h3 className="font-display text-lg font-bold text-brand-ink group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Expertise Section: "Spaces We Transform" */}
      <section className="bg-brand-surface-container-low py-20 md:py-28 border-y border-brand-surface-container">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Centered Heading */}
          <div className="text-center space-y-1 max-w-md mx-auto">
            <span className="font-mono text-xs uppercase tracking-wider text-brand-primary font-bold">
              EXPERTISE
            </span>
            <h2 className="font-display text-3xl md:text-3xl font-extrabold text-brand-ink">
              Spaces We Transform
            </h2>
          </div>

          {/* Modular component with state management */}
          <ExpertiseSection />

        </div>
      </section>

      {/* 5. Process Roadmap: "Architectural Journey" */}
      <section id="process" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Heading */}
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-wider text-brand-primary font-bold">
            OUR METHOD
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-brand-ink">
            Architectural Journey
          </h2>
        </div>

        {/* 4 Step Horizontal Graphic */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              const isSelected = selectedProcessStep === step.id;
              return (
                <div 
                  key={step.id}
                  onClick={() => setSelectedProcessStep(step.id)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all border ${
                    isSelected 
                      ? "bg-[#ffffff] border-brand-primary shadow-lg shadow-brand-primary/5" 
                      : "bg-[#fcf9f8] border-brand-surface-container hover:border-neutral-300"
                  }`}
                >
                  {/* Decorative Number background */}
                  <div className={`absolute top-2 right-4 font-display text-[96px] font-black leading-none pointer-events-none select-none transition-colors ${
                    isSelected ? "text-brand-primary/5" : "text-brand-surface-container/20"
                  }`}>
                    {step.number}
                  </div>

                  {/* Step Icon circle (matching circle indicators from screenshot) */}
                  <div className={`mb-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? "bg-brand-primary text-white" : "bg-brand-surface-container text-neutral-500"
                  }`}>
                    <span className="font-mono text-xs font-semibold">{step.number}</span>
                  </div>

                  {/* Content titles */}
                  <div className="relative z-10 space-y-1.5">
                    <h4 className="font-display text-sm font-bold text-brand-ink">{step.title}</h4>
                    <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connectors inside desktop layouts */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 items-center gap-1.5 text-brand-primary pointer-events-none z-20">
                      <span className="w-6 h-0.5 bg-brand-primary/30" />
                      <ArrowRight className="h-3 w-3 text-brand-primary/60" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* Step Detailed Drawer Sub-panel */}
        <div className="rounded-3xl bg-white p-6 md:p-8 border border-brand-surface-container shadow-sm">
          {processSteps.map((step) => {
            if (selectedProcessStep !== step.id) return null;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                
                {/* Column 1: Core details */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-primary font-bold">
                    STEP {step.number} DETAILS
                  </span>
                  <h4 className="font-display text-lg font-bold text-brand-ink">
                    Deep dive: Our {step.title} Process
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 pt-1">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Average duration: <strong className="text-brand-ink">{step.duration}</strong></span>
                  </div>
                </div>

                {/* Column 2: In-depth narrative */}
                <div className="text-xs md:text-sm text-neutral-500 leading-relaxed space-y-3">
                  <p>{step.details}</p>
                </div>

                {/* Column 3: Deliverables checkpoints */}
                <div className="bg-brand-surface-container-low p-5 rounded-xl border border-brand-surface-container space-y-3">
                  <span className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                    Deliverables & Documents
                  </span>
                  <ul className="space-y-2 text-xs">
                    {step.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex gap-2 items-center text-[#414755]">
                        <Check className="h-3.5 w-3.5 text-[#006687] shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </motion.div>
            );
          })}
        </div>

      </section>

      {/* 6. Testimonial Quote Frame */}
      <section className="bg-brand-surface-container-low py-20 border-t border-brand-surface-container text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-6">
          
          {/* Visual double quote mark matching screenshot */}
          <span className="font-sans text-[44px] sm:text-[48px] font-extrabold text-brand-primary flex justify-center leading-none">
            99
          </span>

          <p className="font-display text-lg sm:text-2xl md:text-3xl font-semibold text-brand-ink italic leading-tight max-w-xl mx-auto">
            "They didn't just design a house; they curated a sanctuary that breathes with my soul."
          </p>

          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block font-bold">
            — ELENA ROSSI, PRIVATE VILLA RESIDENT
          </span>

        </div>
      </section>

      {/* 7. Full Wide Blue Pre-CTA Banner */}
      <section className="bg-brand-primary text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-lg space-y-2">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
              Ready to start your story?
            </h3>
            <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed">
              Experience architectural minimalism that resonates with your personal narrative.
            </p>
          </div>
          <button
            onClick={() => triggerConsultation("villa")}
            className="rounded-full bg-white text-brand-primary hover:bg-[#eae7e7] font-semibold text-xs md:text-sm px-8 py-3.5 shrink-0 transition-all shadow-md shadow-brand-primary/10"
          >
            Book Consultation
          </button>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-white border-t border-brand-surface-container pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo description */}
            <div className="md:col-span-2 space-y-4">
              <span className="font-display text-base font-bold text-brand-ink uppercase tracking-wide">The Inner Story</span>
              <p className="font-sans text-xs text-neutral-400 max-w-sm leading-relaxed">
                Architectural Minimalism for the Modern Soul.
              </p>
              
              {/* Share & Translation Buttons */}
              <div className="flex gap-2">
                <button 
                  onClick={handleShare}
                  className="rounded-full p-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-brand-ink transition-all cursor-pointer"
                  title="Share Website"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <div 
                  className="rounded-full p-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-brand-ink transition-all cursor-pointer flex items-center gap-1"
                  title="English Site"
                >
                  <Globe className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Explore links */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-[#414755] tracking-widest font-bold uppercase block">
                EXPLORE
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
                <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfolio</a></li>
                <li><a href="#process" className="hover:text-brand-primary transition-colors">Process</a></li>
                <li>
                  <button 
                    onClick={() => setIsAboutUsOpen(true)}
                    className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => triggerConsultation("villa")}
                    className="hover:text-brand-primary transition-colors cursor-pointer text-left"
                  >
                    Contact & Bookings
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-[#414755] tracking-widest font-bold uppercase block">
                LEGAL
              </span>
              <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-[#f0eded] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
            <span>© 2026 The Inner Story. Architectural Minimalism for the Modern Soul.</span>
            <span>Made with meticulous precision in Geneva, Switzerland.</span>
          </div>

        </div>
      </footer>

      {/* Interactive Modal Integrations */}
      <AnimatePresence>
        {isConsultationOpen && (
          <ConsultationModal 
            isOpen={isConsultationOpen} 
            onClose={() => setIsConsultationOpen(false)}
            initialItem={consultationPreFilledItem}
          />
        )}

        {selectedPortfolioItem && (
          <PortfolioDetailModal 
            item={selectedPortfolioItem}
            onClose={() => setSelectedPortfolioItem(null)}
            onBookSpecialSession={(itemId) => {
              setSelectedPortfolioItem(null);
              triggerConsultation(itemId);
            }}
          />
        )}

        {isAboutUsOpen && (
          <AboutUsModal
            isOpen={isAboutUsOpen}
            onClose={() => setIsAboutUsOpen(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
