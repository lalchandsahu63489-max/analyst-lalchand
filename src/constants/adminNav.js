import { FiFolder, FiBookOpen, FiImage, FiTrash2 } from "react-icons/fi";

export const adminNavItems = [
  { label: "Projects", path: "/admin_hu_yaar/projects", icon: FiFolder },
  {
    label: "Case Studies",
    path: "/admin_hu_yaar/case-studies",
    icon: FiBookOpen,
  },
  { label: "Gallery", path: "/admin_hu_yaar/content", icon: FiImage },
  { label: "Trash", path: "/admin_hu_yaar/trash", icon: FiTrash2 },
];
