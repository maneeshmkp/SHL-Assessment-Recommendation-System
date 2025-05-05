// This file contains the pre-processed assessment data from SHL's catalog
// In a real implementation, this would be loaded from a database or API

export interface Assessment {
  name: string
  url: string
  remote_testing_support: boolean
  adaptive_support: boolean
  duration: string
  test_type: string
  description: string
  embedding: number[]
}

// Sample data - in a real implementation, this would be populated from the SHL catalog
export const assessmentData: Assessment[] = [
  {
    name: "Automata - Fix (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/automata-fix-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "30 minutes",
    test_type: "Technical",
    description:
      "Evaluates a candidate's ability to identify and fix bugs in code. Suitable for Java developers and software engineers.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1), // Placeholder embedding
  },
  {
    name: "Core Java (Entry Level) (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/core-java-entry-level-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "40 minutes",
    test_type: "Technical",
    description:
      "Assesses fundamental Java programming skills for entry-level positions. Covers core concepts, syntax, and basic problem-solving.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Java 8 (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/java-8-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "35 minutes",
    test_type: "Technical",
    description: "Evaluates proficiency in Java 8 features including lambdas, streams, and functional interfaces.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Core Java (Advanced Level) (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/core-java-advanced-level-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "45 minutes",
    test_type: "Technical",
    description:
      "Assesses advanced Java programming skills including multithreading, collections, and design patterns.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Agile Software Development | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/agile-software-development/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "30 minutes",
    test_type: "Methodology",
    description:
      "Evaluates understanding of Agile principles, practices, and methodologies for software development teams.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Technology Professional 8.0 Job Focused Assessment | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/technology-professional-8-0-job-focused-assessment/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "40 minutes",
    test_type: "Comprehensive",
    description:
      "Comprehensive assessment for technology professionals covering technical skills, problem-solving, and collaboration abilities.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Computer Science (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/computer-science-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "45 minutes",
    test_type: "Technical",
    description:
      "Evaluates fundamental computer science concepts including algorithms, data structures, and computational thinking.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Entry level Sales 7.1 (International) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/entry-level-sales-7-1/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "45 minutes",
    test_type: "Sales",
    description:
      "Assesses key competencies for entry-level sales positions including communication, persuasion, and customer focus.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Entry Level Sales Sift Out 7.1 | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/entry-level-sales-sift-out-7-1/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "25 minutes",
    test_type: "Sales",
    description:
      "Quick screening assessment for entry-level sales candidates to identify those with basic sales aptitude.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Entry Level Sales Solution | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/entry-level-sales-solution/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "60 minutes",
    test_type: "Sales",
    description:
      "Comprehensive solution for assessing entry-level sales candidates including aptitude, personality, and situational judgment.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Sales Representative Solution | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/sales-representative-solution/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "60 minutes",
    test_type: "Sales",
    description:
      "End-to-end assessment solution for sales representative roles covering sales skills, personality traits, and cognitive abilities.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Sales Support Specialist Solution | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/sales-support-specialist-solution/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "50 minutes",
    test_type: "Sales",
    description:
      "Assessment package for sales support roles focusing on administrative skills, customer service, and sales knowledge.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Technical Sales Associate Solution | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/technical-sales-associate-solution/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "65 minutes",
    test_type: "Sales",
    description:
      "Specialized assessment for technical sales roles combining technical knowledge evaluation with sales aptitude assessment.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "SVAR - Spoken English (Indian Accent) (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/svar-spoken-english-indian-accent-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "20 minutes",
    test_type: "Language",
    description:
      "Evaluates spoken English proficiency with focus on Indian accent, suitable for customer-facing and sales roles.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Sales & Service Phone Solution | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/sales-and-service-phone-solution/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "55 minutes",
    test_type: "Sales",
    description:
      "Comprehensive assessment for phone-based sales and service roles including communication skills and customer handling.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Sales & Service Phone Simulation | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/sales-and-service-phone-simulation/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "40 minutes",
    test_type: "Simulation",
    description:
      "Interactive simulation of phone-based sales and service scenarios to evaluate real-world performance capabilities.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "English Comprehension (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/english-comprehension-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "25 minutes",
    test_type: "Language",
    description:
      "Assesses English reading and comprehension skills for roles requiring strong communication abilities.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Motivation Questionnaire MQM5 | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/motivation-questionnaire-mqm5/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "25 minutes",
    test_type: "Personality",
    description:
      "Evaluates what motivates individuals in the workplace, helping assess cultural fit and long-term engagement potential.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Global Skills Assessment | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/global-skills-assessment/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "60 minutes",
    test_type: "Comprehensive",
    description:
      "Comprehensive assessment of skills relevant for global leadership roles including cultural awareness and adaptability.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Graduate 8.0 Job Focused Assessment | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/graduate-8-0-job-focused-assessment-4228/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "45 minutes",
    test_type: "Comprehensive",
    description:
      "Tailored assessment for graduate-level positions evaluating cognitive abilities, behaviors, and job-specific competencies.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Drupal (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/drupal-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "35 minutes",
    test_type: "Technical",
    description: "Evaluates proficiency in Drupal CMS for content management and web development roles.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Search Engine Optimization (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/search-engine-optimization-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "30 minutes",
    test_type: "Technical",
    description:
      "Assesses knowledge of SEO principles, techniques, and best practices for digital marketing and content roles.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Administrative Professional - Short Form | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/administrative-professional-short-form/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "30 minutes",
    test_type: "Administrative",
    description:
      "Brief assessment of administrative skills including organization, attention to detail, and basic office software proficiency.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "General Entry Level – Data Entry 7.0 Solution | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/general-entry-level-data-entry-7-0-solution/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "35 minutes",
    test_type: "Administrative",
    description:
      "Evaluates data entry skills including speed, accuracy, and attention to detail for entry-level positions.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Automata Selenium | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/automata-selenium/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "45 minutes",
    test_type: "Technical",
    description:
      "Hands-on assessment of Selenium automation testing skills for QA engineers and test automation specialists.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Automata Front End | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/automata-front-end/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "50 minutes",
    test_type: "Technical",
    description:
      "Practical assessment of front-end development skills including HTML, CSS, and JavaScript implementation.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "JavaScript (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/javascript-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "40 minutes",
    test_type: "Technical",
    description:
      "Evaluates JavaScript programming skills including ES6+ features, DOM manipulation, and asynchronous programming.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "HTML/CSS (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/htmlcss-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "35 minutes",
    test_type: "Technical",
    description:
      "Assesses proficiency in HTML and CSS for web development roles, covering layout, styling, and responsive design.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "HTML5 (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/html5-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "30 minutes",
    test_type: "Technical",
    description: "Focused assessment of HTML5 features including semantic elements, APIs, and multimedia capabilities.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "CSS3 (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/css3-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "30 minutes",
    test_type: "Technical",
    description:
      "Evaluates CSS3 skills including animations, transitions, flexbox, and grid layout for modern web development.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Selenium (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/selenium-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "40 minutes",
    test_type: "Technical",
    description:
      "Assesses knowledge of Selenium WebDriver for test automation, including locators, waits, and test frameworks.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "SQL Server (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/sql-server-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "35 minutes",
    test_type: "Technical",
    description:
      "Evaluates SQL Server database skills including queries, stored procedures, and database design concepts.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Automata - SQL (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/automata-sql-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "45 minutes",
    test_type: "Technical",
    description: "Hands-on assessment of SQL skills through practical database query and manipulation exercises.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Manual Testing (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/manual-testing-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "35 minutes",
    test_type: "Technical",
    description:
      "Evaluates manual testing skills including test case design, defect reporting, and testing methodologies.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Verify - Numerical Ability | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/verify-numerical-ability/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "25 minutes",
    test_type: "Cognitive",
    description:
      "Assesses numerical reasoning and data interpretation skills for roles requiring quantitative analysis.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Financial Professional - Short Form | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/financial-professional-short-form/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "30 minutes",
    test_type: "Financial",
    description:
      "Brief assessment for financial professionals covering key concepts in accounting, finance, and financial analysis.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Bank Administrative Assistant - Short Form | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/bank-administrative-assistant-short-form/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "25 minutes",
    test_type: "Administrative",
    description:
      "Specialized assessment for administrative roles in banking environments, covering relevant skills and knowledge.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Basic Computer Literacy (Windows 10) (New) | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/basic-computer-literacy-windows-10-new/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "20 minutes",
    test_type: "Technical",
    description:
      "Evaluates fundamental computer skills using Windows 10, suitable for administrative and entry-level positions.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Verify - Verbal Ability - Next Generation | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/verify-verbal-ability-next-generation/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "25 minutes",
    test_type: "Cognitive",
    description:
      "Assesses verbal reasoning and comprehension skills for roles requiring strong communication abilities.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "SHL Verify Interactive - Inductive Reasoning | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/shl-verify-interactive-inductive-reasoning/",
    remote_testing_support: true,
    adaptive_support: true,
    duration: "25 minutes",
    test_type: "Cognitive",
    description:
      "Interactive assessment of pattern recognition and logical reasoning abilities for problem-solving roles.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
  {
    name: "Occupational Personality Questionnaire OPQ32r | SHL",
    url: "https://www.shl.com/solutions/products/product-catalog/view/occupational-personality-questionnaire-opq32r/",
    remote_testing_support: true,
    adaptive_support: false,
    duration: "35 minutes",
    test_type: "Personality",
    description:
      "Comprehensive personality assessment measuring 32 characteristics relevant to workplace performance and cultural fit.",
    embedding: Array(384)
      .fill(0)
      .map(() => Math.random() * 2 - 1),
  },
]
