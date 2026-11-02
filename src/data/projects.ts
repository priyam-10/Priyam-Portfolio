import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'heart-disease-prediction',
    title: 'Heart Disease Prediction',
    category: 'Machine Learning',
    shortDescription:
      'A clinical machine learning web application predicting the likelihood of heart disease from 11 patient health parameters with 86.96% accuracy.',
    problemStatement:
      'Cardiovascular disease is the leading cause of death worldwide. Early detection can save lives, and machine learning can help flag patients who may be at risk through non-invasive clinical parameter scoring.',
    objectives: [
      'Analyze and clean clinical biomarkers from 918 patient records.',
      'Train, compare, and validate five machine learning classification models.',
      'Serve the top-performing model via an interactive dark-themed clinical monitor web app.',
    ],
    datasetInfo:
      'Heart Failure Prediction dataset (heart.csv) containing 918 patient records across 11 clinical features (Age, Sex, ChestPainType, RestingBP, Cholesterol, FastingBS, RestingECG, MaxHR, ExerciseAngina, Oldpeak, ST_Slope) and target HeartDisease.',
    approach: [
      'Data Cleaning: Handled invalid zero values in Cholesterol and RestingBP by imputing non-zero feature means.',
      'Feature Engineering: One-hot encoded categorical variables using pd.get_dummies to produce 15 model input features.',
      'Scaling & Split: Standardized numerical attributes using StandardScaler on an 80/20 train-test split.',
      'Model Selection: Compared five classifiers (Logistic Regression, Random Forest, Decision Tree, SVM, Naive Bayes); selected Logistic Regression for superior performance.',
      'Deployment: Exported model artifacts via Joblib and deployed an interactive Streamlit web dashboard.',
    ],
    keyImplementation: [
      'Processed 918 patient clinical records across 11 features with standard scaling.',
      'Evaluated five classification algorithms; Logistic Regression achieved 86.96% test accuracy and 0.885 F1 score.',
      'Built a responsive clinical-monitor Streamlit UI with animated ECG trace and risk gauge.',
      'Serialized model and scaler using Joblib for instantaneous client-side inference.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/priyam-10/heart-disease-prediction-ml',
    liveDemoUrl: 'https://cardio-monitor-ml.streamlit.app',
    image: '/assets/projects/cardio-screenshot.png',
    featured: true,
    metricsOrOutcomes: [
      '86.96% test accuracy with Logistic Regression classifier',
      '0.885 F1 score on clinical test split',
      'Instantaneous predictions deployed on Streamlit Cloud',
    ],
  },
  {
    id: 'marketing-funnel-analysis',
    title: 'Marketing Funnel Lead Conversion Analysis',
    category: 'Data Analytics',
    shortDescription:
      'Exploratory data analysis on 45,200+ bank marketing records examining lead progression, stage drop-offs, and communication channel effectiveness.',
    problemStatement:
      'Marketing teams frequently invest heavily in direct outreach campaigns without granular visibility into customer drop-off bottlenecks or contact channel effectiveness.',
    objectives: [
      'Analyze customer conversion behavior and calculate overall campaign conversion rates.',
      'Evaluate the effectiveness of communication channels (cellular vs. telephone).',
      'Identify the best-performing campaign months and demographic customer segments.',
      'Formulate actionable business recommendations to optimize marketing ROI.',
    ],
    datasetInfo:
      'Bank Marketing Dataset from the UCI Machine Learning Repository containing 45,211 customer records across 17 attributes spanning demographics, account balance, contact methods, and campaign timing (target: y).',
    approach: [
      'Data Cleaning & Inspection: Verified data types, missing records, and standardized categorical variables.',
      'Conversion Rate Analysis: Computed conversion ratios across demographic, economic, and campaign variables.',
      'Channel Evaluation: Evaluated contact methods, identifying cellular outreach as the primary driver of successful conversions.',
      'Temporal Analysis: Examined monthly customer response variations to identify optimal campaign scheduling windows.',
      'Reporting & Dashboard: Synthesized findings into an interactive Streamlit application and professional report.',
    ],
    keyImplementation: [
      'Cleaned and analyzed 45,211 customer records across 17 marketing attributes.',
      'Discovered key conversion differences across contact methods, months, and customer professions.',
      'Designed an interactive Streamlit analytical reporting application with custom data filtering.',
      'Delivered five strategic, data-driven recommendations for campaign targeting and resource allocation.',
    ],
    technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Streamlit'],
    githubUrl: 'https://github.com/priyam-10/Marketing-Funnel-Lead-Conversion-Analysis',
    liveDemoUrl: 'https://marketing-funnel-lead-conversion-analysis.streamlit.app/',
    image: '/assets/projects/funnel-chart.png',
    featured: true,
    metricsOrOutcomes: [
      'Comprehensive EDA across 45,211 marketing campaign records',
      'Identified cellular communication as highest-converting contact channel',
      'Live interactive analytics dashboard deployed on Streamlit Cloud',
    ],
  },
  {
    id: 'business-sales-performance',
    title: 'Business Sales Performance Analytics',
    category: 'Data Analytics',
    shortDescription:
      'Commercial sales analytics project examining transaction records to uncover revenue trends, regional performance, and category profitability.',
    problemStatement:
      'Business leadership lacked consolidated visibility into gross revenue health, regional sales discrepancies, and category-level profit margins across multi-quarter retail operations.',
    objectives: [
      'Analyze retail transaction records to track sales growth and revenue trends.',
      'Compare sales and profit across product categories (Technology, Office Supplies, Furniture).',
      'Evaluate regional market performance (West, East, Central, South).',
      'Identify top revenue-generating customers and products to guide commercial strategy.',
    ],
    datasetInfo:
      'Superstore retail sales dataset (Superstore.csv) containing transactional records including order dates, regional territories, customer segments, product categories, sales, discounts, and profit figures.',
    approach: [
      'Data Preparation: Handled missing values, formatted datetime fields, and calculated financial ratios in Python.',
      'Trend Analysis: Modeled monthly sales trajectories to uncover seasonal demand cycles.',
      'Category & Margin Analysis: Evaluated category profitability, revealing strong margins in Technology and compressed margins in Furniture.',
      'Regional Breakdown: Mapped geographic performance to identify regional disparities between West and South territories.',
      'Dashboard Deployment: Deployed an interactive Streamlit dashboard allowing dynamic filtering by region and segment.',
    ],
    keyImplementation: [
      'Engineered an analytical data pipeline transforming raw transaction records into strategic KPI metrics.',
      'Identified Technology as the top-performing category and the West region as the leading sales territory.',
      'Highlighted customer concentration where top 10 customers drove a substantial portion of overall revenue.',
      'Formulated actionable recommendations for inventory prioritization and regional pricing adjustments.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/priyam-10/Business-Sales-Performance-Analytics',
    liveDemoUrl: 'https://business-sales-performance-analytics.streamlit.app',
    image: '/assets/projects/sales-trend.png',
    featured: true,
    metricsOrOutcomes: [
      'Identified Technology as the strongest sales and profit-generating category',
      'Revealed the West region as the leading commercial revenue territory',
      'Delivered five strategic business recommendations in an analytics report',
    ],
  },
  {
    id: 'customer-retention-churn',
    title: 'Customer Retention Churn Analysis Dashboard',
    category: 'Data Analytics',
    shortDescription:
      'Power BI analytics dashboard evaluating customer retention behavior, churn drivers, and contract-wise lifetime value across 7,000+ accounts.',
    problemStatement:
      'Subscription businesses suffer severe revenue leakage when customer churn is only discovered post-cancellation rather than anticipated through behavioral tenure signals.',
    objectives: [
      'Measure and monitor overall customer churn (26.58%) and retention (73.42%) rates.',
      'Segment customers by contract type, internet service, payment method, and tenure.',
      'Analyze Customer Lifetime Value (CLV) and evaluate the financial impact of customer attrition.',
      'Formulate targeted, data-backed retention strategies to improve customer loyalty.',
    ],
    datasetInfo:
      'Telco Customer Churn Dataset containing 7,043 customer accounts (1,869 churned, 5,174 retained) with an average tenure of 32.42 months and average customer lifetime value of $2.28K.',
    approach: [
      'Data Cleaning & Transformation: Executed Power Query ETL workflows to standardize data types and handle missing values.',
      'Data Modeling & DAX: Authored dynamic DAX measures calculating churn rates, retention percentages, and CLV cohorts.',
      'Cohort Segmentation: Analyzed churn across contract types (Month-to-month contracts demonstrated substantially higher attrition than multi-year contracts).',
      'Executive Dashboarding: Built an interactive two-page Power BI dashboard with KPI scorecards, visual filters, and strategic insights.',
    ],
    keyImplementation: [
      'Modeled retention and churn drivers across 7,043 customer accounts in Power BI.',
      'Created custom DAX metrics for active customer counts, churn rate, and lifetime value.',
      'Identified high-risk customer segments based on contract terms, payment methods, and tenure length.',
      'Developed an executive dashboard with interactive visual slicers for business decision-makers.',
    ],
    technologies: ['Power BI', 'DAX', 'Power Query', 'Python'],
    githubUrl: 'https://github.com/priyam-10/Customer-Retention-Churn-Analysis-Dashboard',
    liveDemoUrl: 'https://customer-retention-churn-analysis-dashboard.streamlit.app/',
    image: '/assets/projects/churn-dashboard.jpg',
    featured: true,
    metricsOrOutcomes: [
      'Analyzed 7,043 customer accounts with 26.58% baseline churn rate',
      'Demonstrated that multi-year contracts substantially reduce customer attrition',
      'Built interactive executive Power BI dashboard with KPI scorecards',
    ],
  },
  {
    id: 'movie-data-analysis',
    title: 'Movie Data Analysis',
    category: 'Data Analytics',
    shortDescription:
      'Exploratory data analysis on 9,800+ movies investigating genre distributions, audience popularity, vote metrics, and release-year patterns.',
    problemStatement:
      'Large entertainment datasets contain complex, multi-attribute records that require systematic exploratory data analysis to uncover audience engagement and release patterns.',
    objectives: [
      'Analyze the frequency and distribution of movie genres across the dataset.',
      'Identify highly popular and less popular movies using popularity scores and vote counts.',
      'Categorize audience ratings and examine movie release-year trends.',
      'Demonstrate end-to-end data cleaning, categorical exploding, and visual analysis in Python.',
    ],
    datasetInfo:
      'mymoviedb.csv dataset containing 9,827 movie records across 9 attributes: Release_Date, Title, Overview, Popularity, Vote_Count, Vote_Average, Original_Language, Genre, and Poster_Url.',
    approach: [
      'Data Inspection: Checked missing values, verified duplicates, and inspected data types.',
      'Data Cleaning: Converted dates to datetime format and handled multi-value genre strings.',
      'Feature Engineering: Extracted release years, exploded multi-value genre entries, and grouped audience ratings.',
      'Exploratory Analysis: Computed genre frequencies, popularity distributions, and release-year trends.',
      'Visualization: Crafted visual charts using Matplotlib and Seaborn in a structured Jupyter Notebook.',
    ],
    keyImplementation: [
      'Cleaned and transformed 9,827 movie records in Python using Pandas and NumPy.',
      'Exploded and analyzed multi-value genre entries, finding Drama as the most frequent genre.',
      'Analyzed audience popularity metrics, identifying Spider-Man: No Way Home with the highest popularity score.',
      'Identified 2020 as the year with the highest volume of movie releases in the analyzed dataset.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/priyam-10/movie-data-analysis',
    image: '/assets/projects/project-movie.svg',
    featured: true,
    metricsOrOutcomes: [
      'Exploratory data analysis across 9,827 movie records',
      'Categorized and exploded multi-value genres to reveal audience preferences',
      'Documented reproducible analysis pipeline in Jupyter Notebook format',
    ],
  },
  {
    id: 'postcraft-ai',
    title: 'PostCraft AI',
    category: 'Artificial Intelligence',
    shortDescription:
      'An AI-powered content creation application that generates customized, engagement-focused LinkedIn posts using Google Gemini AI and Streamlit.',
    problemStatement:
      'Professionals, founders, and marketers struggle to consistently craft high-impact LinkedIn content tailored to specific writing tones, target audiences, and copywriting frameworks.',
    objectives: [
      'Enable users to generate high-quality LinkedIn posts from simple topic inputs.',
      'Provide customizable writing tones, target audience selections, and established copywriting frameworks.',
      'Offer an intuitive, responsive Streamlit interface with session history and instant post export/copy.',
    ],
    datasetInfo:
      'Generates original content on demand via Google Gemini AI API prompts; does not require static training datasets.',
    approach: [
      'Streamlit UI: Designed a responsive web interface (app.py) for topic entry and configuration.',
      'Prompt Builder: Created modular prompt-engineering logic (prompt_builder.py) assembling tone, audience, framework, and length.',
      'Gemini Integration: Connected to Google Gemini AI API (config.py) for low-latency generation.',
      'CLI Alternative: Provided a standalone command-line entrypoint (main.py) for terminal users.',
    ],
    keyImplementation: [
      'Architected an interactive Streamlit application powered by Google Gemini AI.',
      'Implemented multiple writing tones: Professional, Inspirational, Humorous, Funny, Angry, and Sad.',
      'Integrated established copywriting frameworks: AIDA, PAS, Storytelling, Listicle, and How-To/Tips.',
      'Added audience customization for Developers, Founders, Students, Recruiters, and Marketers.',
      'Included post length options: Short (100–150 words), Medium (200–300 words), and Long (400–500 words).',
    ],
    technologies: ['Python', 'Streamlit', 'Google Gemini AI', 'dotenv'],
    githubUrl: 'https://github.com/priyam-10/PostCraft-AI',
    image: '/assets/projects/project-postcraft.svg',
    featured: true,
    metricsOrOutcomes: [
      'Automated LinkedIn content generation powered by Google Gemini AI',
      'Supports 6 writing tones, 5 copywriting frameworks, and 5 target audiences',
      'Dual interface with full Streamlit web app (app.py) and CLI version (main.py)',
    ],
  },
  {
    id: 'uidai-hackathon-2026',
    title: 'Leaving No One Behind: UIDAI Hackathon 2026',
    category: 'Hackathon',
    shortDescription:
      'A UIDAI Data Hackathon analytics study examining age-wise and state-wise Aadhaar enrolment patterns to identify regional and demographic coverage gaps.',
    problemStatement:
      'National identity enrolment initiatives face regional bottlenecks and demographic update lags, requiring data analytics to identify underserved cohorts and ensure universal coverage.',
    objectives: [
      'Analyze age-wise Aadhaar enrolment distributions to spot demographic coverage trends.',
      'Identify top 10 and bottom 10 states and union territories by total enrolment numbers.',
      'Surface regional enrolment disparities and formulate data-driven inclusion recommendations.',
    ],
    datasetInfo:
      'UIDAI Aadhaar Enrolment Dataset provided for the UIDAI Data Hackathon, containing aggregated enrolment counts by Indian state/union territory and age groups.',
    approach: [
      'Data Processing: Processed aggregated enrolment records in Python using Pandas.',
      'Age Distribution Analysis: Generated distribution charts identifying enrolment concentration across age brackets.',
      'State Comparisons: Computed and ranked top 10 and bottom 10 states by enrolment numbers.',
      'Visual Reporting: Rendered clean visual bar and pie charts using Matplotlib for the hackathon report submission.',
    ],
    keyImplementation: [
      'Analyzed national Aadhaar enrolment data under the hackathon theme "Unlocking Societal Trends in Aadhaar Enrolment and Updates".',
      'Developed data processing logic in Python (analysis.py) with Pandas and Matplotlib.',
      'Generated age-wise distribution charts (age_group_pie_chart.png) and regional ranking charts (top_10_states_bar.png, bottom_10_states_bar.png).',
      'Identified specific state-level enrolment gaps and delivered data-backed policy recommendations.',
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/priyam-10/Leaving-No-One-Behind-UIDAI-Hackathon-2026',
    image: '/assets/projects/uidai-top-10.png',
    additionalImages: [
      '/assets/projects/uidai-age-group.png',
      '/assets/projects/uidai-bottom-10.png',
    ],
    featured: true,
    metricsOrOutcomes: [
      'National hackathon submission under "Unlocking Societal Trends in Aadhaar Enrolment"',
      'Produced age-group and top/bottom state enrolment visualizations',
      'Delivered data-backed recommendations to enhance digital inclusion',
    ],
  },
];
