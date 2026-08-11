import { Children, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowLeft } from "react-icons/fi";
import { adminNavItems } from "../../constants/adminNav";

const SidebarContent = ({ onNavigate }) => (
  <>
    <Link to="/" className="mb-8 flex items-center gap-3">
      <div className="font-display from-primary to-accent text-background flex h-10 w-10 items-center justify-center rounded-[10px] bg-linear-to-br text-[13px] font-bold">
        LS
      </div>
      <span className="font-display text-text text-[15px] font-semibold">
        Admin
      </span>
    </Link>

    <nav className="flex flex-col gap-1.5">
      {adminNavItems.map(({ label, path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors duration-150 ${
              isActive
                ? "bg-primary/14 text-accent"
                : "text-text-muted hover:bg-background-elevated hover:text-text"
            }`
          }
        >
          <Icon size={17} />
          {label}
        </NavLink>
      ))}
    </nav>

    <Link
      to="/"
      className="text-text-muted hover:bg-background-elevated hover:text-text mt-auto flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm transition-colors duration-150"
    >
      <FiArrowLeft size={16} />
      Back to Portfolio
    </Link>
  </>
);

const AdminLayout = ({children}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-background text-text min-h-screen">
      {/* Desktop sidebar */}
      <aside className="border-border bg-surface fixed inset-y-0 left-0 hidden w-64 flex-col border-r p-5 md:flex">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="border-border bg-surface flex items-center justify-between border-b px-5 py-4 md:hidden">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="font-display from-primary to-accent text-background flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br text-xs font-bold">
            LS
          </div>
          <span className="font-display text-text text-sm font-semibold">
            Admin
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="text-text-muted hover:text-text"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="border-border bg-surface relative flex w-64 flex-col border-r p-5">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-text-muted hover:text-text absolute top-4 right-4"
            >
              <FiX size={20} />
            </button>
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <main className="p-6 md:ml-64 md:p-10">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
