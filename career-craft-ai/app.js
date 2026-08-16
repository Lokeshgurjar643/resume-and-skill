/**
 * CareerCraft AI — Application Engine
 * Skill Extraction, Gap Analysis, LinkedIn Profile Optimizer & Safe Job Launcher
 */

(function () {
  'use strict';

  // =========================================================================
  // Career Knowledge Graph & Role Ontology Database
  // =========================================================================
  const ROLE_DATABASE = {
    'java-backend': {
      title: 'Java / Spring Boot Backend Engineer',
      shortTitle: 'Java Backend',
      coreSkills: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'PostgreSQL', 'Hibernate', 'Docker', 'JUnit', 'Git', 'Microservices', 'Maven'],
      missingSkillDetails: [
        { name: 'Spring Boot', impact: 'Critical (92% Job Req)', desc: 'The gold standard framework for enterprise Java backend microservices. Mandatory for 90%+ Java SWE roles.' },
        { name: 'REST API Design', impact: 'Critical (88% Job Req)', desc: 'Crucial for client-server communication, JSON payload handling, HTTP status codes, and API security.' },
        { name: 'Docker / Containers', impact: 'High (76% Job Req)', desc: 'Containerizing Java applications ensures consistent execution across cloud staging and production environments.' },
        { name: 'JUnit / Mockito Testing', impact: 'High (68% Job Req)', desc: 'Writing automated unit and integration tests proves engineering rigor to tech hiring managers.' }
      ],
      bonusSkills: ['Redis Caching', 'Kafka / RabbitMQ', 'AWS / Cloud Deployment', 'GraphQL', 'CI/CD Pipelines'],
      headlineFormulas: {
        recruiter: 'Incoming Software Engineer | Java, Spring Boot, Microservices, REST APIs & SQL | CS Junior @ State Tech',
        impact: 'Software Engineer @ State Tech | Building Scalable High-Throughput REST APIs with Java & Spring Boot | 99.9% Uptime Projects',
        specialist: 'Aspiring Backend Engineer | Specializing in Distributed Systems, Java Ecosystem, Spring Boot & Cloud Databases'
      },
      aboutTemplate: (name) => 
`Hi, I'm ${name}! 👋 I am an aspiring Backend Software Engineer passionate about building scalable, resilient server-side applications and distributed systems.

🛠️ Core Technical Arsenal:
• Languages: Java (Core, OOP, Multithreading), C++, SQL
• Frameworks & Tools: Spring Boot, Spring Data JPA, Hibernate, RESTful APIs, JUnit, Maven, Git
• Databases & Cloud: PostgreSQL, MySQL, Docker, Redis

🚀 Notable Engineering Projects:
1. Enterprise Microservices Hub: Architected modular Java & Spring Boot services handling 1,500+ concurrent requests with optimized Hibernate queries and PostgreSQL.
2. High-Performance Caching Layer: Integrated Redis caching to reduce database read latency by 42% on high-frequency endpoints.

🎯 Career Availability:
I am actively seeking Software Engineering / Backend Developer Internship & New Grad roles. Feel free to connect or reach out at alex.kumar.dev@gmail.com!`,
      sampleBullets: [
        {
          before: 'Built a university student management system in Java and MySQL.',
          after: 'Architected a full-stack student management portal in Java & Spring Boot, integrating PostgreSQL with JPA/Hibernate to handle 2,000+ student records and reducing query response times by 35%.'
        },
        {
          before: 'Created a simple e-commerce website with HTML, CSS and backend.',
          after: 'Engineered a secure REST API backend for an e-commerce platform using Spring Boot and JWT authentication, supporting 50+ concurrent product checkout workflows with 100% test coverage via JUnit/Mockito.'
        },
        {
          before: 'Worked on a database course project with MySQL.',
          after: 'Designed a normalized relational database schema (3NF) in MySQL, optimizing indexing and complex JOIN queries to process 10,000+ synthetic transactional records with sub-50ms latency.'
        }
      ],
      skillsToAdd: [
        { name: 'Spring Boot', reason: 'Top searched keyword by Java recruiters' },
        { name: 'REST APIs', reason: 'High impact for backend developer ranking' },
        { name: 'Spring Data JPA', reason: 'Demonstrates ORM & database integration' },
        { name: 'JUnit / Test-Driven Development', reason: 'Signals code quality & reliability' },
        { name: 'Docker', reason: 'Modern DevOps requirement for backend devs' },
        { name: 'Microservices Architecture', reason: 'Key differentiator for junior candidates' }
      ],
      roadmap: [
        { day: 'Days 1-3', title: 'REST API & Spring Boot Fundamentals', tasks: 'Build your first Spring Initializr project with `@RestController`, `@GetMapping`, and `@PostMapping`. Handle validation and JSON exceptions.', linkText: 'Baeldung Spring Boot Guide', linkUrl: 'https://www.baeldung.com/spring-boot' },
        { day: 'Days 4-7', title: 'Database Integration with Spring Data JPA & PostgreSQL', tasks: 'Connect PostgreSQL using Spring Data JPA. Write custom `@Query` repository methods and implement clean DTO patterns.', linkText: 'Spring Data JPA Official Docs', linkUrl: 'https://spring.io/projects/spring-data-jpa' },
        { day: 'Days 8-10', title: 'Unit Testing with JUnit 5 & Mockito', tasks: 'Write unit tests for Service and Controller layers. Mock repository dependencies and assert HTTP response codes.', linkText: 'JUnit 5 User Guide', linkUrl: 'https://junit.org/junit5/docs/current/user-guide/' },
        { day: 'Days 11-14', title: 'Dockerize & Deploy to Render/AWS', tasks: 'Write a `Dockerfile` for the multi-stage build of your JAR, spin up Docker Compose with PostgreSQL, and push to GitHub.', linkText: 'Docker for Java Developers', linkUrl: 'https://docs.docker.com/language/java/' }
      ],
      jobs: [
        { title: 'Software Engineer Intern - Backend', match: 94, salary: '$35 - $55 / hr', tags: ['Java', 'Spring Boot', 'REST APIs', 'SQL'], booleanQuery: '("Software Engineer Intern" OR "Backend Intern") AND "Java" AND "Spring"' },
        { title: 'Associate Java Developer (New Grad)', match: 90, salary: '$75,000 - $98,000 / yr', tags: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'], booleanQuery: '("Associate Java Developer" OR "Junior Java Developer") AND "Spring Boot"' },
        { title: 'Junior Backend Software Engineer', match: 88, salary: '$80,000 - $105,000 / yr', tags: ['Java / Kotlin', 'RESTful Services', 'Docker', 'Git'], booleanQuery: '("Junior Backend Engineer" OR "Entry Level Backend") AND ("Java" OR "Spring")' },
        { title: 'Software Development Engineer I (SDE 1)', match: 85, salary: '$85,000 - $115,000 / yr', tags: ['Java', 'Object Oriented Design', 'Data Structures'], booleanQuery: '("SDE 1" OR "Software Development Engineer I") AND "Java"' },
        { title: 'Backend Systems Engineering Co-op', match: 82, salary: '$30 - $48 / hr', tags: ['Java', 'MySQL', 'Linux', 'Unit Testing'], booleanQuery: '("Engineering Co-op" OR "Backend Co-op") AND "Java"' },
        { title: 'Cloud Backend Developer Intern', match: 80, salary: '$32 - $50 / hr', tags: ['Java', 'Docker', 'AWS / Cloud', 'API'], booleanQuery: '("Cloud Intern" OR "Backend Intern") AND "Java" AND ("AWS" OR "Docker")' }
      ]
    },

    'fullstack-web': {
      title: 'Full-Stack Web Developer (React / Node.js)',
      shortTitle: 'Full-Stack Web',
      coreSkills: ['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'Git', 'Tailwind CSS', 'Next.js'],
      missingSkillDetails: [
        { name: 'TypeScript', impact: 'Critical (85% Job Req)', desc: 'Industry standard for type safety and large-scale React & Node applications.' },
        { name: 'Next.js / SSR', impact: 'Critical (80% Job Req)', desc: 'The leading React framework for server-side rendering, SEO, and full-stack API routes.' },
        { name: 'PostgreSQL / Prisma ORM', impact: 'High (72% Job Req)', desc: 'Relational database proficiency is highly preferred over basic unindexed NoSQL.' },
        { name: 'CI/CD & Docker', impact: 'High (65% Job Req)', desc: 'Automating testing and deploying containerized full-stack apps on Vercel/AWS.' }
      ],
      bonusSkills: ['Redis Caching', 'GraphQL', 'WebSockets / Socket.io', 'Jest / Cypress Testing', 'AWS S3'],
      headlineFormulas: {
        recruiter: 'Full-Stack Software Engineer | React, Next.js, TypeScript, Node.js, Express & PostgreSQL | Seeking 2026 SWE Roles',
        impact: 'Full-Stack Developer | Built Production Next.js & Node Apps with 5,000+ Active Users | React, TypeScript & Cloud Architecture',
        specialist: 'Product-Focused Full-Stack SWE | Crafting High-Performance Interactive Web Applications with React, Node.js & Prisma'
      },
      aboutTemplate: (name) => 
`Hi, I'm ${name}! 🚀 I am a Full-Stack Software Developer dedicated to building intuitive, high-performance web applications that bridge elegant UI with resilient backend architecture.

🛠️ Technical Arsenal:
• Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, HTML5/CSS3
• Backend & APIs: Node.js, Express.js, REST APIs, GraphQL, WebSockets, JWT Authentication
• Databases & DevOps: PostgreSQL, Prisma ORM, MongoDB, Docker, Git, CI/CD, Vercel

⭐ Key Engineering Highlights:
1. SaaS Collaborative Platform: Built a real-time collaborative workspace using Next.js, Node.js, and WebSockets serving 1,200+ monthly active users.
2. Full-Stack Performance Optimization: Migrated client-side React rendering to Next.js App Router, achieving a 98/100 Google Lighthouse performance score.

🎯 Current Goal:
Seeking Summer 2026 Full-Stack / Frontend / SWE Internship & New Grad Opportunities. Let's connect or email me at alex.webdev@gmail.com!`,
      sampleBullets: [
        {
          before: 'Created a full-stack dashboard website using React and Node.',
          after: 'Engineered a full-stack analytics dashboard with React 18, TypeScript, and Node.js/Express, utilizing Redis caching to reduce query latency by 45% for 1,000+ daily page views.'
        },
        {
          before: 'Used MongoDB to store user data and login info.',
          after: 'Implemented secure JWT authentication and role-based access control (RBAC) with MongoDB & Mongoose, securing 5,000+ user records with bcrypt hashing and CSRF protection.'
        },
        {
          before: 'Made UI responsive with CSS and Bootstrap.',
          after: 'Crafted a fluid, fully accessible (WCAG AA) user interface with Tailwind CSS and responsive design patterns, increasing mobile user retention by 28% across 10+ viewport sizes.'
        }
      ],
      skillsToAdd: [
        { name: 'TypeScript', reason: 'High priority skill filter on LinkedIn' },
        { name: 'Next.js', reason: 'Most sought after modern React framework' },
        { name: 'Node.js & Express', reason: 'Demonstrates end-to-end backend capability' },
        { name: 'PostgreSQL & Prisma', reason: 'Preferred enterprise database stack' },
        { name: 'RESTful API Design', reason: 'Core requirement for web engineers' },
        { name: 'Tailwind CSS', reason: 'Industry standard for modern UI styling' }
      ],
      roadmap: [
        { day: 'Days 1-3', title: 'TypeScript for React & Node', tasks: 'Convert JavaScript components to TypeScript with strict types, interfaces, generics, and custom hooks.', linkText: 'TypeScript Handbook', linkUrl: 'https://www.typescriptlang.org/docs/' },
        { day: 'Days 4-7', title: 'Next.js App Router & Server Components', tasks: 'Build a Next.js 14 full-stack app utilizing Server Components, Server Actions, and dynamic route handlers.', linkText: 'Next.js Official Learn Course', linkUrl: 'https://nextjs.org/learn' },
        { day: 'Days 8-10', title: 'PostgreSQL with Prisma ORM & Authentication', tasks: 'Set up Supabase/PostgreSQL, configure Prisma schema migrations, and implement Auth.js / NextAuth login.', linkText: 'Prisma Getting Started Guide', linkUrl: 'https://www.prisma.io/docs/getting-started' },
        { day: 'Days 11-14', title: 'Testing & Production Deployment', tasks: 'Add Vitest unit tests, containerize with Docker, and configure GitHub Actions for automated Vercel deployment.', linkText: 'Full Stack Open Guide', linkUrl: 'https://fullstackopen.com/en/' }
      ],
      jobs: [
        { title: 'Full Stack Engineer Intern', match: 95, salary: '$35 - $52 / hr', tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'], booleanQuery: '("Full Stack Intern" OR "Full-Stack Intern") AND ("React" OR "Node")' },
        { title: 'Junior Software Engineer (Web)', match: 91, salary: '$78,000 - $102,000 / yr', tags: ['TypeScript', 'Next.js', 'REST APIs', 'Git'], booleanQuery: '("Junior Full Stack" OR "Entry Level Web Developer") AND "TypeScript"' },
        { title: 'Associate Frontend / Full-Stack Developer', match: 87, salary: '$72,000 - $95,000 / yr', tags: ['React.js', 'Tailwind', 'Express', 'SQL'], booleanQuery: '("Associate Software Engineer" OR "Junior SWE") AND "React"' },
        { title: 'React / Next.js Frontend Developer Intern', match: 84, salary: '$30 - $48 / hr', tags: ['React', 'Next.js', 'Responsive UI', 'CSS'], booleanQuery: '("React Intern" OR "Frontend Intern") AND "TypeScript"' },
        { title: 'Software Developer 1 (Full Stack)', match: 82, salary: '$80,000 - $108,000 / yr', tags: ['JavaScript', 'Node.js', 'Docker', 'APIs'], booleanQuery: '("Software Developer 1" OR "SWE 1") AND ("Full Stack" OR "Full-Stack")' },
        { title: 'New Grad Software Engineer (2026)', match: 80, salary: '$85,000 - $115,000 / yr', tags: ['Full Stack', 'Computer Science', 'Algorithms'], booleanQuery: '("New Grad Software Engineer" OR "University Graduate SWE") AND "2026"' }
      ]
    },

    'data-analyst': {
      title: 'Data Analyst / Business Intelligence (SQL, Python)',
      shortTitle: 'Data Analytics & BI',
      coreSkills: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Tableau', 'Power BI', 'Excel (VLOOKUP, Pivot)', 'Data Visualization', 'Statistics', 'Git'],
      missingSkillDetails: [
        { name: 'Advanced SQL (Window Functions & CTEs)', impact: 'Critical (95% Job Req)', desc: 'Window functions (RANK, LEAD, LAG) and CTEs are mandatory technical interview screening topics for data roles.' },
        { name: 'Tableau / Power BI Dashboards', impact: 'Critical (88% Job Req)', desc: 'Visualizing business insights and building interactive executive dashboards.' },
        { name: 'A/B Testing & Hypothesis Testing', impact: 'High (75% Job Req)', desc: 'Evaluating statistical significance, p-values, and conversion rate impact for product decisions.' },
        { name: 'ETL Pipelines & Data Modeling', impact: 'High (68% Job Req)', desc: 'Automating data extraction, transformation, and dimensional star-schema modeling.' }
      ],
      bonusSkills: ['dbt', 'BigQuery / Snowflake', 'Scikit-Learn (Predictive Modeling)', 'Airflow', 'Looker'],
      headlineFormulas: {
        recruiter: 'Data Analyst | SQL (Advanced, Window Functions), Python (Pandas), Tableau & Power BI | Business Intelligence Intern',
        impact: 'Data Analyst | Transformed 500K+ Customer Records into Actionable Revenue Insights using SQL, Python & Tableau',
        specialist: 'Quantitative Data & BI Analyst | Specializing in Customer Retention Analytics, A/B Testing & Interactive Dashboards'
      },
      aboutTemplate: (name) => 
`Hi, I'm ${name}! 📊 I am a Data Analyst passionate about turning messy, complex datasets into clear, high-impact business decisions and automated visual dashboards.

🛠️ Data Analytics Toolkit:
• Querying & Modeling: Advanced SQL (CTEs, Window Functions, Stored Procedures), PostgreSQL, MySQL
• Programming & Analysis: Python (Pandas, NumPy, Matplotlib, Seaborn), R, Statistical Hypothesis Testing
• BI & Visualization: Tableau Desktop, Microsoft Power BI, Looker Studio, Advanced Excel (Power Query, DAX)

📈 Proven Analytics Projects:
1. Customer Churn Diagnostic Model: Analyzed 250,000+ subscription logs using Python & SQL; identified top 3 retention drivers, projecting an 18% reduction in quarterly churn.
2. Executive Sales BI Dashboard: Built an interactive Tableau dashboard tracking $4.2M in annual revenue with automated daily SQL pipeline refreshes.

🎯 Career Availability:
Seeking Data Analyst / Business Intelligence / Product Analytics Internships & 2026 New Grad roles. Reach out or connect with me!`,
      sampleBullets: [
        {
          before: 'Used Excel and Python to look at sales data for a class project.',
          after: 'Analyzed 150,000+ retail transaction records using Python (Pandas) and SQL, identifying pricing elasticity trends that improved projected gross margins by 14%.'
        },
        {
          before: 'Made some charts in Tableau about student attendance.',
          after: 'Developed an interactive multi-filter Tableau dashboard visualizing campus attendance trends across 12 departments, reducing manual weekly reporting time by 10 hours.'
        },
        {
          before: 'Wrote SQL queries to get data from database.',
          after: 'Authored complex SQL queries utilizing Common Table Expressions (CTEs) and Window Functions (`ROW_NUMBER`, `DENSE_RANK`), optimizing data pipeline extraction by 40%.'
        }
      ],
      skillsToAdd: [
        { name: 'Advanced SQL', reason: 'Highest tested skill in data analyst screens' },
        { name: 'Tableau', reason: 'Leading corporate BI tool recruiter filter' },
        { name: 'Python (Pandas & NumPy)', reason: 'Crucial for modern exploratory data analysis' },
        { name: 'Power BI', reason: 'Widely used in enterprise & finance BI' },
        { name: 'A/B Testing & Statistical Modeling', reason: 'Differentiates junior from senior analysts' },
        { name: 'Data Visualization', reason: 'Essential communication competency' }
      ],
      roadmap: [
        { day: 'Days 1-3', title: 'Advanced SQL Mastery', tasks: 'Master Window Functions (`RANK`, `LEAD`, `LAG`, `SUM() OVER`), self-joins, and recursive CTEs on LeetCode SQL 50.', linkText: 'Mode Analytics Advanced SQL', linkUrl: 'https://mode.com/sql-tutorial/' },
        { day: 'Days 4-7', title: 'Exploratory Data Analysis with Pandas & Seaborn', tasks: 'Clean messy CSV data, handle nulls/outliers, perform groupby aggregations, and plot publication-ready heatmaps.', linkText: 'Kaggle Pandas Course', linkUrl: 'https://www.kaggle.com/learn/pandas' },
        { day: 'Days 8-10', title: 'Interactive BI Dashboard in Tableau / Power BI', tasks: 'Design an interactive multi-view dashboard with calculated fields, parameters, and tooltips using Kaggle open data.', linkText: 'Tableau Free Training Videos', linkUrl: 'https://www.tableau.com/learn/training' },
        { day: 'Days 11-14', title: 'Statistical Hypothesis & A/B Testing Project', tasks: 'Calculate sample sizes, run two-sample t-tests / Chi-Square tests in Python, and publish a detailed GitHub writeup.', linkText: 'Khan Academy Statistics', linkUrl: 'https://www.khanacademy.org/math/statistics-probability' }
      ],
      jobs: [
        { title: 'Data Analyst Intern (Summer 2026)', match: 95, salary: '$28 - $46 / hr', tags: ['SQL', 'Python', 'Tableau', 'Excel'], booleanQuery: '("Data Analyst Intern" OR "Data Analytics Intern") AND "SQL"' },
        { title: 'Junior Business Intelligence (BI) Analyst', match: 91, salary: '$68,000 - $88,000 / yr', tags: ['Power BI', 'SQL', 'Data Modeling', 'Dashboards'], booleanQuery: '("Junior BI Analyst" OR "Junior Business Intelligence") AND "SQL"' },
        { title: 'Product Analytics Intern', match: 86, salary: '$32 - $50 / hr', tags: ['SQL', 'A/B Testing', 'Python', 'Product Metrics'], booleanQuery: '("Product Analyst Intern" OR "Product Analytics") AND "SQL"' },
        { title: 'Associate Data Analyst', match: 84, salary: '$70,000 - $92,000 / yr', tags: ['SQL', 'Pandas', 'Visualization', 'Statistics'], booleanQuery: '("Associate Data Analyst" OR "Entry Level Data Analyst")' },
        { title: 'Marketing / Financial Data Analyst Intern', match: 81, salary: '$26 - $42 / hr', tags: ['Excel', 'SQL', 'Tableau', 'Reporting'], booleanQuery: '("Financial Data Intern" OR "Marketing Analyst Intern") AND "SQL"' },
        { title: 'Operations Analytics Co-op', match: 79, salary: '$25 - $40 / hr', tags: ['SQL', 'Python', 'Process Optimization'], booleanQuery: '("Analytics Co-op" OR "Data Co-op") AND "Python"' }
      ]
    },

    'cloud-devops': {
      title: 'Cloud & DevOps Engineer (AWS, Docker, CI/CD)',
      shortTitle: 'Cloud & DevOps',
      coreSkills: ['Linux / Bash', 'Docker', 'Kubernetes', 'AWS (EC2, S3, IAM)', 'Terraform', 'CI/CD (GitHub Actions)', 'Python / Go', 'Git', 'Networking', 'Monitoring (Prometheus)'],
      missingSkillDetails: [
        { name: 'Terraform / Infrastructure as Code', impact: 'Critical (90% Job Req)', desc: 'Automating declarative cloud infrastructure provisioning across AWS/GCP.' },
        { name: 'Kubernetes (K8s) Orchestration', impact: 'Critical (84% Job Req)', desc: 'Managing container deployments, ingress controllers, replicas, and pod scaling.' },
        { name: 'CI/CD Pipeline Automation', impact: 'High (82% Job Req)', desc: 'Building multi-stage GitHub Actions / GitLab CI workflows with automated testing & container pushes.' },
        { name: 'Prometheus & Grafana Observability', impact: 'High (70% Job Req)', desc: 'Instrumenting system metrics, error budgets, alert managers, and latency dashboards.' }
      ],
      bonusSkills: ['Helm Charts', 'Ansible', 'ArgoCD / GitOps', 'AWS Lambda / Serverless', 'Cloud Security (IAM, VPC)'],
      headlineFormulas: {
        recruiter: 'DevOps & Cloud Engineer | AWS Certified, Docker, Kubernetes, Terraform & CI/CD Pipelines | Seeking 2026 Cloud SWE Roles',
        impact: 'Cloud / DevOps Engineer | Automated Multi-Region AWS Infrastructure with Terraform & Kubernetes | 0 Downtime CI/CD',
        specialist: 'Site Reliability & Cloud Infrastructure Aspirant | Focused on Container Orchestration, Linux Kernel Tuning & Infrastructure as Code'
      },
      aboutTemplate: (name) => 
`Hi, I'm ${name}! ☁️ I am an aspiring Cloud & DevOps Engineer passionate about automating infrastructure, streamlining CI/CD release cycles, and architecting reliable distributed cloud systems.

🛠️ Technical Arsenal:
• Cloud Platforms: Amazon Web Services (AWS - EC2, S3, IAM, VPC, EKS, Lambda), Google Cloud (GCP)
• Containerization & Orchestration: Docker, Docker Compose, Kubernetes, Helm
• Infrastructure as Code & CI/CD: Terraform, GitHub Actions, GitLab CI, Bash Scripting, Linux Admin
• Observability & Languages: Prometheus, Grafana, Python, Go, Git

🚀 Cloud Engineering Projects:
1. Automated GitOps Microservices Cluster: Deployed a production-grade Kubernetes cluster using Terraform and ArgoCD, reducing release deployment cycle time from 40 mins to 3 mins.
2. Resilient Multi-AZ AWS Architecture: Provisioned auto-scaling VPC infrastructure with application load balancers (ALB) and encrypted RDS instances achieving 99.95% uptime.

🎯 Seeking 2026 DevOps, Cloud, and Site Reliability Engineering (SRE) Internship & New Grad Roles!`,
      sampleBullets: [
        {
          before: 'Used Docker to run applications on my computer.',
          after: 'Authored multi-stage Dockerfiles and Docker Compose manifests for a 4-tier microservices application, shrinking container image sizes by 65% and standardizing developer environments.'
        },
        {
          before: 'Set up some GitHub actions to test code.',
          after: 'Designed a zero-downtime CI/CD pipeline using GitHub Actions with automated linting, unit test suites, and secure automated container deployments to AWS ECR.'
        },
        {
          before: 'Created virtual machines on AWS.',
          after: 'Provisioned modular Infrastructure as Code (IaC) with Terraform on AWS, establishing hardened VPC security groups, IAM least-privilege policies, and ALB load balancing.'
        }
      ],
      skillsToAdd: [
        { name: 'Terraform (IaC)', reason: 'Essential industry skill for cloud automation' },
        { name: 'Kubernetes (K8s)', reason: 'Top demanded container orchestration skill' },
        { name: 'AWS Cloud Services', reason: 'High weight recruiter keyword' },
        { name: 'GitHub Actions / CI-CD', reason: 'Shows modern automated deployment knowledge' },
        { name: 'Linux System Administration', reason: 'Foundational requirement for SRE/DevOps' },
        { name: 'Prometheus & Grafana', reason: 'Crucial for monitoring and observability' }
      ],
      roadmap: [
        { day: 'Days 1-3', title: 'Linux & Docker Multi-Stage Optimization', tasks: 'Master Bash scripting, process management, and build slim multi-stage alpine Docker containers.', linkText: 'Docker Best Practices', linkUrl: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/' },
        { day: 'Days 4-7', title: 'Terraform AWS Infrastructure as Code', tasks: 'Write modular Terraform code to provision AWS VPC, subnets, EC2, security groups, and S3 buckets.', linkText: 'HashiCorp Terraform Tutorials', linkUrl: 'https://developer.hashicorp.com/terraform/tutorials' },
        { day: 'Days 8-10', title: 'Kubernetes Deployment & Services', tasks: 'Deploy containerized apps with K8s Pods, Deployments, Services, ConfigMaps, and Persistent Volumes with Minikube.', linkText: 'Kubernetes Interactive Tutorials', linkUrl: 'https://kubernetes.io/docs/tutorials/' },
        { day: 'Days 11-14', title: 'Full CI/CD Pipeline & Prometheus Monitoring', tasks: 'Create GitHub Actions CI/CD to build, test, and deploy to AWS, and configure Grafana dashboards for metrics.', linkText: 'GitHub Actions Documentation', linkUrl: 'https://docs.github.com/en/actions' }
      ],
      jobs: [
        { title: 'Cloud & DevOps Engineering Intern', match: 94, salary: '$38 - $58 / hr', tags: ['AWS', 'Docker', 'Linux', 'Terraform'], booleanQuery: '("DevOps Intern" OR "Cloud Intern" OR "SRE Intern") AND ("AWS" OR "Docker")' },
        { title: 'Junior Site Reliability Engineer (SRE)', match: 89, salary: '$85,000 - $110,000 / yr', tags: ['Linux', 'Kubernetes', 'CI/CD', 'Python'], booleanQuery: '("Junior SRE" OR "Associate DevOps Engineer") AND "Kubernetes"' },
        { title: 'Associate Cloud Solutions Architect', match: 86, salary: '$82,000 - $105,000 / yr', tags: ['AWS', 'Terraform', 'Networking', 'Security'], booleanQuery: '("Associate Cloud Architect" OR "Cloud Engineer I") AND "AWS"' },
        { title: 'Infrastructure Automation Co-op', match: 83, salary: '$32 - $50 / hr', tags: ['Docker', 'Bash', 'GitHub Actions'], booleanQuery: '("Infrastructure Co-op" OR "DevOps Co-op")' },
        { title: 'Junior Platform Engineer', match: 81, salary: '$80,000 - $108,000 / yr', tags: ['Docker', 'Kubernetes', 'CI/CD', 'GitOps'], booleanQuery: '("Platform Engineer I" OR "Junior Platform Engineer")' },
        { title: 'Cloud Systems Administrator (Entry-Level)', match: 78, salary: '$70,000 - $90,000 / yr', tags: ['Linux', 'AWS', 'Bash', 'Troubleshooting'], booleanQuery: '("Junior Cloud Admin" OR "Cloud Administrator Entry")' }
      ]
    },

    'frontend-dev': {
      title: 'Frontend Developer (React / Next.js / TypeScript)',
      shortTitle: 'Frontend Development',
      coreSkills: ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Responsive Design', 'Git', 'REST APIs'],
      missingSkillDetails: [
        { name: 'TypeScript', impact: 'Critical (90% Job Req)', desc: 'Static typing prevents UI bugs and is mandatory in modern enterprise React codebases.' },
        { name: 'Web Performance & Core Web Vitals', impact: 'Critical (82% Job Req)', desc: 'Optimizing LCP, CLS, code splitting, memoization (`useMemo`, `useCallback`), and lazy loading.' },
        { name: 'Automated Testing (Jest / React Testing Library)', impact: 'High (74% Job Req)', desc: 'Unit and component integration testing for robust user interfaces.' },
        { name: 'Accessibility (a11y / WCAG)', impact: 'High (68% Job Req)', desc: 'Semantic HTML, ARIA attributes, keyboard navigation, and screen-reader support.' }
      ],
      bonusSkills: ['Framer Motion Animations', 'Storybook', 'GraphQL / Apollo', 'Zustand State Management', 'Vite / Webpack'],
      headlineFormulas: {
        recruiter: 'Frontend Software Engineer | React, Next.js, TypeScript, Tailwind CSS & State Management | Seeking 2026 Frontend Roles',
        impact: 'Frontend Developer | Built Lightning-Fast Web Experiences with React 18 & TypeScript | 99/100 Lighthouse Performance Score',
        specialist: 'UI/UX & Frontend Engineer | Specializing in Design Systems, Accessible React Components & Modern Web Animations'
      },
      aboutTemplate: (name) => 
`Hi, I'm ${name}! 🎨 I am a Frontend Engineer dedicated to crafting accessible, responsive, and pixel-perfect web applications with modern React and TypeScript.

🛠️ Frontend Arsenal:
• Core Technologies: JavaScript (ES6+), TypeScript, HTML5, CSS3/Sass
• Frameworks & Libraries: React 18, Next.js, Tailwind CSS, Redux Toolkit, Zustand, Framer Motion
• Tooling & Quality: Vite, Webpack, Jest, React Testing Library, Git, Figma, Web Accessibility (WCAG 2.1)

🌟 Featured UI Projects:
1. Interactive Component Design System: Built a reusable component library with 25+ accessible components documented in Storybook and packaged for npm.
2. High-Performance E-Commerce Web App: Engineered a fluid storefront in Next.js & TypeScript, achieving sub-second initial page loads and zero layout shifts (0 CLS).

🎯 Looking for Frontend Developer / UI Engineering Internships & New Grad Roles! Let's connect!`,
      sampleBullets: [
        {
          before: 'Built a portfolio and blog site using HTML, CSS and React.',
          after: 'Architected a personal portfolio and tech blog using Next.js 14, TypeScript, and Tailwind CSS, achieving a perfect 100/100 Core Web Vitals score across all mobile devices.'
        },
        {
          before: 'Made buttons and forms interactive with JavaScript.',
          after: 'Engineered complex multi-step interactive forms with client-side Zod validation and React Hook Form, eliminating user submission errors by 40%.'
        },
        {
          before: 'Fetched data from an API and showed cards.',
          after: 'Implemented asynchronous data fetching using TanStack React Query with optimistic UI updates and caching, decreasing server load by 50%.'
        }
      ],
      skillsToAdd: [
        { name: 'TypeScript', reason: 'Crucial requirement for frontend roles' },
        { name: 'Next.js', reason: 'Industry standard for modern React applications' },
        { name: 'Tailwind CSS', reason: 'Top modern CSS utility framework' },
        { name: 'React Testing Library', reason: 'Signals code quality & reliability' },
        { name: 'Web Accessibility (a11y)', reason: 'Highly valued by hiring managers' },
        { name: 'State Management (Redux/Zustand)', reason: 'Essential for complex client-side applications' }
      ],
      roadmap: [
        { day: 'Days 1-3', title: 'TypeScript for React Component Architecture', tasks: 'Master generic props, event typing, custom typed hooks, and discriminated union states in React.', linkText: 'React TypeScript Cheatsheet', linkUrl: 'https://react-typescript-cheatsheet.netlify.app/' },
        { day: 'Days 4-7', title: 'Next.js 14 App Router & Performance Tuning', tasks: 'Build SSR/SSG pages with image optimization, dynamic imports, and font optimization to maximize Core Web Vitals.', linkText: 'Web.dev Core Web Vitals', linkUrl: 'https://web.dev/vitals/' },
        { day: 'Days 8-10', title: 'Component Testing with React Testing Library', tasks: 'Write behavioral tests covering user clicks, keyboard navigation, async fetches, and accessibility violations.', linkText: 'Testing Library Docs', linkUrl: 'https://testing-library.com/docs/react-testing-library/intro/' },
        { day: 'Days 11-14', title: 'Design System & Storybook Publication', tasks: 'Build 5 accessible components (Modal, Dropdown, Tabs) with Tailwind CSS and document them with Storybook.', linkText: 'Storybook for React Guide', linkUrl: 'https://storybook.js.org/docs/react/get-started/introduction' }
      ],
      jobs: [
        { title: 'Frontend Developer Intern', match: 96, salary: '$32 - $50 / hr', tags: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind'], booleanQuery: '("Frontend Intern" OR "Front-End Intern") AND ("React" OR "TypeScript")' },
        { title: 'Junior Frontend Engineer', match: 92, salary: '$75,000 - $98,000 / yr', tags: ['TypeScript', 'Next.js', 'State Management', 'Testing'], booleanQuery: '("Junior Frontend Engineer" OR "Entry Level Frontend") AND "React"' },
        { title: 'UI/UX Developer Intern', match: 88, salary: '$30 - $46 / hr', tags: ['React', 'Figma', 'CSS Animations', 'Responsive'], booleanQuery: '("UI Developer Intern" OR "Web UI Intern") AND "React"' },
        { title: 'Associate Software Engineer - Frontend', match: 85, salary: '$78,000 - $102,000 / yr', tags: ['JavaScript', 'React', 'Git', 'APIs'], booleanQuery: '("Associate Software Engineer" OR "Associate SWE") AND "Frontend"' },
        { title: 'Web Application Developer Co-op', match: 82, salary: '$28 - $44 / hr', tags: ['React.js', 'Next.js', 'REST APIs'], booleanQuery: '("Web Developer Co-op" OR "Frontend Co-op")' },
        { title: 'New Grad Frontend Engineer (2026)', match: 80, salary: '$82,000 - $110,000 / yr', tags: ['Computer Science', 'Frontend', 'TypeScript'], booleanQuery: '("New Grad Frontend Engineer" OR "University Graduate Frontend")' }
      ]
    },

    'ai-ml-engineer': {
      title: 'AI & Machine Learning Engineer (Python, PyTorch)',
      shortTitle: 'AI & Machine Learning',
      coreSkills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'Computer Vision / NLP', 'LLMs / LangChain', 'Git', 'Docker', 'SQL'],
      missingSkillDetails: [
        { name: 'LLM Fine-Tuning & RAG (Retrieval Augmented Gen)', impact: 'Critical (92% Job Req)', desc: 'Integrating vector databases (Pinecone/ChromaDB), LangChain/LlamaIndex, and embeddings for custom AI assistants.' },
        { name: 'Model Deployment & FastAPIs', impact: 'Critical (85% Job Req)', desc: 'Serving ML models via high-performance asynchronous REST endpoints with Docker containerization.' },
        { name: 'PyTorch Deep Learning Pipeline', impact: 'High (80% Job Req)', desc: 'Custom Dataset loaders, training loops, GPU acceleration (CUDA), and gradient optimization.' },
        { name: 'Model Evaluation & MLflow Tracking', impact: 'High (70% Job Req)', desc: 'Experiment tracking, hyperparameter tuning, and metric logging (F1-score, ROC-AUC).' }
      ],
      bonusSkills: ['ONNX Runtime', 'Hugging Face Transformers', 'Vector DBs (Milvus/Weaviate)', 'Kubeflow / MLOps', 'Prompt Engineering'],
      headlineFormulas: {
        recruiter: 'AI & Machine Learning Engineer | PyTorch, NLP, LLMs, LangChain, RAG & Python | Seeking 2026 AI Internships',
        impact: 'AI/ML Engineer | Built & Deployed RAG Pipeline with 94% Answer Precision on 100K+ Technical Documents',
        specialist: 'Deep Learning & NLP Specialist | Passionate about Generative AI, Large Language Models & Scalable MLOps'
      },
      aboutTemplate: (name) => 
`Hi, I'm ${name}! 🤖 I am an AI & Machine Learning Engineer focused on developing intelligent systems, fine-tuning neural architectures, and deploying production LLM/RAG pipelines.

🛠️ Technical Arsenal:
• ML & Deep Learning: PyTorch, TensorFlow, Scikit-Learn, Hugging Face Transformers, OpenCV, CUDA
• Generative AI & NLP: LLMs, LangChain, LlamaIndex, Retrieval-Augmented Generation (RAG), Vector DBs (ChromaDB, Pinecone)
• MLOps & Backend: Python, FastAPI, Docker, MLflow, PostgreSQL, Git, Linux

🚀 Featured AI Projects:
1. Enterprise RAG Knowledge Assistant: Engineered a semantic search pipeline over 100,000+ domain PDFs using PyTorch embeddings and FastAPI, cutting document search time by 80%.
2. Real-Time Computer Vision Classifier: Trained a custom YOLOv8 / CNN model achieving 96.4% precision at 45 FPS on edge devices.

🎯 Actively seeking AI/ML, Data Science, and Computer Vision Internship & New Grad Opportunities! Let's connect!`,
      sampleBullets: [
        {
          before: 'Used machine learning in Python to predict house prices.',
          after: 'Trained and optimized XGBoost and Random Forest regression models on 50,000+ housing records using Scikit-Learn, improving RMSE by 22% through feature engineering.'
        },
        {
          before: 'Made a chatbot with OpenAI API and LangChain.',
          after: 'Built a contextual Retrieval-Augmented Generation (RAG) assistant using LangChain, OpenAI embeddings, and ChromaDB, achieving 94% response accuracy on complex domain queries.'
        },
        {
          before: 'Created a neural network with PyTorch for image classification.',
          after: 'Implemented a custom Convolutional Neural Network (CNN) in PyTorch with data augmentation and AdamW optimization, achieving 96.2% validation accuracy on CIFAR-10.'
        }
      ],
      skillsToAdd: [
        { name: 'PyTorch', reason: 'Preferred framework in AI research & industry' },
        { name: 'LangChain / RAG', reason: 'Highest rising demand keyword in Generative AI' },
        { name: 'Hugging Face Transformers', reason: 'Standard for pretrained NLP models' },
        { name: 'FastAPI for ML Serving', reason: 'Demonstrates end-to-end model deployment capability' },
        { name: 'Vector Databases', reason: 'Essential for modern enterprise LLM apps' },
        { name: 'MLOps & Experiment Tracking', reason: 'Differentiates serious ML candidates' }
      ],
      roadmap: [
        { day: 'Days 1-3', title: 'PyTorch Deep Learning & Custom Training Loops', tasks: 'Write custom PyTorch `Dataset`, `DataLoader`, loss functions, and CUDA tensor training loops.', linkText: 'PyTorch Official Tutorials', linkUrl: 'https://pytorch.org/tutorials/' },
        { day: 'Days 4-7', title: 'Hugging Face & Fine-Tuning NLP Transformers', tasks: 'Fine-tune a BERT/RoBERTa model on custom classification text data using Hugging Face Trainer.', linkText: 'Hugging Face NLP Course', linkUrl: 'https://huggingface.co/learn/nlp-course' },
        { day: 'Days 8-10', title: 'Building a Production RAG System with LangChain', tasks: 'Chunk documents, generate vector embeddings, store in ChromaDB, and query with similarity search.', linkText: 'LangChain Official Quickstart', linkUrl: 'https://python.langchain.com/docs/get_started/introduction' },
        { day: 'Days 11-14', title: 'Model Serving via FastAPI & Docker', tasks: 'Wrap your PyTorch/LLM model in asynchronous FastAPI endpoints and deploy containerized on Docker.', linkText: 'FastAPI Tutorial', linkUrl: 'https://fastapi.tiangolo.com/tutorial/' }
      ],
      jobs: [
        { title: 'Machine Learning Engineering Intern', match: 95, salary: '$42 - $65 / hr', tags: ['PyTorch', 'Python', 'MLOps', 'Deep Learning'], booleanQuery: '("Machine Learning Intern" OR "ML Intern" OR "AI Intern") AND "PyTorch"' },
        { title: 'Junior AI / Generative AI Engineer', match: 91, salary: '$90,000 - $125,000 / yr', tags: ['Python', 'LLMs', 'LangChain', 'FastAPI'], booleanQuery: '("Junior AI Engineer" OR "Generative AI Engineer") AND "Python"' },
        { title: 'Associate Data Scientist (ML Focus)', match: 87, salary: '$85,000 - $112,000 / yr', tags: ['Python', 'Scikit-Learn', 'Statistics', 'NLP'], booleanQuery: '("Associate Data Scientist" OR "Junior Data Scientist") AND "Machine Learning"' },
        { title: 'Computer Vision / NLP Intern', match: 84, salary: '$38 - $55 / hr', tags: ['PyTorch', 'OpenCV', 'Transformers'], booleanQuery: '("Computer Vision Intern" OR "NLP Intern")' },
        { title: 'Applied AI Researcher Intern', match: 82, salary: '$45 - $70 / hr', tags: ['Deep Learning', 'PyTorch', 'Research'], booleanQuery: '("Applied AI Intern" OR "Research Intern AI")' },
        { title: 'New Grad Machine Learning Engineer (2026)', match: 80, salary: '$95,000 - $135,000 / yr', tags: ['PyTorch', 'Algorithms', 'Distributed ML'], booleanQuery: '("New Grad ML Engineer" OR "New Grad Machine Learning 2026")' }
      ]
    },

    'mobile-dev': {
      title: 'Mobile App Developer (Flutter / Android / iOS)',
      shortTitle: 'Mobile App Dev',
      coreSkills: ['Flutter', 'Dart', 'Kotlin / Java', 'Swift', 'REST APIs', 'Firebase', 'State Management (Riverpod/Bloc)', 'Git', 'App Store / Play Store Deployment', 'UI/UX Design'],
      missingSkillDetails: [
        { name: 'State Management (Bloc / Riverpod)', impact: 'Critical (88% Job Req)', desc: 'Managing reactive, decoupled state across complex multi-screen mobile apps.' },
        { name: 'Offline Storage & Caching (SQLite / Hive)', impact: 'Critical (82% Job Req)', desc: 'Ensuring seamless offline-first capability and local data persistence.' },
        { name: 'Automated Mobile Testing (Widget & Integration)', impact: 'High (70% Job Req)', desc: 'Writing automated unit, widget, and end-to-end integration tests.' }
      ],
      bonusSkills: ['CI/CD with Fastlane', 'Push Notifications (FCM)', 'GraphQL', 'In-App Purchases', 'Animation Controllers'],
      headlineFormulas: {
        recruiter: 'Mobile App Developer | Flutter, Dart, Kotlin, Swift, REST APIs & Firebase | Published Apps on App Store & Play Store',
        impact: 'Mobile Software Engineer | Published 2 Cross-Platform Apps with 10,000+ Downloads & 4.8-Star Rating',
        specialist: 'Cross-Platform Mobile Engineer | Focused on Fluid 60 FPS UI, State Management (Riverpod/Bloc) & Offline-First Architecture'
      },
      aboutTemplate: (name) => 
`Hi, I'm ${name}! 📱 I am a Mobile Application Developer passionate about crafting responsive, fluid 60-FPS cross-platform mobile apps using Flutter & native SDKs.

🛠️ Mobile Stack:
• Frameworks & Languages: Flutter, Dart, Kotlin, Swift, Java
• Architecture & State: BLoC Pattern, Riverpod, Provider, Clean Architecture, MVVM
• Backend & Data: RESTful APIs, Firebase (Auth, Firestore, Cloud Functions), SQLite, Hive, Git

🚀 Published Mobile Projects:
1. Campus Pulse Social App: Developed a real-time event discovery app in Flutter & Firebase, acquiring 3,500+ active student users with 4.8/5 rating.
2. Fitness Tracker Mobile App: Engineered an offline-first fitness logging app with SQLite sync and custom animation controllers.

🎯 Actively seeking Mobile Developer / iOS / Android / Flutter Internships & 2026 Full-Time Roles! Let's connect!`,
      sampleBullets: [
        {
          before: 'Made an app in Flutter with Firebase for students.',
          after: 'Developed a cross-platform mobile app in Flutter & Dart with Firebase backend, scaling to 3,500+ active student users with real-time push notifications.'
        },
        {
          before: 'Used Riverpod for managing app state.',
          after: 'Architected app state using Riverpod and Clean Architecture principles, decoupling UI from business logic and increasing test code coverage to 85%.'
        },
        {
          before: 'Connected app to backend REST API.',
          after: 'Implemented resilient REST API integrations with Dio and local caching via Hive, ensuring seamless offline mode and reducing network data usage by 40%.'
        }
      ],
      skillsToAdd: [
        { name: 'Flutter & Dart', reason: 'Top cross-platform mobile framework' },
        { name: 'State Management (Bloc/Riverpod)', reason: 'Key architectural requirement' },
        { name: 'Firebase Cloud Services', reason: 'Standard mobile backend solution' },
        { name: 'REST APIs & Offline Caching', reason: 'Essential for real-world mobile apps' },
        { name: 'Mobile App Publishing', reason: 'Huge portfolio differentiator' }
      ],
      roadmap: [
        { day: 'Days 1-3', title: 'Flutter Clean Architecture & Riverpod', tasks: 'Implement reactive state management using Riverpod 2.0 with AsyncNotifier providers.', linkText: 'Riverpod Official Guide', linkUrl: 'https://riverpod.dev/' },
        { day: 'Days 4-7', title: 'Offline-First Storage with Hive / Isar', tasks: 'Integrate local NoSQL storage and cache remote REST API payloads for offline access.', linkText: 'Flutter Storage Guide', linkUrl: 'https://docs.flutter.dev/cookbook/persistence' },
        { day: 'Days 8-10', title: 'Complex Animations & Custom Painters', tasks: 'Build micro-interactions using AnimationController, Hero transitions, and AnimatedBuilder.', linkText: 'Flutter Animations Tutorial', linkUrl: 'https://docs.flutter.dev/ui/animations' },
        { day: 'Days 11-14', title: 'Automated Testing & App Release Prep', tasks: 'Write widget tests, configure Fastlane, and build production APK/IPA release bundles.', linkText: 'Flutter Deployment Docs', linkUrl: 'https://docs.flutter.dev/deployment' }
      ],
      jobs: [
        { title: 'Mobile Developer Intern (Flutter / React Native)', match: 95, salary: '$32 - $48 / hr', tags: ['Flutter', 'Dart', 'Mobile', 'APIs'], booleanQuery: '("Mobile Intern" OR "Flutter Intern" OR "iOS Intern") AND ("Flutter" OR "Dart")' },
        { title: 'Junior Android / iOS Developer', match: 90, salary: '$75,000 - $96,000 / yr', tags: ['Kotlin', 'Swift', 'Mobile UI', 'Git'], booleanQuery: '("Junior Mobile Developer" OR "Junior Android" OR "Junior iOS")' },
        { title: 'Associate Software Engineer - Mobile Apps', match: 86, salary: '$78,000 - $102,000 / yr', tags: ['Flutter', 'Firebase', 'State Management'], booleanQuery: '("Associate Mobile Engineer" OR "Mobile SWE")' },
        { title: 'Cross-Platform Mobile Engineering Co-op', match: 83, salary: '$28 - $44 / hr', tags: ['Mobile', 'Dart', 'REST APIs'], booleanQuery: '("Mobile Co-op" OR "App Developer Co-op")' },
        { title: 'Junior Flutter Developer', match: 80, salary: '$70,000 - $92,000 / yr', tags: ['Flutter', 'Dart', 'Firebase'], booleanQuery: '("Junior Flutter Developer" OR "Flutter Engineer")' },
        { title: 'New Grad Mobile Engineer (2026)', match: 78, salary: '$80,000 - $105,000 / yr', tags: ['Mobile Development', 'Computer Science'], booleanQuery: '("New Grad Mobile Engineer" OR "University Graduate Mobile")' }
      ]
    },

    'product-intern': {
      title: 'Associate Product Manager / Tech Intern',
      shortTitle: 'Product Management',
      coreSkills: ['Product Strategy', 'User Research', 'Agile / Scrum', 'Roadmapping', 'Wireframing (Figma)', 'SQL Data Analysis', 'A/B Testing', 'PRDs & Feature Specs', 'Jira', 'Technical Communication'],
      missingSkillDetails: [
        { name: 'Product Requirements Documents (PRDs)', impact: 'Critical (92% Job Req)', desc: 'Writing comprehensive engineering PRDs, user stories, acceptance criteria, and non-functional requirements.' },
        { name: 'Product Analytics & North Star Metrics', impact: 'Critical (88% Job Req)', desc: 'Defining KPIs (MAU, DAU/MAU ratio, CAC, LTV, churn rate) and running feature funnel analyses.' },
        { name: 'Prioritization Frameworks (RICE, MoSCoW)', impact: 'High (80% Job Req)', desc: 'Structuring feature backlogs with Reach, Impact, Confidence, and Effort calculations.' }
      ],
      bonusSkills: ['Mixpanel / Amplitude', 'SQL Queries', 'Go-To-Market (GTM) Strategy', 'Competitive Benchmarking', 'API Understanding'],
      headlineFormulas: {
        recruiter: 'Associate Product Manager Intern | CS + Business Background | User Research, PRDs, Agile, SQL & Product Analytics',
        impact: 'Aspiring Product Manager | Led Feature Specs & User Research for 2 SaaS Web Apps | Data-Driven Growth & RICE Prioritization',
        specialist: 'Technical Product Manager Candidate | Bridging Engineering & Business with Deep UX Research, Wireframing & Agile Delivery'
      },
      aboutTemplate: (name) => 
`Hi, I'm ${name}! 💡 I am an aspiring Product Manager with a technical Computer Science foundation, passionate about discovering user pain points, prioritizing high-impact features, and collaborating with cross-functional engineering teams.

🛠️ Product Management Toolkit:
• Product Discovery & Strategy: User Interviews, Competitor Analysis, Opportunity Solution Trees, Go-To-Market (GTM)
• Execution & Specs: Product Requirement Documents (PRDs), User Stories, RICE Prioritization, Jira, Agile/Scrum
• Design & Analytics: Figma Wireframing, User Journey Mapping, SQL Queries, Product Analytics (Mixpanel, Google Analytics), A/B Testing

🚀 Featured Product Case Studies:
1. Student Marketplace Feature PRD: Conducted 30+ user interviews, designed low-fidelity Figma prototypes, and wrote complete engineering specs that reduced onboarding friction by 40%.
2. Conversion Funnel Optimization: Analyzed user drop-off points with SQL and Mixpanel, proposing a simplified 2-step checkout flow that boosted projected conversion by 15%.

🎯 Seeking Summer 2026 Associate Product Manager (APM) & Product Management Internships! Let's connect!`,
      sampleBullets: [
        {
          before: 'Helped my team decide what features to build for our class app.',
          after: 'Led product discovery for a 4-person engineering team, conducting 25+ user interviews and applying RICE prioritization to define an MVP roadmap delivered 2 weeks ahead of schedule.'
        },
        {
          before: 'Wrote requirements and drew some wireframes in Figma.',
          after: 'Authored 3 comprehensive Product Requirement Documents (PRDs) with technical acceptance criteria and created interactive Figma wireframes tested across 50+ student users.'
        },
        {
          before: 'Looked at user metrics to see how many people visited.',
          after: 'Designed a product metrics dashboard tracking activation, retention cohorts, and drop-off funnels, identifying bottlenecks that boosted user weekly retention by 22%.'
        }
      ],
      skillsToAdd: [
        { name: 'Product Requirements Documents (PRDs)', reason: 'Core deliverable tested in APM interviews' },
        { name: 'User Research & Personas', reason: 'High priority skill for product recruiters' },
        { name: 'RICE Prioritization', reason: 'Demonstrates structured decision-making' },
        { name: 'Agile & Scrum Methodologies', reason: 'Essential for cross-functional teamwork' },
        { name: 'Product Analytics (SQL/Mixpanel)', reason: 'Crucial for modern data-driven PMs' }
      ],
      roadmap: [
        { day: 'Days 1-3', title: 'Mastering PRD Writing & User Stories', tasks: 'Write a full end-to-end PRD for a popular app feature including problem statement, non-goals, and edge cases.', linkText: 'Lenny Rachitsky PRD Guide', linkUrl: 'https://www.lennysnewsletter.com/' },
        { day: 'Days 4-7', title: 'User Research & Figma Prototyping', tasks: 'Conduct 5 user usability interviews, map out friction journeys, and build clickable prototypes in Figma.', linkText: 'Figma for PMs Tutorial', linkUrl: 'https://www.figma.com/resources/learn-design/' },
        { day: 'Days 8-10', title: 'Product Metrics & SQL Funnel Analysis', tasks: 'Learn North Star frameworks, define L1/L2 supporting metrics, and write SQL queries for cohort retention.', linkText: 'Reforge Product Metrics', linkUrl: 'https://www.reforge.com/blog' },
        { day: 'Days 11-14', title: 'Case Study Deck & Portfolio Publish', tasks: 'Assemble a polished Product Teardown deck, upload to Notion/portfolio website, and link to LinkedIn.', linkText: 'APM Season Prep Guide', linkUrl: 'https://www.productmanagementexercises.com/' }
      ],
      jobs: [
        { title: 'Associate Product Manager Intern (APM Intern)', match: 95, salary: '$35 - $60 / hr', tags: ['PRDs', 'Product Strategy', 'Agile', 'Figma'], booleanQuery: '("APM Intern" OR "Associate Product Manager Intern" OR "Product Manager Intern")' },
        { title: 'Technical Product Management Intern', match: 91, salary: '$38 - $62 / hr', tags: ['CS Background', 'SQL', 'APIs', 'Roadmapping'], booleanQuery: '("Technical Product Manager Intern" OR "TPM Intern")' },
        { title: 'Junior Product Analyst', match: 86, salary: '$72,000 - $94,000 / yr', tags: ['Product Analytics', 'SQL', 'A/B Testing', 'Jira'], booleanQuery: '("Junior Product Analyst" OR "Associate Product Analyst")' },
        { title: 'Product Operations Co-op', match: 82, salary: '$28 - $45 / hr', tags: ['Scrum', 'User Feedback', 'Communication'], booleanQuery: '("Product Operations Intern" OR "Product Ops Co-op")' },
        { title: 'Rotational Product Management Program (2026)', match: 80, salary: '$85,000 - $120,000 / yr', tags: ['APM Program', 'Strategy', 'Execution'], booleanQuery: '("Rotational Product Manager" OR "APM 2026" OR "New Grad APM")' },
        { title: 'Associate Growth Product Manager', match: 78, salary: '$78,000 - $105,000 / yr', tags: ['A/B Testing', 'Metrics', 'Figma'], booleanQuery: '("Associate Growth PM" OR "Junior Growth Product")' }
      ]
    }
  };

  // Demo Persona Profiles
  const DEMO_PERSONAS = {
    'cs-intern': {
      name: 'Alex Kumar',
      role: 'java-backend',
      location: 'San Francisco, CA or Remote',
      headline: 'CS Student at State Tech | Looking for Internships | Java, Python',
      about: 'I am a 3rd year Computer Science student passionate about coding and technology. Looking for software engineering internship opportunities for Summer 2026. Skilled in Java, C++, HTML, CSS, MySQL.',
      projects: `• Built a university student management system in Java and MySQL.
• Created a simple e-commerce website using HTML, CSS and backend.
• Worked on a database course project with MySQL.`,
      skills: 'Java, C++, MySQL, HTML, CSS, Object Oriented Programming, Git, Algorithms'
    },
    'frontend-grad': {
      name: 'Maya Chen',
      role: 'frontend-dev',
      location: 'New York, NY / Remote',
      headline: 'Student @ City College | Aspiring Frontend Developer | React, JavaScript',
      about: 'Hi, I am a senior studying Information Systems. I love designing clean web interfaces. Currently seeking junior frontend web developer roles. Skilled in HTML, CSS, JavaScript, React basics.',
      projects: `• Built a portfolio and blog site using HTML, CSS and React.
• Made buttons and forms interactive with JavaScript.
• Fetched data from an API and showed cards.`,
      skills: 'JavaScript, React, HTML5, CSS3, Git, Responsive Design, Bootstrap'
    },
    'data-analyst': {
      name: 'Rohan Sharma',
      role: 'data-analyst',
      location: 'Austin, TX or Remote',
      headline: 'Aspiring Data Analyst | Python, Excel, SQL Enthusiast | Student',
      about: 'Passionate about numbers, data visualization, and solving business problems with data. Seeking Summer 2026 data analyst and business intelligence internships. Knowledge of Python, Pandas, and Excel.',
      projects: `• Used Excel and Python to look at sales data for a class project.
• Made some charts in Tableau about student attendance.
• Wrote SQL queries to get data from database.`,
      skills: 'Python, Excel, SQL, Pandas, NumPy, Statistics, Tableau Basics'
    },
    'cloud-devops': {
      name: 'Sarah Jenkins',
      role: 'cloud-devops',
      location: 'Seattle, WA or Remote',
      headline: 'CS Junior | Cloud & DevOps Enthusiast | Linux, Docker, Python',
      about: 'Computer Science student passionate about cloud computing and automation. Looking for Cloud Engineering / DevOps Co-op and internship opportunities for 2026. Familiar with Linux, Docker, and AWS basics.',
      projects: `• Used Docker to run applications on my computer.
• Set up some GitHub actions to test code.
• Created virtual machines on AWS.`,
      skills: 'Linux, Bash, Docker, Python, AWS EC2, Git, Networking'
    }
  };

  // State Management
  let currentProfileData = null;
  let currentAnalysis = null;
  let currentPreviewMode = 'after'; // 'before' | 'after'

  // DOM Elements
  const elements = {
    // Inputs & Tabs
    personaSelect: document.getElementById('persona-select'),
    btnLoadDemo: document.getElementById('btn-load-demo'),
    btnReset: document.getElementById('btn-reset'),
    tabBtnResume: document.getElementById('tab-btn-resume'),
    tabBtnLinkedIn: document.getElementById('tab-btn-linkedin'),
    panelResume: document.getElementById('panel-resume'),
    panelLinkedIn: document.getElementById('panel-linkedin'),
    targetRoleSelect: document.getElementById('target-role-select'),
    resumeDropzone: document.getElementById('resume-dropzone'),
    resumeFileInput: document.getElementById('resume-file-input'),
    fileStatus: document.getElementById('file-status'),
    rawResumeText: document.getElementById('raw-resume-text'),
    btnAnalyze: document.getElementById('btn-analyze'),

    // LinkedIn Form Fields
    liName: document.getElementById('li-name'),
    liLocation: document.getElementById('li-target-location'),
    liHeadline: document.getElementById('li-current-headline'),
    liAbout: document.getElementById('li-current-about'),
    liProjects: document.getElementById('li-current-projects'),
    liSkills: document.getElementById('li-current-skills'),

    // Results Dashboard
    resultsDashboard: document.getElementById('results-dashboard'),
    scoreNumber: document.getElementById('score-number'),
    circleProgressPath: document.getElementById('circle-progress-path'),
    scoreStatusBadge: document.getElementById('score-status-badge'),
    scoreRoleName: document.getElementById('score-role-name'),
    scoreSummaryText: document.getElementById('score-summary-text'),

    // Breakdown Meters
    metricHeadlineVal: document.getElementById('metric-headline-val'),
    barHeadline: document.getElementById('bar-headline'),
    metricAboutVal: document.getElementById('metric-about-val'),
    barAbout: document.getElementById('bar-about'),
    metricSkillsVal: document.getElementById('metric-skills-val'),
    barSkills: document.getElementById('bar-skills'),
    metricSkillsHint: document.getElementById('metric-skills-hint'),
    metricStarVal: document.getElementById('metric-star-val'),
    barStar: document.getElementById('bar-star'),

    // Workspace Tabs
    wsTabs: document.querySelectorAll('.ws-tab'),
    wsTabContents: document.querySelectorAll('.ws-tab-content'),

    // Optimizers
    headlineVariantsContainer: document.getElementById('headline-variants-container'),
    aboutSectionText: document.getElementById('about-section-text'),
    aboutCharCount: document.getElementById('about-char-count'),
    btnCopyAbout: document.getElementById('btn-copy-about'),
    starBulletsContainer: document.getElementById('star-bullets-container'),
    inputCustomBullet: document.getElementById('input-custom-bullet'),
    btnTransformCustomBullet: document.getElementById('btn-transform-custom-bullet'),
    customBulletResult: document.getElementById('custom-bullet-result'),
    skillsToAddContainer: document.getElementById('skills-to-add-container'),

    // Skill Gap & Roadmap
    skillgapRoleLabel: document.getElementById('skillgap-role-label'),
    matchedSkillsCount: document.getElementById('matched-skills-count'),
    matchedSkillsContainer: document.getElementById('matched-skills-container'),
    missingSkillsContainer: document.getElementById('missing-skills-container'),
    bonusSkillsContainer: document.getElementById('bonus-skills-container'),
    roadmapTimelineContainer: document.getElementById('roadmap-timeline-container'),

    // Jobs
    jobRecommendationsContainer: document.getElementById('job-recommendations-container'),

    // Preview
    btnPreviewBefore: document.getElementById('btn-preview-before'),
    btnPreviewAfter: document.getElementById('btn-preview-after'),
    mockAvatar: document.getElementById('mock-avatar'),
    mockName: document.getElementById('mock-name'),
    mockHeadline: document.getElementById('mock-headline'),
    mockLocation: document.getElementById('mock-location'),
    mockOtwRoles: document.getElementById('mock-otw-roles'),
    mockAboutBody: document.getElementById('mock-about-body'),
    mockSkillsChips: document.getElementById('mock-skills-chips'),

    // Modals & Banners
    btnOpenArchModal: document.getElementById('btn-open-arch-modal'),
    archModal: document.getElementById('arch-modal'),
    btnCloseArchModal: document.getElementById('btn-close-arch-modal'),
    btnModalGotIt: document.getElementById('btn-modal-got-it'),
    btnExportPdf: document.getElementById('btn-export-pdf'),
    printModal: document.getElementById('print-modal'),
    btnClosePrintModal: document.getElementById('btn-close-print-modal'),
    printReportContent: document.getElementById('print-report-content'),
    btnPrintTrigger: document.getElementById('btn-print-trigger'),
    btnCopyReport: document.getElementById('btn-copy-report'),
    toastContainer: document.getElementById('toast-container')
  };

  // =========================================================================
  // Initialization & Event Listeners
  // =========================================================================
  function init() {
    setupIntakeTabs();
    setupWorkspaceTabs();
    setupDropzone();
    setupEventListeners();
    
    // Load initial demo profile
    loadPersona('cs-intern');
    // Run initial analysis
    analyzeProfile();
  }

  function setupEventListeners() {
    // Demo persona loader
    elements.btnLoadDemo.addEventListener('click', () => {
      loadPersona(elements.personaSelect.value);
      showToast('Loaded demo persona: ' + elements.personaSelect.options[elements.personaSelect.selectedIndex].text, 'success');
      analyzeProfile();
    });

    // Reset button
    elements.btnReset.addEventListener('click', () => {
      resetInputs();
      showToast('Inputs cleared.', 'success');
    });

    // Main Analyze button
    elements.btnAnalyze.addEventListener('click', () => {
      analyzeProfile();
      elements.resultsDashboard.scrollIntoView({ behavior: 'smooth' });
      showToast('Profile analyzed & LinkedIn optimizations generated!', 'success');
    });

    // About section character counter
    elements.aboutSectionText.addEventListener('input', () => {
      const count = elements.aboutSectionText.innerText.trim().length;
      elements.aboutCharCount.textContent = `${count} / 2600 characters`;
    });

    // Copy About button
    elements.btnCopyAbout.addEventListener('click', () => {
      const text = elements.aboutSectionText.innerText;
      navigator.clipboard.writeText(text).then(() => {
        showToast('About summary copied to clipboard! Ready to paste into LinkedIn.', 'success');
      });
    });

    // Custom bullet transform tool
    elements.btnTransformCustomBullet.addEventListener('click', () => {
      transformCustomBullet();
    });

    elements.inputCustomBullet.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') transformCustomBullet();
    });

    // Preview Mode Toggles
    elements.btnPreviewBefore.addEventListener('click', () => {
      currentPreviewMode = 'before';
      elements.btnPreviewBefore.classList.add('active');
      elements.btnPreviewAfter.classList.remove('active');
      renderLinkedInMockup();
    });

    elements.btnPreviewAfter.addEventListener('click', () => {
      currentPreviewMode = 'after';
      elements.btnPreviewAfter.classList.add('active');
      elements.btnPreviewBefore.classList.remove('active');
      renderLinkedInMockup();
    });

    // Architecture Modal
    elements.btnOpenArchModal.addEventListener('click', () => elements.archModal.classList.remove('hidden'));
    elements.btnCloseArchModal.addEventListener('click', () => elements.archModal.classList.add('hidden'));
    elements.btnModalGotIt.addEventListener('click', () => elements.archModal.classList.add('hidden'));

    // Print & Export Modal
    elements.btnExportPdf.addEventListener('click', () => {
      generatePrintReport();
      elements.printModal.classList.remove('hidden');
    });

    elements.btnClosePrintModal.addEventListener('click', () => elements.printModal.classList.add('hidden'));
    elements.btnPrintTrigger.addEventListener('click', () => window.print());
    elements.btnCopyReport.addEventListener('click', copyReportAsMarkdown);

    // Close modals on backdrop click
    window.addEventListener('click', (e) => {
      if (e.target === elements.archModal) elements.archModal.classList.add('hidden');
      if (e.target === elements.printModal) elements.printModal.classList.add('hidden');
    });
  }

  // =========================================================================
  // Intake Tabs & File Upload Handler
  // =========================================================================
  function setupIntakeTabs() {
    elements.tabBtnResume.addEventListener('click', () => {
      elements.tabBtnResume.classList.add('active');
      elements.tabBtnResume.setAttribute('aria-selected', 'true');
      elements.tabBtnLinkedIn.classList.remove('active');
      elements.tabBtnLinkedIn.setAttribute('aria-selected', 'false');
      elements.panelResume.classList.add('active');
      elements.panelLinkedIn.classList.remove('active');
    });

    elements.tabBtnLinkedIn.addEventListener('click', () => {
      elements.tabBtnLinkedIn.classList.add('active');
      elements.tabBtnLinkedIn.setAttribute('aria-selected', 'true');
      elements.tabBtnResume.classList.remove('active');
      elements.tabBtnResume.setAttribute('aria-selected', 'false');
      elements.panelLinkedIn.classList.add('active');
      elements.panelResume.classList.remove('active');
    });
  }

  function setupWorkspaceTabs() {
    elements.wsTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-tab');
        
        elements.wsTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        elements.wsTabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const targetContent = document.getElementById(targetId);
        if (targetContent) targetContent.classList.add('active');
      });
    });
  }

  function setupDropzone() {
    const dropzone = elements.resumeDropzone;
    const fileInput = elements.resumeFileInput;

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer.files;
      if (files.length > 0) handleFile(files[0]);
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) handleFile(e.target.files[0]);
    });
  }

  async function handleFile(file) {
    elements.fileStatus.classList.remove('hidden');
    elements.fileStatus.textContent = `Reading ${file.name}...`;

    if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      if (window.pdfjsLib) {
        try {
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          let fullText = '';
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n';
          }
          elements.rawResumeText.value = fullText;
          elements.fileStatus.textContent = `✅ Successfully extracted text from ${file.name} (${pdf.numPages} pages)`;
          showToast(`Extracted resume text from ${file.name}`, 'success');
          // Auto-sync into LinkedIn fields
          syncExtractedResumeToInputs(fullText);
          analyzeProfile();
        } catch (err) {
          console.error('PDF parsing error:', err);
          elements.fileStatus.textContent = `⚠️ Could not parse PDF automatically. Please paste the text below.`;
        }
      } else {
        elements.fileStatus.textContent = `Loaded ${file.name}. (PDF.js offline; paste raw text if needed)`;
      }
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        elements.rawResumeText.value = text;
        elements.fileStatus.textContent = `✅ Loaded ${file.name}`;
        syncExtractedResumeToInputs(text);
        analyzeProfile();
      };
      reader.readAsText(file);
    }
  }

  function syncExtractedResumeToInputs(text) {
    // Intelligent heuristic extraction
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length > 0 && lines[0].length < 35) {
      elements.liName.value = lines[0];
    }
    elements.liProjects.value = text.slice(0, 500);
  }

  function loadPersona(personaKey) {
    const persona = DEMO_PERSONAS[personaKey];
    if (!persona) return;

    elements.liName.value = persona.name;
    elements.targetRoleSelect.value = persona.role;
    elements.liLocation.value = persona.location;
    elements.liHeadline.value = persona.headline;
    elements.liAbout.value = persona.about;
    elements.liProjects.value = persona.projects;
    elements.liSkills.value = persona.skills;
    elements.rawResumeText.value = `RESUME: ${persona.name}\nGoal: ${persona.role}\nLocation: ${persona.location}\nSkills: ${persona.skills}\n\nExperience & Projects:\n${persona.projects}\n\nSummary:\n${persona.about}`;
    elements.fileStatus.classList.add('hidden');
  }

  function resetInputs() {
    elements.liName.value = '';
    elements.liLocation.value = 'Remote / United States';
    elements.liHeadline.value = '';
    elements.liAbout.value = '';
    elements.liProjects.value = '';
    elements.liSkills.value = '';
    elements.rawResumeText.value = '';
    elements.fileStatus.classList.add('hidden');
  }

  // =========================================================================
  // Core AI Analysis & Optimizer Calculation Engine
  // =========================================================================
  function analyzeProfile() {
    const targetRoleKey = elements.targetRoleSelect.value;
    const roleData = ROLE_DATABASE[targetRoleKey] || ROLE_DATABASE['java-backend'];

    const name = elements.liName.value.trim() || 'Alex Kumar';
    const location = elements.liLocation.value.trim() || 'United States';
    const currentHeadline = elements.liHeadline.value.trim();
    const currentAbout = elements.liAbout.value.trim();
    const currentProjects = elements.liProjects.value.trim();
    const currentSkillsRaw = elements.liSkills.value.trim() + ', ' + elements.rawResumeText.value;

    currentProfileData = {
      name,
      location,
      targetRoleKey,
      roleData,
      currentHeadline,
      currentAbout,
      currentProjects,
      currentSkillsRaw
    };

    // 1. Skill Extraction & Matching
    const extractedSkills = extractSkillsFromText(currentSkillsRaw);
    const coreSkills = roleData.coreSkills;

    const matchedSkills = coreSkills.filter(cs => 
      extractedSkills.some(es => es.toLowerCase() === cs.toLowerCase() || cs.toLowerCase().includes(es.toLowerCase()) || es.toLowerCase().includes(cs.toLowerCase()))
    );

    const missingSkills = roleData.missingSkillDetails.filter(ms => 
      !matchedSkills.some(m => m.toLowerCase().includes(ms.name.toLowerCase()) || ms.name.toLowerCase().includes(m.toLowerCase()))
    );

    // 2. Score Calculations (0-100)
    // Headline Score: Checks for target role keywords, stack keywords, lack of generic "student at"
    let headlineScore = 45;
    if (currentHeadline.toLowerCase().includes(roleData.shortTitle.toLowerCase()) || currentHeadline.toLowerCase().includes('engineer') || currentHeadline.toLowerCase().includes('developer')) headlineScore += 25;
    if (matchedSkills.length >= 2) headlineScore += 15;
    if (currentHeadline.length >= 40) headlineScore += 10;
    headlineScore = Math.min(headlineScore, 95);

    // About Score: Checks for structure, length, tech stack mention, projects
    let aboutScore = 40;
    if (currentAbout.length > 200) aboutScore += 20;
    if (currentAbout.toLowerCase().includes('project') || currentAbout.toLowerCase().includes('built')) aboutScore += 15;
    if (currentAbout.toLowerCase().includes('skills') || currentAbout.toLowerCase().includes('technologies')) aboutScore += 15;
    aboutScore = Math.min(aboutScore, 90);

    // Skills Match Score
    const skillRatio = (matchedSkills.length / Math.max(coreSkills.length, 1));
    const skillsScore = Math.min(Math.round(40 + (skillRatio * 55)), 95);

    // STAR Bullets Score
    let starScore = 50;
    const hasNumbers = /\d+%|\d+\+|\d+k|\d+ms/i.test(currentProjects);
    const hasActionVerbs = /architected|engineered|developed|optimized|designed|built|scaled/i.test(currentProjects);
    if (hasNumbers) starScore += 25;
    if (hasActionVerbs) starScore += 20;
    starScore = Math.min(starScore, 95);

    // Overall Weighted Score
    const overallScore = Math.round((headlineScore * 0.25) + (aboutScore * 0.25) + (skillsScore * 0.30) + (starScore * 0.20));

    currentAnalysis = {
      overallScore,
      headlineScore,
      aboutScore,
      skillsScore,
      starScore,
      matchedSkills,
      missingSkills,
      extractedSkills
    };

    // Render all views
    renderOverviewCard();
    renderHeadlineOptimizer();
    renderAboutStorycrafter();
    renderStarBulletOptimizer();
    renderSkillsToAdd();
    renderSkillGapSection();
    renderJobRecommendations();
    renderLinkedInMockup();
  }

  function extractSkillsFromText(text) {
    const knownSkillsList = [
      'Java', 'Spring Boot', 'Spring Data JPA', 'REST API', 'RESTful APIs', 'Hibernate', 'Microservices', 'Maven', 'Gradle',
      'JavaScript', 'TypeScript', 'React', 'React.js', 'Next.js', 'Node.js', 'Express', 'Express.js', 'Tailwind CSS', 'Redux',
      'Python', 'Pandas', 'NumPy', 'SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Tableau', 'Power BI', 'Excel',
      'AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions', 'Linux', 'Bash', 'Prometheus', 'Grafana',
      'PyTorch', 'TensorFlow', 'Scikit-Learn', 'LangChain', 'OpenCV', 'FastAPI', 'Flutter', 'Dart', 'Kotlin', 'Swift',
      'Git', 'C++', 'C#', 'Agile', 'Scrum', 'Figma', 'Jira', 'A/B Testing', 'PRD', 'Object Oriented Programming'
    ];

    const found = [];
    const lowerText = text.toLowerCase();
    
    knownSkillsList.forEach(skill => {
      const lowerSkill = skill.toLowerCase();
      // Regex word boundary matching
      const regex = new RegExp(`\\b${lowerSkill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (regex.test(lowerText) || lowerText.includes(lowerSkill)) {
        if (!found.includes(skill)) found.push(skill);
      }
    });

    return found;
  }

  // =========================================================================
  // View Renderers
  // =========================================================================

  function renderOverviewCard() {
    const { overallScore, headlineScore, aboutScore, skillsScore, starScore, missingSkills } = currentAnalysis;
    const { roleData } = currentProfileData;

    elements.scoreNumber.textContent = overallScore;
    elements.circleProgressPath.setAttribute('stroke-dasharray', `${overallScore}, 100`);

    // Update gauge stroke color
    if (overallScore >= 80) {
      elements.circleProgressPath.style.stroke = '#10b981';
      elements.scoreStatusBadge.textContent = '🌟 Strong Candidate • Top 10% Search Readiness';
      elements.scoreStatusBadge.style.color = '#34d399';
    } else if (overallScore >= 65) {
      elements.circleProgressPath.style.stroke = '#f59e0b';
      elements.scoreStatusBadge.textContent = '⚡ Solid Foundation • Needs High-Impact Polish';
      elements.scoreStatusBadge.style.color = '#fbbf24';
    } else {
      elements.circleProgressPath.style.stroke = '#ef4444';
      elements.scoreStatusBadge.textContent = '⚠️ Missing Critical Keywords & Metrics';
      elements.scoreStatusBadge.style.color = '#f87171';
    }

    elements.scoreRoleName.textContent = roleData.title;
    elements.scoreSummaryText.textContent = `Your profile shows good foundational skills in ${currentAnalysis.matchedSkills.slice(0, 3).join(', ') || 'core technologies'}, but is missing ${missingSkills.length} critical high-yield industry skills (${missingSkills.map(s => s.name).join(', ')}) required to rank in top recruiter LinkedIn searches.`;

    // Breakdown Bars
    updateMetricBar(elements.metricHeadlineVal, elements.barHeadline, headlineScore);
    updateMetricBar(elements.metricAboutVal, elements.barAbout, aboutScore);
    updateMetricBar(elements.metricSkillsVal, elements.barSkills, skillsScore);
    elements.metricSkillsHint.textContent = `${missingSkills.length} critical skill${missingSkills.length === 1 ? '' : 's'} missing`;
    updateMetricBar(elements.metricStarVal, elements.barStar, starScore);
  }

  function updateMetricBar(valEl, barEl, score) {
    valEl.textContent = `${score}/100`;
    barEl.style.width = `${score}%`;
    barEl.className = 'progress-fill ' + (score >= 80 ? 'success' : score >= 60 ? 'warning' : 'danger');
  }

  function renderHeadlineOptimizer() {
    const { roleData, name } = currentProfileData;
    const formulas = roleData.headlineFormulas;

    const variants = [
      { type: 'Recruiter Search Magnet (Keyword Heavy)', tagClass: 'recruiter', text: formulas.recruiter },
      { type: 'Value & Quantified Impact', tagClass: 'impact', text: formulas.impact },
      { type: 'Aspiring Specialist & Tech Passion', tagClass: 'specialist', text: formulas.specialist }
    ];

    elements.headlineVariantsContainer.innerHTML = variants.map((v, i) => `
      <div class="headline-variant-item">
        <div class="headline-variant-header">
          <span class="variant-tag ${v.tagClass}">${v.type}</span>
          <span class="variant-char-pill">${v.text.length} / 220 chars</span>
        </div>
        <p class="headline-text">${escapeHtml(v.text)}</p>
        <div class="variant-actions">
          <button type="button" class="btn btn-secondary btn-sm" onclick="CareerCraft.copyText('${escapeQuotes(v.text)}', 'Headline copied to clipboard!')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy Headline
          </button>
          <button type="button" class="btn btn-outline btn-sm" onclick="CareerCraft.applyHeadline('${escapeQuotes(v.text)}')">
            Apply to Preview
          </button>
        </div>
      </div>
    `).join('');
  }

  function renderAboutStorycrafter() {
    const { roleData, name } = currentProfileData;
    const generatedAbout = roleData.aboutTemplate(name);
    elements.aboutSectionText.innerText = generatedAbout;
    elements.aboutCharCount.textContent = `${generatedAbout.length} / 2600 characters`;
  }

  function renderStarBulletOptimizer() {
    const { roleData } = currentProfileData;
    const bullets = roleData.sampleBullets;

    elements.starBulletsContainer.innerHTML = bullets.map((b, i) => `
      <div class="star-bullet-card">
        <div class="bullet-comparison">
          <div class="bullet-before">
            <span class="bullet-label weak">Before (Weak / Task-Focused)</span>
            <p>${escapeHtml(b.before)}</p>
          </div>
          <div class="bullet-after">
            <span class="bullet-label star">After (STAR / Google XYZ Formula)</span>
            <p>${escapeHtml(b.after)}</p>
          </div>
        </div>
        <div class="bullet-actions">
          <button type="button" class="btn btn-secondary btn-sm" onclick="CareerCraft.copyText('${escapeQuotes(b.after)}', 'STAR bullet copied!')">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy Bullet
          </button>
        </div>
      </div>
    `).join('');
  }

  function transformCustomBullet() {
    const input = elements.inputCustomBullet.value.trim();
    if (!input) {
      showToast('Please type a bullet point to transform.', 'warning');
      return;
    }

    const { roleData } = currentProfileData;
    // Generate high-impact STAR formulation
    const tech = roleData.coreSkills[0] || 'modern frameworks';
    const tech2 = roleData.coreSkills[1] || 'REST APIs';
    const metrics = ['reducing latency by 38%', 'scaling to 1,500+ active users', 'improving test coverage to 90%', 'cutting execution time by 45%'];
    const chosenMetric = metrics[Math.floor(Math.random() * metrics.length)];

    const transformed = `Architected and deployed high-impact solution using ${tech} and ${tech2}, ${chosenMetric} while ensuring 99.9% uptime and robust exception handling.`;

    elements.customBulletResult.classList.remove('hidden');
    elements.customBulletResult.innerHTML = `
      <div><strong>STAR Rewrite:</strong> ${transformed}</div>
      <button type="button" class="btn btn-secondary btn-sm" onclick="CareerCraft.copyText('${escapeQuotes(transformed)}', 'STAR bullet copied!')">Copy</button>
    `;
    showToast('Bullet point transformed with STAR formula!', 'success');
  }

  function renderSkillsToAdd() {
    const { roleData } = currentProfileData;
    elements.skillsToAddContainer.innerHTML = roleData.skillsToAdd.map(skill => `
      <div class="skill-add-chip">
        <div class="skill-chip-info">
          <span class="skill-chip-name">${escapeHtml(skill.name)}</span>
          <span class="skill-chip-reason">${escapeHtml(skill.reason)}</span>
        </div>
        <button type="button" class="btn btn-ghost btn-sm" onclick="CareerCraft.copyText('${escapeQuotes(skill.name)}', 'Copied skill tag!')" title="Copy skill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        </button>
      </div>
    `).join('');
  }

  function renderSkillGapSection() {
    const { roleData } = currentProfileData;
    const { matchedSkills, missingSkills } = currentAnalysis;

    elements.skillgapRoleLabel.textContent = roleData.title;
    elements.matchedSkillsCount.textContent = matchedSkills.length;

    // Matched skills chips
    elements.matchedSkillsContainer.innerHTML = matchedSkills.length > 0 
      ? matchedSkills.map(s => `<span class="skill-chip matched">✅ ${escapeHtml(s)}</span>`).join('')
      : `<span class="text-muted">No exact core matches detected. Update your skills input above.</span>`;

    // Missing skills cards
    elements.missingSkillsContainer.innerHTML = missingSkills.length > 0
      ? missingSkills.map(ms => `
        <div class="missing-skill-item">
          <div class="missing-skill-header">
            <span class="missing-skill-name">${escapeHtml(ms.name)}</span>
            <span class="missing-skill-impact">${escapeHtml(ms.impact)}</span>
          </div>
          <p class="missing-skill-desc">${escapeHtml(ms.desc)}</p>
        </div>
      `).join('')
      : `<div class="text-success">🎉 Excellent! You have matched all high-priority core skills for this role.</div>`;

    // Bonus skills
    elements.bonusSkillsContainer.innerHTML = roleData.bonusSkills.map(bs => 
      `<span class="skill-chip bonus">✨ ${escapeHtml(bs)}</span>`
    ).join('');

    // Roadmap Sprint
    elements.roadmapTimelineContainer.innerHTML = roleData.roadmap.map(step => `
      <div class="roadmap-step">
        <div class="roadmap-step-header">
          <span class="roadmap-step-day">${escapeHtml(step.day)}</span>
        </div>
        <div class="roadmap-step-title">${escapeHtml(step.title)}</div>
        <p class="roadmap-step-tasks">${escapeHtml(step.tasks)}</p>
        <a href="${escapeHtml(step.linkUrl)}" target="_blank" rel="noopener noreferrer" class="roadmap-resource-link">
          <span>📚 ${escapeHtml(step.linkText)}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `).join('');
  }

  function renderJobRecommendations() {
    const { roleData, location } = currentProfileData;
    const locQuery = encodeURIComponent(location || 'United States');

    elements.jobRecommendationsContainer.innerHTML = roleData.jobs.map(job => {
      const linkedInSearchUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.booleanQuery)}&location=${locQuery}&f_TPR=r604800&f_E=1%2C2`;
      const googleJobsUrl = `https://www.google.com/search?q=${encodeURIComponent(job.title + ' jobs in ' + location)}&ibp=htl;jobs`;
      const indeedJobsUrl = `https://www.indeed.com/jobs?q=${encodeURIComponent(job.title)}&l=${locQuery}`;

      return `
        <div class="job-rec-card">
          <div>
            <div class="job-card-top">
              <h4 class="job-title">${escapeHtml(job.title)}</h4>
              <span class="job-match-badge ${job.match >= 90 ? 'high' : 'medium'}">${job.match}% Match</span>
            </div>
            <div class="job-salary-est">Est: ${escapeHtml(job.salary)}</div>
            <div class="job-tags-list" style="margin-top: 0.65rem;">
              ${job.tags.map(t => `<span class="job-tag">${escapeHtml(t)}</span>`).join('')}
            </div>
          </div>

          <div class="job-card-actions">
            <a href="${linkedInSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn-linkedin-job">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span>Safe Search on LinkedIn</span>
            </a>
            <div class="job-alt-links">
              <a href="${googleJobsUrl}" target="_blank" rel="noopener noreferrer" class="job-alt-link">Google Jobs ↗</a>
              <a href="${indeedJobsUrl}" target="_blank" rel="noopener noreferrer" class="job-alt-link">Indeed ↗</a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderLinkedInMockup() {
    const { name, location, roleData, currentHeadline, currentAbout } = currentProfileData;

    // Initials for avatar
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'AK';
    elements.mockAvatar.textContent = initials;
    elements.mockName.textContent = name;
    elements.mockLocation.textContent = location;

    if (currentPreviewMode === 'before') {
      elements.mockHeadline.textContent = currentHeadline || 'Student at University | Looking for opportunities';
      elements.mockAboutBody.innerText = currentAbout || 'No summary provided yet.';
      elements.mockSkillsChips.innerHTML = (elements.liSkills.value || 'Java, HTML, CSS')
        .split(',')
        .map(s => `<span class="skill-chip" style="background:#222f3e; color:#cbd5e1;">${escapeHtml(s.trim())}</span>`)
        .join('');
      elements.mockOtwRoles.textContent = `${roleData.title} and related entry-level roles`;
    } else {
      elements.mockHeadline.textContent = roleData.headlineFormulas.recruiter;
      elements.mockAboutBody.innerText = roleData.aboutTemplate(name);
      elements.mockSkillsChips.innerHTML = roleData.skillsToAdd
        .map(s => `<span class="skill-chip matched">⭐ ${escapeHtml(s.name)}</span>`)
        .join('');
      elements.mockOtwRoles.textContent = `${roleData.title}, ${roleData.shortTitle} Engineer, and Software Developer roles`;
    }
  }

  // =========================================================================
  // Print & PDF Export Generator
  // =========================================================================
  function generatePrintReport() {
    const { name, location, roleData } = currentProfileData;
    const { overallScore, matchedSkills, missingSkills } = currentAnalysis;
    const headline = roleData.headlineFormulas.recruiter;
    const about = roleData.aboutTemplate(name);

    elements.printReportContent.innerHTML = `
      <div class="print-report-header">
        <h2 style="font-size: 1.5rem; color: #f8fafc; margin-bottom: 0.25rem;">CareerCraft AI — Career Action Plan</h2>
        <p style="color: #94a3b8; font-size: 0.875rem;">Prepared for <strong>${escapeHtml(name)}</strong> • Target Role: <strong>${escapeHtml(roleData.title)}</strong> • Profile Score: <strong>${overallScore}/100</strong></p>
      </div>

      <div class="print-section">
        <h3 class="print-section-title">1. Optimized LinkedIn Headline (Ready to Copy)</h3>
        <p style="background:#0e1624; padding: 0.75rem; border-radius:6px; font-weight:600; color:#f8fafc;">${escapeHtml(headline)}</p>
      </div>

      <div class="print-section">
        <h3 class="print-section-title">2. Skill-Gap Breakdown</h3>
        <p style="margin-bottom:0.5rem;"><strong>Identified Strengths:</strong> ${matchedSkills.join(', ') || 'General fundamentals'}</p>
        <p><strong>Critical Missing Skills to Close:</strong></p>
        <ul style="padding-left:1.25rem; margin-top:0.35rem;">
          ${missingSkills.map(s => `<li><strong>${escapeHtml(s.name)}:</strong> ${escapeHtml(s.desc)}</li>`).join('')}
        </ul>
      </div>

      <div class="print-section">
        <h3 class="print-section-title">3. High-Converting LinkedIn 'About' Summary</h3>
        <div style="background:#0e1624; padding: 1rem; border-radius:6px; white-space:pre-wrap; color:#cbd5e1; font-size:0.8125rem;">${escapeHtml(about)}</div>
      </div>

      <div class="print-section">
        <h3 class="print-section-title">4. STAR Project Bullet Improvements</h3>
        <ul style="padding-left:1.25rem;">
          ${roleData.sampleBullets.map(b => `<li style="margin-bottom:0.5rem;">${escapeHtml(b.after)}</li>`).join('')}
        </ul>
      </div>

      <div class="print-section">
        <h3 class="print-section-title">5. 14-Day Accelerated Learning Roadmap</h3>
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          ${roleData.roadmap.map(r => `<div><strong>${escapeHtml(r.day)} — ${escapeHtml(r.title)}:</strong> ${escapeHtml(r.tasks)}</div>`).join('')}
        </div>
      </div>
    `;
  }

  function copyReportAsMarkdown() {
    const { name, roleData } = currentProfileData;
    const { overallScore, matchedSkills, missingSkills } = currentAnalysis;
    const headline = roleData.headlineFormulas.recruiter;
    const about = roleData.aboutTemplate(name);

    const md = `# CareerCraft AI — Career Action Plan for ${name}
**Target Role:** ${roleData.title} | **Profile Score:** ${overallScore}/100

## 1. Optimized LinkedIn Headline
\`\`\`
${headline}
\`\`\`

## 2. Skill Gap Analysis
- **Matched Skills:** ${matchedSkills.join(', ')}
- **Missing Skills to Bridge:**
${missingSkills.map(s => `  - **${s.name}:** ${s.desc}`).join('\n')}

## 3. LinkedIn "About" Section
${about}

## 4. STAR Project Bullets
${roleData.sampleBullets.map(b => `- ${b.after}`).join('\n')}

## 5. 2-Week Learning Sprint
${roleData.roadmap.map(r => `### ${r.day}: ${r.title}\n${r.tasks}\nResource: ${r.linkUrl}`).join('\n\n')}
`;

    navigator.clipboard.writeText(md).then(() => {
      showToast('Full Markdown Report copied to clipboard!', 'success');
    });
  }

  // =========================================================================
  // Global Helpers & Toast Notification
  // =========================================================================
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✅' : 'ℹ️'}</span> <span>${escapeHtml(message)}</span>`;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeQuotes(str) {
    if (!str) return '';
    return String(str)
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '');
  }

  // Exposed Global namespace for button onclick handlers
  window.CareerCraft = {
    copyText: (text, message = 'Copied to clipboard!') => {
      navigator.clipboard.writeText(text).then(() => {
        showToast(message, 'success');
      });
    },
    applyHeadline: (headlineText) => {
      elements.liHeadline.value = headlineText;
      if (currentPreviewMode === 'after') {
        elements.mockHeadline.textContent = headlineText;
      }
      showToast('Applied headline to preview & profile state!', 'success');
    }
  };

  // Bootstrap when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
