"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  // Raw mouse coordinates (0 lag for inner dot)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for outer trailing ring
  const springConfig = { damping: 26, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device uses a fine pointer (mouse / trackpad) and not touch
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setIsFinePointer(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest<HTMLElement>(
          "a, button, [role='button'], input, textarea, select, label, .cursor-pointer, [data-cursor='pointer'], [data-cursor-text]"
        );

        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute("data-cursor-text");
          setCursorText(customText || null);
        } else {
          setIsHovered(false);
          setCursorText(null);
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Outer fluid trailing ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 64 : 42) : 34,
          height: isHovered ? (cursorText ? 64 : 42) : 34,
          scale: isClicked ? 0.78 : 1,
          backgroundColor: isHovered
            ? "rgba(6, 182, 212, 0.14)"
            : "rgba(6, 182, 212, 0.03)",
          borderColor: isHovered
            ? "rgba(6, 182, 212, 0.85)"
            : "rgba(255, 255, 255, 0.35)",
          borderWidth: isHovered ? "1.5px" : "1px",
          boxShadow: isHovered
            ? "0 0 24px rgba(6, 182, 212, 0.35), inset 0 0 12px rgba(6, 182, 212, 0.15)"
            : "0 0 12px rgba(6, 182, 212, 0.12)",
          backdropFilter: isHovered ? "blur(2px)" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] font-mono font-bold tracking-wider text-cyan-200 uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Crisp center dot tracking mouse with 0 latency */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? (cursorText ? 0 : 4) : 6,
          height: isHovered ? (cursorText ? 0 : 4) : 6,
          scale: isClicked ? 1.6 : isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? "#22d3ee" : "#ffffff",
          boxShadow: isHovered
            ? "0 0 10px rgba(34, 211, 238, 0.9)"
            : "0 0 8px rgba(255, 255, 255, 0.8)",
          opacity: cursorText ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </div>
  );
}
