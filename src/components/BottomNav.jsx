import { Boxes, LayoutDashboard, Workflow } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { label: 'Overview', to: '/overview', icon: LayoutDashboard },
  { label: 'Components', to: '/components', icon: Boxes },
  { label: 'Matching', to: '/matching', icon: Workflow },
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[430px] border-t border-[#ded7ca] bg-surface px-4 pb-3 pt-2 shadow-[0_-10px_30px_rgba(48,42,32,0.08)]">
      <div className="grid grid-cols-3 gap-1">
        {tabs.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                'flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs font-semibold transition-colors',
                isActive ? 'bg-[#e9efe9] text-accent' : 'text-faint',
              ].join(' ')
            }
          >
            <Icon size={20} strokeWidth={2.2} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
