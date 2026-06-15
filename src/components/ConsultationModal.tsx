import React, { useState } from "react";
import { X, Calendar, Check, Square, ChevronRight, Calculator, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialItem = "" }: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState(initialItem || "villa");
  const [area, setArea] = useState(1800);
  const [stylePreference, setStylePreference] = useState("japandi");
  const [selectedScope, setSelectedScope] = useState<string[]>(["living", "kitchen"]);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Simple pricing algorithm
  const getRatePerSqFt = () => {
    switch (stylePreference) {
      case "japandi": return 12;
      case "warm-modern": return 15;
      case "luxury-minimalist": return 22;
      default: return 15;
    }
  };

  const getScopeMultiplier = () => {
    const totalSelected = selectedScope.length;
    if (totalSelected === 0) return 0;
    return totalSelected * 0.25; // each item contributes
  };

  const calculateEstimate = () => {
    const rate = getRatePerSqFt();
    const multiplier = getScopeMultiplier();
    const baseValue = area * rate;
    const finalVal = baseValue * (0.5 + multiplier);
    return Math.floor(finalVal);
  };

  const handleToggleScope = (scopeId: string) => {
    if (selectedScope.includes(scopeId)) {
      setSelectedScope(selectedScope.filter(s => s !== scopeId));
    } else {
      setSelectedScope([...selectedScope, scopeId]);
    }
  };

  // Generate modern month days for selection
  const daysInMonth = Array.from({ length: 15 }, (_, i) => i + 14); // Next 15 days starting from 14th
  const timeslots = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Final booking submit
      if (!fullName || !email || !phone) {
        alert("Please fill in all contact information to proceed.");
        return;
      }
      setBookingConfirmed(true);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    // Reset state on close
    setStep(1);
    setBookingConfirmed(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="absolute inset-0 bg-[#1c1b1b]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#fcf9f8] shadow-2xl border border-[#eae7e7]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#f0eded] px-6 py-4">
          <div>
            <span className="font-mono text-[10px] tracking-wider uppercase text-brand-primary font-semibold">Consultation Platform</span>
            <h3 className="font-display text-xl font-bold text-brand-ink">Schedule & Estimate Your Story</h3>
          </div>
          <button 
            onClick={handleClose}
            className="rounded-full p-2 text-neutral-400 hover:bg-[#f0eded] hover:text-brand-ink transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="flex h-1 bg-brand-surface-container-low">
          <div 
            className="bg-brand-primary h-full transition-all duration-300"
            style={{ width: `${bookingConfirmed ? 100 : (step / 4) * 100}%` }}
          />
        </div>

        {/* Form Area */}
        <div className="max-h-[70vh] overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {bookingConfirmed ? (
              <motion.div 
                key="confirmed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h4 className="font-display text-2xl font-bold text-brand-ink">Your design journey has begun</h4>
                <p className="mt-2 text-neutral-500 font-sans text-sm max-w-md">
                  We have secured your consultation for <strong className="text-brand-ink">June {selectedDate || 18}, 2026</strong> at <strong className="text-brand-ink">{selectedTime || "11:30 AM"}</strong>. A master design strategist will contact you shortly with your digital moodboard starter kit.
                </p>

                <div className="mt-6 w-full max-w-sm rounded-2xl bg-brand-surface-container-low p-4 text-left border border-brand-surface-container">
                  <div className="mb-2 flex justify-between text-xs text-neutral-400 font-mono">
                    <span>BOOKING ID</span>
                    <span className="font-semibold text-brand-primary">#TIS-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="space-y-1 text-sm font-sans">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Client:</span>
                      <span className="font-medium text-brand-ink">{fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Project Format:</span>
                      <span className="font-medium capitalize text-brand-ink">{projectType.replace("-", " ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Selected Style:</span>
                      <span className="font-medium capitalize text-brand-ink">{stylePreference}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-brand-outline-variant/20 mt-2">
                      <span className="text-neutral-500 font-medium">Estimated Budget:</span>
                      <span className="font-bold text-brand-primary">${calculateEstimate().toLocaleString()} USD</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleClose}
                  className="mt-8 rounded-full bg-brand-primary px-8 py-3 font-sans text-sm font-medium text-white shadow-lg shadow-brand-primary/20 hover:bg-brand-primary-container transition-all"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* STEP 1: Specs & Style */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display text-lg font-bold text-brand-ink">Step 1: Define Project Parameters</h4>
                      <p className="text-sm text-neutral-400">Establish the layout dimensions and design tone.</p>
                    </div>

                    {/* Project Format */}
                    <div>
                      <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2 font-medium">Project Format</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "2bhk", label: "2BHK Residence", desc: "Compact & Efficient" },
                          { id: "3bhk", label: "3BHK Family", desc: "Spacious communal comfort" },
                          { id: "villa", label: "Luxury Villa", desc: "Grand standalone estate" }
                        ].map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setProjectType(p.id)}
                            className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                              projectType === p.id 
                                ? "border-brand-primary bg-white ring-2 ring-brand-primary/5" 
                                : "border-brand-surface-container hover:border-neutral-300 bg-white"
                            }`}
                          >
                            <span className="font-sans font-semibold text-sm text-brand-ink">{p.label}</span>
                            <span className="font-sans text-xs text-neutral-400 mt-1">{p.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Vibe Selection */}
                    <div>
                      <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2 font-medium">Design System Aesthetic</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "japandi", label: "Japandi", color: "bg-[#e2e2dd]" },
                          { id: "warm-modern", label: "Warm Modern", color: "bg-[#eed9c4]" },
                          { id: "luxury-minimalist", label: "Luxury Minimalist", color: "bg-[#e5e7eb]" }
                        ].map((v) => (
                          <button
                            key={v.id}
                            type="button"
                            onClick={() => setStylePreference(v.id)}
                            className={`flex items-center gap-3 p-3 rounded-xl border text-left bg-white transition-all ${
                              stylePreference === v.id 
                                ? "border-brand-primary bg-white ring-2 ring-brand-primary/5" 
                                : "border-brand-surface-container hover:border-neutral-300 bg-white"
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full ${v.color} inline-block`} />
                            <span className="font-sans font-medium text-sm text-brand-ink capitalize">{v.label.replace("-", " ")}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Area Slider */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">Approximate Area</label>
                        <span className="font-mono text-xs font-semibold text-brand-primary">{area.toLocaleString()} sq ft</span>
                      </div>
                      <input 
                        type="range" 
                        min="800" 
                        max="8000" 
                        step="100"
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-full accent-brand-primary cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
                        <span>800 sq ft</span>
                        <span>8,000 sq ft</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Scope & Budget Calculator */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display text-lg font-bold text-brand-ink">Step 2: Micro-Scope & Initial Calculations</h4>
                      <p className="text-sm text-neutral-400">Mark the zones inside your house that require full architectural modeling.</p>
                    </div>

                    {/* Rooms / Zones */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "living", title: "Living Room Space", desc: "Acoustic panels & visual anchors" },
                        { id: "kitchen", title: "Chef's Kitchen", desc: "Ergonomics, cabinetry, & islands" },
                        { id: "bedrooms", title: "Master Bedrooms", desc: "Restorative lighting & quiet vents" },
                        { id: "bathroom", title: "Wellness Bathroom", desc: "Tactile materials & wet rooms" },
                        { id: "lighting", title: "Smart Lighting Matrix", desc: "Bio-circadian custom automation" },
                        { id: "millwork", title: "Integrated Millwork", desc: "Hidden panel storage & shelves" }
                      ].map((item) => {
                        const isSelected = selectedScope.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleToggleScope(item.id)}
                            className={`flex items-start gap-3 p-3 rounded-xl border text-left bg-white transition-all ${
                              isSelected 
                                ? "border-brand-primary ring-2 ring-brand-primary/5" 
                                : "border-brand-surface-container hover:border-neutral-300"
                            }`}
                          >
                            <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                              isSelected ? "border-brand-primary bg-brand-primary text-white" : "border-neutral-300 bg-white"
                            }`}>
                              {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                            </div>
                            <div>
                              <span className="block text-sm font-semibold text-brand-ink">{item.title}</span>
                              <span className="block text-xs text-neutral-400 mt-0.5">{item.desc}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Interactive Estimator Display */}
                    <div className="rounded-2xl bg-brand-surface-container p-5 border border-brand-surface-container-high flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase font-bold text-neutral-400 flex items-center gap-1.5">
                          <Calculator className="h-3 w-3" /> Live Budget Estimate
                        </span>
                        <div className="font-mono text-2xl font-bold text-brand-ink">
                          ${calculateEstimate().toLocaleString()}{" "}
                          <span className="text-xs text-neutral-400 font-normal">USD</span>
                        </div>
                        <span className="text-[11px] text-neutral-400 block font-sans">
                          Includes structural layout, high-CRI illumination map, and sample panels.
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-mono text-brand-primary bg-white px-2.5 py-1 rounded-full border border-brand-surface-container">
                          {selectedScope.length} rooms configured
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Beautiful Scheduling Grid */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display text-lg font-bold text-brand-ink">Step 3: Secure Your Studio Date</h4>
                      <p className="text-sm text-neutral-400">Lock in your one-on-one session with our master architect.</p>
                    </div>

                    {/* Interactive calendar preview */}
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2 font-medium">June 2026</span>
                      <div className="grid grid-cols-7 gap-2 text-center text-xs">
                        {/* Days header */}
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
                          <div key={d} className="font-mono text-neutral-400 py-1 font-bold">{d}</div>
                        ))}

                        {/* Filler days for neat alignment */}
                        <div className="text-neutral-200 py-2">31</div>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(d => (
                          <div key={d} className="text-neutral-300 py-2 line-through">{d}</div>
                        ))}

                        {/* Selectable Days */}
                        {daysInMonth.map(d => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => setSelectedDate(d)}
                            className={`py-2 rounded-lg font-medium transition-all ${
                              selectedDate === d
                                ? "bg-brand-primary text-white font-bold scale-105"
                                : "bg-white text-brand-ink border border-brand-surface-container hover:border-brand-primary"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slot Selector */}
                    {selectedDate && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block font-medium">Available slots for June {selectedDate}</span>
                        <div className="flex flex-wrap gap-2">
                          {timeslots.map(t => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTime(t)}
                              className={`px-4 py-2 text-xs rounded-full border font-medium transition-all ${
                                selectedTime === t
                                  ? "bg-brand-ink text-white border-brand-ink"
                                  : "bg-white text-neutral-600 border-brand-surface-container hover:border-neutral-400"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* STEP 4: Personal Coordinates */}
                {step === 4 && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-display text-lg font-bold text-brand-ink">Step 4: Contact Coordinate Handover</h4>
                      <p className="text-sm text-neutral-400">Where should we deliver your digital interactive brief?</p>
                    </div>

                    <div className="space-y-3 font-sans">
                      <div>
                        <label className="block text-xs font-semibold text-brand-ink mb-1">Your Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Elena Rossi"
                          className="w-full text-sm bg-white rounded-xl border border-brand-surface-container-high px-4 py-3 text-brand-ink focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/5 ml-0"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-brand-ink mb-1">Email Address</label>
                          <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="elena@rossi.it"
                            className="w-full text-sm bg-white rounded-xl border border-brand-surface-container-high px-4 py-3 text-brand-ink focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/5 ml-0"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-brand-ink mb-1">Phone Number</label>
                          <input 
                            type="tel" 
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+41 44 268 2800"
                            className="w-full text-sm bg-white rounded-xl border border-brand-surface-container-high px-4 py-3 text-brand-ink focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/5 ml-0"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-ink mb-1">Aesthetic Goals, Spatial Details or Brand Notes (Optional)</label>
                        <textarea 
                          rows={3}
                          value={additionalNotes}
                          onChange={(e) => setAdditionalNotes(e.target.value)}
                          placeholder="Tell us about the light vectors, ceiling heights or color ideas..."
                          className="w-full text-sm bg-white rounded-xl border border-brand-surface-container-high p-4 text-brand-ink focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/5 ml-0"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Controls */}
                <div className="mt-8 flex items-center justify-between border-t border-[#f0eded] pt-4">
                  <div>
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-brand-ink transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" /> Back
                      </button>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="rounded-full bg-neutral-100 hover:bg-[#eadecc]/30 hover:text-brand-ink px-5 py-2.5 font-sans text-xs font-medium text-neutral-500 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={step === 3 && (!selectedDate || !selectedTime)}
                      className={`flex items-center gap-1.5 rounded-full px-6 py-2.5 font-sans text-xs font-semibold transition-all ${
                        step === 3 && (!selectedDate || !selectedTime)
                          ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                          : "bg-brand-primary text-white shadow-md shadow-brand-primary/10 hover:bg-brand-primary-container"
                      }`}
                    >
                      {step === 4 ? "Complete Secure Booking" : "Next Step"} <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
