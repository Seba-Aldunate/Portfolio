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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  figma,
  docker,
  meta,
  starbucks,
  masterD,
  tesla,
  shopify,
  carhub,
  jobit,
  tripguide,
  threejs,
  IBM,
  SOC,
  jobfinder,
  FCM,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "Experience",
    title: "Experiencia",
  },
  {
    id: "Works",
    title: "Projectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  // {
  //   title: "Frontend Developer",
  //   icon: web,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Lorem ipsum",
  //   icon: mobile,
  // },
  // {
  //   title: "Lorem ipsum",
  //   icon: creator,
  // },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "git-hub",
    icon: github,
  },
];

const experiences = [
  {
    title: "Software Developer.",
    company_name: "FCM Lab Barcelona.",
    icon: FCM,
    iconBg: "#383E56",
    date: "February 2024 - Actualidad",
    points: [
      "JavaScript.",
      "TypeScript.",
      "Jest."
    ],
  },
  {
    title: "IBM Skillsbuild.",
    company_name: "Python, Full Stack web development.",
    icon: IBM,
    iconBg: "#E6DEDD",
    date: "jun 2023 - jul 2023",
    points: [
      "Python.",
      "Django."
      // "Fundamentos de internet.",
      // "Fundamentos de programación.",
      // "Fundamentos de desarrollo web (html, CSS, JavaScript).",
      // "Fundamentos GIT y GITHUB.",
      // "Conceptos básicos de python.",
      // "Programando en Python. Algoritmos. Django",
      // "Testing con Python.",
      // "POO (Programación orientada a objetos en Python.)",
    ],
  },
  {
    title: "Programación en Python. ",
    company_name: "Servei Públic d'Ocupació de Catalunya.",
    icon: SOC,
    iconBg: "#383E56",
    date: "Jun 2023 - Jul 2023",
    points: [
      'Python',
      // "General purpose.",
      // "Lógica de programacion con Python",
      // "POO (Programación orientada a objetos en Python.)",
      "Tkinter",
      "Web scraping",
    ],
  },
  {
    title: "FP Grado superior DAW.",
    company_name: "(Desarrollo de Aplicaciones Web), en Academia MasterD.",
    icon: masterD,
    iconBg: "#383E56",
    date: "Enero 2021 - March 2023",
    points: [
      "Programación Web",
      "Desarrollo Full-Stack."
      // "CSS",
      // "Bootstrap",
      // "Jquery",
      // "JavaScript.",
      // "MySQL/SQL.",
      // "PHP.",
      // "APACHE.",
    ],
  },
];

const projects = [
  {
    name: "Car Hub",
    description:
      "Plataforma web de alquiler de autos. Permite la búsqueda de coches de alquier, ver ficha técnica, filtrar y ordenar resultados según necesidades del usuario.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/Seba-Aldunate/car_showcase",
    source_code_link_portfolio: "https://car-showcase-qzjq.vercel.app/",
  },
  {
    name: "Job finder",
    description:
      "Aplicacíon web que permite la búsqueda de ofertas laborales, creación de cuentas de usuarios, compañias y trabajos.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "white-text-gradient",
      },
    ],
    image: jobfinder,
    source_code_link: "https://github.com/Seba-Aldunate/jobfinder",
    source_code_link_portfolio: "https://job-finder-demo.netlify.app/",
  },
  {
    name: "Git-Hub",
    description:
      "Repositorios de mi Portfolio 3D, web alquiler de autos y Web de búsqueda de trabajo.                        ",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "white-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/Seba-Aldunate",
    source_code_link_portfolio: "https://github.com/Seba-Aldunate",
  },
];

export { services, technologies, experiences, projects };
