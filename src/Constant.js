//Skill img and information
import htmllogo from "./assets/TechLogo/html.png";
import csslogo from "./assets/TechLogo/css.png";
import jslogo from "./assets/TechLogo/javascript.png";
import reactlogo from "./assets/TechLogo/reactjs.png";
import bootstraplogo from "./assets/TechLogo/bootstrap1.png";
import tailwindlogo from "./assets/TechLogo/tailwindcss.png";
import nodejslogo from "./assets/TechLogo/nodejs.png";
import expressjslogo from "./assets/TechLogo/Express-js.png";
import mongodblogo from "./assets/TechLogo/mongodb.png";
import mysqlogo from "./assets/TechLogo/mysql.png";
import cpplogo from "./assets/TechLogo/cpp.png";
import csharplogo from "./assets/TechLogo/csharp.png";
import javalogo from "./assets/TechLogo/java.png";
import pythonlogo from "./assets/TechLogo/python.png";
import clogo from "./assets/TechLogo/c.png";
import javascriptlogo from "./assets/TechLogo/javascript.png";
import gitlogo from "./assets/TechLogo/git.png";
import githublogo from "./assets/TechLogo/github.png";
import vscodelogo from "./assets/TechLogo/vscode.png";
import companylogo from "./assets/TechLogo/company.jpeg";
import companylogo1 from "./assets/TechLogo/innovatech.png";
import schoollogo from "./assets/TechLogo/hariyali.png";
import sukunalogo from "./assets/TechLogo/sukuna.png";
import shreeyantralogo from "./assets/TechLogo/shreeyantra.png";
import portfolioimg from "./assets/TechLogo/portfolioproject.png";
import darazimg from "./assets/TechLogo/darazclone.png";
import ecommerceimg from "./assets/TechLogo/ecommerce.jpg";
import crudappimg from "./assets/TechLogo/crud app ss.png";
import todolistimg from "./assets/TechLogo/Todolistss.png";
import quizimg from "./assets/TechLogo/Quiz.png";
export const skillInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmllogo },
      { name: "CSS", logo: csslogo },
      { name: "JavaScript", logo: jslogo },
      { name: "React", logo: reactlogo },
      { name: "Bootstrap", logo: bootstraplogo },
      { name: "Tailwind", logo: tailwindlogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodejslogo },
      { name: "Express.js", logo: expressjslogo },
      { name: "MongoDB", logo: mongodblogo },
      { name: "JavaScript", logo: jslogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: clogo },
      { name: "C++", logo: cpplogo },
      { name: "Java", logo: javalogo },
      { name: "Python", logo: pythonlogo },
      { name: "C-Sharp", logo: csharplogo },
      { name: "JavaScript", logo: javascriptlogo },
      { name: "SQL", logo: mysqlogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitlogo },
      { name: "GitHub", logo: githublogo },
      { name: "VS Code", logo: vscodelogo },
    ],
  },
];

export const Experiences = [
  {
    id: 0,
    img: companylogo,
    role: "Web development intern",
    company: "Tech solutions",
    date: "June 2022 - August 2022",
    desc: "worked as a web development intern, contributing to front-end and back-end tasks for client projects",
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: 1,
    img: companylogo1,
    role: "Junior software developer",
    company: "Innovatech Labs",
    date: "September 2022 - December 2022",
    desc: "Contributed to software development projects, assisting in coding, testing, and debugging applications",
    skills: ["Java", "Python", "C++", "Git", "GitHub"],
  },
];

export const Project = [
  {
    id: 0,
    img: portfolioimg,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience, built with React and styled-components for a modern look.",
    tags: ["React", "CSS", "JavaScript", "Tailwind"],
    github: "https://github.com/puzanXtha/NewProjectPortfolio",
  },

  {
    id: 1,
    img: todolistimg,
    title: "To-do list",
    description:
      "A simple to do application that can store the task locally and with attractive UserInterface.",
    tags: ["React", "Tailwindcss", "JavaScript"],
    github: "https://github.com/puzanXtha/ReactProject-Simple_To-Do_List",
  },
  {
    id: 2,
    img: crudappimg,
    title: "Crud Application using React",
    description:
      "Crud appliction that is fully functionable with real api with seamless UI.",
    tags: ["React", "Tailwindcss", "JavaScript", "Placeholder Api"],
    github: "https://github.com/puzanXtha/Crud",
  },
  {
    id: 3,
    img: quizimg,
    title: "Quiz Application",
    description:
      "Quiz application using ,React-router-dom to make it multipage application.",
    tags: ["React", "Tailwindcss"],
    github: "https://github.com/puzanXtha/Quiz_Application",
  },
  {
    id: 4,
    img: darazimg,
    title: "Cloning Daraz website",
    description:
      "A comprehensive e-commerce platform clone featuring user authentication, product browsing, shopping cart, and secure checkout functionalities.",
    tags: ["Html", "css", "JavaScript", "Bootstrap"],
    github: "https://github.com/puzanXtha/cloning-daraz-website",
  },

  {
    id: 5,
    img: ecommerceimg,
    title: "Ecommerce Website",
    description:
      "A simple ecommerce website with product listings, shopping cart, and checkout functionality.",
    tags: ["Html", "css", "JavaScript"],
    github: "https://github.com/puzanXtha/ecommerce-website",
  },
];

export const EducationInfo = [
  {
    id: 0,
    img: schoollogo,
    school: "Hariyali Resham Secondary Boarding School",
    date: "2006-2022",
    grade: "3.2 GPA",
    desc: "Completed my Schooling level education with a focus on science subjects",
    degree: "Schooling Level",
  },
  {
    id: 1,
    img: sukunalogo,
    school: "Sukuna Multiple Campus",
    date: "2020-2022",
    grads: "2.75 GPA",
    desc: "Pursued my Higher Secondary Education (10+2) in Science Stream, specializing in Physics, Chemistry, and Mathematics",
    degree: "Higher Secondary Education (10+2)",
  },
  {
    id: 2,
    img: shreeyantralogo,
    school: "ShreeYantra Computer Engineering College",
    date: "2022-Present",
    grade: "75%(ongoing)",
    desc: "Currently pursuing a Bachelor's degree in Computer Engineering, focusing on software development, algorithms, and computer systems",
    degree: "Bachelor (BSC.csit)",
  },
];
