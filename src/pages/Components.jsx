import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ComponentIllustration from '../components/ComponentIllustration.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { components } from '../data/mockData.js';

const filters = ['All', 'Partitions', 'Furniture', 'Pods', 'Lighting'];

export default function Components() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleComponents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return components.filter((component) => {
      const matchesFilter =
        activeFilter === 'All' || component.category === activeFilter;
      const matchesSearch =
        !normalizedQuery ||
        [component.displayId, component.type, component.location, component.status]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  return (
    <div className="space-y-5 px-5 pt-5">
      <section>
        <p className="text-sm font-semibold text-muted">Asset fleet</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-normal">
          Components
        </h1>
      </section>

      <section className="space-y-3">
        <label className="flex h-12 items-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 shadow-soft">
          <Search size={18} className="shrink-0 text-faint" strokeWidth={2.2} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search components"
            className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-faint"
          />
        </label>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors',
                  isActive
                    ? 'border-accent bg-accent text-white'
                    : 'border-neutral-200 bg-white text-muted',
                ].join(' ')}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-3">
        {visibleComponents.map((component) => (
          <Link
            key={component.id}
            to={`/components/${component.id}`}
            className="block rounded-lg border border-neutral-200/80 bg-white p-3 shadow-soft transition-transform active:scale-[0.99]"
          >
            <div className="flex gap-3">
              <ComponentIllustration
                category={component.category}
                className="h-24 w-28 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-base font-extrabold tracking-normal">
                      {component.displayId}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-semibold text-muted">
                      {component.type}
                    </p>
                  </div>
                  <StatusBadge status={component.status} />
                </div>
                <p className="mt-4 truncate text-sm font-semibold text-ink">
                  {component.location}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-[#F6F7F6] px-3 py-2">
                    <p className="text-[0.68rem] font-bold uppercase text-faint">
                      Grade
                    </p>
                    <p className="text-sm font-extrabold">{component.grade}</p>
                  </div>
                  <div className="rounded-lg bg-[#F6F7F6] px-3 py-2">
                    <p className="text-[0.68rem] font-bold uppercase text-faint">
                      ROI
                    </p>
                    <p className="text-sm font-extrabold text-accent">
                      {component.roi}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
