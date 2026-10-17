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
