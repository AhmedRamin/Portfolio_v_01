export const profile = {
  name: "Ramin Ahmed",
  brand: "R@min's Portfolio",
  title: "Aspiring Software Engineer",
  subtitle: "Full Stack Web Developer",
  roles: [
    "Aspiring Software Engineer",
    "Full Stack Web Developer",
    "CSE Undergraduate",
  ],
  heroLead:
    "I'm a Computer Science & Engineering student at Daffodil International University and an aspiring Software Engineer passionate about building modern, scalable web applications.",
  heroSub:
    "I work with Next.js, TypeScript, Node.js, Express.js and MongoDB to turn ideas into practical software.",
  photo: "/images/ramin.jpg",
  location: "Palash, Narsingdi, Bangladesh",
  email: "iamraminahmed@gmail.com",
  github: "https://github.com/AhmedRamin",
  facebook: "https://www.facebook.com/ramin.ahmeed",
  linkedin: "https://www.linkedin.com/in/raminahmed--/",
};

/** Where contact-form submissions are delivered. */
export const contactEndpoint = `https://formsubmit.co/ajax/${profile.email}`;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: "20+", label: "Technologies" },
  { value: "50+", label: "Projects built" },
  { value: "10+", label: "Working Project" },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a Computer Science & Engineering student at Daffodil International University with a strong interest in software engineering and full-stack web development.",
    "My journey started with programming fundamentals and database management. Since then, I've been learning how to build complete web applications — from designing user interfaces to developing backend APIs and managing databases.",
    "Currently, I'm focusing on Next.js and TypeScript to strengthen my full-stack development skills. My next goal is to explore AI and machine learning, followed by networking and cybersecurity.",
    "I enjoy learning by building projects, solving problems, and continuously improving my understanding of software engineering.",
  ],
  facts: [
    { label: "Based in", value: "Narsingdi, Bangladesh" },
    { label: "Studying", value: "B.Sc. in CSE, DIU" },
    { label: "Focus", value: "Full Stack Web Development" },
    { label: "Next up", value: "AI, Networking & Cybersecurity" },
  ],
};

export const skills = [
  {
    group: "Frontend",
    icon: "layout",
    tone: "#6d5cff",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    group: "Backend",
    icon: "server",
    tone: "#06b6d4",
    items: ["Node.js", "Express.js", "REST APIs", "EJS"],
  },
  {
    group: "Database",
    icon: "database",
    tone: "#10b981",
    items: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    group: "Programming",
    icon: "code",
    tone: "#f59e0b",
    items: ["C", "C++", "Java", "Python", "PHP"],
  },
  {
    group: "Tools",
    icon: "terminal",
    tone: "#ec4899",
    items: ["Git", "GitHub", "Linux", "Postman"],
  },
];

export const projects = [
  {
    title: "Expenza",
    category: "Full Stack Web & Android Application",
    description:
      "A full-stack money management application designed to help users track income, expenses, investments, and loans. Built to simplify personal financial management through organized accounts, transaction tracking, and visual insights.",
    tech: ["Node.js", "Express.js", "MongoDB", "Supabase"],
    link: "https://github.com/AhmedRamin/expenza",
    tone: "#6d5cff",
  },
  {
    title: "Rascript",
    category: "Compiler Design Project",
    description:
      "A custom programming language developed as a Compiler Design project using Flex, Bison, and C. It supports basic programming constructs such as conditions, loops, output statements, and symbol table management.",
    tech: ["C", "Flex", "Bison"],
    link: profile.github,
    tone: "#06b6d4",
  },
  {
    title: "Dropit Courier Service",
    category: "Database Management System",
    description:
      "A MySQL-based courier service database system designed to manage customers, branches, parcel tracking, pricing, and payments. It demonstrates database design, relationships, triggers, and stored procedures.",
    tech: ["MySQL", "SQL"],
    link: profile.github,
    tone: "#10b981",
  },
];

export const education = [
  {
    school: "Daffodil International University",
    degree: "Bachelor of Science in Computer Science & Engineering",
    level: "Level 3, Term 2",
    period: "2024 — Present",
    description:
      "Currently pursuing my undergraduate degree, with a focus on programming, software development, databases, and computer networking.",
    subjects: [
      "Programming",
      "Software Development",
      "Databases",
      "Networking",
    ],
  },
  {
    school: "Hamdard Public College",
    degree: "Higher Secondary Certificate (HSC)",
    level: "GPA 5.00 / 5.00",
    period: "2021 — 2022",
    description:
      "Completed my higher secondary education with a perfect GPA of 5.00 out of 5.00, strengthening the science and mathematics foundation that led me into computer science.",
    subjects: ["GPA 5.00 / 5.00", "Science", "Mathematics"],
  },
  {
    school: "Urea Sarkarkhana School and College",
    degree: "Secondary School Certificate (SSC)",
    level: "GPA 5.00 / 5.00",
    period: "2019 — 2020",
    description:
      "Completed my secondary education with a perfect GPA of 5.00 out of 5.00 — the starting point of my journey into programming and technology.",
    subjects: ["GPA 5.00 / 5.00", "Science", "Mathematics"],
  },
];

export const learning = [
  { title: "Full Stack Web Development", note: "Building with" },
  { title: "Next.js & TypeScript", note: "Current focus" },
  { title: "Artificial Intelligence & Machine Learning", note: "Next goal" },
  { title: "Networking & Cybersecurity", note: "Exploring" },
  { title: "Data Structures & Algorithms", note: "Practising" },
];

export const contactSubjects = [
  "Job opportunity / Internship",
  "Freelance project",
  "Collaboration",
  "Just saying hi",
];
