import React from "react";

export function HtmlLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.9 4.2H4.6l.4 4.5h14l-.5 5.5-6.5 1.8-6.5-1.8-.3-3.4H3l.5 5.8 8.5 2.4 8.5-2.4 1-12.4z" />
    </svg>
  );
}

export function CssLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm4.2 4.2l.3 3.6h12l-.3 3.6H5.4l.3 3.6h11.7l-.6 6.3-4.8 1.4-4.8-1.4-.3-3.6H3.3l.5 5.9 8.2 2.3 8.2-2.3 1.1-13.1H5.7z" />
    </svg>
  );
}

export function TsLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" rx="3" fill="currentColor" />
      <path
        d="M7 8.5h10V11h-3.8v7.5h-2.4V11H7V8.5zm11.7 5.5c0-1.8 1.4-2.2 3.1-2.2 1.4 0 2.5.4 3.2 1.1l-1 1.8c-.6-.5-1.3-.7-2.1-.7-.9 0-1.3.3-1.3.6 0 .4.4.6 1.3.9l.9.3c1.6.6 2.3 1.3 2.3 2.6 0 1.8-1.4 2.5-3.3 2.5-1.6 0-2.7-.4-3.6-1.2l1.1-1.8c.7.6 1.6.9 2.5.9.8 0 1.4-.3 1.4-.7 0-.4-.4-.6-1.3-.9l-.9-.3c-1.5-.6-2.3-1.4-2.3-2.8z"
        fill="#09090b"
      />
    </svg>
  );
}

export function JsLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" rx="3" fill="currentColor" />
      <path
        d="M6 14.5v1.2c0 1.8 1 2.8 2.8 2.8 1.5 0 2.4-.8 2.4-2.2v-7.8h-2.2v7.8c0 .5-.3.8-.8.8s-.8-.3-.8-.8v-1.8H6zm8.8-.5c0-1.8 1.4-2.2 3.1-2.2 1.4 0 2.5.4 3.2 1.1l-1 1.8c-.6-.5-1.3-.7-2.1-.7-.9 0-1.3.3-1.3.6 0 .4.4.6 1.3.9l.9.3c1.6.6 2.3 1.3 2.3 2.6 0 1.8-1.4 2.5-3.3 2.5-1.6 0-2.7-.4-3.6-1.2l1.1-1.8c.7.6 1.6.9 2.5.9.8 0 1.4-.3 1.4-.7 0-.4-.4-.6-1.3-.9l-.9-.3c-1.5-.6-2.3-1.4-2.3-2.8z"
        fill="#09090b"
      />
    </svg>
  );
}

export function CppLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2zm-1.8 14.8c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3c1.4 0 2.6.7 3.3 1.7l-1.5 1.1c-.4-.6-1.1-1-1.8-1-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5c.7 0 1.4-.4 1.8-1l1.5 1.1c-.7 1-1.9 1.7-3.3 1.7zm6.8-3.3h1.2v-1.2h1v1.2h1.2v1h-1.2v1.2h-1v-1.2H17v-1zm-3.5 0h1.2v-1.2h1v1.2h1.2v1h-1.2v1.2h-1v-1.2h-1.2v-1z" />
    </svg>
  );
}

export function JavaLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.1 19.9s-1.8.1-2.6.2c-1.1.2-1.3.6-.8.8 1.4.6 4.3.5 6.9.3 2.7-.2 5.4.1 6.3.8.3.2.4.4.1.6-1.2.6-7.3.7-11.8-.4-1-.3-2.1-.9-1.3-1.6.8-.7 3.2-.7 3.2-.7zm-.5-2.5s-2.1.2-3.1.4c-1.3.2-1.6.7-.9 1 1.7.7 5.2.6 8.3.4 3.2-.3 6.5.1 7.6 1 .3.2.5.5.2.7-1.4.8-8.7.9-14.2-.5-1.2-.3-2.5-1-1.6-2 1-.9 3.7-.9 3.7-.9zm4.6-5.8c.8 1.2-.6 2.4-.6 2.4s2.3-.9 1.4-2.8c-.8-1.7-2.3-2.3-1.5-4 1.3-2.6-1.3-4.2-1.3-4.2s.5 1.2-.4 2.4c-1.1 1.5-.7 2.6-.2 3.6.8 1.4 1.6 1.4 2.6 2.6zm-2.4-7.2c-.5.8.4 1.8.4 1.8s-.9-.8-.6-1.7c.3-.9.9-1.2.9-1.9 0-.9-.7-1.4-.7-1.4s.5.6.3 1.1c-.1.6-.3 1-.3 1.5-.1.3 0 .7.1.7z" />
    </svg>
  );
}

