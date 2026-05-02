export interface Topic {
  id: string;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface Phase {
  id: string;
  title: string;
  topics: Topic[];
}

export interface CareerPath {
  id: string;
  title: string;
  emoji: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  phases: Phase[];
  skills: string[];
  outcomes: { title: string; salary: string; demand: string }[];
}

export const CAREER_PATHS: Record<string, CareerPath> = {
  web_development: {
    id: 'web_development',
    title: 'Web Development',
    emoji: '🌐',
    description: 'Master HTML, CSS, JS, React and beyond to build modern websites.',
    difficulty: 'Beginner',
    duration: '6-12 months',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Node.js'],
    outcomes: [
      { title: 'Frontend Developer', salary: '$70k - $120k', demand: 'High' },
      { title: 'Full Stack Developer', salary: '$85k - $150k', demand: 'Very High' },
      { title: 'Web Architect', salary: '$130k - $180k', demand: 'Medium' }
    ],
    phases: [
      {
        id: 'p1',
        title: 'Phase 1 — Foundations',
        topics: [
          { id: 'w1', title: 'Internet Basics', description: 'How the web works, DNS, HTTP/HTTPS, browsers', status: 'not-started' },
          { id: 'w2', title: 'HTML', description: 'Structure web pages with semantic HTML5 elements', status: 'not-started' },
          { id: 'w3', title: 'CSS', description: 'Style pages with CSS3, selectors, box model', status: 'not-started' },
          { id: 'w4', title: 'Git & GitHub', description: 'Version control, repositories, branching, pull requests', status: 'not-started' }
        ]
      },
      {
        id: 'p2',
        title: 'Phase 2 — Intermediate',
        topics: [
          { id: 'w5', title: 'JavaScript', description: 'ES6+, DOM manipulation, events, async/await', status: 'not-started' },
          { id: 'w6', title: 'Responsive Design', description: 'Flexbox, CSS Grid, media queries, mobile-first', status: 'not-started' },
          { id: 'w7', title: 'React.js', description: 'Components, hooks, state management, routing', status: 'not-started' },
          { id: 'w8', title: 'TypeScript', description: 'Static typing, interfaces, generics', status: 'not-started' }
        ]
      },
      {
        id: 'p3',
        title: 'Phase 3 — Advanced',
        topics: [
          { id: 'w9', title: 'Tailwind CSS', description: 'Utility-first CSS framework', status: 'not-started' },
          { id: 'w10', title: 'Node.js', description: 'Server-side JavaScript, event loop, modules', status: 'not-started' },
          { id: 'w11', title: 'Express.js', description: 'REST APIs, middleware, routing', status: 'not-started' },
          { id: 'w12', title: 'Database', description: 'SQL vs NoSQL, MongoDB, PostgreSQL', status: 'not-started' }
        ]
      },
      {
        id: 'p4',
        title: 'Phase 4 — Professional',
        topics: [
          { id: 'w13', title: 'Authentication', description: 'JWT, OAuth, sessions, security', status: 'not-started' },
          { id: 'w14', title: 'API Integration', description: 'RESTful APIs, GraphQL, Axios, Fetch', status: 'not-started' },
          { id: 'w15', title: 'Deployment', description: 'Vercel, Netlify, Docker basics, CI/CD', status: 'not-started' },
          { id: 'w16', title: 'Portfolio Projects', description: 'Build 3 real projects for your portfolio', status: 'not-started' }
        ]
      }
    ]
  },
  machine_learning: {
    id: 'machine_learning',
    title: 'Machine Learning',
    emoji: '🤖',
    description: 'Dive into AI, data modeling and neural networks.',
    difficulty: 'Advanced',
    duration: '12-18 months',
    skills: ['Python', 'SQL', 'TensorFlow', 'PyTorch', 'Linear Algebra', 'Statistics'],
    outcomes: [
      { title: 'ML Engineer', salary: '$120k - $180k', demand: 'Very High' },
      { title: 'AI Researcher', salary: '$140k - $220k', demand: 'High' },
      { title: 'Data Scientist (ML)', salary: '$110k - $160k', demand: 'High' }
    ],
    phases: [
      {
        id: 'p1', title: 'Phase 1 — Foundations',
        topics: [
          { id: 'm1', title: 'Python', description: 'Mastering Python for data processing', status: 'not-started' },
          { id: 'm2', title: 'Math Basics', description: 'Linear Algebra, Calculus, and Probability', status: 'not-started' },
          { id: 'm3', title: 'NumPy/Pandas', description: 'Essential data manipulation libraries', status: 'not-started' },
          { id: 'm4', title: 'Data Visualization', description: 'Matplotlib and Seaborn for insights', status: 'not-started' }
        ]
      },
      {
        id: 'p2', title: 'Phase 2 — AI Core',
        topics: [
          { id: 'm5', title: 'ML Algorithms', description: 'Regression, Trees, Clustering', status: 'not-started' },
          { id: 'm6', title: 'Scikit-learn', description: 'Implementing ML with industry tools', status: 'not-started' },
          { id: 'm7', title: 'Neural Networks', description: 'Perceptrons and Deep Learning basics', status: 'not-started' },
          { id: 'm8', title: 'TensorFlow/PyTorch', description: 'Major DL frameworks', status: 'not-started' }
        ]
      },
      {
        id: 'p3', title: 'Phase 3 — Specialization',
        topics: [
          { id: 'm9', title: 'Model Evaluation', description: 'Cross-validation, ROC/AUC, F1-Score', status: 'not-started' },
          { id: 'm10', title: 'Feature Engineering', description: 'Selecting and transforming input variables', status: 'not-started' },
          { id: 'm11', title: 'NLP Basics', description: 'Text processing and sentiment analysis', status: 'not-started' },
          { id: 'm12', title: 'Computer Vision', description: 'Image classification and object detection', status: 'not-started' }
        ]
      },
      {
        id: 'p4', title: 'Phase 4 — MLOps',
        topics: [
          { id: 'm13', title: 'Model Deployment', description: 'Flask/FastAPI for serving models', status: 'not-started' },
          { id: 'm14', title: 'MLOps', description: 'ML pipelines and model monitoring', status: 'not-started' },
          { id: 'm15', title: 'Research Papers', description: 'Reading and implementing latest papers', status: 'not-started' },
          { id: 'm16', title: 'Capstone Projects', description: 'Real-world end-to-end ML solution', status: 'not-started' }
        ]
      }
    ]
  },
  data_science: {
    id: 'data_science',
    title: 'Data Science',
    emoji: '📊',
    description: 'Analyze data and extract meaningful insights for business growth.',
    difficulty: 'Intermediate',
    duration: '8-14 months',
    skills: ['Python', 'R', 'SQL', 'Statistics', 'Tableau', 'PowerBI'],
    outcomes: [
      { title: 'Data Scientist', salary: '$95k - $160k', demand: 'High' },
      { title: 'Data Analyst', salary: '$65k - $100k', demand: 'Very High' },
      { title: 'BI Developer', salary: '$85k - $130k', demand: 'Medium' }
    ],
    phases: [
       { id: 'p1', title: 'Phase 1', topics: [
         { id: 'ds1', title: 'Python', description: 'Data structures and flow control', status: 'not-started' },
         { id: 'ds2', title: 'Statistics', description: 'Descriptive and inferential stats', status: 'not-started' },
         { id: 'ds3', title: 'SQL', description: 'Querying relational databases', status: 'not-started' },
         { id: 'ds4', title: 'Data Wrangling', description: 'Cleaning messy raw data', status: 'not-started' }
       ]},
       { id: 'p2', title: 'Phase 2', topics: [
         { id: 'ds5', title: 'EDA', description: 'Exploratory data analysis techniques', status: 'not-started' },
         { id: 'ds6', title: 'Visualization', description: 'Communicating data with plots', status: 'not-started' },
         { id: 'ds7', title: 'Machine Learning', description: 'Predictive modeling basics', status: 'not-started' },
         { id: 'ds8', title: 'Tableau/PowerBI', description: 'Business dashboards', status: 'not-started' }
       ]},
       { id: 'p3', title: 'Phase 3', topics: [
         { id: 'ds9', title: 'Big Data Basics', description: 'Hadoop and Spark intro', status: 'not-started' },
         { id: 'ds10', title: 'A/B Testing', description: 'Experiment design and analysis', status: 'not-started' },
         { id: 'ds11', title: 'Business Intelligence', description: 'Metrics and reporting', status: 'not-started' },
         { id: 'ds12', title: 'Communication Skills', description: 'Presenting to stakeholders', status: 'not-started' }
       ]},
       { id: 'p4', title: 'Phase 4', topics: [
         { id: 'ds13', title: 'Portfolio', description: 'Building real case studies', status: 'not-started' },
         { id: 'ds14', title: 'Case Studies', description: 'Deep dive into industry problems', status: 'not-started' },
         { id: 'ds15', title: 'Storytelling', description: 'Narrative around data insights', status: 'not-started' },
         { id: 'ds16', title: 'Capstone', description: 'Comprehensive data project', status: 'not-started' }
       ]}
    ]
  },
  software_engineering: {
    id: 'software_engineering',
    title: 'Software Engineering',
    emoji: '⚙️',
    description: 'Build scalable systems and robust enterprise applications.',
    difficulty: 'Intermediate',
    duration: '10-16 months',
    skills: ['Java', 'C++', 'Systems Design', 'Data Structures', 'Algorithms'],
    outcomes: [
      { title: 'Software Engineer', salary: '$90k - $160k', demand: 'Extreme' },
      { title: 'Backend Developer', salary: '$85k - $150k', demand: 'Very High' },
      { title: 'Systems Architect', salary: '$150k - $250k', demand: 'Medium' }
    ],
    phases: [
      { id: 'p1', title: 'Phase 1', topics: [
        { id: 'se1', title: 'Programming Fundamentals', description: 'Logic, variables, control loops', status: 'not-started' },
        { id: 'se2', title: 'Data Structures', description: 'Arrays, Lists, Stacks, Queues', status: 'not-started' },
        { id: 'se3', title: 'Algorithms', description: 'Sorting, Searching, Complexity', status: 'not-started' },
        { id: 'se4', title: 'OOP', description: 'Encapsulation, Inheritance, Polymorphism', status: 'not-started' }
      ]},
      { id: 'p2', title: 'Phase 2', topics: [
        { id: 'se5', title: 'Design Patterns', description: 'Singleton, Factory, Observer', status: 'not-started' },
        { id: 'se6', title: 'System Design', description: 'Scalability, Load Balancing', status: 'not-started' },
        { id: 'se7', title: 'Databases', description: 'Schema design and optimization', status: 'not-started' },
        { id: 'se8', title: 'Operating Systems', description: 'Processes, Threads, Memory', status: 'not-started' }
      ]},
      { id: 'p3', title: 'Phase 3', topics: [
        { id: 'se9', title: 'Networking', description: 'TCP/IP, OSI model, Sockets', status: 'not-started' },
        { id: 'se10', title: 'Testing', description: 'Unit, Integration, E2E tests', status: 'not-started' },
        { id: 'se11', title: 'Clean Code', description: 'Readability and maintainability', status: 'not-started' },
        { id: 'se12', title: 'Version Control', description: 'Advanced Git workflows', status: 'not-started' }
      ]},
      { id: 'p4', title: 'Phase 4', topics: [
        { id: 'se13', title: 'CI/CD', description: 'Automated build and deploy', status: 'not-started' },
        { id: 'se14', title: 'Cloud Basics', description: 'Intro to AWS/Azure services', status: 'not-started' },
        { id: 'se15', title: 'Microservices', description: 'Distributed system architecture', status: 'not-started' },
        { id: 'se16', title: 'Portfolio', description: 'Enterprise-grade projects', status: 'not-started' }
      ]}
    ]
  },
  app_development: {
    id: 'app_development',
    title: 'App Development',
    emoji: '📱',
    description: 'Build iOS and Android mobile applications.',
    difficulty: 'Intermediate',
    duration: '6-10 months',
    skills: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Mobile Design'],
    outcomes: [
      { title: 'Mobile Developer', salary: '$80k - $140k', demand: 'High' },
      { title: 'iOS Specialist', salary: '$95k - $160k', demand: 'High' },
      { title: 'Android Engineer', salary: '$90k - $150k', demand: 'High' }
    ],
    phases: [
      { id: 'p1', title: 'Phase 1', topics: [
        { id: 'ad1', title: 'Programming Basics', description: 'Swift/Kotlin fundamentals', status: 'not-started' },
        { id: 'ad2', title: 'React Native OR Flutter', description: 'Cross-platform frameworks', status: 'not-started' },
        { id: 'ad3', title: 'UI Components', description: 'Mobile widgets and layouts', status: 'not-started' },
        { id: 'ad4', title: 'State Management', description: 'Local and global state in apps', status: 'not-started' }
      ]},
      { id: 'p2', title: 'Phase 2', topics: [
        { id: 'ad5', title: 'Navigation', description: 'Routing between screens', status: 'not-started' },
        { id: 'ad6', title: 'API Integration', description: 'Fetching data from servers', status: 'not-started' },
        { id: 'ad7', title: 'Local Storage', description: 'Persisting data on device', status: 'not-started' },
        { id: 'ad8', title: 'Push Notifications', description: 'Real-time user engagement', status: 'not-started' }
      ]},
      { id: 'p3', title: 'Phase 3', topics: [
        { id: 'ad9', title: 'App Store Publishing', description: 'Deployment to iOS/Android stores', status: 'not-started' },
        { id: 'ad10', title: 'Performance', description: 'Memory and battery optimization', status: 'not-started' },
        { id: 'ad11', title: 'Testing', description: 'Mobile-specific testing suites', status: 'not-started' },
        { id: 'ad12', title: 'Authentication', description: 'Firebase Auth or similar', status: 'not-started' }
      ]},
      { id: 'p4', title: 'Phase 4', topics: [
        { id: 'ad13', title: 'Payment Integration', description: 'Stripe or In-App Purchases', status: 'not-started' },
        { id: 'ad14', title: 'Analytics', description: 'Tracking user behavior', status: 'not-started' },
        { id: 'ad15', title: 'Portfolio', description: '3 apps published in stores', status: 'not-started' },
        { id: 'ad16', title: 'Capstone', description: 'Complex feature-rich app', status: 'not-started' }
      ]}
    ]
  },
  cybersecurity: {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    emoji: '🔐',
    description: 'Protect systems and secure digital infrastructure.',
    difficulty: 'Advanced',
    duration: '10-18 months',
    skills: ['Linux', 'Networking', 'Ethical Hacking', 'SecOps'],
    outcomes: [
      { title: 'Security Analyst', salary: '$85k - $140k', demand: 'Very High' },
      { title: 'Pentester', salary: '$100k - $180k', demand: 'High' },
      { title: 'CISO', salary: '$180k - $300k', demand: 'Low' }
    ],
    phases: [
      { id: 'p1', title: 'Phase 1', topics: [
        { id: 'cs1', title: 'Networking Fundamentals', description: 'IP, TCP/UDP, DNS, Firewalls', status: 'not-started' },
        { id: 'cs2', title: 'Linux Basics', description: 'Command line and system config', status: 'not-started' },
        { id: 'cs3', title: 'Python Scripting', description: 'Automation for security tasks', status: 'not-started' },
        { id: 'cs4', title: 'Cryptography', description: 'Encryption, Hashing, Signatures', status: 'not-started' }
      ]},
      { id: 'p2', title: 'Phase 2', topics: [
        { id: 'cs5', title: 'Web Security', description: 'Browser security, cookies, CORS', status: 'not-started' },
        { id: 'cs6', title: 'Ethical Hacking', description: 'Legal offensive techniques', status: 'not-started' },
        { id: 'cs7', title: 'Penetration Testing', description: 'Systematic vulnerability assessment', status: 'not-started' },
        { id: 'cs8', title: 'OWASP Top 10', description: 'Critical web vulnerabilities', status: 'not-started' }
      ]},
      { id: 'p3', title: 'Phase 3', topics: [
        { id: 'cs9', title: 'Network Security', description: 'IDS/IPS, VPNs, Wireless security', status: 'not-started' },
        { id: 'cs10', title: 'Forensics', description: 'Investigating digital evidence', status: 'not-started' },
        { id: 'cs11', title: 'Malware Analysis', description: 'Deconstructing malicious code', status: 'not-started' },
        { id: 'cs12', title: 'Incident Response', description: 'Handling security breaches', status: 'not-started' }
      ]},
      { id: 'p4', title: 'Phase 4', topics: [
        { id: 'cs13', title: 'Compliance', description: 'GDPR, SOC2, ISO 27001', status: 'not-started' },
        { id: 'cs14', title: 'Security Tools', description: 'Metasploit, Nmap, Wireshark', status: 'not-started' },
        { id: 'cs15', title: 'CTF Practice', description: 'Capture The Flag competitions', status: 'not-started' },
        { id: 'cs16', title: 'Certifications', description: 'Security+ or OSCP prep', status: 'not-started' }
      ]}
    ]
  },
  cloud_engineering: {
    id: 'cloud_engineering',
    title: 'Cloud Engineering',
    emoji: '☁️',
    description: 'Master AWS, Azure, GCP and cloud architecture.',
    difficulty: 'Intermediate',
    duration: '8-12 months',
    skills: ['AWS', 'Azure', 'Kubernetes', 'IAM', 'Terraform'],
    outcomes: [
      { title: 'Cloud Architect', salary: '$130k - $200k', demand: 'High' },
      { title: 'Cloud Engineer', salary: '$100k - $160k', demand: 'Very High' },
      { title: 'SRE', salary: '$110k - $180k', demand: 'High' }
    ],
    phases: [
      { id: 'p1', title: 'Phase 1', topics: [
        { id: 'cl1', title: 'Linux', description: 'System administration basics', status: 'not-started' },
        { id: 'cl2', title: 'Networking', description: 'VPNs, VPCs, Subnets', status: 'not-started' },
        { id: 'cl3', title: 'AWS/Azure/GCP Basics', description: 'Major platform overview', status: 'not-started' },
        { id: 'cl4', title: 'IAM', description: 'Identity and Access Management', status: 'not-started' }
      ]},
      { id: 'p2', title: 'Phase 2', topics: [
        { id: 'cl5', title: 'Compute (EC2/VMs)', description: 'Virtual server management', status: 'not-started' },
        { id: 'cl6', title: 'Storage (S3/Blob)', description: 'Object and block storage', status: 'not-started' },
        { id: 'cl7', title: 'Databases', description: 'RDS, DynamoDB, CosmosDB', status: 'not-started' },
        { id: 'cl8', title: 'Serverless', description: 'Lambda, Functions, Logic Apps', status: 'not-started' }
      ]},
      { id: 'p3', title: 'Phase 3', topics: [
        { id: 'cl9', title: 'Containers', description: 'Docker and container theory', status: 'not-started' },
        { id: 'cl10', title: 'Kubernetes', description: 'Orchestrating container fleets', status: 'not-started' },
        { id: 'cl11', title: 'Terraform', description: 'Infrastructure as Code (IaC)', status: 'not-started' },
        { id: 'cl12', title: 'Monitoring', description: 'CloudWatch and logging', status: 'not-started' }
      ]},
      { id: 'p4', title: 'Phase 4', topics: [
        { id: 'cl13', title: 'Cost Optimization', description: 'Managing cloud spend', status: 'not-started' },
        { id: 'cl14', title: 'Security', description: 'Cloud-native security patterns', status: 'not-started' },
        { id: 'cl15', title: 'Architecture', description: 'Designing multi-tier apps', status: 'not-started' },
        { id: 'cl16', title: 'Certifications', description: 'Solution Architect Associate', status: 'not-started' }
      ]}
    ]
  },
  devops_engineering: {
    id: 'devops_engineering',
    title: 'DevOps Engineering',
    emoji: '🔧',
    description: 'CI/CD, containers, and infrastructure automation.',
    difficulty: 'Advanced',
    duration: '10-14 months',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible'],
    outcomes: [
      { title: 'DevOps Engineer', salary: '$110k - $180k', demand: 'Very High' },
      { title: 'Release Engineer', salary: '$90k - $140k', demand: 'Medium' },
      { title: 'Platform Engineer', salary: '$130k - $210k', demand: 'High' }
    ],
    phases: [
      { id: 'p1', title: 'Phase 1', topics: [
        { id: 'do1', title: 'Linux', description: 'Admin, Shell and Permissions', status: 'not-started' },
        { id: 'do2', title: 'Shell Scripting', description: 'Automation with Bash/Python', status: 'not-started' },
        { id: 'do3', title: 'Git', description: 'Collaboration and versioning', status: 'not-started' },
        { id: 'do4', title: 'CI/CD', description: 'Continuous integration concepts', status: 'not-started' }
      ]},
      { id: 'p2', title: 'Phase 2', topics: [
        { id: 'do5', title: 'Docker', description: 'Image creation and networking', status: 'not-started' },
        { id: 'do6', title: 'Kubernetes', description: 'K8s objects and scheduling', status: 'not-started' },
        { id: 'do7', title: 'Ansible', description: 'Configuration management', status: 'not-started' },
        { id: 'do8', title: 'Terraform', description: 'Provisioning multi-cloud resources', status: 'not-started' }
      ]},
      { id: 'p3', title: 'Phase 3', topics: [
        { id: 'do9', title: 'Jenkins/GitHub Actions', description: 'Building complex pipelines', status: 'not-started' },
        { id: 'do10', title: 'Monitoring (Prometheus/Grafana)', description: 'Observability tools', status: 'not-started' },
        { id: 'do11', title: 'Logging (ELK)', description: 'Elasticsearch, Logstash, Kibana', status: 'not-started' },
        { id: 'do12', title: 'Cloud Platforms', description: 'AWS for DevOps engineers', status: 'not-started' }
      ]},
      { id: 'p4', title: 'Phase 4', topics: [
        { id: 'do13', title: 'Security', description: 'DevSecOps and scanning', status: 'not-started' },
        { id: 'do14', title: 'SRE Practices', description: 'Availability and reliability', status: 'not-started' },
        { id: 'do15', title: 'Performance', description: 'System tuning and overhead', status: 'not-started' },
        { id: 'do16', title: 'Portfolio', description: 'Automated infrastructure project', status: 'not-started' }
      ]}
    ]
  },
  ui_ux_design: {
    id: 'ui_ux_design',
    title: 'UI/UX Design',
    emoji: '🎨',
    description: 'Design beautiful and user-friendly digital interfaces.',
    difficulty: 'Beginner',
    duration: '4-8 months',
    skills: ['Figma', 'Adobe XD', 'Prototypes', 'Research', 'Visual Design'],
    outcomes: [
      { title: 'Product Designer', salary: '$85k - $150k', demand: 'High' },
      { title: 'UI Designer', salary: '$75k - $120k', demand: 'Medium' },
      { title: 'UX Researcher', salary: '$80k - $130k', demand: 'Medium' }
    ],
    phases: [
      { id: 'p1', title: 'Phase 1', topics: [
        { id: 'ui1', title: 'Design Principles', description: 'Hierarchy, Balance, Contrast', status: 'not-started' },
        { id: 'ui2', title: 'Color Theory', description: 'Psychology and Palettes', status: 'not-started' },
        { id: 'ui3', title: 'Typography', description: 'Fonts, pairing and readability', status: 'not-started' },
        { id: 'ui4', title: 'Figma Basics', description: 'Layers, Shapes, and Auto-layout', status: 'not-started' }
      ]},
      { id: 'p2', title: 'Phase 2', topics: [
        { id: 'ui5', title: 'User Research', description: 'Interviews and Analysis', status: 'not-started' },
        { id: 'ui6', title: 'Wireframing', description: 'Lo-fi layout creation', status: 'not-started' },
        { id: 'ui7', title: 'Prototyping', description: 'Interactive design flows', status: 'not-started' },
        { id: 'ui8', title: 'Design Systems', description: 'Scalable UI components', status: 'not-started' }
      ]},
      { id: 'p3', title: 'Phase 3', topics: [
        { id: 'ui9', title: 'Accessibility', description: 'Inclusive design for all users', status: 'not-started' },
        { id: 'ui10', title: 'Motion Design', description: 'Micro-interactions and transitions', status: 'not-started' },
        { id: 'ui11', title: 'User Testing', description: 'Validating with real people', status: 'not-started' },
        { id: 'ui12', title: 'Case Studies', description: 'Documenting your design process', status: 'not-started' }
      ]},
      { id: 'p4', title: 'Phase 4', topics: [
        { id: 'ui13', title: 'Portfolio', description: 'Polishing your public presence', status: 'not-started' },
        { id: 'ui14', title: 'Design Thinking', description: 'Problem-solving frameworks', status: 'not-started' },
        { id: 'ui15', title: 'Handoff to Dev', description: 'Specs and assets delivery', status: 'not-started' },
        { id: 'ui16', title: 'Senior Design', description: 'Strategy and leadership basics', status: 'not-started' }
      ]}
    ]
  },
  game_development: {
    id: 'game_development',
    title: 'Game Development',
    emoji: '🎮',
    description: 'Create 2D and 3D interactive entertainment software.',
    difficulty: 'Advanced',
    duration: '12-24 months',
    skills: ['C#', 'C++', 'Unity', 'Unreal Engine', '3D Modeling'],
    outcomes: [
      { title: 'Game Developer', salary: '$75k - $130k', demand: 'Medium' },
      { title: 'Level Designer', salary: '$65k - $100k', demand: 'Low' },
      { title: 'Game Architect', salary: '$120k - $180k', demand: 'Medium' }
    ],
    phases: [
      { id: 'p1', title: 'Phase 1', topics: [
        { id: 'gd1', title: 'Programming Basics', description: 'C# foundations for games', status: 'not-started' },
        { id: 'gd2', title: 'Unity/Unreal', description: 'Engine fundamentals', status: 'not-started' },
        { id: 'gd3', title: '2D Game Mechanics', description: 'Input, collision, score', status: 'not-started' },
        { id: 'gd4', title: 'Physics Engine', description: 'Gravity and forces', status: 'not-started' }
      ]},
      { id: 'p2', title: 'Phase 2', topics: [
        { id: 'gd5', title: 'Animation', description: 'Sprites and 3D rigs', status: 'not-started' },
        { id: 'gd6', title: 'Sound Design', description: 'SFX and ambient music', status: 'not-started' },
        { id: 'gd7', title: 'Level Design', description: 'World building and player flow', status: 'not-started' },
        { id: 'gd8', title: 'UI for Games', description: 'In-game HUDs and menus', status: 'not-started' }
      ]},
      { id: 'p3', title: 'Phase 3', topics: [
        { id: 'gd9', title: 'Multiplayer Basics', description: 'Networking for games', status: 'not-started' },
        { id: 'gd10', title: 'Optimization', description: 'Frame rate and draw calls', status: 'not-started' },
        { id: 'gd11', title: 'Asset Pipeline', description: 'Importing models and textures', status: 'not-started' },
        { id: 'gd12', title: 'Publishing', description: 'Steam and Console releases', status: 'not-started' }
      ]},
      { id: 'p4', title: 'Phase 4', topics: [
        { id: 'gd13', title: 'Marketing', description: 'Trailers and community', status: 'not-started' },
        { id: 'gd14', title: 'Portfolio', description: 'Playable demos', status: 'not-started' },
        { id: 'gd15', title: 'Advanced 3D', description: 'Shaders and lighting', status: 'not-started' },
        { id: 'gd16', title: 'Capstone', description: 'Full commercial-grade game', status: 'not-started' }
      ]}
    ]
  }
};
