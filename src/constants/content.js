import { FiFileText, FiPlay, FiDownload } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export const contentFilters = [
  { label: "All", value: "all" },
  { label: "Blogs", value: "blogs" },
  { label: "YouTube", value: "youtube" },
  { label: "LinkedIn", value: "linkedin" },
  { label: "Resources", value: "resources" },
];

export const contentData = [
  {
    id: "content1",
    category: "blogs",
    categoryLabel: "Blog",
    icon: FiFileText,
    title: "SQL Window Functions Explained",
    desc: "A practical guide to RANK, ROW_NUMBER and partitioning.",
    meta: "6 min read",
    actionLabel: "Read Article",
    href: "#",
  },
  {
    id: "content2",
    category: "youtube",
    categoryLabel: "Video",
    icon: FiPlay,
    title: "Building a Power BI Dashboard — Walkthrough",
    desc: "End-to-end dashboard build from raw data to insights.",
    meta: "14:32",
    actionLabel: "Watch",
    href: "#",
  },
  {
    id: "content3",
    category: "resources",
    categoryLabel: "Resource",
    icon: FiDownload,
    title: "SQL Cheat Sheet (PDF)",
    desc: "Quick reference for joins, aggregations and CTEs.",
    meta: "Free download",
    actionLabel: "Download",
    href: "#",
  },
  {
    id: "content4",
    category: "linkedin",
    categoryLabel: "LinkedIn",
    icon: FaLinkedin,
    title: "5 Lessons From My First Freelance Project",
    desc: "What I learned managing client expectations and scope.",
    meta: "Post",
    actionLabel: "View Post",
    href: "#",
  },
  {
    id: "content5",
    category: "blogs",
    categoryLabel: "Blog",
    icon: FiFileText,
    title: "Excel vs Power BI: When to Use What",
    desc: "A decision framework for choosing the right tool.",
    meta: "8 min read",
    actionLabel: "Read Article",
    href: "#",
  },
  {
    id: "content6",
    category: "resources",
    categoryLabel: "Resource",
    icon: FiDownload,
    title: "Data Analyst Career Roadmap",
    desc: "Step-by-step roadmap from beginner to job-ready.",
    meta: "Free download",
    actionLabel: "Download",
    href: "#",
  },
];

export const platformLinks = [
  { label: "📝 Full Blog →", href: "#" },
  { label: "▶️ YouTube Channel →", href: "https://youtube.com/@yourchannel" },
  {
    label: "💼 LinkedIn Profile →",
    href: "https://linkedin.com/in/yourprofile",
  },
];
