import { ArrowLeft, Blocks } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AppHeader({ showBack = false }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 border-b border-[#ded7ca]/80 bg-surface px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-3">
          {showBack ? (
            <button
              type="button"
              onClick={() => navigate('/components')}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#ded7ca] bg-surface text-ink shadow-soft"
              aria-label="Back to components"
            >
              <ArrowLeft size={18} strokeWidth={2.2} />
            </button>
          ) : (
            <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-white shadow-soft">
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-transit" />
              <Blocks size={18} strokeWidth={2.2} />
            </div>
          )}
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold tracking-normal text-ink">
              LCO
            </p>
            <p className="truncate text-xs font-semibold text-muted">
              City asset circulation
            </p>
          </div>
        </div>
        <div
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#ded7ca] bg-surface text-sm font-bold text-accent shadow-soft"
          aria-label="Sarah profile"
        >
          S
        </div>
      </div>
    </header>
  );
}
