import { Link } from "react-router-dom";
import { adminNavItems } from "../../constants/adminNav";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const AdminHome = ({ name = "Lalchand" }) => {
  return (
    <div>
      <div className="bg-surface border-border mb-8 rounded-2xl border p-7 md:p-9">
        <span className="text-accent font-mono text-xs tracking-[0.08em] uppercase">
          // Admin Panel
        </span>
        <h1 className="font-display text-text mt-2 mb-2 text-2xl font-bold md:text-[28px]">
          {getGreeting()}, {name}
        </h1>
        <p className="text-text-muted max-w-lg text-sm md:text-[15px]">
          This is your content workspace — manage projects, case studies and
          gallery items, or review anything you've moved to trash.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {adminNavItems.map(({ label, path, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className="bg-surface border-border hover:border-accent flex items-center gap-3.5 rounded-xl border p-5 transition-colors duration-150"
          >
            <div className="bg-primary/14 text-primary-light flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]">
              <Icon size={18} />
            </div>
            <span className="font-display text-text text-[15px]">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
