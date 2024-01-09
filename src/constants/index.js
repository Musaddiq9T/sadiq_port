import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  bootstrap,
  tailwind,
  nodejs,
  sqlite,
  notion,
  figma,
  python,
  skill,
  skillscity,
  babcock,
  caleb,
  weather,
  rick,
  travelsite,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "UI / UX",
    icon: backend,
  },
  {
    title: "Web Desinger",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Sqlite",
    icon: sqlite,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Notion",
    icon: notion,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Software Development",
    company_name: "Skills City",
    icon: skillscity,
    iconBg: "#383E56",
    date: "2023",
    points: [
      "A course which provides the building blocks and advance technical skills needed to work in Software Engineering.",
      "Provided learners with basics like algorithms and data structures, to software architecture and database systems.",
      "The program introduced various Software Engineering concepts and the opportunity to discover theory by exploring subjects online.",
    ],
  },  
  {
    title: "MSc Human Resource Management",
    company_name: "Babcock University",
    icon: babcock,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "A course dedicated to advancement of expertise in Management.", 
      "This degree reflects a commitment to understanding the intricate dynamics of organizational behavior and workforce management.", 
      "Through rigorous coursework, I refined my strategic HR skills, fostering a profound understanding of talent acquisition, employee development, and organizational leadership.", 
      "Strived through an academic journey that empowered me with the knowledge and insights necessary to drive positive change within dynamic workplace environments",
    ],
  },
  {
    title: "BSc Business Administration",
    company_name: "Caleb University",
    icon: caleb,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "A course driven by a passion for honing my strategic leadership skills and understanding the nuances of effective business management.", 
      "With a commitment to fostering innovation and sustainable practices. Aimed to leverage the educational experience to make impactful contributions to the ever-evolving landscape of global business.",
    ],
  },
  {
    title: "Professional & Soft Skills ",
    company_name: "INCLUDES but not limited to...",
    icon: skill,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Teamwork",
      "CSS",
      "JavaScript",
      "Attention to details",
      "HTML",
      "Time management",
      "React",
      "Leadership",
      "Pyhton",
      "Problem-Soolving",
      "Continous Learning",
      "Emotional-Intelligence",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "Web-based weather application powered by JavaScript, JSON, HTML, and CSS. Effortlessly check real-time weather updates for any location worldwide through the user-friendly interface.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Musaddiq9T/Weather-App.git",
  },
  {
    name: "Rick & Morty",
    description:
      "A dynamic test web creation dedicated to the iconic duo, R & M. Powered by a seamless blend of HTML & CSS. This user-friendly page serves as a gateway to a universe of entertainment. Navigate effortlessly through sections like contacts, series, gallery & a short R&M scene.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Rick&Morty",
        color: "pink-text-gradient",
      },
    ],
    image: rick,
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel Site Test Homepage",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Travel",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: travelsite,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };