import { useEffect, useState } from "react";
import AdminCard from "../../components/cards/AdminCard";
import { projectsData } from "../../constants/projects";
import AdminTop from "../components/AdminTop";
import AdminAddModal from "../components/AdminAddModal";
import { addProject } from "../../services/addMethods";
import { getProjects } from "../../services/getMethods";
import LoadingOverlay from "../../components/common/LoadingOverlay";

const AdminProjects = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProject] = useState([]);

  const handleAddProject = async (value) => {
    try {
      setIsLoading(true);
      await addProject(value);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const projects = await getProjects();
      setProject(projects);
    };

    getData();
  }, []);

  if (isLoading) {
    return <LoadingOverlay label="Adding Project..." />;
  }

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
        {projects.map((project) => {
          console.log(project);
          return (
            <AdminCard
              key={project.id}
              title={project.title}
              description={project.shortDescription}
              tags={project.tags}
              image={project.imgUrl}
              githubUrl={project.githubUrl}
              onEdit={() => console.log("edit", project.id)}
              onDelete={() => console.log("delete", project.id)}
            />
          );
        })}
      </div>

      <AdminAddModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleAddProject}
      />

      {/* {projects.map((project) => {
        return (
          <AdminCard
            key={project.id}
            title={project.title}
            description={project.shortDescription}
            tags={project.tags}
            githubUrl={project.githubUrl}
            image={project.imgUrl}
            onEdit={() => console.log("edit", project.id)}
            onDelete={() => console.log("delete", project.id)}
          />
        );
      })} */}
    </>
  );
};

// githubUrl,
// image,
// tags,
// title,
// hasTags,
// longDescription,
// shortDescription,

export default AdminProjects;
