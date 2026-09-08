import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaThreads,
} from "react-icons/fa6";
import { HiArrowDownTray, HiArrowRight, HiBookOpen } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

export const ROLES = [
  "Data Analyst",
  "SQL Developer",
  "Dashboard Developer",
  "Data Storyteller",
];

export const TECH_SKILLS = [
  "SQL",
  "Microsoft Excel",
  "Power BI",
  "Power Query",
  "MySQL",
  "Data Cleaning",
  "EDA",
  "Statistics",
  "Data Visualization",
];

export const SOFT_SKILLS = [
  "Problem Solving",
  "Analytical Thinking",
  "Business Understanding",
  "Data Storytelling",
  "Communication",
  "Critical Thinking",
];

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/lalchandsahu63489-max",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/analystlalchand/",
    icon: FaLinkedin,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@analystlalchand?si=Ud9gHjUuhZqHhWF6",
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/analyst.lalchand?igsi=MWwzczg4bjhnZnd5OQ==",
    icon: FaInstagram,
  },
  {
    label: "X",
    href: "https://x.com/analystlalchand",
    icon: FaXTwitter,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1F9pVJw81u/",
    icon: FaFacebook,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@analyst.lalchand",
    icon: FaThreads,
  },
  {
    label: "Email",
    href: "mailto:lalchandsahu63489@gmail.com",
    icon: MdEmail,
  },
];

export const HERO_CONTENT = {
  greeting: "Hi, I'm",
  name: "Lalchand Sahu",
  image: {
    src: "/lalchand.png",
    alt: "Lalchand Sahu",
  },
  bio: "I turn Data into actionable insights that help businesses and organizations uncover what works, fix what doesn't, and discover where to grow.",
  actions: [
    {
      icon: HiArrowRight,
      label: "View Projects",
      href: "#projects",
      type: "primary",
    },
    {
      icon: HiArrowDownTray,
      label: "Download Resume",
      href: "/Resume.docx",
      type: "ghost",
      download: true,
    },
    {
      icon: HiBookOpen,
      label: "Visit Blog",
      href: "#content",
      type: "outline",
    },
  ],
};
