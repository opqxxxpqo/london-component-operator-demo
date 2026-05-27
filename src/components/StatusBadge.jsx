const statusStyles = {
  'In Use': {
    dot: 'bg-accent',
    label: 'text-accent',
    bg: 'bg-[#E4EEE8]',
  },
  'In Warehouse': {
    dot: 'bg-[#8A8173]',
    label: 'text-[#635C52]',
    bg: 'bg-[#EEE9DF]',
  },
  Refurbishing: {
    dot: 'bg-transit',
    label: 'text-[#86511C]',
    bg: 'bg-[#F3E4D0]',
  },
  Warning: {
    dot: 'bg-[#A54B4B]',
    label: 'text-[#8A3F3F]',
    bg: 'bg-[#F3E3E3]',
  },
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] ?? statusStyles['In Warehouse'];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-black/5 px-2.5 py-1 text-xs font-extrabold ${style.bg} ${style.label}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot} shadow-[0_0_0_3px_rgba(255,255,255,0.55)]`} />
      {status}
    </span>
  );
}
