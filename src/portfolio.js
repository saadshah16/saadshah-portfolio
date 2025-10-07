/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saad Shah",
  title: "Hi, I'm Saad",
  subTitle: emoji(
    "Software Engineer specializing in backend APIs and full‑stack web. I build scalable RESTful services (Express.js, Node.js, Python/FastAPI, Java/Spring Boot) and modern UIs (React, Next.js), and ship to cloud with AWS/GCP, Docker, and CI/CD."
  ),
  resumeLink: "local", // truthy to show button; file resolved in greeting component
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadshah16",
  linkedin: "https://www.linkedin.com/in/saadshah16/",
  gmail: "saadshah813@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full‑stack engineer focused on APIs, data, and product experiences",
  skills: [
    emoji("⚡ Design and build scalable RESTful APIs and services"),
    emoji("⚡ Build dashboards and responsive UIs with React and Next.js"),
    emoji("⚡ Cloud deployments with AWS/GCP, Docker, and CI/CD pipelines")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-flask" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Google Cloud", fontAwesomeClassname: "fab fa-google" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Syracuse University",
      logo: require("./assets/images/syracuseLogo.png"),
      subHeader: "M.S. Computer Science (GPA: 3.7/4)",
      duration: "Aug 2023 - May 2025",
      desc: "Coursework: AI, DBMS, Algorithms, Machine Learning, OS, NLP, App Dev"
    },
    {
      schoolName: "NMIMS - Mukesh Patel School of Technology Management & Engineering",
      logo: require("./assets/images/nmimsLogo.png"),
      subHeader: "B.S. Computer Science (GPA: 3.48/4)",
      duration: "Aug 2019 - May 2023",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Telivus Media",
      companylogo: require("./assets/images/telivusLogo.png"),
      date: "Dec 2022 – Jul 2023",
      desc: "Built and optimized scalable RESTful APIs using Express.js and MongoDB and delivered responsive dashboards with React and Node.js.",
      descBullets: [
        "Reduced data fetch latency by 35% and improved UX under peak traffic",
        "Modularized React components to cut code duplication by 30%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "NTT Data Payment Services",
      companylogo: require("./assets/images/nttdataLogo.png"),
      date: "May 2022 – Nov 2022",
      desc: "Built secure payment gateway solutions using Java, Spring Boot, Hibernate, MySQL; created RESTful APIs and increased test coverage with JUnit/Mockito.",
      descBullets: [
        "Improved transaction efficiency by 30% for 6M+ merchants",
        "Cut processing latency by 25% and reduced production bugs by 35%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Arcon",
      companylogo: require("./assets/images/arconLogo.png"),
      date: "Jan 2021 – May 2021",
      desc: "Automated PAM workflows with Python to reduce manual intervention and compliance violations across 10M+ secured endpoints.",
      descBullets: [
        "Reduced user provisioning time from 4 hours to 30 minutes"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Selected work and open source",
  projects: [
    {
      image: require("./assets/images/smartcontractanalyzerlogo.png"),
      projectName: "Smart Contract Analyzer",
      projectDesc:
        "AI‑driven platform with FastAPI, Next.js, and ChromaDB for contract ingestion, clause Q&A, and risk detection using RAG and LLMs.",
      techStack: "Tech: FastAPI, Next.js, ChromaDB, RAG, Claude",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/saadshah16/Smart-Contract-Analyzer"
        }
      ]
    },
    {
      image: require("./assets/images/judgifyLogo.png"),
      projectName: "Judgify — AI Poster Judging System",
      projectDesc:
        "Web‑based automation using Next.js and Flask; NLP optimization with PuLP and AllenAI SPECTER for fairer, faster allocations.",
      techStack: "Tech: Next.js, Flask, PuLP, AllenAI SPECTER",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/saadshah16/JudgifySU"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (315) 374-0110",
  email_address: "saadshah813@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
