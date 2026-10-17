"use client";

import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

// Maharashtra, India coordinates
const MAHARASHTRA_LAT = 19.7515;
const MAHARASHTRA_LON = 75.7139;
// Optimal initial phi angle where India faces directly forward
const INDIA_PHI = 3.39;
const INITIAL_THETA = 0.18;

// Math projection helper
const PI = Math.PI;
const latRad = (MAHARASHTRA_LAT * PI) / 180;
const lonRad = (MAHARASHTRA_LON * PI) / 180 - PI;
const p3d = [
  -Math.cos(latRad) * Math.cos(lonRad),
  Math.sin(latRad),
  Math.cos(latRad) * Math.sin(lonRad),
];

export interface GlobeRef {
  focusIndia: () => void;
}

export default function Globe({
  onFocusReady,
}: {
  onFocusReady?: (focusFn: () => void) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const currentPhiRef = useRef(INDIA_PHI);

  const [markerPos, setMarkerPos] = useState<{
    x: number;
    y: number;
    visible: boolean;
    opacity: number;
  }>({
    x: 210,
    y: 170,
    visible: true,
    opacity: 1,
  });

  // Focus India handler
  const focusIndia = () => {
    currentPhiRef.current = INDIA_PHI;
    pointerInteractionMovement.current = 0;
  };

  useEffect(() => {
    if (onFocusReady) {
      onFocusReady(focusIndia);
    }
  }, [onFocusReady]);

  useEffect(() => {
    let phi = INDIA_PHI;
    let globeInstance: { update: (opts: any) => void; destroy: () => void } | null = null;
    let animationFrameId: number;

    if (canvasRef.current) {
      globeInstance = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 420 * 2,
        height: 420 * 2,
        phi: INDIA_PHI,
        theta: INITIAL_THETA,
        dark: 1,
        diffuse: 1.3,
        mapSamples: 16000,
        mapBrightness: 8,
        baseColor: [0.4, 0.4, 0.4],
        markerColor: [1, 0.15, 0.15], // Bright red dot
        glowColor: [1, 1, 1],
        markers: [
          {
            location: [MAHARASHTRA_LAT, MAHARASHTRA_LON],
            size: 0.12,
            color: [1, 0.15, 0.15],
          },
        ],
      });

      const render = () => {
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        const effectivePhi = phi + pointerInteractionMovement.current;
        currentPhiRef.current = effectivePhi;

        globeInstance?.update({
          phi: effectivePhi,
        });

        // Calculate 2D position for the glowing pulsing beacon
        const theta = INITIAL_THETA;
        const r = Math.cos(theta);
        const a = Math.cos(effectivePhi);
        const o = Math.sin(theta);
        const i = Math.sin(effectivePhi);
        const c = a * p3d[0] + i * p3d[2];
        const s = i * o * p3d[0] + r * p3d[1] - a * o * p3d[2];
        const z = -i * r * p3d[0] + o * p3d[1] + a * r * p3d[2];

        const containerWidth = containerRef.current?.offsetWidth || 420;
        const scale = containerWidth / 420;

        const x2d = ((c + 1) / 2) * 420 * scale;
        const y2d = ((-s + 1) / 2) * 420 * scale;

        const isVisible = z > 0.05;
        const opacity = Math.max(0, Math.min(1, (z - 0.05) * 4));

        setMarkerPos({
          x: x2d,
          y: y2d,
          visible: isVisible,
          opacity,
        });

        animationFrameId = requestAnimationFrame(render);
      };

      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      globeInstance?.destroy();
    };
  }, []);

  return (
    <div className="flex h-full items-end justify-center">
      <div className="h-[220px] sm:h-[230px] w-full max-w-[420px] overflow-hidden relative">
        <div ref={containerRef} className="mx-auto w-full max-w-[420px] relative">
          <div
            className="cursor-grab touch-pan-y select-none active:cursor-grabbing"
            onPointerDown={(e) => {
              pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            }}
            onPointerUp={() => {
              pointerInteracting.current = null;
            }}
            onPointerOut={() => {
              pointerInteracting.current = null;
            }}
            onMouseMove={(e) => {
              if (pointerInteracting.current !== null) {
                const delta = e.clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta * 0.008;
              }
            }}
            onTouchMove={(e) => {
              if (pointerInteracting.current !== null && e.touches[0]) {
                const delta = e.touches[0].clientX - pointerInteracting.current;
                pointerInteractionMovement.current = delta * 0.008;
              }
            }}
          >
            <canvas
              ref={canvasRef}
              role="img"
              aria-label="Interactive 3D rotating globe marking Maharashtra, India"
              style={{ width: "100%", height: "auto", aspectRatio: "1/1" }}
              className="pointer-events-none mx-auto block max-w-full"
            />
          </div>

          {/* Pulsing Beacon & Label on Maharashtra, India */}
          {markerPos.visible && (
            <div
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 transition-opacity duration-100"
              style={{
                left: `${markerPos.x}px`,
                top: `${markerPos.y}px`,
                opacity: markerPos.opacity,
              }}
            >
              {/* Badge Tag */}
              <div className="mb-1 px-2 py-0.5 rounded bg-zinc-950/90 border border-red-500/50 text-[10px] font-mono text-zinc-100 shadow-md backdrop-blur-md whitespace-nowrap flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="font-semibold text-white">Maharashtra, India 📍</span>
              </div>

              {/* Pulsing Target Rings */}
              <div className="relative flex items-center justify-center w-6 h-6">
                <span className="absolute w-6 h-6 rounded-full bg-red-500/30 animate-ping"></span>
                <span className="absolute w-4 h-4 rounded-full bg-red-500/50"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444] border border-white"></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
