const statusStyles = {
  'In Use': {
    dot: 'bg-accent',
    label: 'text-accent',
    bg: 'bg-[#162F23]',
  },
  'In Warehouse': {
    dot: 'bg-[#71878C]',
    label: 'text-[#B8C4C6]',
    bg: 'bg-[#132B30]',
  },
  Refurbishing: {
    dot: 'bg-transit',
    label: 'text-transit',
    bg: 'bg-[#2D3518]',
  },
  Warning: {
    dot: 'bg-[#F08E8E]',
    label: 'text-[#F08E8E]',
    bg: 'bg-[#321E22]',
  },
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] ?? statusStyles['In Warehouse'];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-xs font-extrabold ${style.bg} ${style.label}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot} shadow-[0_0_0_3px_rgba(255,255,255,0.08)]`} />
      {status}
    </span>
  );
}
