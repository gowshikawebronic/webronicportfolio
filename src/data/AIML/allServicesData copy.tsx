import {
  ClipboardCheck, Lightbulb, Layers, TrendingUp, Map, ShieldCheck, 
  Target, Users, Brain, GitMerge, RefreshCw, Zap, 
  MessageSquareText, ScanSearch, FolderOpen, FileText, MessageCircleQuestion, Languages, TableProperties, Bot,
  Scan, Image as ImageIcon, ScanFace, AlertTriangle, Video, Cuboid, 
  UserMinus, Wrench, Banknote, ShieldAlert, Tag, 
  Workflow, Settings2, MessageSquare, Mail 
} from "lucide-react";

export const servicesData = [
  // 1. AI Strategy & Consulting
  {
    id: "ai-strategy",
    header: {
      badge: "Core Capabilities",
      titleLine1: "AI Strategy &",
      titleHighlight: "Consulting Services",
      description: "Navigate the complex AI landscape with a clear, business-aligned roadmap tailored to drive competitive advantage."
    },
    cards: [
      { title: "AI Readiness Assessment", desc: "Evaluate data infrastructure, technical capabilities, and organizational readiness. We analyze systems, data quality, and team skills.", icon: ClipboardCheck, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10", border: "hover:border-[#2776ea]" },
      { title: "Use Case Identification", desc: "Discover high-value opportunities through structured workshops. We balance business impact with technical feasibility.", icon: Lightbulb, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10", border: "hover:border-[#76ea27]" },
      { title: "Tech Selection & Architecture", desc: "Choose the right platforms and frameworks. Our architects design scalable AI infrastructure that integrates seamlessly.", icon: Layers, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10", border: "hover:border-[#2776ea]" },
      { title: "ROI Modeling", desc: "Quantify expected benefits with detailed financial models showing cost savings, revenue opportunities, and risk mitigation.", icon: TrendingUp, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10", border: "hover:border-[#76ea27]" },
      { title: "Implementation Roadmap", desc: "Develop 12-24 month phased plans balancing quick wins with strategic initiatives, complete with quarterly milestones.", icon: Map, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10", border: "hover:border-[#2776ea]" },
      { title: "Governance Framework", desc: "Establish responsible AI practices and compliance protocols to address bias, fairness, transparency, and regulations.", icon: ShieldCheck, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10", border: "hover:border-[#76ea27]" }
    ],
    // Special section for CustomAIModelDev, null for others
    process: null,
    footer: {
      left: {
        title: "Typical Engagement",
        type: "highlight", // Render as Big Text
        content: "6-8 Weeks",
        sub: "From kick-off to final roadmap"
      },
      right: {
        title: "Key Deliverables",
        type: "tags", // Render as pills
        content: ["Strategy Document", "Use Case Portfolio", "Tech Architecture", "ROI Models"]
      }
    }
  },

  // 2. Custom AI/ML Model Development
  {
    id: "custom-model",
    header: {
      badge: "Technical Capabilities",
      titleLine1: "Custom AI/ML",
      titleHighlight: "Model Development",
      description: "Every business has unique data and challenges. Our development services create custom machine learning systems optimized specifically for your use cases."
    },
    cards: [
      { title: "Supervised Learning", desc: "Classification and regression models for customer churn, demand forecasting, quality defect detection, and fraud identification.", icon: Target, tags: ["Random Forests", "Gradient Boosting", "SVM", "Neural Networks"], color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Unsupervised Learning", desc: "Clustering and anomaly detection systems to discover hidden patterns, customer segments, and network intrusions.", icon: Users, tags: ["Clustering", "Dimensionality Reduction", "Anomaly Detection"], color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Deep Learning Solutions", desc: "Neural networks for complex pattern recognition tasks.", icon: Brain, tags: ["CNN (Image)", "RNN (Sequence)", "Transformers (NLP)", "GANs"], color: "text-[#2776ea]", bg: "bg-[#2776ea]/10", span: "md:col-span-2 lg:col-span-1" },
      { title: "Ensemble Methods", desc: "Combine multiple models (stacking, bagging, boosting) for superior accuracy and production-grade robustness.", icon: GitMerge, tags: ["Stacking", "Bagging", "Boosting"], color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Transfer Learning", desc: "Leverage pre-trained models fine-tuned for your data, dramatically reducing training time while maintaining high accuracy.", icon: RefreshCw, tags: ["Pre-trained Models", "Fine-tuning", "High Efficiency"], color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "AutoML Solutions", desc: "Automated model selection and hyperparameter tuning to accelerate time-to-value with automated ML pipelines.", icon: Zap, tags: ["Google AutoML", "H2O.ai", "Custom Pipelines"], color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" }
    ],
    process: ["Data Exploration", "Architecture Selection", "Training & Validation", "Optimization", "Evaluation", "Deployment"],
    footer: {
      left: {
        title: "Frameworks Used",
        type: "tags",
        content: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "LightGBM", "Keras", "Hugging Face"]
      },
      right: {
        title: "Typical Timeline",
        type: "mixed", // Complex type (Text + List)
        mainText: "8-16 Weeks",
        subText: "Depending on complexity",
        listTitle: "Key Deliverables",
        list: ["Trained Models & Weights", "API Endpoints", "Training Notebooks", "Performance Metrics"]
      }
    }
  },

  // 3. Natural Language Processing (NLP)
  {
    id: "nlp",
    header: {
      badge: "Advanced Capabilities",
      titleLine1: "Natural Language",
      titleHighlight: "Processing (NLP)",
      description: "Extract insights and automate workflows with advanced natural language understanding capabilities powered by state-of-the-art Large Language Models (LLMs)."
    },
    cards: [
      { title: "Text Analytics & Sentiment", desc: "Analyze feedback and reviews to understand sentiment, extract themes, and identify trends with 95%+ accuracy.", icon: MessageSquareText, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Named Entity Recognition", desc: "Automatically classify names, organizations, locations, dates, and custom entities from unstructured text.", icon: ScanSearch, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Document Classification", desc: "Automatically route, tag, and organize documents. Ideal for email routing, legal docs, and content moderation.", icon: FolderOpen, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Text Summarization", desc: "Generate concise extractive and abstractive summaries of long reports, transcripts, and contracts.", icon: FileText, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Question Answering", desc: "Build intelligent systems that understand natural queries and provide accurate responses from your knowledge base.", icon: MessageCircleQuestion, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Language Translation", desc: "Context-aware neural machine translation across 100+ languages, preserving industry-specific terminology.", icon: Languages, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Information Extraction", desc: "Extract structured data (tables, fields) from unstructured docs like invoices, records, and research papers.", icon: TableProperties, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Conversational AI", desc: "Develop sophisticated dialogue systems for customer service, internal support, and domain applications.", icon: Bot, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" }
    ],
    process: null,
    footer: {
      left: {
        title: "Powering Tech",
        type: "tags",
        content: ["OpenAI GPT-4", "Google Gemini", "Anthropic Claude", "Hugging Face", "Custom Fine-Tuning"]
      },
      right: {
        title: "Key Use Cases",
        type: "list", // Bullet points
        content: ["Customer Service Automation", "Document Processing", "Content Moderation", "Market Research", "Compliance Monitoring"]
      }
    }
  },

  // 4. Computer Vision
  {
    id: "computer-vision",
    header: {
      badge: "Visual Intelligence",
      titleLine1: "Computer Vision",
      titleHighlight: "Solutions",
      description: "Transform visual data into actionable insights with cutting-edge computer vision systems powered by deep learning."
    },
    cards: [
      { title: "Object Detection & Recognition", desc: "Identify and locate objects in images and video streams with bounding box precision.", icon: Scan, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Image Classification", desc: "Categorize images into predefined classes for medical diagnosis, product categorization, etc.", icon: ImageIcon, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Semantic Segmentation", desc: "Pixel-level understanding of images for precise object delineation.", icon: Layers, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Facial Recognition & Analysis", desc: "Detect, recognize, and analyze faces for security and customer analytics.", icon: ScanFace, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Optical Character Recognition", desc: "Extract text from images and documents including invoices and forms with 99%+ accuracy.", icon: FileText, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Anomaly Detection", desc: "Identify defects, damage, or anomalies in manufacturing quality control.", icon: AlertTriangle, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Video Analytics", desc: "Real time analysis of video streams.", list: ["Crowd counting", "Traffic monitoring", "Retail analytics", "Safety compliance"], icon: Video, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "3D Computer Vision", desc: "Depth estimation and spatial understanding for robotics and AR.", icon: Cuboid, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" }
    ],
    process: null,
    footer: {
      left: {
        title: "Frameworks & Tools",
        type: "tags",
        content: ["TensorFlow Object Detection", "PyTorch with torchvision", "OpenCV", "YOLO (Real-time)", "Detectron2", "Custom Edge Architectures"]
      },
      right: {
        title: "Performance Metrics",
        type: "metrics",
        content: [
          { value: "95%+", label: "Accuracy on Standard Benchmarks" },
          { value: "<100ms", label: "Inference Time for Real-Time Apps" }
        ]
      }
    }
  },

  // 5. Predictive Analytics
  {
    id: "predictive-analytics",
    header: {
      badge: "Future Intelligence",
      titleLine1: "Predictive Analytics",
      titleHighlight: "& Forecasting",
      description: "Anticipate future trends, behaviors, and outcomes with advanced predictive modeling and forecasting systems."
    },
    cards: [
      { title: "Demand Forecasting", desc: "Predict future demand with statistical and ML models. Reduce inventory costs by 20-30%.", icon: TrendingUp, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Customer Churn Prediction", desc: "Identify customers at risk of churning. Predict churn probability with 85%+ accuracy.", icon: UserMinus, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Predictive Maintenance", desc: "Forecast equipment failures. Reduce unplanned downtime by 50-75%.", icon: Wrench, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Financial Forecasting", desc: "Predict revenue, cash flow, and profitability using time series analysis.", icon: Banknote, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Risk Scoring & Assessment", desc: "Assess credit risk, fraud risk, and operational risk using predictive models.", icon: ShieldAlert, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Price Optimization", desc: "Determine optimal pricing strategies using demand elasticity models.", icon: Tag, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" }
    ],
    process: null,
    footer: {
      left: {
        title: "Techniques Used",
        type: "tags",
        content: ["Time Series (ARIMA, Prophet)", "Regression Models", "XGBoost, LightGBM", "Neural Networks", "Ensemble Methods"]
      },
      right: {
        title: "Business Impact",
        type: "metrics",
        content: [
          { value: "15-30%", label: "Improvement in Forecast Accuracy" },
          { value: "20-40%", label: "Reduction in Inventory Costs" },
          { value: "10-25%", label: "Increase in Revenue Optimization" }
        ]
      }
    }
  },

  // 6. Intelligent Automation
  {
    id: "intelligent-automation",
    header: {
      badge: "Efficiency Redefined",
      titleLine1: "Intelligent Process",
      titleHighlight: "Automation",
      description: "Combine AI with automation to transform business processes and reduce manual effort."
    },
    cards: [
      { title: "RPA with AI", desc: "Enhance RPA with AI for document understanding and intelligent decision-making.", icon: Bot, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Intelligent Document Processing", desc: "Extract and process info from invoices and contracts. Reduce processing time by 80-90%.", icon: FileText, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Workflow Automation", desc: "Design intelligent workflows that route tasks based on AI decisions.", icon: Workflow, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Business Process Automation", desc: "Automate end-to-end processes like accounts payable and KYC.", list: ["Invoice processing", "Customer onboarding", "Claims processing"], icon: Settings2, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10", span: "md:col-span-2 lg:col-span-1" },
      { title: "Chatbots & Virtual Assistants", desc: "Automate routine interactions. Resolve 70-80% of queries without humans.", icon: MessageSquare, color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Email Automation", desc: "Classify and route emails using NLP. Prioritize urgent messages.", icon: Mail, color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" }
    ],
    process: null,
    footer: {
      left: {
        title: "Technologies",
        type: "tags",
        content: ["UiPath with AI Fabric", "Automation Anywhere", "Blue Prism", "Power Automate", "Custom Python"]
      },
      right: {
        title: "Business Impact (ROI)",
        type: "metrics",
        content: [
          { value: "40-60%", label: "Reduction in Processing Time" },
          { value: "30-50%", label: "Cost Savings" },
          { value: "90%+", label: "Accuracy in Decisions" }
        ]
      }
    }
  }
];