export function PhpLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-5.4 13.8l.9-4.8c.3-.3.8-.5 1.4-.5.8 0 1.4.3 1.8.8.4.5.5 1.3.3 2.3-.3 1.5-1 2.7-2 3.5-.8.7-1.6.7-2.4-1.3zm3.1-2.2c.1-.6 0-1-.2-1.2-.2-.2-.6-.4-1-.4l-.5 2.8c.4 0 .8-.1 1-.3.4-.2.6-.5.7-.9zm5.3 2.2l.9-4.8h2.3l-.9 4.8h-2.3zm-1.8 0l.9-4.8c.3-.3.8-.5 1.4-.5.8 0 1.4.3 1.8.8.4.5.5 1.3.3 2.3-.3 1.5-1 2.7-2 3.5-.8.7-1.6.7-2.4-1.3zm3.1-2.2c.1-.6 0-1-.2-1.2-.2-.2-.6-.4-1-.4l-.5 2.8c.4 0 .8-.1 1-.3.4-.2.6-.5.7-.9z" />
    </svg>
  );
}

export function PythonSkillLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9 0C5.8 0 6.2 2.7 6.2 2.7l.01 2.8h5.8v.8H3.9S0 5.8 0 11.9c0 6.1 3.4 5.9 3.4 5.9h2v-2.9s-.1-3.4 3.3-3.4h5.7v-.9H8.7V6.8s-.1-2.9 3.2-2.9h6S21 4 21 10c0 6-3.5 5.9-3.5 5.9l-2 .01v2.9s.1 3.4-3.3 3.4H6.5v.9h5.8v3.8s.1 2.9-3.2 2.9H3.1" />
    </svg>
  );
}

export function DockerLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.9 8.2h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.7 0h2.2v2.2H8.4zm5.5-2.7h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.7 0h2.2v2.2H8.4zm8.3 5.4h2.2v2.2h-2.2zm-2.8 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2H11zm-2.7 0h2.2v2.2H8.4zm-2.8 0H7.8v2.2H5.6zm17.9 1.1c-.2-.1-1.9-1.2-4.4-.9-.3-1.6-1.5-2.6-1.7-2.7l-.4.3c.7 1.8.3 3.2.1 3.6-.8.4-2.1.4-2.2.4H1.3c-.6 3.1 1.4 7.2 6.6 7.2 6.4 0 10.7-3.7 11.8-8.1 2.4.1 3.6-1.1 3.8-1.2l-.3-.6z" />
    </svg>
  );
}

export function GitLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 10.9L13.1.5c-.7-.7-1.8-.7-2.5 0L8.2 2.9l3.2 3.2c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3.1 3.1c.8-.3 1.7-.1 2.3.5.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.6-.6-.8-1.5-.5-2.3L13 10.1v5.1c.2.2.4.5.4.8 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-.9.6-1.7 1.4-2V9.8c-.8-.3-1.4-1.1-1.4-2 0-.4.1-.7.3-1L6.2 3.7.5 9.4c-.7.7-.7 1.8 0 2.5l10.4 10.4c.7.7 1.8.7 2.5 0l10.1-10.1c.7-.6.7-1.8 0-2.3z" />
    </svg>
  );
}

export function FigmaLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm6-3h3a3 3 0 1 1 0 6h-3V3z" />
    </svg>
  );
}

