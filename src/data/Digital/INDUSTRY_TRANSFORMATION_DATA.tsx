import { 
  Factory, 
  ShoppingBag, 
  Landmark, 
  HeartPulse 
} from "lucide-react";

export const INDUSTRY_TRANSFORMATION_DATA = [
  {
    id: "manufacturing",
    industry: "Manufacturing",
    subtitle: "Industry 4.0 Implementation",
    icon: Factory,
    imageTag: "",
    features: [
      "Smart factory architecture",
      "IoT sensor networks",
      "Predictive maintenance",
      "Digital twin technology",
      "AI driven quality control",
      "Supply chain digitization"
    ],
    outcomes: [
      { label: "Productivity", value: "20-30%", trend: "up" },
      { label: "Downtime Reduction", value: "50%+", trend: "down" },
      { label: "Quality Improvement", value: "15-25%", trend: "up" },
      { label: "Inventory Reduction", value: "30-40%", trend: "down" }
    ]
  },
  {
    id: "retail",
    industry: "Retail",
    subtitle: "Omnichannel Retail",
    icon: ShoppingBag,
    imageTag: "",
    features: [
      "E-commerce platforms",
      "Mobile commerce",
      "In-store digital experiences",
      "Unified inventory management",
      "Customer data platforms",
      "Personalization engines"
    ],
    outcomes: [
      { label: "Online Revenue", value: "40-60%", trend: "up" },
      { label: "Basket Size", value: "20-30%", trend: "up" },
      { label: "Customer Retention", value: "25%", trend: "up" },
      { label: "Operational Efficiency", value: "15-20%", trend: "up" }
    ]
  },
  {
    id: "finance",
    industry: "Financial Services",
    subtitle: "Digital Banking",
    icon: Landmark,
    imageTag: "",
    features: [
      "Mobile banking apps",
      "Digital account opening",
      "AI driven customer service",
      "Fraud detection systems",
      "Regulatory compliance automation",
      "Open banking APIs"
    ],
    outcomes: [
      { label: "Digital Adoption", value: "60-70%", trend: "up" },
      { label: "Cost-to-Serve", value: "50%", trend: "down" },
      { label: "Account Opening", value: "30-40%", trend: "faster" },
      { label: "Fraud Accuracy", value: "90%+", trend: "up" }
    ]
  },
  {
    id: "healthcare",
    industry: "Healthcare",
    subtitle: "Connected Healthcare",
    icon: HeartPulse,
    imageTag: "",
    features: [
      "Telemedicine platforms",
      "Electronic health records",
      "Patient portals",
      "Medical imaging AI",
      "Population health analytics",
      "Remote patient monitoring"
    ],
    outcomes: [
      { label: "Patient Access", value: "40%", trend: "up" },
      { label: "Admin Costs", value: "30%", trend: "down" },
      { label: "Patient Satisfaction", value: "25%", trend: "up" },
      { label: "Outcomes", value: "Better", trend: "up" }
    ]
  }
];