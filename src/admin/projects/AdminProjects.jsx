import { useState } from "react";
import AdminCard from "../../components/cards/AdminCard";
import { projectsData } from "../../constants/projects";
import AdminTop from "../components/AdminTop";
import AdminAddModal from "../components/AdminAddModal";

const AdminProjects = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <>
      <AdminTop
        title="Projects"
        subtitle="Manage your portfolio projects"
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        onAdd={() => setIsAddOpen(true)}
        addLabel="Add Project"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <AdminCard
            key={project.id}
            title={project.title}
            description={project.desc}
            tags={project.tags}
            githubUrl={project.githubUrl}
            onEdit={() => console.log("edit", project.id)}
            onDelete={() => console.log("delete", project.id)}
          />
        ))}
      </div>

      <AdminAddModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={(values) => console.log("new item:", values)}
      />
    </>
  );
};

export default AdminProjects;
