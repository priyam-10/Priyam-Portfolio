import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'heart-disease-prediction',
    title: 'Heart Disease Prediction Using Machine Learning',
    category: 'Machine Learning',
    shortDescription:
      'Cardio Monitor: A predictive healthcare web application estimating heart disease risk from clinical health indicators with high diagnostic precision.',
    problemStatement:
      'Cardiovascular diseases are the leading cause of global mortality. Early, non-invasive risk detection enables physicians to intervene before critical events occur, saving lives through timely preventative care.',
    objectives: [
      'Analyze clinical biomarkers from the Cleveland heart disease dataset.',
      'Train, optimize, and evaluate classification algorithms for clinical risk scoring.',
      'Provide an accessible web interface for rapid, real-time risk assessment.',
    ],
    approach: [
      'Data preprocessing with z-score standardization and outlier handling.',
      'Logistic Regression model training evaluated with precision, recall, and ROC-AUC curves.',
      'Model serialization using Joblib for low-latency scoring.',
      'Interactive Streamlit application deployment with dynamic parameter sliders.',
    ],
    keyImplementation: [
      'Processed patient clinical datasets (Cleveland heart disease parameters) with outlier detection and standard feature scaling.',
      'Trained and validated Logistic Regression classification models, evaluating accuracy, precision, recall, and ROC-AUC curves.',
      'Architected a responsive, physician-friendly Streamlit web interface with real-time inference and risk categorization.',
      'Exported optimized model artifacts with Joblib for low-latency scoring.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Joblib', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/priyam-10/heart-disease-prediction-ml',
    liveDemoUrl: 'https://cardio-monitor-ml.streamlit.app',
    image: '/assets/projects/project-heart.svg',
    featured: true,
    metricsOrOutcomes: [
      'Binary classification with high diagnostic recall',
      'Instantaneous client-side inference (12ms latency)',
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
    objectives: [
      'Track customer journey transitions from awareness through qualification to purchase.',
      'Quantify stage-by-stage drop-off rates across diverse acquisition channels.',
      'Provide data-backed recommendations for ad spend optimization and nurturing.',
    ],
    approach: [
      'ETL pipeline cleaning multi-touch attribution transaction records.',
      'Funnel stage aggregation and drop-off velocity mathematical modeling.',
      'Visual storytelling with interactive channel and date range slicing in Streamlit.',
    ],
    keyImplementation: [
      'Aggregated and cleaned multi-stage marketing attribution data across awareness, consideration, and conversion stages.',
      'Identified drop-off bottlenecks, conversion velocity across campaigns, and channel-level ROI variations.',
      'Designed an interactive Streamlit analytical reporting application with custom filtering by timeline and channel.',
      'Produced data-backed recommendations for sales-marketing alignment and lead nurturing optimization.',
    ],
    technologies: ['Python', 'Pandas', 'Seaborn', 'Streamlit', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/priyam-10/Marketing-Funnel-Lead-Conversion-Analysis',
    liveDemoUrl: 'https://marketing-funnel-lead-conversion-analysis.streamlit.app/',
    image: '/assets/projects/project-funnel.svg',
    featured: true,
    metricsOrOutcomes: [
      'Stage-by-stage drop-off tracking across customer touchpoints',
      'Actionable recommendations for conversion optimization',
      'Live interactive dashboard deployed on Streamlit Cloud',
    ],
  },
  {
    id: 'business-sales-performance',
    title: 'Business Sales Performance Analytics',
    category: 'Business Intelligence',
    shortDescription:
      'Commercial analytics suite tracking revenue health, regional sales distributions, category profitability, and customer purchase trends.',
    problemStatement:
      'Business leadership lacked consolidated performance dashboards to evaluate product line profitability, regional growth discrepancies, and seasonal sales fluctuations across fiscal quarters.',
    objectives: [
      'Consolidate disparate transactional data into centralized commercial KPIs.',
      'Surface regional sales variance, discount impacts, and product profitability margins.',
      'Empower stakeholders with dynamic multidimensional drill-down capabilities.',
    ],
    approach: [
      'Automated data transformation aggregating thousands of sales records.',
      'Time-series decomposition identifying seasonal quarter-over-quarter trends.',
      'Interactive Streamlit reporting application with multi-parameter filtering.',
    ],
    keyImplementation: [
      'Engineered an analytical data pipeline transforming raw transaction records into strategic KPI metrics.',
      'Analyzed gross revenue, net margin, regional market share, and top-performing product categories.',
      'Created intuitive visualizations communicating complex multidimensional performance drivers at a glance.',
      'Deployed an interactive analytical dashboard facilitating dynamic slicing by region, segment, and quarter.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit', 'Seaborn'],
    githubUrl: 'https://github.com/priyam-10/Business-Sales-Performance-Analytics',
    liveDemoUrl: 'https://business-sales-performance-analytics.streamlit.app',
    image: '/assets/projects/project-sales.svg',
    featured: true,
    metricsOrOutcomes: [
      'Consolidated revenue and profit margin KPI metrics ($2.29M analyzed)',
      'Interactive regional drill-down across 4 operational territories',
      'Live deployment on Streamlit Cloud',
    ],
  },
  {
    id: 'customer-retention-churn',
    title: 'Customer Retention & Churn Analysis Dashboard',
    category: 'Business Intelligence',
    shortDescription:
      'Power BI and Python business intelligence dashboard analyzing customer churn patterns, retention cohorts, and revenue risk factors.',
    problemStatement:
      'SaaS and subscription businesses suffer severe revenue leakage when customer churn is only discovered post-cancellation rather than detected through behavioral tenure signals.',
    objectives: [
      'Identify key behavioral indicators correlated with subscription cancellation.',
      'Model retention decay curves across customer tenure and contract categories.',
      'Formulate targeted retention strategies to curb recurring revenue attrition.',
    ],
    approach: [
      'Data modeling and star schema design in Power BI using Power Query ETL.',
      'Dynamic DAX calculations for monthly churn percentage and cohort retention rates.',
      'Executive dashboard visualization with interactive slicers and risk matrices.',
    ],
    keyImplementation: [
      'Extracted, transformed, and modeled customer behavioral datasets using Power Query ETL workflows.',
      'Authored dynamic DAX measures calculating retention rates, churn percentages, and customer lifetime value cohorts.',
      'Segmented customer groups across subscription tenure, service contract types, and payment methods.',
      'Synthesized actionable retention opportunities to mitigate customer attrition risks.',
    ],
    technologies: ['Power BI', 'DAX', 'Power Query', 'Python'],
    githubUrl: 'https://github.com/priyam-10/Customer-Retention-Churn-Analysis-Dashboard',
    image: '/assets/projects/project-churn.svg',
    featured: true,
    metricsOrOutcomes: [
      'Interactive executive Power BI dashboard modeling customer lifetime',
      'Contract and tenure cohort segmentation (Month-to-month vs. Annual)',
      'Data-driven retention strategy insights reducing churn vulnerability',
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
    objectives: [
      'Clean, normalize, and impute missing records across multi-decade film archives.',
      'Perform Pearson and Spearman correlation analysis across budget, runtime, and revenue.',
      'Visualize genre-specific ROI distributions and demographic voting patterns.',
    ],
    approach: [
      'Data curation and missing value imputation in Python using Pandas and NumPy.',
      'Statistical distribution modeling and bivariate correlation testing.',
      'Visual synthesis with Matplotlib and Seaborn published in Jupyter Notebook format.',
    ],
    keyImplementation: [
      'Cleaned and normalized extensive movie databases, imputing missing records and standardizing inflation and currency values.',
      'Performed statistical correlation analysis between production budgets, runtime, voter counts, and overall revenue.',
      'Crafted informative heatmaps, distribution plots, and category breakdowns using Matplotlib and Seaborn.',
      'Summarized key findings and market patterns in structured Jupyter Notebook documentation.',
    ],
    technologies: ['Python', 'Pandas', 'Seaborn', 'Jupyter', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/priyam-10/movie-data-analysis',
    image: '/assets/projects/project-movie.svg',
    featured: true,
    metricsOrOutcomes: [
      'Exploratory analysis across thousands of multi-decade movie records',
      'Correlation heatmaps identifying r = 0.74 budget-to-revenue correlation',
      'Clean, reproducible Jupyter Notebook workflow with modular cells',
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
    objectives: [
      'Automate the pipeline from textual prompt to fully rendered vertical video reel.',
      'Integrate neural text-to-speech voice synthesis with accurate subtitle timestamps.',
      'Execute multi-layer video and audio muxing using headless FFmpeg pipelines.',
    ],
    approach: [
      'Flask backend architecture handling request dispatching and asset storage.',
      'API integration with AI text-to-speech synthesis providers.',
      'FFmpeg command-line pipelines for automated clip trimming, audio layering, and subtitle burning.',
    ],
    keyImplementation: [
      'Architected a Flask backend service with asynchronous background worker queues for media generation.',
      'Integrated text-to-speech AI APIs for natural voice synthesis and narrative audio tracks.',
      'Automated video rendering and audio-visual synchronization using FFmpeg command pipelines.',
      'Built a clean user interface for uploading assets, previewing generated reels, and downloading output videos.',
    ],
    technologies: ['Python', 'Flask', 'FFmpeg', 'REST APIs', 'HTML5/CSS3'],
    githubUrl: 'https://github.com/priyam-10/PostCraft-AI',
    image: '/assets/projects/project-postcraft.svg',
    featured: true,
    metricsOrOutcomes: [
      'Automated end-to-end video reel generation from text prompts',
      'Integrated voice synthesis with background worker processing',
      'Customizable media compilation and subtitle synchronization pipeline',
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
    objectives: [
      'Analyze anonymized regional update records across diverse age and demographic cohorts.',
      'Pinpoint geographic and demographic disparities in mandatory biometric updates.',
      'Formulate practical, data-backed policy recommendations for public administration.',
    ],
    approach: [
      'Demographic cohort analysis and statistical hypothesis testing on update frequency.',
      'Spatial and demographic disparity index computation across urban vs. rural cohorts.',
      'Documentation of governance policy frameworks to achieve universal coverage.',
    ],
    keyImplementation: [
      'Conducted exploratory data analysis and spatial/demographic breakdown on anonymized government datasets.',
      'Identified regional update disparities and demographic cohorts with lower digital onboarding rates.',
      'Formulated data-driven policy recommendations and scalable operational frameworks to support digital inclusion.',
      'Documented statistical methodology, demographic insights, and public governance impact.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Visualization'],
    githubUrl: 'https://github.com/priyam-10/Leaving-No-One-Behind-UIDAI-Hackathon-2026',
    image: '/assets/projects/project-uidai.svg',
    featured: true,
    metricsOrOutcomes: [
      'Submission for UIDAI National Data Hackathon 2026',
      'In-depth demographic & biometric update analysis across key age milestones',
      'Policy recommendations for inclusive digital governance and mobile enrollment',
    ],
  },
];
