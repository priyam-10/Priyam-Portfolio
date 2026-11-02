import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    number: '01',
    title: 'Programming Languages',
    description: 'Core scripting and query languages powering data pipelines and analytical logic.',
    skills: ['Python', 'SQL'],
  },
  {
    number: '02',
    title: 'Data Analysis & Manipulation',
    description: 'Libraries and methods for cleansing, transforming, and extracting insights from structured data.',
    skills: [
      'Pandas',
      'NumPy',
      'Data Cleaning',
      'Exploratory Data Analysis',
      'Data Preprocessing',
    ],
  },
  {
    number: '03',
    title: 'Business Intelligence & Data Visualization',
    description: 'Interactive dashboards, DAX measures, and visual storytelling for data-driven decisions.',
    skills: [
      'Power BI',
      'Power Query',
      'DAX',
      'Microsoft Excel',
      'Matplotlib',
      'Seaborn',
      'Dashboard Development',
      'Data Visualization',
    ],
  },
  {
    number: '04',
    title: 'Statistics',
    description: 'Mathematical foundations, probabilistic models, and hypothesis testing for analytical rigor.',
    skills: [
      'Descriptive Statistics',
      'Probability',
      'Hypothesis Testing',
      'Correlation Analysis',
    ],
  },
  {
    number: '05',
    title: 'Machine Learning',
    description: 'Supervised and unsupervised algorithms, feature engineering, and model evaluation metrics.',
    skills: [
      'Scikit-learn',
      'Regression',
      'Classification',
      'Clustering',
      'Model Evaluation',
      'Feature Scaling',
      'Predictive Modeling',
    ],
  },
  {
    number: '06',
    title: 'Backend Development',
    description: 'High-performance API development and interactive web application deployment.',
    skills: ['FastAPI', 'Streamlit', 'REST APIs'],
  },
  {
    number: '07',
    title: 'Development Tools',
    description: 'Essential version control workflows and computational notebook environments.',
    skills: ['Jupyter Notebook', 'Git', 'GitHub'],
  },
];

export interface CoreTechnology {
  name: string;
  role: string;
  category: string;
}

export const coreTechnologyStack: CoreTechnology[] = [
  { name: 'Python', role: 'Primary Language', category: 'Programming' },
  { name: 'SQL', role: 'Querying & Extraction', category: 'Databases' },
  { name: 'Pandas', role: 'Data Manipulation', category: 'Data Analysis' },
  { name: 'NumPy', role: 'Numerical Computing', category: 'Scientific Computing' },
  { name: 'Power BI', role: 'Business Intelligence', category: 'Visualization' },
  { name: 'Scikit-learn', role: 'Predictive Modeling', category: 'Machine Learning' },
  { name: 'FastAPI', role: 'API Services', category: 'Backend' },
];
