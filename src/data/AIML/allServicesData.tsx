// src/data/allServicesData.tsx

// You do NOT need to import lucide-react icons here anymore.
// We are just storing data (strings) now.

export const servicesData = [
  // 1. AI Strategy & Consulting
  {
    id: "ai-strategy",
    header: {
      badge: "Core Capabilities",
      titleLine1: "AI Strategy &",
      titleHighlight: "Consulting Services",
      description: "Beginning your AI journey requires a clear roadmap aligned with business objectives. Our AI consulting services help you navigate the complex landscape of artificial intelligence and identify high-value opportunities"
    },
    cards: [
      { title: "AI Readiness Assessment", desc: "Evaluate your organization’s data infrastructure, technical capabilities, and organizational readiness for AI adoption. We analyze your existing systems, data quality, team skills, and change management capacity to create a comprehensive readiness report", icon: "ClipboardCheck", color: "text-[#2776ea]", bg: "bg-[#2776ea]/10", border: "hover:border-[#2776ea]" },
      { title: "Use Case Identification & Prioritization", desc: "Discover high-value AI opportunities across your business processes through structured workshops and data analysis. We help you identify use cases with the optimal balance of business impact, technical feasibility, and implementation complexity", icon: "Lightbulb", color: "text-[#76ea27]", bg: "bg-[#76ea27]/10", border: "hover:border-[#76ea27]" },
      { title: "Technology Selection & Architecture Design", desc: "Choose the right AI platforms, frameworks, and tools for your specific requirements. Our architects design scalable AI infrastructure that integrates seamlessly with your existing technology stack", icon: "Layers", color: "text-[#2776ea]", bg: "bg-[#2776ea]/10", border: "hover:border-[#2776ea]" },
      { title: "ROI Modeling & Business Case Development", desc: "Quantify expected benefits and create compelling business cases for AI investments. We develop detailed financial models showing cost savings, revenue opportunities, and risk mitigation value", icon: "TrendingUp", color: "text-[#76ea27]", bg: "bg-[#76ea27]/10", border: "hover:border-[#76ea27]" },
      { title: "Implementation Roadmap", desc: "Develop phased plans that balance quick wins with strategic initiatives. Our roadmaps typically span 12-24 months with quarterly milestones and clear success metrics", icon: "Map", color: "text-[#2776ea]", bg: "bg-[#2776ea]/10", border: "hover:border-[#2776ea]" },
      { title: "Governance Framework", desc: "Establish responsible AI practices, ethics guidelines, and compliance protocols. We help you implement AI governance that addresses bias, fairness, transparency, and regulatory requirements", icon: "ShieldCheck", color: "text-[#76ea27]", bg: "bg-[#76ea27]/10", border: "hover:border-[#76ea27]" }
    ],
    process: null,
    footer: {
      left: { title: "Typical Engagement", type: "highlight", content: "6-8 Weeks", sub: "Customized to project scope" },
      right: { title: " Deliverables", type: "tags", content:["AI strategy document, prioritized use case portfolio, technical architecture, implementation roadmap, ROI models" ]}
    }
  },

  // 2. Custom AI/ML Model Development
  {
    id: "custom-model",
    header: {
      badge: "Technical Capabilities",
      titleLine1: "Custom AI/ML",
      titleHighlight: "Model Development",
      description: "Every business has unique data and challenges that require tailored AI solutions. Our model development services create custom machine learning systems optimized for your specific use cases"
    },
    cards: [
      { title: "Supervised Learning Models", desc: "Classification and regression models for prediction tasks including customer churn prediction, demand forecasting, quality defect detection, and fraud identification. We develop models using algorithms including random forests, gradient boosting, support vector machines, and neural networks", icon: "Target", tags: ["Random Forests", "Gradient Boosting", "SVM"], color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Unsupervised Learning", desc: "Clustering, dimensionality reduction, and anomaly detection systems for discovering hidden patterns in data. Applications include customer segmentation, anomaly detection in manufacturing, network intrusion detection, and recommendation systems", icon: "Users", tags: ["Clustering", "Anomaly Detection"], color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Deep Learning Solutions", desc: "Neural networks for complex pattern recognition tasks including: Convolutional Neural Networks (CNN) for image analysis, Recurrent Neural Networks (RNN) for sequence data, Transformers for natural language processing, Generative Adversarial Networks (GAN) for synthetic data generation", icon: "Brain", tags: ["CNN", "RNN", "Transformers"], color: "text-[#2776ea]", bg: "bg-[#2776ea]/10", span: "md:col-span-2 lg:col-span-1" },
      { title: "Ensemble Methods", desc: "Combine multiple models for superior accuracy and robustness. We implement stacking, bagging, and boosting techniques to create production-grade predictive systems", icon: "GitMerge", tags: ["Stacking", "Bagging"], color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Transfer Learning", desc: "Leverage pre-trained models and fine-tune for your specific data and use cases. This approach dramatically reduces training time and data requirements while maintaining high accuracy", icon: "RefreshCw", tags: ["Fine-tuning", "High Efficiency"], color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "AutoML Solutions", desc: "Automated model selection and hyperparameter tuning using tools including Google AutoML, H2O.ai, and custom automation frameworks. Accelerate time-to-value with automated machine learning pipelines", icon: "Zap", tags: ["Google AutoML", "H2O.ai"], color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" }
    ],
    process: ["Data Exploration and feature engineering", "Model Architecture Selection", "Training and Validation", "Hyperparameter Optimization", "Model evaluation and testing", "Production deployment"],
    footer: {
      left: { title: "Frameworks Used", type: "tags", content: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "Keras" ,"Hugging Face Transformers"] },
      right: { title: "Typical Timeline", type: "mixed", mainText: "8-16 Weeks", subText: "Varies based on complexity", listTitle: " Deliverables", list: ["Trained Models","Documentation", "API Endpoints", "Training Notebooks", "Performance Metrics"] }
    }
  },

  // 3. NLP
  {
    id: "nlp",
    header: {
      badge: "Advanced Capabilities",
      titleLine1: "Natural Language",
      titleHighlight: "Processing (NLP)",
      description: "Extract insights and automate workflows with advanced natural language understanding capabilities powered by state-of-the-art language models"
    },
    cards: [
      { title: "Text Analytics & Sentiment Analysis", desc: "Analyze customer feedback, social media content, reviews, and survey responses to understand sentiment, extract themes, and identify trends. Our sentiment analysis models achieve 95%+ accuracy across multiple languages", icon: "MessageSquareText", color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Named Entity Recognition (NER)", desc: "Automatically identify and classify entities including names, organizations, locations, dates, monetary values, and custom customer specific entities from unstructured text", icon: "ScanSearch", color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Document Classification & Categorization", desc: "Automatically route, tag, and organize documents based on content. Applications include email routing, content moderation, legal document classification, and medical record categorization", icon: "FolderOpen", color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Text Summarization", desc: "Generate concise summaries of long documents including reports, articles, transcripts, and legal contracts using both extractive and abstractive summarization techniques", icon: "FileText", color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Question Answering Systems", desc: "Build intelligent chatbots and virtual assistants that understand natural language queries and provide accurate responses from your knowledge base", icon: "MessageCircleQuestion", color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Language Translation", desc: "Translate content across 100+ languages with context-aware neural machine translation models that understand industry-specific terminology", icon: "Languages", color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" },
      { title: "Information Extraction", desc: "Extract structured data from unstructured documents including contracts, invoices, medical records, and research papers", icon: "TableProperties", color: "text-[#2776ea]", bg: "bg-[#2776ea]/10" },
      { title: "Conversational AI", desc: "Develop sophisticated dialogue systems for customer service, internal support, and specialized domain applications", icon: "Bot", color: "text-[#76ea27]", bg: "bg-[#76ea27]/10" }
    ],
    process: null,
    footer: {
      left: { title: "Technologies Used", type: "tags", content: ["OpenAI GPT-4/GPT-3.5 for advanced language understanding", "Google PaLM/Gemini for multimodal capabilities", "Anthropic Claude for consitutional AI", "Hugging Face Tranformers for open source models", " Custom fine-tuned models for customer specific applications"] },
      right: { title: " Use Cases", type: "list", content: ["Customer Service automation", "Document Processing", "Content Moderation","Market Research","Compliance Monitoring" ]}
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
    {
      title: "Object Detection & Recognition",
      desc: "Identify and locate objects in images and video streams with bounding box precision. Applications include retail inventory management, security surveillance, quality inspection, and autonomous systems.",
      icon: "Scan",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Image Classification",
      desc: "Categorize images into predefined classes for applications including medical diagnosis, product categorization, content moderation, and defect classification.",
      icon: "ImageIcon",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    },
    {
      title: "Semantic Segmentation",
      desc: "Pixel-level understanding of images for precise object delineation. Use cases include medical imaging analysis, autonomous driving, satellite imagery analysis, and agricultural monitoring.",
      icon: "Layers",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Facial Recognition & Analysis",
      desc: "Detect, recognize, and analyze faces for security access control, customer analytics, attendance systems, and personalized experiences (with appropriate privacy controls).",
      icon: "ScanFace",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    },
    {
      title: "Optical Character Recognition (OCR)",
      desc: "Extract text from images and documents including invoices, receipts, forms, handwritten notes, and signage with 99%+ accuracy.",
      icon: "FileText",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Anomaly Detection",
      desc: "Identify defects, damage, or anomalies in manufacturing quality control, infrastructure inspection, medical imaging, and security monitoring.",
      icon: "AlertTriangle",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    },
    {
      title: "Video Analytics",
      desc: "Real time analysis of video streams for complex applications.",
      list: [
        "Crowd counting & behavior analysis",
        "Traffic monitoring & management",
        "Retail analytics (flow, dwell time)",
        "Safety compliance monitoring"
      ],
      icon: "Video",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "3D Computer Vision",
      desc: "Depth estimation, 3D reconstruction, and spatial understanding for robotics, augmented reality, and autonomous systems.",
      icon: "Cuboid",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    }
  ],
  process: null,
  footer: {
    left: {
      title: "Frameworks & Tools",
      type: "tags",
      content: [
        "TensorFlow Object Detection API",
        "PyTorch with torchvision",
        "OpenCV for image processing",
        "YOLO for Real-time detection",
        "Detectron2 for instance segentation",
        "Custom architectures optimized for edge deployment"
      ]
    },
    right: {
      title: "Performance Metrics",
      type: "metrics",
      content: [
        { value: "95%+", label: "Accuracy on Standard Benchmarks" },
        { value: "<100ms", label: "Inference Time for Real Time Applications" }
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
    {
      title: "Demand Forecasting",
      desc: "Predict future demand with statistical and machine learning models that account for seasonality, trends, promotions, and external factors. Reduce inventory costs by 20-30% while maintaining service levels.",
      icon: "TrendingUp",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Customer Churn Prediction",
      desc: "Identify customers at risk of churning before they leave. Our models analyze behavioral patterns, engagement metrics, and satisfaction indicators to predict churn probability with 85%+ accuracy.",
      icon: "UserMinus",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    },
    {
      title: "Predictive Maintenance",
      desc: "Forecast equipment failures before they occur using sensor data, maintenance history, and operational conditions. Reduce unplanned downtime by 50-75% and optimize maintenance schedules.",
      icon: "Wrench",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Financial Forecasting",
      desc: "Predict revenue, cash flow, profitability, and key financial metrics using time series analysis and machine learning. Support strategic planning with scenario modeling and sensitivity analysis.",
      icon: "Banknote",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    },
    {
      title: "Risk Scoring & Assessment",
      desc: "Assess credit risk, fraud risk, operational risk, and other business risks using predictive models trained on historical data and real time indicators.",
      icon: "ShieldAlert",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Price Optimization",
      desc: "Determine optimal pricing strategies using demand elasticity models, competitive analysis, and revenue optimization algorithms.",
      icon: "Tag",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    }
  ],
  process: null,
  footer: {
    left: {
      title: "Techniques Used",
      type: "tags",
      content: [
        "Time Series Analysis (ARIMA, Prophet, LSTM)",
        "Regression Models(Linear, Ridge, Lasso, Elastic net",
        "Gradient Boosting (XGBoost, LightGBM, CatBoost)",
        "Neural Networks for Complex Patterns",
        "Ensemble Methods for Robust Predictions "
      ]
    },
    right: {
      title: "Business Impact",
      type: "metrics",
      content: [
        { value: "15-30%", label: "Forecast Accuracy Improvement" },
        { value: "20-40%", label: "Reduction in Inventory Costs" },
        { value: "10-25%", label: "Revenue Increase via Optimization" }
      ]
    }
  }
},

  // 6. Automation
  {
  id: "intelligent-automation",
  header: {
    badge: "Efficiency Redefined",
    titleLine1: "Intelligent Process",
    titleHighlight: "Automation",
    description: "Combine AI with automation to transform business processes and reduce manual effort."
  },
  cards: [
    {
      title: "Robotic Process Automation (RPA) with AI",
      desc: "Enhance traditional RPA with AI capabilities including document understanding, intelligent decision-making, and exception handling. Automate complex processes that require cognitive capabilities.",
      icon: "Bot",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Intelligent Document Processing",
      desc: "Automatically extract, classify, and process information from documents including invoices, contracts, forms, and reports. Reduce document processing time by 80-90%.",
      icon: "FileText",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    },
    {
      title: "Workflow Automation",
      desc: "Design and implement intelligent workflows that route, process, and manage tasks based on AI driven decisions. Integrate with existing systems including ERP, CRM, and custom applications.",
      icon: "Workflow",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Business Process Automation",
      desc: "Automate end to end business processes including invoice processing, customer onboarding, claims processing, order fulfillment, and HR processes.",
      list: [
        "Invoice processing & Accounts Payable",
        "Customer onboarding & KYC",
        "Claims processing & Fulfillment",
        "HR processes (resume screening)"
      ],
      icon: "Settings2",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10",
      span: "md:col-span-2 lg:col-span-1"
    },
    {
      title: "AI powered Chatbots & Virtual Assistants",
      desc: "Build conversational AI systems that handle customer inquiries, provide support, and automate routine interactions. Our chatbots resolve 70-80% of common queries without human intervention.",
      icon: "MessageSquare",
      color: "text-[#2776ea]",
      bg: "bg-[#2776ea]/10"
    },
    {
      title: "Email Automation & Routing",
      desc: "Automatically classify, route, and respond to emails using NLP and machine learning. Prioritize urgent messages and draft responses for agent review.",
      icon: "Mail",
      color: "text-[#76ea27]",
      bg: "bg-[#76ea27]/10"
    }
  ],
  process: null,
  footer: {
    left: {
      title: "Technologies",
      type: "tags",
      content: [
        "UiPath with AI Fabric",
        "Automation Anywhere (IQ Bot)",
        "Blue Prism with Document Automation",
        "Microsoft Power Automate",
        "Custom Python Automation"
      ]
    },
    right: {
      title: "Business Impact (ROI)",
      type: "metrics",
      content: [
        { value: "40-60%", label: "Reduction in Processing Time" },
        { value: "30-50%", label: "Cost Savings" },
        { value: "90%+", label: "Accuracy in Automated Decisions" }
      ]
    }
  }
},
];