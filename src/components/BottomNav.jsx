import { Boxes, LayoutDashboard, Workflow } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { label: 'Overview', to: '/overview', icon: LayoutDashboard },
  { label: 'Components', to: '/components', icon: Boxes },
  { label: 'Matching', to: '/matching', icon: Workflow },
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-[430px] border-t border-[#DFFF00]/20 bg-surface/95 px-4 pb-3 pt-2 shadow-[0_-24px_52px_rgba(0,0,0,0.42)]">
      <div className="grid grid-cols-3 gap-1">
        {tabs.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                'flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-xs font-semibold transition-colors',
                isActive ? 'bg-[#06141C] text-accent' : 'text-faint',
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
