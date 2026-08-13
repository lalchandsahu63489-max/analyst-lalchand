import { useState } from "react";
import AdminCard from "../../components/cards/AdminCard";
import AdminAddModal from "../components/AdminAddModal";
import AdminTop from "../components/AdminTop";
import { caseStudiesData } from "../../constants/caseStudies";
import { addCaseStudies } from "../../services/addMethods";
import LoadingOverlay from "../../components/common/LoadingOverlay";

const AdminCaseStudies = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCaseStudies = async (value) => {
    try {
      setIsLoading(true);
      await addCaseStudies(value);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingOverlay label="Adding Case Study..." />;
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
        {caseStudiesData.map((item) => (
          <AdminCard
            key={item.id}
            title={item.title}
            description={item.desc}
            tags={item.tags}
            githubUrl={item.githubUrl}
            onEdit={() => console.log("edit", item.id)}
            onDelete={() => console.log("delete", item.id)}
          />
        ))}
      </div>

      <AdminAddModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleAddCaseStudies}
      />
    </>
  );
};

export default AdminCaseStudies;
