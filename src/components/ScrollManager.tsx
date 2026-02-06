"use client";

import { useEffect } from "react";

const sections = ["home", "about", "services", "portfolio", "contact"];

export default function ScrollManager() {
  useEffect(() => {
    // Handle scroll to update URL without hash
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            const newPath = sectionId === "home" ? "/" : `/${sectionId}`;
            if (window.location.pathname !== newPath) {
              window.history.replaceState(null, "", newPath);
            }
            break;
          }
        }
      }
    };

    // Handle click on hash links to use smooth scroll without hash in URL
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link) {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const sectionId = href.substring(1);
          const element = document.getElementById(sectionId);

          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            const newPath = sectionId === "home" ? "/" : `/${sectionId}`;
            window.history.replaceState(null, "", newPath);
          }
        }
      }
    };

    // Handle initial URL path (e.g., /portfolio -> scroll to portfolio)
    const handleInitialPath = () => {
      const path = window.location.pathname.substring(1); // Remove leading /
      if (path && sections.includes(path)) {
        const element = document.getElementById(path);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
      // Also handle hash on initial load (for backwards compatibility)
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
            const newPath = sectionId === "home" ? "/" : `/${sectionId}`;
            window.history.replaceState(null, "", newPath);
          }, 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClick);
    handleInitialPath();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
