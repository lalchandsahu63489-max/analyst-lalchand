import { FiSearch, FiPlus } from "react-icons/fi";

const AdminTop = ({
  title,
  subtitle,
  searchValue,
  onSearchChange,
  onAdd,
  addLabel = "Add New",
}) => {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="font-display text-text mb-1 text-2xl font-bold">
          {title}
        </h2>
        {subtitle && <p className="text-text-muted text-sm">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <FiSearch
            size={15}
            className="text-text-muted absolute top-1/2 left-3.5 -translate-y-1/2"
          />
          <input
            type="text"
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Search..."
            className="bg-background-elevated border-border text-text focus:outline-accent focus:border-accent w-full rounded-lg border py-2.5 pr-3.5 pl-9 text-sm focus:outline-2 focus:outline-offset-1 sm:w-56"
          />
        </div>

        <button
          type="button"
          onClick={onAdd}
          className="btn btn-primary shrink-0"
        >
          <FiPlus size={16} />
          {addLabel}
        </button>
      </div>
    </div>
  );
};

export default AdminTop;
