import { useState } from "react";
import AdminTop from "../components/AdminTop";
import AdminCard from "../../components/cards/AdminCard";
import AdminAddModal from "../components/AdminAddModal";
import { contentData } from "../../constants/content";
import { addContent } from "../../services/addMethods";
import LoadingOverlay from "../../components/common/LoadingOverlay";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getContent } from "../../services/getMethods";
import { deleteContent } from "../../services/deleteMethods";
import toast from "react-hot-toast";
import AdminEditModal from "../components/AdminEditModal";
import { updateContent } from "../../services/updateMethods";

const AdminContent = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["content"],
    queryFn: getContent,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["content"],
    mutationFn: addContent,
    onSuccess: () => {
      toast.success("Added Content");
      queryClient.invalidateQueries({
        queryKey: ["content"],
      });
    },
    onError: () => {
      console.log("error");
      toast.error("Error : something went wrong!");
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ["content"],
    mutationFn: deleteContent,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["content"],
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Error : something went wrong!");
    },
  });

  const updateMutation = useMutation({
    mutationKey: ["content"],
    mutationFn: updateContent,
    onSuccess: () => {
      toast.success("Updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["content"],
      });
    },
    onError: () => {
      toast.error("Error : something went wrong!");
    },
  });

  if (isPending) {
    return <LoadingOverlay label="Adding Content..." />;
  }
  if (isLoading) {
    return <LoadingOverlay label="Loading Content..." />;
  }

  if (deleteMutation.isPending)
    return <LoadingOverlay label="Deleting Content..." />;

  if (updateMutation.isPending)
    return <LoadingOverlay label="Updating Content..." />;

  return (
    <>
      <AdminTop
        title="Gallery / Content"
        subtitle="Manage your portfolio's case studies tung"
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
            onEdit={() => setEditingItem(item)}
            onDelete={() => deleteMutation.mutate(item.id)}
          />
        ))}
      </div>

      <AdminAddModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={mutate}
      />

      <AdminEditModal
        isOpen={!!editingItem}
        initialValues={editingItem}
        onClose={() => setEditingItem(null)}
        onSubmit={(values) =>
          updateMutation.mutate({
            ...editingItem,
            ...values,
          })
        }
      />
    </>
  );
};

export default AdminContent;
