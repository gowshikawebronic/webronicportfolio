import {
  BarChart3,
  Cloud,
  Cpu,
  Globe,
  Code2,
  FileText,
  Layers,
  BookOpen,
} from "lucide-react";

export const RELATED_RESOURCES_DATA = {
  services: [
    {
      title: "Data Analytics & BI",
      href: "/services/data-analytics",
      icon: BarChart3,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Cloud Computing",
      href: "/services/cloud-native-services",
      icon: Cloud,
      color: "text-sky-500",
      bg: "bg-sky-50",
    },
    {
      title: "IoT Solutions",
      href: "/services/iot-solutions",
      icon: Cpu,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      title: "Digital Transformation",
      href: "/services/digital-transformation",
      icon: Globe,
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      title: "Custom Software",
      href: "/services/custom-software",
      icon: Code2,
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
  ],
  resourceColumns: [
    {
      title: "White Papers",
      icon: FileText,
      items: [
        { label: "The Executive’s Guide to AI Implementation", href: "#" },
        { label: "Measuring ROI from AI Investments", href: "#" },
        { label: "Building Responsible AI Systems", href: "#" },
      ],
    },
    {
      title: "Case Studies",
      icon: Layers,
      items: [
        { label: "Manufacturing AI Success Stories", href: "#" },
        { label: "Retail AI Transformation", href: "#" },
        { label: "Financial Services AI Innovation", href: "#" },
      ],
    },
    {
      title: "Blog Posts",
      icon: BookOpen,
      items: [
        { label: "How to Prepare Your Data for Machine Learning", href: "#" },
        { label: "Common AI Implementation Challenges", href: "#" },
        { label: "The Future of AI in Enterprise", href: "#" },
      ],
    },
  ],
};