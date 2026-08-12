import { useState } from "react";
import AdminTop from "../components/AdminTop";
import AdminCard from "../../components/cards/AdminCard";
import { contentData } from "../../constants/content";
import AdminAddModal from "../components/AdminAddModal";

const AdminTrash = () => {
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <>
      <AdminTop
        title="Recycle Bin"
        subtitle="Here's what you've got"
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        onAdd={() => setIsAddOpen(true)}
        addLabel="Add Case Study"
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {contentData.map((item) => (
          <AdminCard
            key={item.id}
            title={item.title}
            description={item.desc}
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
        onSubmit={(values) => console.log("new item:", values)}
      />
    </>
  );
};

export default AdminTrash;
