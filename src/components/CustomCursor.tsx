"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    const spotlight = spotlightRef.current;
    if (!dot || !outline || !spotlight) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX - 4}px`;
      dot.style.top = `${mouseY - 4}px`;
      spotlight.style.left = `${mouseX}px`;
      spotlight.style.top = `${mouseY}px`;
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      outline.style.left = `${outlineX - 20}px`;
      outline.style.top = `${outlineY - 20}px`;
      requestAnimationFrame(animate);
    };

    const handleHoverIn = () => outline.classList.add("hovering");
    const handleHoverOut = () => outline.classList.remove("hovering");

    window.addEventListener("mousemove", move);
    animate();

    const interactives = document.querySelectorAll("a, button, [data-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll("a, button, [data-hover]");
      newInteractives.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverIn);
        el.addEventListener("mouseleave", handleHoverOut);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
      <div ref={spotlightRef} className="spotlight" />
    </>
  );
}
