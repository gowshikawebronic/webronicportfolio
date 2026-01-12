import {
  Factory,
  ShoppingBag,
  Landmark,
  Activity,
  ScanEye,
  Zap,
  Settings2,
  TrendingUp,
  Users,
  Tag,
  Search,
  ShieldCheck,
  FileText,
  Brain,
  Stethoscope,
  MessageSquare
} from "lucide-react";

export const INDUSTRIES = [
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    theme: "blue", // Use Webronic Blue
    description: "Driving efficiency with computer vision and predictive maintenance.",
    features: [
      {
        title: "Quality Inspection Automation",
        desc: "Computer vision systems that inspect products for defects with 99%+ accuracy, eliminating costly human errors and increasing inspection speed by 10x.",
        icon: ScanEye,
        caseStudy: {
          title: "Automotive Parts Manufacturer",
          result: "Implemented computer vision quality inspection reducing defect escape rate from 2.3% to 0.1% while increasing inspection throughput by 400%.",
        },
      },
      {
        title: "Predictive Maintenance",
        desc: "ML models analyzing sensor data to predict equipment failures 2-4 weeks in advance, enabling planned maintenance and preventing costly breakdowns.",
        icon: Zap,
        caseStudy: {
          title: "Steel Manufacturing Plant",
          result: "Predictive maintenance system reduced unplanned downtime by 68% and maintenance costs by 35% over 18 months.",
        },
      },
      {
        title: "Production Optimization",
        desc: "AI driven optimization of production schedules, resource allocation, and process parameters to maximize throughput and minimize waste.",
        icon: Settings2,
      },
    ],
  },
  {
    id: "retail",
    label: "Retail & E-commerce",
    icon: ShoppingBag,
    theme: "green", // Use Webronic Green
    description: "Personalizing customer experiences and optimizing supply chains.",
    features: [
      {
        title: "Demand Forecasting",
        desc: "Advanced ML models predicting demand at SKU/store level with 85-90% accuracy, optimizing inventory levels and reducing stockouts by 40%.",
        icon: TrendingUp,
      },
      {
        title: "Customer Segmentation & Personalization",
        desc: "Clustering and predictive models identifying customer segments and personalizing product recommendations, increasing conversion rates by 25-35%.",
        icon: Users,
      },
      {
        title: "Dynamic Pricing Optimization",
        desc: "Real time pricing algorithms that maximize revenue while remaining competitive, increasing profit margins by 5-15%.",
        icon: Tag,
      },
      {
        title: "Visual Search",
        desc: "Computer vision-powered product search allowing customers to find items using photos, increasing engagement and sales.",
        icon: Search,
      },
    ],
  },
  {
    id: "finance",
    label: "Financial Services",
    icon: Landmark,
    theme: "blue",
    description: "Securing transactions and enabling smarter investment decisions.",
    features: [
      {
        title: "Fraud Detection",
        desc: "Real time ML models analyzing transaction patterns to detect fraud with 95%+ accuracy while minimizing false positives that frustrate customers.",
        icon: ShieldCheck,
      },
      {
        title: "Credit Risk Assessment",
        desc: "Predictive models evaluating credit risk using alternative data sources and advanced algorithms, improving approval rates for creditworthy customers.",
        icon: FileText,
      },
      {
        title: "Algorithmic Trading",
        desc: "ML-powered trading strategies analyzing market data and executing trades at optimal times.",
        icon: TrendingUp,
      },
      {
        title: "Customer Service Automation",
        desc: "AI chatbots handling routine inquiries and transactions, reducing call center volume by 60% while maintaining high satisfaction.",
        icon: MessageSquare,
      },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare AI",
    icon: Activity,
    theme: "green",
    description: "Assisting clinicians and improving patient outcomes with deep learning.",
    features: [
      {
        title: "Medical Image Analysis",
        desc: "Deep learning models analyzing X-rays, MRIs, CT scans, and pathology images to assist radiologists in diagnosis with accuracy matching specialist physicians.",
        icon: ScanEye,
      },
      {
        title: "Clinical Decision Support",
        desc: "AI systems providing evidence-based treatment recommendations and identifying potential drug interactions or contraindications.",
        icon: Stethoscope,
      },
      {
        title: "Patient Risk Stratification",
        desc: "Predictive models identifying patients at high risk for adverse events, enabling proactive interventions.",
        icon: Brain,
      },
      {
        title: "Medical Transcription",
        desc: "NLP-powered systems automatically transcribing and structuring physician notes, saving 2-3 hours daily per clinician.",
        icon: FileText,
      },
    ],
  },
];