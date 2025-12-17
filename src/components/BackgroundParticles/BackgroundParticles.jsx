import React, { useEffect, useRef } from "react";
import "./BackgroundParticles.css";

/**
 * Fondo de partículas ligero en canvas inspirado en redes neuronales.
 * Se implementa aquí porque no existe ningún utilitario similar en el proyecto.
 * Si en el futuro quieres reutilizarlo en más vistas, se puede extraer la lógica
 * a un hook compartido siguiendo tus reglas de reutilización.
 */
const BackgroundParticles = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resize();

    const handleMouseMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    const PARTICLE_COUNT = Math.min(100, Math.floor((width * height) / 25000));

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1.2 + Math.random() * 1.3,
      }));
    };

    createParticles();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Fondo muy sutil para evitar parpadeos
      const gradient = ctx.createRadialGradient(
        width * 0.1,
        height * 0.1,
        0,
        width * 0.1,
        height * 0.1,
        Math.max(width, height)
      );
      gradient.addColorStop(0, "rgba(15, 23, 42, 0.6)");
      gradient.addColorStop(1, "rgba(2, 6, 23, 0.9)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Actualizar y dibujar partículas
      ctx.fillStyle = "rgba(114, 82, 255, 0.8)";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Ligera reacción al ratón: las partículas se desplazan sutilmente
        // alejándose del cursor cuando está cerca.
        const mouse = mouseRef.current;
        if (mouse.x !== null && mouse.y !== null) {
          const dxm = p.x - mouse.x;
          const dym = p.y - mouse.y;
          const distMouseSq = dxm * dxm + dym * dym;
          const influenceRadius = 180;

          if (distMouseSq < influenceRadius * influenceRadius && distMouseSq > 0.01) {
            const force = 0.12;
            const distMouse = Math.sqrt(distMouseSq);
            const fx = (dxm / distMouse) * force;
            const fy = (dym / distMouse) * force;
            p.x += fx;
            p.y += fy;
          }
        }

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Líneas tipo red entre partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x + 0.01 - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 140;

          if (distSq < maxDist * maxDist) {
            const alpha = 1 - distSq / (maxDist * maxDist);
            ctx.strokeStyle = `rgba(114, 82, 255, ${alpha * 0.6})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="background-particles-canvas"
      aria-hidden="true"
    />
  );
};

export default BackgroundParticles;


