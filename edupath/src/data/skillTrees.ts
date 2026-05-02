/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SkillNode {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  resources: { name: string; url: string }[];
  learningOutcomes: string[];
  projects: string[];
  nextSkills: string[];
  icon?: string;
  parentId?: string;
  isCategory?: boolean;
}

export interface DomainPath {
  id: string;
  title: string;
  rootNode: string;
  nodes: SkillNode[];
}

export const skillTrees: Record<string, DomainPath> = {
  'web-dev': {
    id: 'web-dev',
    title: 'Web Development',
    rootNode: 'frontend-root',
    nodes: [
      {
        id: 'frontend-root',
        name: 'Frontend Developer',
        description: 'Master the art of building beautiful, interactive user interfaces for the modern web.',
        difficulty: 'Beginner',
        estimatedTime: '6-12 months',
        resources: [],
        learningOutcomes: ['Build responsive websites', 'Master JavaScript', 'Learn React'],
        projects: ['Portfolio Site', 'E-commerce UI'],
        nextSkills: ['html-css-cat'],
        isCategory: false
      },
      {
        id: 'html-css-cat',
        name: 'HTML & CSS Fundamentals',
        description: 'The building blocks of every website. Learn how to structure and style content.',
        difficulty: 'Beginner',
        estimatedTime: '4 weeks',
        resources: [],
        learningOutcomes: [],
        projects: [],
        nextSkills: ['html5', 'css3', 'flexbox', 'grid', 'responsive'],
        parentId: 'frontend-root',
        isCategory: true
      },
      {
        id: 'html5',
        name: 'HTML5',
        description: 'HyperText Markup Language - the structure of the web.',
        difficulty: 'Beginner',
        estimatedTime: '1 week',
        resources: [
          { name: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
          { name: 'freeCodeCamp HTML', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' }
        ],
        learningOutcomes: ['Semantic HTML', 'Forms & Validation', 'Media elements'],
        projects: ['Simple Landing Page'],
        nextSkills: ['css3'],
        parentId: 'html-css-cat'
      },
      {
        id: 'css3',
        name: 'CSS3',
        description: 'Cascading Style Sheets - making the web beautiful.',
        difficulty: 'Beginner',
        estimatedTime: '1 week',
        resources: [
          { name: 'MDN CSS Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
        ],
        learningOutcomes: ['Selectors', 'Box Model', 'Typography', 'Colors'],
        projects: ['Style a Resume'],
        nextSkills: ['flexbox'],
        parentId: 'html-css-cat'
      },
      {
        id: 'flexbox',
        name: 'Flexbox',
        description: 'Modern layout system for one-dimensional layouts.',
        difficulty: 'Beginner',
        estimatedTime: '3 days',
        resources: [
          { name: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/' }
        ],
        learningOutcomes: ['Flex direction', 'Justify content', 'Align items'],
        projects: ['Navigation Bar'],
        nextSkills: ['grid'],
        parentId: 'html-css-cat'
      },
      {
        id: 'grid',
        name: 'Grid',
        description: 'Powerful layout system for two-dimensional layouts.',
        difficulty: 'Intermediate',
        estimatedTime: '4 days',
        resources: [
          { name: 'Grid Garden', url: 'https://cssgridgarden.com/' }
        ],
        learningOutcomes: ['Grid tracks', 'Areas', 'Gap'],
        projects: ['Photo Gallery Layout'],
        nextSkills: ['responsive'],
        parentId: 'html-css-cat'
      },
      {
        id: 'responsive',
        name: 'Responsive Design',
        description: 'Ensuring your site looks great on all devices.',
        difficulty: 'Intermediate',
        estimatedTime: '1 week',
        resources: [
          { name: 'Responsive Web Design', url: 'https://web.dev/learn/design/' }
        ],
        learningOutcomes: ['Media Queries', 'Viewport', 'Mobile-first'],
        projects: ['Fully Responsive Website'],
        nextSkills: ['js-core-cat'],
        parentId: 'html-css-cat'
      },
      {
        id: 'js-core-cat',
        name: 'JavaScript Core',
        description: 'The programming language that powers the interactivity of the web.',
        difficulty: 'Intermediate',
        estimatedTime: '8 weeks',
        resources: [],
        learningOutcomes: [],
        projects: [],
        nextSkills: ['js-basics', 'dom', 'es6', 'async'],
        parentId: 'frontend-root',
        isCategory: true
      },
      {
        id: 'js-basics',
        name: 'Variables & Types',
        description: 'Understanding data in JavaScript.',
        difficulty: 'Beginner',
        estimatedTime: '1 week',
        resources: [{ name: 'JS Info', url: 'https://javascript.info/first-steps' }],
        learningOutcomes: ['let/const', 'Primitives', 'Memory model'],
        projects: ['Simple Calculator'],
        nextSkills: ['dom'],
        parentId: 'js-core-cat'
      },
      {
        id: 'dom',
        name: 'DOM Manipulation',
        description: 'Interacting with HTML through JavaScript.',
        difficulty: 'Intermediate',
        estimatedTime: '2 weeks',
        resources: [{ name: 'MDN DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' }],
        learningOutcomes: ['Events', 'Query Selectors', 'Creating elements'],
        projects: ['To-Do List'],
        nextSkills: ['es6'],
        parentId: 'js-core-cat'
      },
      {
        id: 'react-cat',
        name: 'React.js',
        description: 'The most popular library for building user interfaces.',
        difficulty: 'Intermediate',
        estimatedTime: '6 weeks',
        resources: [],
        learningOutcomes: [],
        projects: [],
        nextSkills: ['react-basics', 'hooks', 'router'],
        parentId: 'frontend-root',
        isCategory: true
      },
      {
        id: 'react-basics',
        name: 'Components & Props',
        description: 'The core architecture of React.',
        difficulty: 'Intermediate',
        estimatedTime: '1 week',
        resources: [{ name: 'React Dev', url: 'https://react.dev/learn' }],
        learningOutcomes: ['JSX', 'Functional Components', 'Props'],
        projects: ['Contact Card App'],
        nextSkills: ['hooks'],
        parentId: 'react-cat'
      }
    ]
  },
  'ml': {
    id: 'ml',
    title: 'Machine Learning',
    rootNode: 'ml-root',
    nodes: [
      {
        id: 'ml-root',
        name: 'ML Engineer',
        description: 'Build and deploy intelligent systems that learn from data.',
        difficulty: 'Advanced',
        estimatedTime: '12-18 months',
        resources: [],
        learningOutcomes: ['Math for ML', 'Python mastery', 'Neural Networks'],
        projects: ['Prediction Models', 'AI Chatbots'],
        nextSkills: ['math-cat'],
        isCategory: false
      },
      {
        id: 'math-cat',
        name: 'Math Foundations',
        description: 'The underlying mathematics required for machine learning.',
        difficulty: 'Advanced',
        estimatedTime: '10 weeks',
        resources: [],
        learningOutcomes: [],
        projects: [],
        nextSkills: ['linear-algebra', 'calculus', 'statistics'],
        parentId: 'ml-root',
        isCategory: true
      },
      {
        id: 'linear-algebra',
        name: 'Linear Algebra',
        description: 'Vectors, matrices, and tensor operations.',
        difficulty: 'Advanced',
        estimatedTime: '3 weeks',
        resources: [{ name: '3Blue1Brown', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' }],
        learningOutcomes: ['Matrix multiplication', 'Eigenvalues', 'Tensors'],
        projects: ['Image transformation script'],
        nextSkills: ['calculus'],
        parentId: 'math-cat'
      }
    ]
  },
  'data-science': {
    id: 'data-science',
    title: 'Data Science',
    rootNode: 'ds-root',
    nodes: [
      {
        id: 'ds-root',
        name: 'Data Scientist',
        description: 'Uncover insights from data to drive business decisions.',
        difficulty: 'Intermediate',
        estimatedTime: '9-12 months',
        resources: [],
        learningOutcomes: ['SQL Mastery', 'Python Analysis', 'Statistical Inference'],
        projects: ['Data Dashboards', 'Survival Prediction'],
        nextSkills: ['ds-foundations-cat'],
        isCategory: false
      },
      {
        id: 'ds-foundations-cat',
        name: 'Data Foundations',
        description: 'Getting and cleaning data.',
        difficulty: 'Beginner',
        estimatedTime: '6 weeks',
        resources: [],
        learningOutcomes: [],
        projects: [],
        nextSkills: ['sql', 'excel', 'cleaning'],
        parentId: 'ds-root',
        isCategory: true
      },
      {
        id: 'sql',
        name: 'SQL',
        description: 'Structured Query Language for database communication.',
        difficulty: 'Beginner',
        estimatedTime: '2 weeks',
        resources: [{ name: 'SQLBolt', url: 'https://sqlbolt.com/' }],
        learningOutcomes: ['SELECT', 'JOINs', 'Aggregations'],
        projects: ['Retail database queries'],
        nextSkills: ['excel'],
        parentId: 'ds-foundations-cat'
      }
    ]
  },
  'software-eng': {
    id: 'software-eng',
    title: 'Software Engineering',
    rootNode: 'se-root',
    nodes: [
      {
        id: 'se-root',
        name: 'Software Engineer',
        description: 'Apply engineering principles to computer software development.',
        difficulty: 'Advanced',
        estimatedTime: '12-24 months',
        resources: [],
        learningOutcomes: ['DSA', 'System Design', 'Clean Code'],
        projects: ['Large systems', 'Open source contributions'],
        nextSkills: ['cs-cat'],
        isCategory: false
      },
      {
        id: 'cs-cat',
        name: 'Programming Fundamentals',
        description: 'Core concepts of computer science.',
        difficulty: 'Intermediate',
        estimatedTime: '12 weeks',
        resources: [],
        learningOutcomes: [],
        projects: [],
        nextSkills: ['dsa', 'oop', 'patterns'],
        parentId: 'se-root',
        isCategory: true
      },
      {
        id: 'dsa',
        name: 'Data Structures & Algorithms',
        description: 'How to organize and manipulate data efficiently.',
        difficulty: 'Advanced',
        estimatedTime: '6 weeks',
        resources: [{ name: 'LeetCode', url: 'https://leetcode.com/' }],
        learningOutcomes: ['Array/Lists', 'Trees/Graphs', 'Big O Analysis'],
        projects: ['Pathfinding Visualizer'],
        nextSkills: ['oop'],
        parentId: 'cs-cat'
      }
    ]
  },
  'devops': {
    id: 'devops',
    title: 'DevOps',
    rootNode: 'devops-root',
    nodes: [
      {
        id: 'devops-root',
        name: 'DevOps Engineer',
        description: 'Bridge the gap between development and operations.',
        difficulty: 'Advanced',
        estimatedTime: '12-18 months',
        resources: [],
        learningOutcomes: ['Linux mastery', 'CI/CD Pipelines', 'Cloud architecture'],
        projects: ['Auto-deploy pipelines', 'Infrastructure as Code'],
        nextSkills: ['linux-cat'],
        isCategory: false
      },
      {
        id: 'linux-cat',
        name: 'Linux & Networking',
        description: 'The foundation of the modern internet infrastructure.',
        difficulty: 'Intermediate',
        estimatedTime: '8 weeks',
        resources: [],
        learningOutcomes: [],
        projects: [],
        nextSkills: ['linux-cli', 'networking'],
        parentId: 'devops-root',
        isCategory: true
      },
      {
        id: 'linux-cli',
        name: 'Linux CLI',
        description: 'Master the command line.',
        difficulty: 'Intermediate',
        estimatedTime: '2 weeks',
        resources: [{ name: 'Linux Journey', url: 'https://linuxjourney.com/' }],
        learningOutcomes: ['Bash', 'Permissions', 'Process management'],
        projects: ['Automated Backup Script'],
        nextSkills: ['networking'],
        parentId: 'linux-cat'
      }
    ]
  }
};
