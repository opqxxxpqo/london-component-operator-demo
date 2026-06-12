const statusStyles = {
  'In Use': {
    dot: 'bg-[#071B17]',
    label: 'text-[#071B17]',
    bg: 'bg-accent',
  },
  'In Warehouse': {
    dot: 'bg-[#DDE8E3]',
    label: 'text-[#DDE8E3]',
    bg: 'bg-[#0E342B]',
  },
  Refurbishing: {
    dot: 'bg-transit',
    label: 'text-[#DDE8E3]',
    bg: 'bg-[#1E6A45]',
  },
  Warning: {
    dot: 'bg-[#B65F5F]',
    label: 'text-[#F0DEDA]',
    bg: 'bg-[#3A1717]',
  },
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] ?? statusStyles['In Warehouse'];
  const label = status === 'In Warehouse' ? 'Seed Bank' : status;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-xs font-extrabold shadow-[inset_0_1px_0_rgba(221,232,227,0.14)] ${style.bg} ${style.label}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot} shadow-[0_0_0_3px_rgba(221,232,227,0.16)]`} />
      {label}
    </span>
  );
}
