import { useState } from "react";
import AdminCard from "../../components/cards/AdminCard";
import AdminAddModal from "../components/AdminAddModal";
import AdminTop from "../components/AdminTop";
import { caseStudiesData } from "../../constants/caseStudies";
import { addCaseStudies } from "../../services/addMethods";
import LoadingOverlay from "../../components/common/LoadingOverlay";
import { getCaseStudies } from "../../services/getMethods";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCaseStudy } from "../../services/deleteMethods";
import toast from "react-hot-toast";
import AdminEditModal from "../components/AdminEditModal";
import { updateCaseStudies } from "../../services/updateMethods";

const AdminCaseStudies = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["case-study"],
    queryFn: getCaseStudies,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["case-study"],
    mutationFn: addCaseStudies,
    onSuccess: () => {
      toast.success("Added Case Study");
      queryClient.invalidateQueries({
        queryKey: ["case-study"],
      });
    },
    onError: () => {
      console.log("error");
      toast.error("Error : something went wrong!");
    },
  });

  const deleteMutation = useMutation({
    mutationKey: ["case-study"],
    mutationFn: deleteCaseStudy,
    onSuccess: () => {
      toast.success("Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["case-study"],
      });
    },
    onError: (error) => {
      toast.error("Error : something went wrong!");
    },
  });

  const updateMutation = useMutation({
    mutationKey: ["case-study"],
    mutationFn: updateCaseStudies,
    onSuccess: () => {
      toast.success("Updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["case-study"],
      });
    },
    onError: () => {
      toast.error("Error : something went wrong!");
    },
  });

  if (isPending) {
    return <LoadingOverlay label="Adding Case Study..." />;
  }
  if (isLoading) {
    return <LoadingOverlay label="Loading Case Studies..." />;
  }

  if (deleteMutation.isPending)
    return <LoadingOverlay label="Deleting Case Study..." />;

  if (updateMutation.isPending)
    return <LoadingOverlay label="Updating Case Study..." />;

  return (
    <>
      <AdminTop
        title="Case Studies"
        subtitle="Manage your portfolio's case studies"
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        onAdd={() => setIsAddOpen(true)}
        addLabel="Add Case Study"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((item) => (
          <AdminCard
            key={item.id}
            title={item.title}
            description={item.shortDescription}
            tags={item.tags}
            image={item.imgUrl}
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

export default AdminCaseStudies;
