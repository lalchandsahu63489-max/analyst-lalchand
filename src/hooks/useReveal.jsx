import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export default useReveal;
