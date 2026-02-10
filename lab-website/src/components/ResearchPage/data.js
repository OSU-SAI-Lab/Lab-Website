export const projects = [
  {
    id: "geospatial-rag",
    title: "Geospatial RAG and Policy Regime Geodatabase Harmonization",
    shortDescription: "Building retrieval-augmented generation systems for geospatial policy data to enable intelligent querying and analysis of agricultural policies.",
    longDescription: `This project develops advanced retrieval-augmented generation (RAG) systems specifically designed for geospatial policy databases. We're creating intelligent systems that can understand, query, and harmonize complex policy regime data across different geographic regions and time periods.

The system combines natural language processing with geospatial analytics to make policy data more accessible to researchers and policymakers. Our approach enables semantic search across heterogeneous policy databases and automatic harmonization of different classification schemes.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Geospatial AI", "NLP"],
    domains: ["Digital Agriculture", "Policy"],
    memberIds: [2, 10],
    publicationIds: [],
    fundingSource: "USDA",
    startDate: "2024-01",
    endDate: null,
    externalLinks: []
  },
  {
    id: "monocular-depth-estimation",
    title: "Monocular Depth Estimation for Agricultural Applications",
    shortDescription: "Developing depth estimation techniques from satellite and drone imagery for shallow water bathymetry mapping and crop growth stage phenotyping.",
    longDescription: `This research focuses on extracting 3D information from single-view imagery in agricultural contexts. We're developing novel computer vision techniques that can estimate depth from monocular satellite imagery for shallow water bathymetry mapping and from drone imagery for precise crop growth stage phenotyping.

Our methods combine traditional photogrammetry with modern deep learning approaches, enabling accurate depth estimation without requiring expensive stereo camera setups or LiDAR sensors. This makes precision agriculture more accessible to farmers and researchers.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Geospatial AI"],
    domains: ["Digital Agriculture"],
    memberIds: [2, 11],
    publicationIds: [],
    fundingSource: null,
    startDate: "2023-09",
    endDate: null,
    externalLinks: []
  },
  {
    id: "diffusion-models-satellite",
    title: "Domain-Adapted Diffusion Models for Satellite Imagery",
    shortDescription: "Creating generative models for multispectral satellite imagery generation to address data scarcity in remote sensing applications.",
    longDescription: `We're developing domain-adapted diffusion models specifically designed for multispectral satellite imagery. Traditional generative models struggle with the unique characteristics of satellite data, including multiple spectral bands, varying resolutions, and domain-specific artifacts.

Our approach adapts state-of-the-art diffusion models to handle these challenges, enabling synthetic data generation that can augment limited training datasets and support data-scarce remote sensing applications. This work has implications for crop monitoring, land use classification, and environmental change detection.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Deep Learning", "Geospatial AI"],
    domains: ["Digital Agriculture"],
    memberIds: [2],
    publicationIds: [],
    fundingSource: null,
    startDate: "2024-03",
    endDate: null,
    externalLinks: []
  },
  {
    id: "geospatial-data-pipeline",
    title: "Scalable Geospatial Data Pipeline for ML",
    shortDescription: "Building a production-grade data pipeline that processes Sentinel-1/2 and IO-LULC products into standardized ML-ready data cubes.",
    longDescription: `This infrastructure project develops a scalable geospatial data pipeline that pulls Sentinel-1/2 satellite imagery and IO-LULC (land use/land cover) products from AWS S3 and converts them into standardized, ML-ready data cubes.

The pipeline handles petabyte-scale data processing, automatic quality control, cloud masking, and standardization across different satellite sensors and time periods. It provides a foundation for downstream geospatial machine learning tasks and enables researchers to focus on model development rather than data wrangling.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Distributed Systems", "Geospatial AI"],
    domains: ["Digital Agriculture", "Cloud Infrastructure"],
    memberIds: [4, 10],
    publicationIds: [],
    fundingSource: null,
    startDate: "2023-08",
    endDate: null,
    externalLinks: []
  },
  {
    id: "frequency-aware-architectures",
    title: "Frequency-Aware CNN-Transformer Architectures",
    shortDescription: "Exploring how state-of-the-art architectures capture spatial-frequency information for image classification and segmentation.",
    longDescription: `This research investigates how modern CNN-Transformer hybrid architectures learn and represent spatial-frequency information in images. We're developing frequency-aware modules that explicitly model both spatial and frequency domain features.

Our work provides insights into what these models learn and how they can be improved through frequency-aware design. Applications include medical imaging, remote sensing, and any domain where frequency characteristics are important for classification or segmentation tasks.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Deep Learning"],
    domains: ["Digital Agriculture"],
    memberIds: [4],
    publicationIds: [],
    fundingSource: null,
    startDate: "2024-01",
    endDate: null,
    externalLinks: []
  },
  {
    id: "ai-fault-detection-welding",
    title: "AI-Enabled Fault Detection in Welding",
    shortDescription: "Developing computer vision systems for automated quality control and fault detection in industrial welding processes.",
    longDescription: `This project applies deep learning to industrial quality control, specifically targeting fault detection in welding operations. We're developing real-time computer vision systems that can identify defects, classify weld quality, and provide actionable feedback to operators.

The system uses advanced object detection and classification techniques to analyze weld seams, detect anomalies, and ensure consistent quality. This work has direct applications in manufacturing and can significantly reduce inspection time while improving quality assurance.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Deep Learning"],
    domains: ["Manufacturing"],
    memberIds: [5],
    publicationIds: [],
    fundingSource: null,
    startDate: "2023-09",
    endDate: null,
    externalLinks: []
  },
  {
    id: "agricultural-rag-chatbot",
    title: "RAG-Based Chatbot for Agricultural Use Cases",
    shortDescription: "Building conversational AI systems that provide expert agricultural knowledge through retrieval-augmented generation.",
    longDescription: `We're developing intelligent chatbot systems that combine retrieval-augmented generation with domain-specific agricultural knowledge bases. The system can answer farmer questions, provide crop management advice, and assist with decision-making based on current research and best practices.

This work makes agricultural expertise more accessible, especially to small-scale farmers who may not have easy access to extension services or agronomists. The RAG approach ensures responses are grounded in verified information rather than hallucinated content.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["NLP", "Deep Learning"],
    domains: ["Digital Agriculture"],
    memberIds: [5],
    publicationIds: [],
    fundingSource: null,
    startDate: "2024-01",
    endDate: null,
    externalLinks: []
  },
  {
    id: "zero-shot-object-detection",
    title: "Zero-Shot and Few-Shot Object Detection Pipeline",
    shortDescription: "Advanced object detection pipeline using foundation models like SAM for zero-shot and few-shot annotation with visual optimization.",
    longDescription: `This project develops a state-of-the-art object detection pipeline capable of zero-shot and few-shot annotation using foundation models like the Segment Anything Model (SAM). The system supports multi-modal inputs including segmentation-assisted and text-prompt based detection.

A key innovation is the visual optimization suite that allows users to interactively fine-tune critical hyperparameters such as patch sizes and confidence thresholds using real-time graphical feedback. This ensures annotation precision while dramatically reducing the need for large labeled datasets.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Deep Learning"],
    domains: ["Digital Agriculture"],
    memberIds: [6],
    publicationIds: [],
    fundingSource: null,
    startDate: "2023-08",
    endDate: null,
    externalLinks: []
  },
  {
    id: "gpu-multi-instance-inference",
    title: "GPU Multi-Instance Inference Optimization",
    shortDescription: "Improving GPU utilization and throughput through multi-instance inference strategies for computer vision workloads.",
    longDescription: `This research focuses on optimizing GPU resource utilization for computer vision inference workloads. We're developing strategies for GPU multi-instance inference that can significantly improve throughput and reduce latency for production ML systems.

The work addresses the challenge of underutilized GPUs in inference scenarios where single models don't fully saturate the hardware. Our techniques enable multiple model instances or different models to share GPU resources efficiently, improving cost-effectiveness of ML deployments.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["HPC", "Distributed Systems"],
    domains: ["Cloud Infrastructure"],
    memberIds: [8],
    publicationIds: [],
    fundingSource: null,
    startDate: "2024-02",
    endDate: null,
    externalLinks: []
  },
  {
    id: "corn-residue-soil-analysis",
    title: "Vision-Based Corn Residue and Soil Aggregate Analysis",
    shortDescription: "Computer vision pipeline for accurate estimation of corn residue cover and soil aggregate size in agricultural fields.",
    longDescription: `This project develops computer vision techniques for analyzing agricultural field conditions, specifically targeting corn residue cover estimation and soil aggregate size distribution. These measurements are critical for soil health assessment and erosion control.

Our vision-based approach provides non-invasive, scalable alternatives to manual field measurements. The system can process drone or ground-based imagery to automatically quantify residue cover percentages and soil aggregate characteristics, enabling large-scale soil health monitoring.`,
    thumbnail: null,
    status: "active",
    researchAreas: ["Computer Vision", "Deep Learning"],
    domains: ["Digital Agriculture"],
    memberIds: [9],
    publicationIds: [],
    fundingSource: null,
    startDate: "2023-09",
    endDate: null,
    externalLinks: []
  }
];
