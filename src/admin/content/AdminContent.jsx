import { useState } from "react";
import AdminTop from "../components/AdminTop";
import AdminCard from "../../components/cards/AdminCard";
import AdminAddModal from "../components/AdminAddModal";
import { contentData } from "../../constants/content";
import { addContent } from "../../services/addMethods";
import LoadingOverlay from "../../components/common/LoadingOverlay";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getContent } from "../../services/getMethods";

const AdminContent = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["content"],
    queryFn: getContent,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["content"],
    mutationFn: addContent,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({
        queryKey: ["content"],
      });
    },
    onError: () => {
      console.log("error");
    },
  });

  if (isPending) {
    return <LoadingOverlay label="Adding Content..." />;
  }
  if (isLoading) {
    return <LoadingOverlay label="Loading Content..." />;
  }

  return (
    <>
      <AdminTop
        title="Gallery / Content"
        subtitle="Manage your portfolio's case studies"
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        onAdd={() => setIsAddOpen(true)}
        addLabel="Add Case Study"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <AdminCard
            key={item.id}
            title={item.title}
            description={item.shortDescription}
            image={item.imgUrl}
            showTags={false}
            githubUrl={item.githubUrl}
            onEdit={() => console.log("edit", item.id)}
            onDelete={() => console.log("delete", item.id)}
          />
        ))}
      </div>

      <AdminAddModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={mutate}
      />
    </>
  );
};

export default AdminContent;