export function AwsLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.8 11.2c-.7.2-1.4.5-1.9.9-.5.4-.8.9-.8 1.5 0 .8.3 1.4 1 1.8.6.4 1.4.6 2.3.6.8 0 1.6-.2 2.2-.6.7-.4 1.1-.9 1.4-1.6.1-.2.2-.5.2-.8V9.7c-.5-.3-1.1-.5-1.9-.7-.7-.2-1.5-.3-2.3-.3-1.5 0-2.6.4-3.4 1.1-.8.7-1.2 1.7-1.2 2.8 0 .6.1 1.2.4 1.7.3.5.7.9 1.2 1.2.5.3 1.2.5 2 .5 1 0 1.9-.3 2.7-.8.8-.5 1.4-1.2 1.7-2.1h1.5c-.3 1.3-1 2.3-2.2 3.1-1.1.8-2.5 1.2-4.1 1.2-1.2 0-2.3-.3-3.2-.8-1-.5-1.7-1.2-2.2-2.1-.5-.9-.8-1.9-.8-3.1 0-1.5.4-2.8 1.3-3.8.9-1 2.2-1.5 4-1.5 1.1 0 2.2.2 3.1.6 1 .4 1.8 1 2.4 1.7V5.7h1.6v8.4c0 .8.2 1.3.6 1.7.4.4 1 .6 1.7.6.6 0 1.1-.1 1.5-.3.4-.2.8-.5 1-1l1.3.9c-.4.7-1 1.3-1.7 1.7-.7.4-1.6.6-2.6.6-1.2 0-2.2-.4-2.9-1.1-.7-.8-1.1-1.8-1.1-3.1v-4.1h-1.6zm13.7 8.3c-5.8 3.5-13.4 3.5-18.7-.3-.2-.2-.2-.5 0-.7.2-.2.6-.1.8.1 4.9 3.5 11.9 3.5 17.3 0 .4-.3.9 0 .6.9zm1.7-1c-.2-.3-1.4-.4-2.6-.1-.3.1-.5 0-.4-.3.3-.8 1.5-2.2 2.5-1.6.4.2.6.8.5 2z" />
    </svg>
  );
}

export function CloudflareLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.3 11.2c-.3-.9-.9-1.7-1.7-2.2-.8-.6-1.7-.9-2.7-.9-1.2 0-2.3.5-3.2 1.3-.9.9-1.4 2-1.5 3.3-.8-.2-1.7-.1-2.4.3-.7.4-1.3 1-1.6 1.8-.3.8-.3 1.7 0 2.5.3.8.8 1.4 1.5 1.9H19c1.1 0 2.2-.5 3-1.3.8-.8 1.3-1.9 1.3-3 0-1.1-.4-2.1-1.2-2.9-.8-.8-1.8-1.3-2.8-1.3v.5z" />
    </svg>
  );
}

export function TerminalBashLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}

export function MarkdownLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3.5 16V8.5h2.5l2 2.7 2-2.7h2.5V16h-2v-4.5l-2.5 3.2-2.5-3.2V16h-2zm16.5-3.5h-2.5V8.5h-2v4H13l4.5 4.5 2.5-4.5z" />
    </svg>
  );
}

export function SwiftLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.8 14.6c-.1.3-.4.6-.7.8-2.6 1.9-5.9 2.5-9 1.8 4.7-1.4 8.2-5.4 8.7-10.4-2.8 3.5-6.7 5.7-11.2 6.1C13.5 10 15 5.8 15 2 9.4 6 5.6 12.3 5.4 19.3c3.2 2.7 7.5 3.9 11.7 3.2 4.1-.7 7.7-3.1 9.8-6.7-.4-.3-.7-.7-.9-1.2h-3.2z" />
    </svg>
  );
}

export function CLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8.16v7.68L12 19.69l6.66-3.85V8.16L12 4.31zm1.2 5.09c.68 0 1.25.21 1.71.64.46.43.72 1.01.78 1.76h-1.57c-.05-.41-.2-.72-.45-.92-.25-.2-.59-.3-.97-.3-.62 0-1.12.23-1.48.7-.36.47-.54 1.13-.54 1.98s.18 1.51.54 1.98c.36.47.86.7 1.48.7.4 0 .73-.1.97-.3.24-.2.4-.51.45-.92h1.57c-.06.75-.32 1.33-.78 1.76-.46.43-1.03.64-1.71.64-.99 0-1.81-.37-2.45-1.11-.64-.74-.96-1.73-.96-2.95s.32-2.21.96-2.95c.64-.74 1.46-1.11 2.45-1.11z" />
    </svg>
  );
}

export function ViteLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.56 3.16l-8.8 17.58a.9.9 0 0 1-1.6 0L2.44 3.16a.9.9 0 0 1 1.13-1.22l8.43 3.32 8.43-3.32a.9.9 0 0 1 1.13 1.22zM12 7.74L6.2 5.46l5.8 11.6 5.8-11.6-5.8 2.28z" />
    </svg>
  );
}

