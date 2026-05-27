import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-50 mx-auto w-full max-w-[430px] px-5">
      <div className="flex items-center gap-3 rounded-lg bg-accent px-4 py-3 text-sm font-bold text-white shadow-soft">
        <CheckCircle2 size={18} strokeWidth={2.3} />
        {message}
      </div>
    </div>
  );
}
