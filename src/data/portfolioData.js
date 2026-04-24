import gisImg from "../assets/projects/webgis.png";
import posImg from "../assets/projects/pos.png";
import photographyImg from "../assets/projects/photography.jpg";

export const personalInfo = {
  name: "Ariel Putra",
  firstName: "Ariel",
  title: "Final Year Informatics Engineering Student",
  roles: ["Web Developer", "Software Engineer", "Problem Solver"],
  tagline: "Crafting elegant digital experiences through clean code and creative problem-solving.",
  email: "beltsazarariel5@gmail.com",
  github: "https://github.com/ariel3142",
  linkedin: "https://www.linkedin.com/in/beltsazar-ariel-9bb689313/",
  instagram: "https://www.instagram.com/itsarielll____/",
  whatsapp: "https://wa.me/6285175379210",
  location: "Kota Semarang, Central Java, Indonesia",
  university: "Universitas PGRI Semarang",
  major: "Informatics Engineering",
  graduationYear: "2026",
}

export const stats = [
  { label: "Projects Completed", value: "8+", icon: "code" },
  { label: "Technologies Learned", value: "10+", icon: "cpu" },
  { label: "Internship", value: "1x", icon: "briefcase" },
  { label: "GitHub Commits", value: "20+", icon: "git" },
]

export const aboutText = `I'm a final-year Informatics Engineering student with a love for building clean, 
scalable web applications. My journey in software development started with curiosity about how websites work, how interactive features are built, 
and has since grown into a full-stack skill set covering modern web frameworks, databases, and development best practices.

I thrive at the intersection of design and engineering — creating products that are not only technically sound 
but also intuitive and delightful to use. In my free time, I enjoy exploring new technologies, and doing sidejob as photographer, and sharing my knowledge through events and workshops. `

export const interests = [
  { title: "Web Development", icon: "web" },
  { title: "Software Engineering", icon: "code" },
  { title: "Problem Solving", icon: "puzzle" },
  { title: "Photography", icon: "camera" },
  { title: "Design Graphics", icon: "palette" },
]

export const skills = {
  languages: [
    { name: "JavaScript", level: 70, color: "#f7df1e" },
    { name: "PHP", level: 85, color: "#777bb4" },
    { name: "Python", level: 75, color: "#3776ab" },
    { name: "C++", level: 50, color: "#00599c" },
  ],
  frameworks: [
    { name: "React", level: 60, color: "#61dafb" },
    { name: "Laravel", level: 90, color: "#ff2d20" },
    { name: "Vue.js", level: 70, color: "#42b883" },
    { name: "Tailwind CSS", level: 85, color: "#06b6d4" },
  ],
  tools: [
    { name: "Git", level: 80, color: "#f05032" },
    { name: "GitHub", level: 90, color: "#ffffff" },
    { name: "MySQL", level: 80, color: "#4479a1" },
    { name: "WordPress", level: 50, color: "#007acc" },
  ],
}

export const projects = [
  {
    id: 1,
    title: "POS System (Coming Soon)",
    subtitle: "Point of Sale Management",
    description: "A comprehensive Point of Sale system built with Laravel and Vue.js, featuring real-time inventory management, sales reporting, multi-user roles, and receipt printing.",
    tags: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    category: "Web App",
    gradient: "from-orange-500 to-red-500",
    accent: "#ff6b35",
    github: "https://github.com/ariel3142",
    demo: "https://pos-demo.vercel.app",
    featured: true,
    image: posImg,
  },
  {
    id: 3,
    title: "WebGIS Mapping App",
    subtitle: "Geographic Information System",
    description: "An interactive WebGIS application for spatial data visualization using Leaflet.js and PostGIS. Features custom map layers, location search, and data clustering.",
    tags: ["Laravel", "Leaflet.js", "PostGIS", "JavaScript"],
    category: "GIS",
    gradient: "from-green-500 to-teal-500",
    accent: "#10b981",
    github: "https://github.com/ariel3142/webgis-5g",
    demo: "https://webgis5g.vercel.app/",
    featured: true,
    image: gisImg,
  },
  {
  id: 4,
  title: "Photography Portfolio",
  subtitle: "Creative Photography Showcase",
  description:
    "A curated collection of my photography works captured throughout 2025–2026, showcasing skills in composition, lighting, and visual storytelling.",
  tags: [
    "Photography",
    "Photo Editing",
    "Composition"
  ],
  category: "Photography",
  gradient: "from-pink-500 to-purple-500",
  accent: "#ec4899",
  github: "https://drive.google.com/drive/folders/1iTwdfMpYKtN4cs1Xi4Bf8uJuHvu874lO?usp=drive_link",
  demo: "https://drive.google.com/drive/folders/1iTwdfMpYKtN4cs1Xi4Bf8uJuHvu874lO?usp=drive_link",
  featured: true,
  image: photographyImg,
}
]

export const experiences = [
  {
    id: 5,
    type: "academic",
    title: "Started Informatics Engineering",
    company: "Universitas PGRI Semarang",
    location: "Semarang, Indonesia",
    period: "Aug 2021",
    year: "2021",
    description: "Began my journey in Informatics Engineering, diving into programming fundamentals, mathematics, and computer science theory. Quickly developed a passion for web development and software engineering.",
    tags: ["Fundamentals", "Programming", "University"],
    color: "blue",
  },
  {
    id: 4,
    type: "achievement",
    title: "Best Presenter Award",
    company: "Infest UPGRIS 2025",
    location: "Semarang, Indonesia",
    period: "Jun 2024",
    year: "2024",
    description: "Participated in ACM-ICPC Regional with a team of 3. Solved 4 out of 8 algorithmic problems within the 5-hour contest. Strengthened skills in graph algorithms and dynamic programming.",
    tags: ["C++", "Algorithms", "Data Structures", "Competitive Programming"],
    color: "orange",
  },
  {
    id: 1,
    type: "internship",
    title: "Junior IT & Event Organizer",
    company: "PT. Amare Media Group",
    location: "Semarang, Indonesia",
    period: "Jan 2025 – Apr 2025",
    year: "2025",
    description: "Developed and maintained internal web applications using Laravel and Vue.js. Collaborated with senior developers to implement RESTful APIs, optimized SQL queries reducing load time by 40%, and participated in daily scrum meetings.",
    tags: ["Laravel", "Vue.js", "REST API", "MySQL"],
    color: "cyan",
  },
  {
    id: 5,
    type: "freelance",
    title: "Freelance IT Developer",
    company: "Self-Employed",
    location: "Semarang, Indonesia",
    period: "Jan 2025 – Jan 2026",
    year: "2026",
    description:
      "Worked as an independent IT freelancer handling multiple client projects, including developing web-based applications, fixing system bugs, and customizing features based on client needs. Built responsive web applications using Laravel and JavaScript, implemented REST APIs, and optimized database queries to improve application performance.",
    tags: ["Laravel", "JavaScript", "REST API", "MySQL", "Web Development"],
    color: "cyan",
  }
]
