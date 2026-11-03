import type { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'sirte-btech',
    typeLabel: 'CURRENT EDUCATION',
    degree: 'B.E. in Computer Science',
    institution: 'Sagar Institute of Research and Technology–Excellence (SIRTE)',
    location: 'Bhopal, Madhya Pradesh, India',
    duration: 'September 2024 – June 2028',
    status: 'Currently Pursuing — 3rd Year',
    scoreLabel: 'Current CGPA',
    scoreValue: '8.0 / 10.0',
    focusAreas: [
      'Data Analytics',
      'Machine Learning',
      'Database Management Systems',
      'Software Engineering',
    ],
  },
  {
    id: 'rosemary-xii',
    typeLabel: 'SECONDARY EDUCATION',
    degree: 'Senior Secondary Education (Class XII)',
    institution: 'Rose Mary H. S. School',
    location: 'Bhopal, Madhya Pradesh, India',
    duration: 'Completion Year: 2024',
    status: 'Completed',
    stream: 'Physics, Chemistry, Mathematics (PCM)',
    scoreLabel: 'Score',
    scoreValue: '92%',
    highlights: [
      'Specialized in Physics, Chemistry, and Mathematics (PCM).',
      'Developed a strong analytical and quantitative mathematical foundation.',
    ],
  },
];
