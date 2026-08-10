import { NAV_LINKS } from "../../constants/navigation";
import Container from "../../components/ui/Container";

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <div
      id="mobile-menu"
      className={`overflow-hidden transition-all duration-300 lg:hidden ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
    >
      <div className="border-t border-border bg-background-elevated">
        <Container className="py-6">
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block border-b border-border py-4 text-text-muted transition-colors duration-300 hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default MobileNav;
