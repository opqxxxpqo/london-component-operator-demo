export default function MetricCard({ label, value, trend }) {
  return (
    <article className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
      <p className="min-h-9 text-xs font-semibold leading-4 text-muted">
        {label}
      </p>
      <p className="mt-3 text-[1.65rem] font-extrabold leading-none tracking-normal text-ink">
        {value}
      </p>
      <p className="mt-3 text-xs font-bold text-accent">{trend}</p>
    </article>
  );
}
