"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let globeInstance: { update: (opts: any) => void; destroy: () => void } | null = null;
    let animationFrameId: number;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth || 420;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (canvasRef.current) {
      globeInstance = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 420 * 2,
        height: 420 * 2,
        phi: 0,
        theta: 0.35,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.35, 0.35, 0.35],
        markerColor: [1, 0.15, 0.15], // Vivid red dot
        glowColor: [1, 1, 1],
        markers: [
          // Maharashtra, India coordinates: Latitude ~19.75° N, Longitude ~75.71° E
          { location: [19.7515, 75.7139], size: 0.09, color: [1, 0.15, 0.15] },
        ],
      });

      const render = () => {
        if (!pointerInteracting.current) {
          phi += 0.004;
        }
        globeInstance?.update({
          phi: phi + pointerInteractionMovement.current,
        });
        animationFrameId = requestAnimationFrame(render);
      };

      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      globeInstance?.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="flex h-full items-end justify-center">
      <div className="h-[180px] w-full max-w-[420px] overflow-hidden">
        <div className="mx-auto w-full max-w-[420px]">
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
              style={{ width: 420, height: 420 }}
              className="pointer-events-none mx-auto block max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
