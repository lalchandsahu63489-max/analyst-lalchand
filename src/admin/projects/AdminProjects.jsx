import { useEffect, useState } from "react";
import AdminCard from "../../components/cards/AdminCard";
import { projectsData } from "../../constants/projects";
import AdminTop from "../components/AdminTop";
import AdminAddModal from "../components/AdminAddModal";
import { addProject } from "../../services/addMethods";
import { getProjects } from "../../services/getMethods";
import LoadingOverlay from "../../components/common/LoadingOverlay";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const AdminProjects = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["projects"],
    mutationFn: addProject,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
    onError: () => {
      console.log("error");
    },
  });

  if (isPending) {
    return <LoadingOverlay label="Adding Project..." />;
  }
  if (isLoading) {
    return <LoadingOverlay label="Loading Project..." />;
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
        {data?.map((project) => {
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
        onSubmit={mutate}
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
