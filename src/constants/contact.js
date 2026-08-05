import { FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const contactInfoCards = [
  {
    icon: FiMail,
    title: "Email Me",
    detail: "lalchand.sahu@example.com",
  },
  {
    icon: FaLinkedin,
    title: "Connect on LinkedIn",
    detail: "Professional networking",
  },
  {
    icon: FaGithub,
    title: "Explore My Work",
    detail: "GitHub repositories",
  },
  {
    icon: FiMapPin,
    title: "Based In",
    detail: "India",
  },
];

export const availabilityItems = [
  "Data Analyst Opportunities",
  "Freelance Analytics Projects",
  "Dashboard Development",
  "Data Collaboration",
];

export const projectTypeOptions = [
  "Job Opportunity",
  "Freelance Project",
  "Dashboard Requirement",
  "Collaboration",
];

import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  name: Yup.string().trim().required("Full name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  company: Yup.string().trim(),
  projectType: Yup.string().required(),
  message: Yup.string().trim().required("Please enter a message"),
});

export const contactInitialValues = {
  name: "",
  email: "",
  company: "",
  projectType: projectTypeOptions[0],
  message: "",
};
