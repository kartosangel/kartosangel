// import images
import Hero_person from "./assets/images/Hero/person.png";

import JavaScript from "./assets/images/Skills/javascript.png";
import Rust from "./assets/images/Skills/rust.png";

import Golang from "./assets/images/Skills/golang.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import bearstalk from "./assets/images/projects/bearstalk.jpg";
import omnix from "./assets/images/projects/omnix.png";
import designeroptics from "./assets/images/projects/designeroptics.png";
import icedout from "./assets/images/projects/icedout.png";
import kiraverse from "./assets/images/projects/kiraverse.png";
import magiccraft from "./assets/images/projects/magiccraft.png";

import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Web Developer",
    firstName: "Yujiro",
    LastName: "Okakura",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "JavaScript",
        para: "Read more...",
        logo: JavaScript,
        content: "With over 8 years of experience in full stack web development, I am proficient in JavaScript, the language of the web. I specialize in creating dynamic and interactive web applications using frameworks like React.js and Node.js. From front-end user interfaces to back-end server logic, I leverage JavaScript to build scalable and efficient solutions that meet clients' needs."
      },
      {
        name: "Node js",
        para: "Read more...",
        logo: nodejs,
        content: "As a seasoned full stack web developer, I excel in leveraging Node.js to build robust and scalable server-side applications. I have mastered the art of asynchronous programming and built high-performance APIs, real-time chat applications, and data-intensive web services using Node.js. My expertise extends to optimizing server performance, managing dependencies, and deploying applications with ease."

      },
      {
        name: "Rust",
        para: "Read more...",
        logo: Rust,
        content: "With a passion for performance and reliability, I have embraced Rust as my go-to language for systems programming and backend development. I leverage Rust's memory safety, concurrency, and speed to build secure and efficient applications. From low-level systems programming to high-level web services, Rust enables me to deliver reliable solutions that exceed expectations."

      },
      {
        name: "React js",
        para: "Read more...",
        logo: reactjs,
        content: "Specializing in front-end development, I harness the power of React.js to create dynamic and engaging user interfaces. I have honed my skills in building responsive and scalable web applications using React.js. Whether it's crafting reusable components, managing state with Redux, or optimizing performance, I leverage React.js to deliver exceptional user experiences."

      },
      {
        name: "Golang",
        para: "Read more...",
        logo: Golang,
        content: "With a focus on simplicity, efficiency, and concurrency, I have embraced Golang as my language of choice for building backend services and microservices.  I leverage Golang's speed and scalability to build resilient and high-performance applications. From RESTful APIs to cloud-native solutions, Golang enables me to deliver reliable and efficient software that meets the demands of modern web development."

      },
      {
        name: "Python",
        para: "Read more...",
        logo: python,
        content: "As a versatile programming language, Python has been a cornerstone of my development toolkit . With a focus on simplicity, readability, and versatility, I leverage Python to build web applications, automate tasks, and analyze data. Whether it's building web APIs with Django, scripting automation tasks with Flask, or implementing machine learning algorithms with TensorFlow, Python empowers me to tackle diverse challenges and deliver impactful solutions."

      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Full Stack Web Development",
        para: "Offer end-to-end development services for web applications, from front-end user interfaces to back-end server logic.\n Develop custom web solutions tailored to clients' specific needs and requirements.",
        logo: services_logo1,
      },
      {
        title: "Blockchain Development",
        para: "Design, develop, and deploy decentralized applications (DApps) using blockchain technologies like Ethereum, Hyperledger, Golang , Cardano or Polkadot.\nDevelop smart contracts using Solidity (for Ethereum) or other smart contract languages for automated, trustless execution of agreements.",
        logo: services_logo2,
      },
      {
        title: "Cloud-Native Development",
        para: "Develop cloud-native applications using Golang, Rust, or Node.js for deployment on cloud platforms like AWS, Google Cloud, or Azure.\nUtilize serverless architecture and managed services for scalability and cost ",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Aptos Marketplace",
        image: omnix,
        url: "https://omni-x.io/"
      },
      {
        title: "Kiraverse",
        image: kiraverse,
        url: "https://kiraverse.game/"
      },
      {
        title: "MagicCraft",
        image: magiccraft,
        url: "https://magiccraft.io/"
      },
      {
        title: "WordPress",
        image: bearstalk,
        url: "https://bearstalk.com"
      },
      {
        title: "Shopify",
        image: designeroptics,
        url: "https://designeroptics.com/"
      },
     
      {
        title: "Polygon CoinFlip",
        image: icedout,
        url: "https://www.icedoutcoinflip.com/"
      }
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "Yujiro has done an excellent job in developing Bears Talk, a comprehensive and reliable platform for Chicago Bears fans to stay updated with the latest news, rumors, and analysis.",
        img: avatar1,
        name: "Bryan Perez",
      },
      {
        review:
          "Yujiro has showcased its expertise in the blockchain and NFT space with the development of Omni X, the pioneering natively omnichain NFT platform",
        img: avatar2,
        name: "Daniel",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person,
    para: "Please feel free to reach out to discuss your project in more detail. I'm excited about the opportunity to work together and bring your ideas to life.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "yujirookakurafree@gmail.com",
        icon: GrMail,
        link: "mailto:yujirookakurafree@gmail.com",
      },
      // {
      //   text: "+91 1234 56778",
      //   icon: MdCall,
      //   link: "https://wa.me/1234567890",
      // },
      // {
      //   text: "LinkedIN",
      //   icon: BsInstagram,
      //   link: "https://www.instagram.com/codeaprogram/",
      // },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
