// constants/tech-stack-data.ts

export const TECH_STACK_DATA = {
  mlFrameworks: [
    {
      name: "TensorFlow & Keras",
      desc: "Google’s comprehensive deep learning platform for building and deploying ML models. We use TensorFlow for complex neural networks, computer vision systems, and production ML pipelines.",
    },
    {
      name: "PyTorch",
      desc: "Preferred framework for research and production ML with dynamic computational graphs. Excellent for NLP applications and custom model architectures.",
    },
    {
      name: "scikit-learn",
      desc: "Industry-standard library for classical machine learning algorithms including regression, classification, clustering, and dimensionality reduction.",
    },
    {
      name: "XGBoost / LightGBM / CatBoost",
      desc: "Gradient boosting frameworks for structured data problems. These tools consistently deliver state of the art results in predictive modeling competitions.",
    },
    {
      name: "Hugging Face Transformers",
      desc: "Access to thousands of pre-trained language models for NLP tasks. We fine-tune BERT, GPT, T5, and other transformer models for custom applications.",
    },
  ],
  llms: [
    {
      name: "OpenAI GPT-4/GPT-3.5",
      desc: "Advanced language models for text generation, summarization, question answering, and code generation. We implement GPT-4 for complex reasoning tasks and GPT-3.5 for cost-effective applications.",
    },
    {
      name: "Anthropic Claude",
      desc: "Constitutional AI for safe, helpful, and honest interactions. Excellent for applications requiring nuanced understanding and ethical decision-making.",
    },
    {
      name: "Google PaLM/Gemini",
      desc: "Multimodal AI capabilities handling text, images, and code. We leverage Gemini for applications requiring cross-modal understanding.",
    },
    {
      name: "Open-Source Models",
      desc: "Llama 2 for on premise deployment, Mistral for efficient inference, Falcon for specialized applications, and Custom fine-tuned models.",
    },
  ],
  mlOps: [
    "MLflow",
    "Kubeflow",
    "Apache Airflow",
    "Docker & Kubernetes",
    "Weights & Biases",
  ],
  cloudPlatforms: [
    {
      provider: "AWS AI Services",
      color: "text-[#2776ea]",
      services: [
        "SageMaker: End-to-end ML platform for training and deployment",
        "Rekognition: Computer vision and facial analysis",
        "Comprehend: Natural language processing",
        "Textract: Document text extraction",
        "Personalize: Recommendation systems",
        "Forecast: Time series forecasting",
      ],
    },
    {
      provider: "Google Cloud AI",
      color: "text-[#76ea27]",
      services: [
        "Vertex AI: Unified ML platform",
        "Vision AI: Image analysis and classification",
        "Natural Language AI: Text understanding",
        "Document AI: Intelligent document processing",
        "Recommendations AI: Personalized recommendations",
      ],
    },
    {
      provider: "Azure AI",
      color: "text-blue-600",
      services: [
        "Azure Machine Learning: Enterprise ML platform",
        "Cognitive Services: Pre-built AI capabilities",
        "Azure OpenAI Service: GPT-4 and other models",
        "Form Recognizer: Document understanding",
        "Computer Vision: Image analysis",
      ],
    },
  ],
};