import { 
  Factory, 
  ShoppingBag, 
  Landmark, 
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Trophy
} from "lucide-react";

export const CASE_STUDIES_DATA = [
  {
    id: "manufacturing",
    title: "Manufacturing Digital Transformation",
    client: "Global automotive parts manufacturer with $800M revenue",
    icon: Factory,
    imageTag: "",
    challenge: {
      items: [
        "High quality defect rates at 4.5%",
        "Limited supply chain visibility",
        "Siloed operations"
      ]
    },
    solution: {
      duration: "3-year transformation program",
      items: [
        "Cloud-based ERP implementation using SAP S/4HANA",
        "IoT sensors on 200+ production machines",
        "AI driven quality inspection system",
        "Supplier portal and integration",
        "Real-time production dashboard",
        "Agile operating model"
      ]
    },
    results: [
      { label: "Productivity", value: "28% increase in OEE" },
      { label: "Quality", value: "Defect rate reduced from 4.5% to 0.8%" },
      { label: "Inventory", value: "35% reduction in raw material inventory" },
      { label: "Delivery", value: "98% on-time delivery, up from 82%" },
      { label: "Cost", value: "$12M annual operational savings" },
      { label: "ROI", value: "2.1 years payback" }
    ]
  },
  {
    id: "retail",
    title: "Retail Omnichannel Transformation",
    client: "Regional retail chain with 45 stores and $200M revenue",
    icon: ShoppingBag,
    imageTag: "",
    challenge: {
      items: [
        "Declining foot traffic in stores",
        "No e-commerce presence",
        "Fragmented customer data",
        "Inventory managed per store",
        "Competitive pressure from online retailers"
      ]
    },
    solution: {
      duration: "18-month transformation",
      items: [
        "E-commerce platform using Shopify Plus",
        "Mobile app development",
        "Unified inventory system",
        "Customer data platform",
        "Personalization engine",
        "Buy online, pick up in store",
        "Store associate mobile POS"
      ]
    },
    results: [
      { label: "Online Revenue", value: "Grew to 35% of total revenue" },
      { label: "Same-Store Sales", value: "12% increase" },
      { label: "Customer Retention", value: "18% improvement" },
      { label: "Inventory Turns", value: "40% increase" },
      { label: "Customer Satisfaction", value: "4.2 to 4.7 out of 5" },
      { label: "ROI", value: "16 months" }
    ]
  },
  {
    id: "finance",
    title: "Financial Services Digital Banking",
    client: "Regional bank with $2B assets and 250K customers",
    icon: Landmark,
    imageTag: "",
    challenge: {
      items: [
        "78% of transactions in branches at high cost",
        "Losing customers to digital-first banks",
        "30-minute account opening process",
        "Limited mobile banking capabilities",
        "Manual loan processing"
      ]
    },
    solution: {
      duration: "2-year transformation",
      items: [
        "Mobile banking app for iOS and Android",
        "Digital account opening in 3 minutes",
        "AI chatbot for customer service",
        "Loan origination automation",
        "Fraud detection using ML models",
        "Cloud infrastructure migration"
      ]
    },
    results: [
      { label: "Digital Adoption", value: "68% of transactions now digital" },
      { label: "Cost-to-Serve", value: "52% reduction" },
      { label: "Customer Acquisition", value: "40% increase" },
      { label: "Account Opening", value: "3 minutes compared to 30 minutes" },
      { label: "Customer Satisfaction", value: "NPS +22 points" },
      { label: "Fraud Losses", value: "75% reduction" }
    ]
  }
];