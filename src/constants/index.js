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
    figma,
    docker,
    cpp,
    matlab,
    python,
    meta,
    starbucks,
    tesla,
    shopify,
    hh,
    portfolio,
    reversibot,
    musicbot,
    carrent,
    jobit,
    tripguide,
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
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Back-End Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "C/C++",
      icon: cpp
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MATLAB",
      icon: matlab
    }
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Volunteer Tutor",
      company_name: "HomeworkHub",
      icon: hh,
      iconBg: "#383E56",
      date: "September 2022 - June 2023",
      points: [
        "Provided virtual lessons to students ranging from ages of 14 to 18", 
        "Carried out an average of one session per week",
      ],
    },

  ];
  
  const projects = [
    {
      name: "Discord Music Bot",
      description:
        "Developed a music bot that plays audio based on user query",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Google Cloud Console",
          color: "green-text-gradient",
        },
        {
          name: "Youtube/Discord API",
          color: "pink-text-gradient",
        },
      ],
      image: musicbot,
      source_code_link: "https://github.com/virsworld/discord_bot",
    },
    {
      name: "AI Reversi Bot",
      description:
        "Created a Reversi AI bot in C for a university course based on the Minimax Algorithm.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Artificial Intelligence",
          color: "green-text-gradient",
        },
      ],
      image: reversibot,
      source_code_link: "https://github.com/virsworld/APS105_labs",
    },
    {
      name: "3D Portfolio Website (here)",
      description:
        "Created a responsive portfolio website with several 3D models and animations included.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
        {
          name: "EmailJS",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/virsworld/APS105_labs",
    },
  ];
  
  export { services, technologies, experiences, projects };