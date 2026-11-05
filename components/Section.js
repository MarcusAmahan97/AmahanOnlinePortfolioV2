export default function Section({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={`max-w-5xl mx-auto px-4 sm:px-6 mb-12 ${className}`}
    >
      <div className="glass-card p-6 sm:p-8">
        <h2 className="font-script text-2xl sm:text-3xl font-normal text-center mb-6 tracking-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
