export const personalInfo = {
  name: "Bhavasudhan S",
  title: "Software Developer & Builder",
  headline: "Building ideas into real-world technology.",
  location: "Bengaluru, Karnataka, India",
  university: "REVA University",
  degree: "B.Tech Computer Science Engineering",
  year: "2nd Year",
  bio: "B.Tech CSE student at REVA University with a passion for transforming complex ideas into functional, real-world software. Deeply interested in software engineering, AI/ML, startup products, and system design.",
  availability: "Available for Hackathons, AI Projects & Tech Collaborations",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "bhavasudhan.dev@gmail.com",
    resume: "#contact"
  },
  stats: [
    { label: "Core Projects Built", value: "4+" },
    { label: "Tech Stack & Tools", value: "12+" },
    { label: "Focus Areas", value: "AI/ML & Systems" },
    { label: "Current University", value: "REVA (2nd Year)" }
  ]
};

export const aboutData = {
  narrative: `I am a 2nd-year B.Tech Computer Science Engineering student at REVA University in Bengaluru, India. Rather than viewing software engineering as just coursework, I approach code as a craft—building practical products that solve genuine problems.`,
  points: [
    {
      title: "Builder & Product Mindset",
      description: "Interested in the complete lifecycle of software—from foundational algorithm design to deploying interactive user experiences and AI services."
    },
    {
      title: "AI/ML & Emerging Tech",
      description: "Actively exploring artificial intelligence, intelligence platforms, and IoT hardware integration to create smarter applications."
    },
    {
      title: "Startup & Innovation Culture",
      description: "Thriving in fast-paced collaborative environments, hackathons, and developer communities where fast iteration creates high-impact solutions."
    }
  ]
};

export const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "programming", label: "Programming" },
  { id: "web", label: "Web Development" },
  { id: "database", label: "Databases" },
  { id: "concepts", label: "Core Concepts" },
  { id: "tools", label: "Tools & Tech" }
];

export const skillsData = [
  // Programming
  { name: "C", category: "programming", level: "Advanced Foundation", icon: "Code2", description: "Low-level system programming, memory management, pointers, and data structures." },
  { name: "Java", category: "programming", level: "Object-Oriented Core", icon: "Coffee", description: "Object-oriented programming, class design, encapsulation, and robust application logic." },
  { name: "Python", category: "programming", level: "AI & Scripting Focus", icon: "Terminal", description: "FastAPI backends, data processing libraries, and AI/ML model integration." },

  // Web
  { name: "HTML5", category: "web", level: "Semantic Markup", icon: "FileCode", description: "Accessible semantic structure, SEO best practices, and clean document flow." },
  { name: "CSS3", category: "web", level: "Modern Layouts", icon: "Palette", description: "Responsive layouts, Flexbox/Grid, custom keyframe animations, and dark glassmorphism styling." },
  { name: "JavaScript", category: "web", level: "ES6+ Modern JS", icon: "Cpu", description: "Asynchronous programming, DOM manipulation, ES6+ features, and dynamic Web APIs." },

  // Database
  { name: "MySQL", category: "database", level: "Relational DB", icon: "Database", description: "Relational schema design, complex JOIN queries, data integrity, and indexing." },
  { name: "DBMS", category: "database", level: "Core Concepts", icon: "Server", description: "ACID properties, normalization, transaction management, and relational algebra." },

  // Concepts
  { name: "Data Structures", category: "concepts", level: "Core Mastery", icon: "Layers", description: "Arrays, Linked Lists, Trees, Graphs, Stacks, Queues, Hash Tables, and Algorithmic Complexity." },
  { name: "Object-Oriented Programming", category: "concepts", level: "Architecture", icon: "Box", description: "Inheritance, Polymorphism, Abstraction, Encapsulation, and Design Patterns." },
  { name: "Problem Solving", category: "concepts", level: "Algorithmic Thinking", icon: "Zap", description: "Breakdown of complex logic into efficient, modular, and optimized computational solutions." },

  // Tools & Technologies
  { name: "Git", category: "tools", level: "Version Control", icon: "GitBranch", description: "Branching strategies, commit hygiene, merge resolution, and repository management." },
  { name: "GitHub", category: "tools", level: "Collaboration", icon: "Github", description: "Open source contributions, pull request workflows, issue tracking, and GitHub Actions." },
  { name: "APIs & REST", category: "tools", level: "Integration", icon: "Globe", description: "RESTful architecture, API integration, JSON processing, and FastAPI endpoint construction." },
  { name: "AI/ML Foundations", category: "tools", level: "Applied Intelligence", icon: "Sparkles", description: "Generative AI API integration, prompt orchestration, and intelligent app design." }
];

