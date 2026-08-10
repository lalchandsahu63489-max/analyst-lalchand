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
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@yourchannel",
    icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: FaInstagram,
  },
  {
    label: "X",
    href: "https://x.com/yourusername",
    icon: FaXTwitter,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/yourusername",
    icon: FaFacebook,
  },
  {
    label: "Threads",
    href: "https://threads.net/@yourusername",
    icon: FaThreads,
  },
  {
    label: "Email",
    href: "mailto:lalchand.sahu@example.com",
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
  bio: "I transform raw data into meaningful business insights using SQL, Excel, Power BI, data visualization and analytical thinking.",
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
