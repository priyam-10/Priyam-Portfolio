import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'heart-disease-prediction',
    title: 'Heart Disease Prediction Using Machine Learning',
    category: 'Machine Learning',
    shortDescription:
      'Cardio Monitor: A machine learning web application that estimates heart disease risk from clinical health indicators with high diagnostic precision.',
    problemStatement:
      'Cardiovascular diseases are the leading cause of global mortality. Early, non-invasive risk detection enables physicians to intervene before critical events occur, saving lives through timely preventative care.',
    keyImplementation: [
      'Processed patient clinical datasets (Cleveland heart disease parameters) with outlier detection and standard feature scaling.',
      'Trained and validated Logistic Regression classification models, evaluating accuracy, precision, recall, and ROC-AUC curves.',
      'Architected a responsive, physician-friendly Streamlit web interface with real-time inference and risk categorization.',
      'Exported optimized model artifacts with Joblib for low-latency scoring.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'Joblib'],
    githubUrl: 'https://github.com/priyam-10/heart-disease-prediction-ml',
    liveDemoUrl: 'https://cardio-monitor-ml.streamlit.app',
    image: '/assets/projects/project-heart.png',
    featured: true,
    metricsOrOutcomes: [
      'Binary classification with high diagnostic recall',
      'Instantaneous client-side predictions',
      'Deployed live on Streamlit Cloud',
    ],
  },
  {
    id: 'marketing-funnel-analysis',
    title: 'Marketing Funnel & Lead Conversion Analysis',
    category: 'Data Analytics',
    shortDescription:
      'End-to-end marketing analytics and conversion funnel dashboard identifying critical drop-off stages and high-converting acquisition channels.',
    problemStatement:
      'Marketing teams frequently invest heavily in broad top-of-funnel campaigns without actionable visibility into which touchpoints cause lead attrition before final qualification.',
    keyImplementation: [
      'Aggregated and cleaned multi-stage marketing attribution data across awareness, consideration, and conversion stages.',
      'Identified drop-off bottlenecks, conversion velocity across campaigns, and channel-level ROI variations.',
      'Designed an interactive Streamlit analytical reporting application with custom filtering by timeline and channel.',
      'Produced data-backed recommendations for sales-marketing alignment and lead nurturing optimization.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit'],
    githubUrl: 'https://github.com/priyam-10/Marketing-Funnel-Lead-Conversion-Analysis',
    liveDemoUrl: 'https://marketing-funnel-lead-conversion-analysis.streamlit.app/',
    image: '/assets/projects/project-funnel.png',
    featured: true,
    metricsOrOutcomes: [
      'Detailed stage-by-stage drop-off tracking',
      'Actionable recommendations for conversion improvement',
      'Live interactive dashboard deployed',
    ],
  },
  {
    id: 'business-sales-performance',
    title: 'Business Sales Performance Analytics',
    category: 'Business Intelligence',
    shortDescription:
      'Comprehensive commercial analytics suite tracking revenue health, regional sales distributions, category profitability, and customer purchase trends.',
    problemStatement:
      'Business leadership lacked consolidated performance dashboards to evaluate product line profitability, regional growth discrepancies, and seasonal sales fluctuations across fiscal quarters.',
    keyImplementation: [
      'Engineered an analytical data pipeline transforming raw transaction records into strategic KPI metrics.',
      'Analyzed gross revenue, net margin, regional market share, and top-performing product categories.',
      'Created intuitive visualizations communicating complex multidimensional performance drivers at a glance.',
      'Deployed an interactive analytical dashboard facilitating dynamic slicing by region, segment, and quarter.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Streamlit'],
    githubUrl: 'https://github.com/priyam-10/Business-Sales-Performance-Analytics',
    liveDemoUrl: 'https://business-sales-performance-analytics.streamlit.app',
    image: '/assets/projects/project-sales.png',
    featured: true,
    metricsOrOutcomes: [
      'Consolidated revenue and profit margin KPI metrics',
      'Interactive regional drill-down capability',
      'Live deployment on Streamlit Cloud',
    ],
  },
  {
    id: 'customer-retention-churn',
    title: 'Customer Retention & Churn Analysis Dashboard',
    category: 'Business Intelligence',
    shortDescription:
      'Strategic Power BI and Python business intelligence dashboard analyzing customer churn patterns, retention cohorts, and revenue risk factors.',
    problemStatement:
      'SaaS and subscription businesses suffer severe revenue leakage when customer churn is only discovered post-cancellation rather than detected through behavioral tenure signals.',
    keyImplementation: [
      'Extracted, transformed, and modeled customer behavioral datasets using Power Query ETL workflows.',
      'Authored complex DAX measures calculating dynamic retention rates, churn percentages, and customer lifetime value cohorts.',
      'Segmented customer groups across subscription tenure, service contracts, and payment frequencies.',
      'Synthesized actionable retention opportunities to mitigate customer attrition risks.',
    ],
    technologies: ['Power BI', 'Power Query', 'DAX', 'Python'],
    githubUrl: 'https://github.com/priyam-10/Customer-Retention-Churn-Analysis-Dashboard',
    image: '/assets/projects/project-churn.png',
    featured: true,
    metricsOrOutcomes: [
      'Interactive executive Power BI dashboard',
      'Tenure and contract cohort segmentation',
      'Data-driven retention strategy insights',
    ],
  },
  {
    id: 'movie-data-analysis',
    title: 'Movie Data Analysis (EDA)',
    category: 'Exploratory Data Analysis',
    shortDescription:
      'Rigorous exploratory data analysis on extensive film metadata investigating box office drivers, genre popularity, runtime effects, and rating correlations.',
    problemStatement:
      'Unstructured entertainment datasets hide valuable market patterns regarding budget-to-revenue multipliers, critic versus audience rating trends, and seasonal premiere effects.',
    keyImplementation: [
      'Cleaned and normalized extensive movie databases, imputing missing records and standardizing inflation and currency values.',
      'Performed statistical correlation analysis between production budgets, runtime, voter counts, and overall revenue.',
      'Crafted informative heatmaps, distribution plots, and category breakdowns using Matplotlib and Seaborn.',
      'Summarized key findings and market patterns in structured Jupyter Notebook documentation.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/priyam-10/movie-data-analysis',
    featured: false,
    metricsOrOutcomes: [
      'Exploratory analysis across thousands of movie records',
      'Correlation heatmaps and demographic revenue trends',
      'Clean, reproducible Jupyter Notebook workflow',
    ],
  },
  {
    id: 'postcraft-ai',
    title: 'PostCraft AI',
    category: 'Artificial Intelligence',
    shortDescription:
      'AI-powered content studio generating dynamic video reels and synchronized audio narratives from text prompts using automated backend media pipelines.',
    problemStatement:
      'Creating engaging short-form social video content requires tedious manual effort across scripting, voice synthesis, subtitle timing, and video compilation.',
    keyImplementation: [
      'Architected a Flask backend service with asynchronous background worker queues for media generation.',
      'Integrated text-to-speech AI APIs for natural voice synthesis and narrative audio tracks.',
      'Automated video rendering and audio-visual synchronization using FFmpeg command pipelines.',
      'Built a clean user interface for uploading assets, previewing generated reels, and downloading output videos.',
    ],
    technologies: ['Python', 'Flask', 'FFmpeg', 'REST APIs', 'ElevenLabs / TTS', 'HTML5/CSS3'],
    githubUrl: 'https://github.com/priyam-10/PostCraft-AI',
    featured: false,
    metricsOrOutcomes: [
      'Automated end-to-end video reel generation',
      'Integrated voice synthesis with background worker queues',
      'Customizable media compilation pipeline',
    ],
  },
  {
    id: 'uidai-hackathon-2026',
    title: 'Leaving No One Behind — UIDAI Hackathon 2026',
    category: 'Hackathon',
    shortDescription:
      'National hackathon data analytics initiative analyzing demographic and biometric update patterns across Aadhaar datasets to enhance digital inclusion.',
    problemStatement:
      'UIDAI Hackathon 2026 invited young technologists to analyze massive anonymized national identity datasets to discover inclusion gaps, update bottlenecks, and predictive patterns for public service delivery.',
    keyImplementation: [
      'Conducted exploratory data analysis and spatial/demographic breakdown on anonymized government datasets.',
      'Identified regional update disparities and demographic cohorts with lower digital onboarding rates.',
      'Formulated data-driven policy recommendations and scalable operational frameworks to support digital inclusion.',
      'Documented statistical methodology, demographic insights, and public governance impact.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Statistical Analysis', 'Data Visualization'],
    githubUrl: 'https://github.com/priyam-10/Leaving-No-One-Behind-UIDAI-Hackathon-2026',
    featured: false,
    metricsOrOutcomes: [
      'Submission for UIDAI National Data Hackathon 2026',
      'In-depth demographic & biometric update analysis',
      'Policy recommendations for inclusive digital governance',
    ],
  },
];