export const projectsData = [
  {
    id: "weathergpt",
    title: "WeatherGPT",
    badge: "AI / Intelligence Platform",
    tagline: "An AI-powered weather intelligence platform providing personalized insights, risk analysis, and conversational climate interaction.",
    description: "WeatherGPT goes beyond simple temperature reports by transforming raw meteorological data into actionable intelligence. It offers conversational weather inquiries, simulation models, natural disaster risk alerts, and personalized daily recommendations using generative AI.",
    problemSolved: "Traditional weather apps display raw numbers (humidity, pressure) without context. WeatherGPT interprets climate data dynamically to answer natural language queries like 'Is it safe to schedule an outdoor cricket match this evening in Bengaluru?'",
    technologies: ["Python", "FastAPI", "APIs", "AI/ML", "JavaScript", "HTML/CSS"],
    github: "https://github.com",
    demo: "#",
    highlights: [
      "Conversational AI interface powered by LLM API integration",
      "FastAPI backend handling real-time meteorological API requests",
      "Personalized daily activity risk & preparation score",
      "Simulated weather impact model for outdoor events"
    ],
    codeSnippet: `// WeatherGPT FastAPI Request Handler
@app.post("/api/v1/weather/analyze")
async def analyze_weather(query: LocationQuery):
    weather_data = await fetch_live_meteorology(query.city)
    ai_insight = await generate_weather_intelligence(
        data=weather_data, 
        prompt=query.user_intent
    )
    return {"status": "success", "insights": ai_insight}`
  },
  {
    id: "logit",
    title: "LogIT",
    badge: "Startup / EdTech Product",
    tagline: "An AI learning platform for students who use vibe-coding tools but want to deeply understand the code they generate.",
    description: "In the era of AI code generators, students often copy-paste AI responses without understanding underlying mechanics. LogIT bridges this gap by dissecting AI-generated code into interactive step-by-step logic breakdowns, memory diagrams, and concept quizzes.",
    problemSolved: "Helps developers move from passive AI code copy-pasting to active comprehension, ensuring students master foundational Computer Science concepts while utilizing modern AI assistance.",
    technologies: ["React", "JavaScript", "Python", "AI Integration", "UI/UX", "Tailwind CSS"],
    github: "https://github.com",
    demo: "#",
    highlights: [
      "Instant code dissection into line-by-line concept breakdowns",
      "Interactive memory stack & heap execution visualizations",
      "AI tutor assistant for clarifying syntax & algorithmic complexity",
      "Designed as a product for developer productivity & education"
    ],
    codeSnippet: `// LogIT Code Comprehension Parser
export function parseGeneratedSnippet(code, language) {
  const ast = analyzeSyntaxTree(code, language);
  const concepts = extractCSConcepts(ast);
  return {
    lineExplanations: ast.nodes.map(n => n.explain()),
    complexityScore: evaluateComplexity(ast),
    targetConcepts: concepts
  };
}`
  },
  {
    id: "smartglove",
    title: "Smart Glove",
    badge: "IoT / Hardware Engineering",
    tagline: "An IoT-based gesture recognition hardware project utilizing sensor arrays to detect hand movements for assistive tech.",
    description: "Smart Glove is an embedded hardware system built to translate subtle hand gestures into readable signals or actions. Using flex sensors, accelerometers, and microcontroller logic, it bridges physical gesture control with digital computer interfaces.",
    problemSolved: "Enables hands-free computer input and assistive communication for individuals with limited vocal capability or motor impairments.",
    technologies: ["C / C++", "Microcontrollers", "Embedded Hardware", "Sensors", "IoT"],
    github: "https://github.com",
    demo: "#",
    highlights: [
      "Hardware flex sensor & MPU6050 accelerometer integration",
      "Real-time sensor calibration and signal processing in C",
      "Wireless Bluetooth data transmission to host computer/phone",
      "Low-latency gesture mapping algorithm for custom controls"
    ],
    codeSnippet: `// Smart Glove C Sensor Calibration Loop
void calibrate_gesture_sensors() {
  for (int i = 0; i < SENSOR_COUNT; i++) {
    int val = analogRead(sensor_pins[i]);
    if (val < min_val[i]) min_val[i] = val;
    if (val > max_val[i]) max_val[i] = val;
  }
}`
  },
  {
    id: "lineeditor",
    title: "Line Editor",
    badge: "Systems / C Programming",
    tagline: "A low-level C text editor supporting dynamic text buffer operations, search, replace, and disk I/O.",
    description: "A lightweight terminal-based text editor written entirely in C. Built from scratch to handle dynamic line allocation, pointer arithmetic, buffer search/replace, and file persistence without external high-level text libraries.",
    problemSolved: "Demonstrates core system design principles, dynamic memory allocation safety, linked list text buffer management, and terminal interaction.",
    technologies: ["C", "Data Structures", "Pointers", "File I/O", "Terminal UI"],
    github: "https://github.com",
    demo: "#",
    highlights: [
      "Doubly linked list line memory architecture for fast insert/delete",
      "Regex & string pattern matching for instant search and replace",
      "File saving and opening with dynamic memory cleanup",
      "Clean CLI command interface for seamless text manipulation"
    ],
    codeSnippet: `// Dynamic Line Insertion in C
LineNode* insert_line(LineNode* head, const char* text, int line_num) {
    LineNode* new_node = (LineNode*)malloc(sizeof(LineNode));
    new_node->content = strdup(text);
    new_node->next = NULL;
    // Pointer re-linking logic
    return rebalance_buffer(head, new_node, line_num);
}`
  }
];

