export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },

  {
    id: 4,
    name: "Projects",
    href: "#project",
  },
  {
    id: 5,
    name: "Academics",
    href: "#academics",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const achievements = [
  {
    id: 1,
    image: "assets/GATE.png",
    title: "Cracked GATE 2020,2021",
    description:
      "The Graduate Aptitude Test in Engineering (GATE) is an entrance examination conducted in India that primarily tests the comprehensive understanding of undergraduate subjects in engineering and sciences for admission into postgraduate programs.",
  },
  {
    id: 2,
    image: "assets/SecretDiaryPlaylist.png",
    title: "Full Stack Mastery:Building Projects from Scratch",
    description:
      "In 'Full Stack Mastery,' we'll be exploring a diverse array of projects, each designed to enhance your coding skills and deepen your understanding of the full stack development process. From captivating user interfaces to robust back-end functionalities, we'll leave no stone unturned.",
  },
  {
    id: 3,
    image: "assets/DSAPlaylist.png",
    title: "DSA Course Playlist",
    description:
      "This playlist is about DSA Course. There will be a lot of lectures on mainly how to solve a DSA question from scratch. Platform will be leetcode.",
  },
  {
    id: 4,
    image: "assets/CodeReviewPlaylist.png",
    title: "Code Review Playlist",
    description:
      "This playlist involves explaining code written by others, identifying the merits and demerits in the code, rewriting my own code, executing it, and possibly optimizing it",
  },
  {
    id: 5,
    image: "assets/CprogrammingPlaylist.png",
    title: "C Programming Course",
    description:
      "This playlist covers the basics of programming using the C programming language. I will provide in-depth explanations about fundamental coding concepts, write code, and execute tests to explore various outputs.",
  },
];

export const myProjects = [
  {
    id: 1,
    title: "Delizioso",
    desc: " Developed a full-stack restaurant web application using Next.js, PostgreSQL, and Tailwind CSS for a modern and responsive user experience, featuring a admin panel to add and delete products, with images stored securely via Cloudinary.Implemented CRUD operations for categories, menu items, and orders and handle state man-agement using Zustand. Integrated Google OAuth for streamlined user authentication and Stripe for secure payment processing. Implemented database connectivity in Dockerized containers. Also leveraged Prisma ORM for database management and deployed the application on a Linux VM on GCP using Docker containerization for a scalable and production-ready infrastructure.",

    github: "https://github.com/ashutosh2712/Restrurant-App",
    href: "https://restrurant.live-projects-ashutosh.com/",
    texture: "/textures/project/restrurant_project.mov",
    logo: "/assets/restrurant_logo.png",
    logoStyle: {
      backgroundColor: "#f97316",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #f97316",
    },
    spotlight: "/assets/restrurant_spotlight.png",
    tags: [
      {
        id: 1,
        name: "nextjs",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "prisma",
        path: "/assets/prisma.png",
      },
      {
        id: 4,
        name: "zustand",
        path: "/assets/zustand.png",
      },
    ],
  },
  {
    id: 2,
    title: "ClickShop",
    desc: "This application is a full-stack e-commerce platform that allows users to create accounts, securely log in, manage their profiles, browse products with detailed descriptions, and add items to a shopping cart for a seamless purchasing experience. It includes a streamlined checkout process with PayPal payment integration, order management, and product rating and review functionality to improve user engagement and trust. The application also features an admin panel for managing products, users, and orders, along with search and pagination for easier navigation. It was deployed on Heroku, with AWS S3 used for serving static files and AWS RDS for database storage, providing a scalable and reliable cloud-based setup.",
    href: "https://clickshop-a7aac0834ac0.herokuapp.com/",
    github: "https://github.com/ashutosh2712/E-Commerce-App",
    texture: "/textures/project/clickshop.mov",
    logo: "/assets/clickshop_logo.png",
    logoStyle: {
      backgroundColor: "rgb(69, 67, 67)",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px rgb(69, 67, 67)",
    },
    spotlight: "/assets/clickshop_spotlight.png",
    tags: [
      {
        id: 1,
        name: "react",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "django",
        path: "assets/django.png",
      },
      {
        id: 3,
        name: "redux",
        path: "/assets/redux.png",
      },
      {
        id: 4,
        name: "postgresql",
        path: "/assets/postgresql.png",
      },
    ],
  },
  {
    id: 3,
    title: "AthletiAI",
    desc: "This application is an AI-powered sports reel generator that automatically creates engaging 60-second history reels about famous sports personalities. It uses OpenAI to generate scripts, Amazon Polly for voiceovers, Pexels to fetch relevant images, and FFmpeg to combine everything into a complete video, which is then stored along with its metadata on AWS S3. The application also features a mobile-first, TikTok-style interface where users can easily watch and scroll through the generated reels.",

    github: "https://github.com/ashutosh2712/ai-celebrity-reels",
    href: "https://ai-celebrity-reels.vercel.app/",
    texture: "/textures/project/celebrity_reels.mov",
    logo: "/assets/celebrity_logo.png",
    logoStyle: {
      backgroundColor: "#3F3F3D",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #3F3F3D",
    },
    spotlight: "/assets/celebrity_spotlight.png",
    tags: [
      {
        id: 1,
        name: "extjs",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "docker",
        path: "/assets/docker.png",
      },
      {
        id: 4,
        name: "openai",
        path: "/assets/openai.png",
      },
    ],
  },
  {
    id: 4,
    title: "GameHub",
    desc: "This application is a responsive front-end game discovery platform inspired by RAWG.io, allowing users to explore and search for games through a clean and intuitive interface. It provides powerful filtering options based on gaming platforms and sorting by factors such as name, release date, popularity, and rating, making it easier for users to discover games based on their preferences. The application also includes a light and dark mode toggle for a better user experience across different environments and is deployed on Vercel.",

    github: "https://github.com/ashutosh2712/game-hub",
    href: "https://game-hub-zeta-blue.vercel.app/",
    texture: "/textures/project/gamehub.mov",
    logo: "/assets/gamehub_logo.png",
    logoStyle: {
      backgroundColor: "#121212",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #121212",
    },
    spotlight: "/assets/celebrity_spotlight.png",
    tags: [
      {
        id: 1,
        name: "react",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "chakraui",
        path: "assets/chakraui.png",
      },
      {
        id: 3,
        name: "typescript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "framer motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [1.3, -4.5, 0] : [1.3, -5.5, 0],
    reactLogoScale: isSmall ? 0.4 : isMobile ? 0.5 : 0.6,

    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [12, -6.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 1, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 1, 0],
    ringPosition: isSmall
      ? [-5, 3, 0]
      : isMobile
        ? [-10, -3, 0]
        : isTablet
          ? [-12, 4, 0]
          : [-10, 2, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-15, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Konovo pvt ltd",
    pos: "Full Stack Developer",
    duration: "July 2024 - Present ",
    icon: "/assets/konovo.svg",
    animation: "counting",
    title:
      "Working on full-stack applications with React, Backbone.js, Scala, and Node.js, along with AWS infrastructure and serverless services. I also work on microservices architecture, production debugging, and scalability improvements.",
  },
  {
    id: 2,
    name: "EthanAI",
    pos: "Full Stack Developer",
    duration: "August 2024 - July 2025",
    icon: "/assets/ethanai.svg",
    animation: "thumbsup",
    title:
      "Worked on modernizing and migrating legacy applications to Next.js, Django, FastAPI, and PostgreSQL. Handled cloud deployments, 100+ API redesigns, database migrations, and mentored junior developers.",
  },

  {
    id: 3,
    name: "Accenflair pvt ltd",
    pos: "Full Stack Developer",
    duration: "January 2024 - August 2024",
    icon: "/assets/accenflairImg.svg",
    animation: "fistpump",
    title:
      "Built and enhanced SaaS applications using React, Node.js, Kafka, GraphQL, gRPC, and Elasticsearch. Worked on payment integrations, notification systems, admin dashboards, and third-party API integrations.",
  },

  {
    id: 4,
    name: "Yenepoya University",
    pos: "Assistant Professor",
    duration: "August 2023 - November 2023",
    icon: "/assets/yene.svg",
    animation: "bow",
    title:
      "At Yenepoya, I worked as an Assistant Professor (Grade 1), teaching Computer Science graduates courses on programming, data structures, and problem-solving.",
  },

  {
    id: 5,
    name: "Intel pvt ltd",
    pos: "Full Stack Developer",
    duration: "July 2022 - June 2023",
    icon: "/assets/intel.svg",
    animation: "thankful",
    title:
      "Worked in an 8-member team to build a full-stack dashboard for Intel’s Data Center and AI group using Flask, PostgreSQL, JavaScript, and Bootstrap. Also worked on chip performance benchmarking, data filtering, interactive tables, and visualization using ag-Grid and Highcharts.",
  },
];

export const educations = [
  {
    id: 1,
    college: "National Institute of Technology(NIT)",
    location: "Hamirpur(HP), India",
    duration: "July 2021 - July 2023",
    icon: "assets/graduation.svg",
    degree: "Masters of Technology(MTech) in Computer Science and Engineering",
    animation: "rallying",
  },
  {
    id: 2,
    college: "Roorkee College of Engineering(RCE)",
    location: "Roorkee(UK), India",
    duration: "August 2016 - September 2020",
    icon: "assets/graduation.svg",
    degree: "Bachelor of Technology(BTech) in Computer Science and Engineering",
    animation: "sweat",
  },
];
