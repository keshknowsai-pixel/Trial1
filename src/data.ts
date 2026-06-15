export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  specs: {
    area: string;
    location: string;
    timeline: string;
    style: string;
  };
  features: string[];
  materials: {
    category: string;
    items: string[];
  }[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  quote: string;
  designNotes: string[];
  materialOptions: {
    name: string;
    variants: {
      label: string;
      colorClass: string;
      desc: string;
    }[];
  }[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string;
  deliverables: string[];
  duration: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "2bhk",
    title: "2BHK Residences",
    category: "Efficiency Meets Elegance",
    description: "Efficiency meets elegance in compact living.",
    longDescription: "A Masterclass in space optimization. This residential project redefines urban comfort by pairing customized hidden storage panels with warm, high-CRI galleries, maximizing the perception of negative space.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      area: "1,200 sq ft",
      location: "Geneva, Switzerland",
      timeline: "4 Months",
      style: "Japanese-Scandinavian (Japandi)"
    },
    features: [
      "Floor-to-ceiling rotatable partitions for partition fluidity",
      "Concealed dynamic lighting setups with warm Dim-to-Warm LEDs",
      "Integrated audio-acoustic ceiling panels",
      "Seamless terrazzo-microcement floor transitions"
    ],
    materials: [
      {
        category: "Woodwork",
        items: ["Brushed light oak veneers", "Muted birch plywood ceiling systems"]
      },
      {
        category: "Accents",
        items: ["Polished nickel details", "Textured boucle fabrics by Dedar"]
      }
    ]
  },
  {
    id: "3bhk",
    title: "3BHK Family Homes",
    category: "Shared Sanctuaries",
    description: "Spacious sanctuaries for shared memories.",
    longDescription: "Crafted specifically for intergenerational harmony, this family home employs balanced communal zones and highly acoustic, secluded study pods, creating visual lines that invite both interaction and deep rest.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      area: "1,850 sq ft",
      location: "Zurich, Switzerland",
      timeline: "5 Months",
      style: "Warm Modernism"
    },
    features: [
      "Centrally anchored dual-sided timber fireplace",
      "Bespoke children's room with microclimatic air controls",
      "Deep recess structural windows with custom lounge daybeds",
      "Double-layered acoustic insulation across shared walls"
    ],
    materials: [
      {
        category: "Flooring",
        items: ["Premium European ash engineered timber", "Reclaimed warm limestone pavings"]
      },
      {
        category: "Structures",
        items: ["Raw limestone plaster finishes", "Powder-coated minimalist aluminum frames"]
      }
    ]
  },
  {
    id: "villa",
    title: "Luxury Villas",
    category: "Architectural Masterpieces",
    description: "Architectural masterpieces redefined.",
    longDescription: "An expansive architectural statement focusing on spatial freedom. Large-scale structural voids, floor-to-ceiling glass systems, and a continuous flow between indoor terraces and pool borders establish an elevated design format.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      area: "4,600 sq ft",
      location: "Lake Como, Italy",
      timeline: "11 Months",
      style: "High-End Architectural Minimalist"
    },
    features: [
      "Cantilevered outdoor infinity reflection pools",
      "Double-height spatial voids with concrete textured columns",
      "Frameless floor-to-ceiling structural slide glass panels",
      "Fully integrated automatic environmental conditioning systems"
    ],
    materials: [
      {
        category: "Stone",
        items: ["Honed travertine slabs", "Brushed Nero Marquina marble features"]
      },
      {
        category: "Metals & Glass",
        items: ["Anodized bronze architectural supports", "Extra-clear low-iron acoustic glass"]
      }
    ]
  }
];