export const experienceData = [
  {
    period: "2024 - Present",
    role: "B.Tech Computer Science Engineering",
    organization: "REVA University, Bengaluru",
    type: "Academic & Systems Foundation",
    description: "Focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering principles. Actively collaborating with peers on project builds.",
    tags: ["Data Structures", "OOP", "DBMS", "C / Java", "System Logic"]
  },
  {
    period: "2024 - Present",
    role: "Hackathons & Smart India Hackathon (SIH)",
    organization: "Innovation Competitions",
    type: "Rapid Prototyping & Pitching",
    description: "Participating in national and university hackathons. Collaborating under tight deadlines to ideate, prototype software architectures, integrate APIs, and present functional solutions to judges.",
    tags: ["SIH Work", "Rapid Prototyping", "Full-Stack AI", "Team Pitching"]
  },
  {
    period: "2024 - Present",
    role: "Oscode Technical Community Member",
    organization: "Oscode Developer Society",
    type: "Community & Collaborative Dev",
    description: "Engaging in open technical discussions, peer code reviews, hackathon team builds, and exploring emerging software trends alongside fellow student builders.",
    tags: ["Open Source", "Peer Mentorship", "Technical Workshops", "Collaborative Code"]
  },
  {
    period: "Ongoing",
    role: "Independent Software & Hardware Projects",
    organization: "Self-Driven Builds",
    type: "Product Creation",
    description: "Conceptualizing and engineering full software & IoT applications (WeatherGPT, LogIT, Smart Glove) from initial architecture to code implementation.",
    tags: ["Product Design", "FastAPI", "React", "IoT Hardware"]
  }
];

export const roadmapData = {
  foundations: [
    { name: "C Language", target: "Data Structures", status: "Mastered Foundation", desc: "Memory management, pointers, and memory-safe linear/non-linear data structures." },
    { name: "Java", target: "Object-Oriented Programming", status: "Core Strength", desc: "Class abstractions, design patterns, encapsulation, and modular design." },
    { name: "Python", target: "AI/ML Foundations", status: "Active Application", desc: "Data manipulation, model API orchestration, and FastAPI backend engineering." },
    { name: "DBMS & SQL", target: "Database Engineering", status: "Solid Foundation", desc: "Relational schema design, SQL optimization, and database architecture." }
  ],
  upcoming: [
    { name: "Modern Web Development", target: "Full-Stack Architectures", status: "Current Deep Dive", desc: "React, modern state management, tailwind design systems, and cloud integration." },
    { name: "iOS Development", target: "Native Swift Apps", status: "Next Horizon", desc: "Swift, SwiftUI, mobile UI/UX principles, and native Apple ecosystem apps." }
  ]
};

export const achievementsData = [
  {
    title: "Smart India Hackathon (SIH) Participant",
    category: "Hackathons",
    description: "Engaged in problem solving for national-level challenges, developing prototype software under intense hackathon timelines.",
    icon: "Trophy"
  },
  {
    title: "Core Builder of LogIT & WeatherGPT",
    category: "Product Build",
    description: "Engineered two full-featured AI platforms demonstrating end-to-end full-stack and AI API capabilities.",
    icon: "Rocket"
  },
  {
    title: "Oscode Technical Community Contributor",
    category: "Community",
    description: "Active contributor and participant in student technology events, team code sprints, and tech workshops at REVA University.",
    icon: "Users"
  },
  {
    title: "Academic Excellence in Computer Science",
    category: "Academics",
    description: "Consistently applying theoretical CS concepts (DS, DBMS, OOP) into real-world code implementation.",
    icon: "Award"
  }
];

export const beyondCodeData = {
  cricket: {
    title: "Serious Cricket Competitor",
    description: "Cricket is my primary sport and passion outside software engineering. Playing competitive cricket has instilled high operational discipline, strategic decision-making under intense pressure, patience, and team leadership.",
    takeaways: ["Leadership under pressure", "Strategic foresight", "Relentless team coordination"]
  },
  entrepreneurship: {
    title: "Startups & Technology Products",
    description: "I am fascinated by how software transforms into scalable businesses. From building products like LogIT with an eye for user onboarding, to studying startup execution models, I love merging technical depth with product strategy.",
    takeaways: ["Product-market problem solving", "Value creation mindset", "Agile execution"]
  }
};
