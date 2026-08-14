import { useState } from "react";
import AdminCard from "../../components/cards/AdminCard";
import AdminAddModal from "../components/AdminAddModal";
import AdminTop from "../components/AdminTop";
import { caseStudiesData } from "../../constants/caseStudies";
import { addCaseStudies } from "../../services/addMethods";
import LoadingOverlay from "../../components/common/LoadingOverlay";
import { getCaseStudies } from "../../services/getMethods";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const AdminCaseStudies = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  // yaha se
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery({
    queryKey: ["case-study"],
    queryFn: getCaseStudies,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["case-study"],
    mutationFn: addCaseStudies,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({
        queryKey: ["case-study"],
      });
    },
    onError: () => {
      console.log("error");
    },
  });

  if (isPending) {
    return <LoadingOverlay label="Adding Case Study..." />;
  }
  if (isLoading) {
    return <LoadingOverlay label="Loading Case Studies..." />;
  }

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

export default AdminCaseStudies;