export function GithubSkillLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function VsCodeLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 1.5a1.5 1.5 0 0 1 1.06.44l4.5 4.5a1.5 1.5 0 0 1 .44 1.06v9a1.5 1.5 0 0 1-.44 1.06l-4.5 4.5a1.5 1.5 0 0 1-1.06.44 1.5 1.5 0 0 1-1.06-.44L9.5 15.1 4.4 19.3a1 1 0 0 1-1.4-.1l-1.7-2.1a1 1 0 0 1 .1-1.4L6.9 12 1.4 7.7a1 1 0 0 1-.1-1.4l1.7-2.1a1 1 0 0 1 1.4-.1l5.1 4.2 6.9-6.9a1.5 1.5 0 0 1 1.1-.4zm1 5.5l-6 5 6 5V7z" />
    </svg>
  );
}

export function MavenLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zm-8 7.3v5.4l8 4 8-4V9.3l-8 4-8-4z" />
    </svg>
  );
}

export function GradleLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V11c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5.5zm4-3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5S17 8.17 17 9v4.5zm-8 1c0 .83-.67 1.5-1.5 1.5S7 15.33 7 14.5V12c0-.83.67-1.5 1.5-1.5S10 11.17 10 12v2.5z" />
    </svg>
  );
}

export function PostmanLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 6.7l-2.8 1.8a2.5 2.5 0 0 0-3 0L7.7 8.7a.8.8 0 0 1 .4-1.4h7.8a.8.8 0 0 1 .4 1.4zm-4.3 8.3a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
    </svg>
  );
}

export function SpringLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.7 4.3a14.8 14.8 0 0 0-11 1.4C7.8 7.3 6.1 9.8 5.4 12.6c-.6 2.5-.2 5.1 1.1 7.2.2.3.6.4.9.2.3-.2.4-.6.2-.9-1.2-1.9-1.5-4.2-1-6.5.6-2.5 2.1-4.8 4.6-6.3 3.6-2.2 8-2.6 11.8-1.2.3.1.7-.1.8-.4.1-.3-.1-.7-.4-.8zm-6.2 5.9c-2.3 0-4.5 1-6 2.7-1.4 1.6-2 3.8-1.6 5.9.1.4.4.6.8.6h.1c.4-.1.6-.4.6-.8-.3-1.8.2-3.6 1.4-5 1.3-1.5 3.2-2.3 5.1-2.3.4 0 .7-.3.7-.7 0-.3-.3-.4-.7-.4z" />
    </svg>
  );
}

export function MySqlLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-4.41 0-8-1.34-8-3s3.59-3 8-3 8 1.34 8 3-3.59 3-8 3zm-9 1v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4c-2.12 1.48-5.35 2.3-9 2.3s-6.88-.82-9-2.3zm0 6v4c0 2.21 4.03 4 9 4s9-1.79 9-4v-4c-2.12 1.48-5.35 2.3-9 2.3s-6.88-.82-9-2.3z" />
    </svg>
  );
}

export function PostgresLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5c-3.03 0-5.5-2.47-5.5-5.5S10 7.5 13 7.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5zm-1-8c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
    </svg>
  );
}

export function SupabaseLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export function FirebaseLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.6 14.8l2.5-12.8c.1-.5.7-.7 1.1-.4l3.8 6.9-7.4 6.3zm14.8 0L17.2 4.1c-.2-.5-.8-.6-1.1-.2l-10.7 11 6.1 3.5c.6.3 1.3.3 1.9 0l6-3.6zm-1.8 1.4l-5.6 3.3c-.6.3-1.3.3-1.9 0l-5.7-3.3 5.4 9.1c.5.8 1.7.8 2.2 0l5.6-9.1z" />
    </svg>
  );
}

export function FirestoreLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.3l6.5 3.6-3.1 1.7L12 7.7 8.6 9.6 5.5 7.9 12 4.3zM5 9.7l3 1.7-3 1.7V9.7zm8 9.5l-6-3.3v-2.8l6 3.3 6-3.3v2.8l-6 3.3zm6-6.2l-3-1.7 3-1.7v3.4z" />
    </svg>
  );
}

export function GoogleCloudLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.467 5.467 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
    </svg>
  );
}

export function TailwindSkillLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}
