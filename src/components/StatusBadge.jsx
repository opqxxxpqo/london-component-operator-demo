const statusStyles = {
  'In Use': {
    dot: 'bg-[#101814]',
    label: 'text-[#101814]',
    bg: 'bg-accent',
  },
  'In Warehouse': {
    dot: 'bg-[#8D9389]',
    label: 'text-[#5F665F]',
    bg: 'bg-[#E1E2D8]',
  },
  Refurbishing: {
    dot: 'bg-transit',
    label: 'text-[#5F7412]',
    bg: 'bg-[#EFF2D5]',
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