export const expertiseItems: ExpertiseItem[] = [
  {
    id: "kitchen",
    title: "Kitchen",
    description: "The heart of the home, where culinary art meets functional design.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    quote: "A space configured for seamless ergonomics and sensory experience.",
    designNotes: [
      "Hidden downdraft kitchen hood ventilation",
      "Ergonomic hand-free cabinetry push solutions",
      "Dynamic backlighting within custom pantry systems"
    ],
    materialOptions: [
      {
        name: "Island Countertop",
        variants: [
          { label: "Carrara Marble", colorClass: "bg-[#e2e8f0]", desc: "Crisp white stone with distinct grey crystalline veins." },
          { label: "Belgian Bluestone", colorClass: "bg-[#475569]", desc: "Muted dark charcoal calcite with delicate fossils." },
          { label: "Microcement", colorClass: "bg-[#94a3b8]", desc: "Ultra-raw, continuous industrial concrete coating." }
        ]
      },
      {
        name: "Cabinet Cabinetry",
        variants: [
          { label: "Smoked Oak", colorClass: "bg-[#5c4033]", desc: "Rich dark timber smoked for deep, high-contrast charm." },
          { label: "Muted Linen Paint", colorClass: "bg-[#f5f5dc]", desc: "Soft earthy beige with a subtle textured eggshell coat." }
        ]
      }
    ]
  },
  {
    id: "dining",
    title: "Dining Room",
    description: "Curated settings for meaningful conversations and shared experiences.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80",
    quote: "Symmetric lines that balance acoustic isolation and light distribution.",
    designNotes: [
      "Custom acoustic canvas ceilings for voice clarity",
      "Low-profile sculptural chandelier positioning",
      "Asymmetrical custom sideboard storage"
    ],
    materialOptions: [
      {
        name: "Dining Table Wood",
        variants: [
          { label: "Flemish Walnut", colorClass: "bg-[#4a3728]", desc: "Deep chocolate grains with high-density durability." },
          { label: "Bleached Ash", colorClass: "bg-[#efe6dd]", desc: "Subtle nord-styled light wood displaying elegant rings." }
        ]
      },
      {
        name: "Chairs Textile",
        variants: [
          { label: "Oatmeal Bouclè", colorClass: "bg-[#f2efe9]", desc: "Heavily textured curly woolen loops with comfortable cushion." },
          { label: "Saddle Leather", colorClass: "bg-[#a0522d]", desc: "Full-grain caramel leather that develops premium patina." }
        ]
      }
    ]
  },
  {
    id: "bathroom",
    title: "Bathroom",
    description: "Private sanctuaries designed for ritual, relaxation, and renewal.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    quote: "A calming oasis combining tactile raw materials and therapeutic water flows.",
    designNotes: [
      "Flush-mounted rain shower layouts",
      "Frameless back-lit heated custom anti-fog mirrors",
      "In-wall thermal dry towel radiator racks"
    ],
    materialOptions: [
      {
        name: "Wall Panel Stone",
        variants: [
          { label: "Travertine Romano", colorClass: "bg-[#dfd7cc]", desc: "Stonewashed Italian travertine with dynamic open pores." },
          { label: "Brushed Slate", colorClass: "bg-[#2d3748]", desc: "Split-face dark slate presenting rich mineral facets." }
        ]
      },
      {
        name: "Fitting Accents",
        variants: [
          { label: "Brushed Gunmetal", colorClass: "bg-[#555555]", desc: "Architectural satin graphite color, highly fingerprints-proof." },
          { label: "Aura Champagne Gold", colorClass: "bg-[#d4af37]", desc: "Luminous soft golden brass bringing warm luxury highlights." }
        ]
      }
    ]
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Restorative spaces tailored to your personal peace and rest.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    quote: "A sound-insulated container designed for deep biological recovery.",
    designNotes: [
      "Integrated noise attenuation wall cladding",
      "Automatic custom blackout ceiling track guides",
      "Intelligent bio-circadian warm LED arrays"
    ],
    materialOptions: [
      {
        name: "Headboard Textile",
        variants: [
          { label: "Washed Belgian Linen", colorClass: "bg-[#e5dfd3]", desc: "Ultra-breathable flax fiber in off-white textured beige." },
          { label: "Plush Moss Velvet", colorClass: "bg-[#3e4f3c]", desc: "Deep botanical green velvet, exceptionally soft and acoustic." }
        ]
      },
      {
        name: "Wardrobe Facing",
        variants: [
          { label: "Reeded Glass Panels", colorClass: "bg-[#cbd5e1]", desc: "Elegant fluted glass casting soft architectural shadows." },
          { label: "Raw Clay Plaster", colorClass: "bg-[#d7ccc8]", desc: "Mineral earthen rendering with continuous breathable matte texture." }
        ]
      }
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    number: "01",
    title: "Discovery",
    description: "We first understand what your needs are and what your home should feel like.",
    details: "During discovery, we formulate the project parameters through an in-depth conversation. We audit structural files, map out environmental orientations, evaluate daily traffic flows, and compile lists of tactile materials you love.",
    deliverables: ["Spatial Trajectory Map", "Tactile Wishlist Core", "Atmospheric Inspiration Mockups"],
    duration: "1 - 2 Weeks"
  },
  {
    id: "02",
    number: "02",
    title: "Vision",
    description: "We discuss potential color themes and material palettes that resonate with you, impressing you with a vision that exceeds expectations.",
    details: "We synthesize your core desires into comprehensive 3D moodboard volumes and curated material matrices. Clients are treated to scale-accurate lighting renderings and actual physically delivered material samples to experience contrasts.",
    deliverables: ["Curated 3D Moodboards", "Physical Material Matrices", "Initial Schematic Floorplans"],
    duration: "2 - 3 Weeks"
  },
  {
    id: "03",
    number: "03",
    title: "Refinement",
    description: "Refinement: We understand your needs and show you where your space can improve. We fine-tune every detail of the lighting and custom furniture curation.",
    details: "Surgical detailing of all joints, lighting sockets, custom cabinet details, and built-in elements. We finalize exact luminaire specs, coordinate millwork measurements, and plan acoustic integrations down to the millimeter.",
    deliverables: ["Millwork Fabrication Drawings", "Lighting & Electrical Schedules", "Construction-Ready Handover Documents"],
    duration: "3 - 4 Weeks"
  },
  {
    id: "04",
    number: "04",
    title: "Execution",
    description: "Execution: Our team brings the story to life with precision. A seamless delivery where your dream environment finally becomes a reality.",
    details: "Our dedicated master craftsmen and project management specialists translate visual blueprints into reality. We handle full supplier logistics, perform active quality checkpoints, complete custom furniture placements, and deliver critical post-turnover care.",
    deliverables: ["On-Site Master Craft Execution", "As-Built Archive Handover", "Bespoke Styling Details Delivery"],
    duration: "Flexible (Based on Scope)"
  }
];
