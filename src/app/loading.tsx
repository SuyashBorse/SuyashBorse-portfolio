export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090b] text-white"
      role="status"
      aria-label="Loading"
    >
      <div className="w-6 h-6 border-2 border-zinc-700 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  );
}
