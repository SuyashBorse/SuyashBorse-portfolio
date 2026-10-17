export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center bg-[#0a0a0a]">
      <div className="max-w-2xl p-8 rounded-2xl glass-panel border border-zinc-800 shadow-glow-indigo">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Suyash Anil Borse Portfolio • Phase 1 Scaffold
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Suyash Anil Borse
          </span>
        </h1>
        <p className="text-zinc-400 text-lg mb-6 font-mono">
          Java Developer | Web Engineer | Algorithmic Problem Solver
        </p>
        <p className="text-zinc-500 text-sm">
          Scaffolding successfully initialized with Next.js, TypeScript, Tailwind CSS, Lucide React, and Framer Motion.
        </p>
      </div>
    </main>
  );
}
