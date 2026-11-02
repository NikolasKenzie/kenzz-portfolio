import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Experience", target: "experience" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav id="con-navbar">
      <div>
        <p>Kenzz Portfolio</p>
      </div>

      <div>
        <ul id="con-listNav">
          {navItems.map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                className={activeSection === item.target ? "active" : ""}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
