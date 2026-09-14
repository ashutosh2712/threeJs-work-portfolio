import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ activeSection, onClick }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => {
        const sectionId = href.replace("#", "");
        const isActive = activeSection === sectionId;
        return (
          <li key={id} className="nav-li">
            <a
              href={href}
              className={`nav-li_a ${
                isActive ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
              onClick={onClick}
            >
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-80px 0px -30% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <header className="font-heading fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="m-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Ashutosh
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle menu"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems activeSection={activeSection} />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
