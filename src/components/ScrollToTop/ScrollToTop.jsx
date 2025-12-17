import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll instantáneo al cambiar de ruta
    // Usar múltiples métodos para asegurar compatibilidad
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // También asegurarse de que el scroll se ejecute después de que el DOM se actualice
    // para casos donde el contenido se carga dinámicamente
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    // Un segundo intento después de un pequeño delay para contenido asíncrono
    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;
