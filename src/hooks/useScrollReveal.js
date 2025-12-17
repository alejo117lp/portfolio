import React from "react";

/**
 * Hook sencillo para revelar elementos al hacer scroll usando IntersectionObserver.
 */
export const useScrollReveal = ({
  threshold = 0.15,
  root = null,
  rootMargin = "0px",
  once = false,
} = {}) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;

    // Fallback en navegadores sin IntersectionObserver
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, once]);

  return { ref, isVisible };
};

/**
 * Envuelve una sección existente y solo añade la animación de scroll.
 */
export const RevealSection = ({ id, className, children, once = false }) => {
  const { ref, isVisible } = useScrollReveal({ once });

  const composedClassName = [
    className,
    "reveal",
    isVisible ? "reveal--visible" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} ref={ref} className={composedClassName}>
      {children}
    </section>
  );
};

/**
 * Wrapper para cards individuales con animación stagger
 */
export const RevealCard = ({ children, delay = 0 }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal-card ${isVisible ? "reveal-card--visible" : ""}`}
      style={{ "--delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
};

