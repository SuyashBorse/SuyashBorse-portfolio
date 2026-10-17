import React from "react";

export function ReactLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <rect width="32" height="32" rx="4" fill="currentColor" />
      <path
        d="M10 12h12v3h-4.5v11h-3V15H10v-3zm14 7c0-2.5 2-3 4.5-3 2 0 3.5.5 4.5 1.5l-1.5 2.5c-.8-.7-1.8-1-3-1-1.2 0-1.8.3-1.8.8 0 .6.5.9 1.8 1.3l1.2.4c2.2.8 3.3 1.8 3.3 3.6 0 2.5-2 3.4-4.7 3.4-2.2 0-3.8-.6-5-1.7l1.6-2.5c1 .9 2.2 1.3 3.4 1.3 1.2 0 2-.4 2-1 0-.6-.5-.9-1.8-1.3l-1.2-.4C25.2 21.6 24 20.5 24 19z"
        fill="#09090b"
      />
    </svg>
  );
}

export function NextLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="#09090b"
      />
      <rect x="115" y="54" width="12" height="72" fill="#09090b" />
    </svg>
  );
}

export function PythonLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.914 0C5.825 0 6.2 2.656 6.2 2.656l.006 2.752h5.814v.826H3.92S0 5.78 0 11.908c0 6.13 3.418 5.925 3.418 5.925h2.04v-2.872s-.11-3.418 3.34-3.418h5.737v-.855H8.718v-3.79s-.07-2.923 3.2-2.923h5.952S21.05 4 21.05 10.024c0 6.023-3.483 5.86-3.483 5.86l-2.039.006v2.871s.11 3.42-3.34 3.42H6.452v.855h5.819v3.789s.07 2.924-3.2 2.924H3.12S-1.213 29.745-.213 23.722" />
      <circle cx="8.7" cy="2.8" r=".9" fill="#09090b" />
      <path d="M12.086 24c6.089 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.814v-.826h8.106s3.92.454 3.92-5.674c0-6.13-3.418-5.925-3.418-5.925h-2.04v2.872s.11 3.418-3.34 3.418H9.47v.855h5.819v3.79s.07 2.923-3.2 2.923H6.137S2.95 20 2.95 13.976c0-6.023 3.483-5.86 3.483-5.86l2.039-.006V5.239s-.11-3.42 3.34-3.42h5.736v-.855H8.729V.175s-.07-2.924 3.2-2.924h5.952" />
      <circle cx="15.3" cy="21.2" r=".9" fill="#09090b" />
    </svg>
  );
}

export function TailwindLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  );
}

export function DatabaseLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

export function BrainCpuLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}
