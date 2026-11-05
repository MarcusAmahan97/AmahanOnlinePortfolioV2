export default function ProjectCard({ title, children, className = "" }) {
  return (
    <div
      className={`bg-white/50 dark:bg-slate-800/50 rounded-xl border border-[var(--card-border)] p-5 sm:p-6 ${className}`}
    >
      {title && (
        <h3 className="text-lg sm:text-xl font-semibold text-center mb-4">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
