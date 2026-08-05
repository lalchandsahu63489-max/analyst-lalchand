import { NAV_LINKS } from "../../constants/navigation";

const DesktopNav = () => {
  return (
    <nav aria-label="Primary Navigation" className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group relative py-2 text-sm font-medium text-(--color-text-muted) transition-colors duration-300 hover:text-(--color-text)"
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-(--color-accent) transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
