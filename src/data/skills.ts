import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core scripting and query languages',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Machine Learning',
    description: 'Predictive modeling, algorithms and evaluation',
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
    title: 'Business Intelligence & Data Visualization',
    description: 'Interactive dashboards, DAX metrics and visual storytelling',
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
    title: 'Data Analysis & Manipulation',
    description: 'Data cleaning, transformation and exploratory analysis',
    skills: [
      'Pandas',
      'NumPy',
      'Data Cleaning',
      'Exploratory Data Analysis',
      'Data Preprocessing',
    ],
  },
  {
    title: 'Statistics',
    description: 'Quantitative inference and hypothesis testing',
    skills: [
      'Descriptive Statistics',
      'Probability',
      'Hypothesis Testing',
      'Correlation Analysis',
    ],
  },
  {
    title: 'Backend Development',
    description: 'API services and analytical application deployment',
    skills: ['FastAPI', 'Streamlit', 'REST APIs'],
  },
  {
    title: 'Development Tools',
    description: 'Version control and reproducible environments',
    skills: ['Jupyter Notebook', 'Git', 'GitHub'],
  },
];
