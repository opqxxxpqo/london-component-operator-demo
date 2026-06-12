const statusStyles = {
  'In Use': {
    dot: 'bg-[#06141C]',
    label: 'text-[#06141C]',
    bg: 'bg-accent',
  },
  'In Warehouse': {
    dot: 'bg-[#D8E6EA]',
    label: 'text-[#D8E6EA]',
    bg: 'bg-[#092633]',
  },
  Refurbishing: {
    dot: 'bg-transit',
    label: 'text-[#F7FFFF]',
    bg: 'bg-[#0E6F97]',
  },
  Warning: {
    dot: 'bg-[#B65F5F]',
    label: 'text-[#7D3F3F]',
    bg: 'bg-[#F0DEDA]',
  },
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] ?? statusStyles['In Warehouse'];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-1 text-xs font-extrabold ${style.bg} ${style.label}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot} shadow-[0_0_0_3px_rgba(255,255,255,0.45)]`} />
      {status}
    </span>
  );
}
