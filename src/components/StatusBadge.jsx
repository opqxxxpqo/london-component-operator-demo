const statusStyles = {
  'In Use': {
    dot: 'bg-accent',
    label: 'text-accent',
    bg: 'bg-[#E7F0EC]',
  },
  'In Warehouse': {
    dot: 'bg-[#8B8F8C]',
    label: 'text-[#5F6461]',
    bg: 'bg-[#EFEFEE]',
  },
  Refurbishing: {
    dot: 'bg-[#B7791F]',
    label: 'text-[#8A5A17]',
    bg: 'bg-[#F5EBDD]',
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
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${style.bg} ${style.label}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}
