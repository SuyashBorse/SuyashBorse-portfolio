"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

// Maharashtra, India coordinates
const MAHARASHTRA_LAT = 19.7515;
const MAHARASHTRA_LON = 75.7139;
// Optimal initial phi angle where India faces directly forward
const INDIA_PHI = 3.39;
const INITIAL_THETA = 0.18;

export interface GlobeRef {
  focusIndia: () => void;
}

export default function Globe({
  onFocusReady,
}: {
  onFocusReady?: (focusFn: () => void) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const currentPhiRef = useRef(INDIA_PHI);

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
        markerColor: [1, 0.15, 0.15], // Clean 2D flat red dot
        markerElevation: 0, // Flat 2D marker on the surface, zero 3D elevation
        glowColor: [1, 1, 1],
        markers: [
          {
            location: [MAHARASHTRA_LAT, MAHARASHTRA_LON],
            size: 0.09,
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
        <div className="mx-auto w-full max-w-[420px] relative">
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
              aria-label="Interactive 3D rotating globe with flat 2D red dot marking Maharashtra, India"
              style={{ width: "100%", height: "auto", aspectRatio: "1/1" }}
              className="pointer-events-none mx-auto block max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
