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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Lorem ipsum",
    icon: mobile,
  },
  {
    title: "Lorem ipsum",
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
    title: "FP Grado superior DAW.",
    company_name: "(Desarrollo de Aplicaciones Web), en Academia MasterD.",
    icon: masterD,
    iconBg: "#383E56",
    date: "Enero 2021 - March 2023",
    points: [
      "HTML.",
      "CSS",
      "Bootstrap",
      "Jquery",
      "JavaScript.",
      "MySQL/SQL.",
      "PHP.",
      "APACHE.",
    ],
  },
  {
    title: "Python, Full Stack web development.",
    company_name: "IBM Skillsbuild.",
    icon: IBM,
    iconBg: "#E6DEDD",
    date: "jun 2023 - jul 2023",
    points: [
      "Fundamentos de internet.",
      "Fundamentos de programación.",
      "Fundamentos de desarrollo web (html, CSS, JavaScript).",
      "Fundamentos GIT y GITHUB.",
      "Conceptos básicos de python.",
      "Programando en Python. Algoritmos. Django",
      "Testing con Python.",
      "POO (Programación orientada a objetos en Python.)",
    ],
  },
  {
    title: "Programación en Python. ",
    company_name: "Servei Públic d'Ocupació de Catalunya.",
    icon: SOC,
    iconBg: "#383E56",
    date: "Jun 2023 - Jul 2023",
    points: [
      "General purpose.",
      "Lógica de programacion con Python",
      "POO (Programación orientada a objetos en Python.)",
      "Tkinter",
      "Web scraping",
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
    source_code_link_portfolio: "https://sebastian-aldunate.es/",
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
    source_code_link_portfolio: "https://sebastian-aldunate.es",
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
    source_code_link_portfolio: "https://sebastian-aldunate.es",
  },
];

export { services, technologies, experiences, projects };
