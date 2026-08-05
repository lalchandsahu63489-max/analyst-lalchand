import { HiBars3, HiXMark } from "react-icons/hi2";

import Container from "../../components/ui/Container";

const Navbar = ({ children, isOpen, isScrolled, onMenuToggle }) => {
  return (
    <nav
      className={`transition-all duration-300 ${
        isScrolled
          ? "border-b border-(--color-border) bg-(--color-background-glass) backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="font-display flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-(--color-primary) to-(--color-accent) font-bold text-neutral-900">
              LS
            </div>
          </a>
        </div>

        {children}

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={onMenuToggle}
          className="cursor-pointer text-(--color-text) lg:hidden"
        >
          {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>
      </Container>
    </nav>
  );
};

export default Navbar;
