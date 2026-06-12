import { ArrowUpRight, Barcode, ClipboardCheck, LocateFixed, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ConditionMeter from '../components/ConditionMeter.jsx';
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
        [
          component.displayId,
          component.type,
          component.location,
          component.status,
          component.assetTag,
          component.bay,
        ]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  return (
    <div className="space-y-6 px-5 pt-6">
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="ops-kicker">Seed-bank register</p>
            <h1 className="mt-2 text-[2.35rem] font-black leading-none tracking-normal">
              Components
            </h1>
          </div>
          <span className="asset-chip mb-1">
            <Barcode size={13} strokeWidth={2.4} />
            SEED-12K
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <FleetStat label="Live canopy" value="87%" />
          <FleetStat label="Seed bank" value="1,612" />
          <FleetStat label="Refit nest" value="394" />
        </div>
      </section>

      <section className="sticky top-[73px] z-20 -mx-5 space-y-3 border-y border-[#1E6A45]/45 bg-canvas/95 px-5 py-3 backdrop-blur-md">
        <label className="flex h-12 items-center gap-3 rounded-full border border-[#1E6A45]/45 bg-surface px-4 shadow-soft">
          <Search size={18} className="shrink-0 text-faint" strokeWidth={2.2} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search asset, nest, migration or tenant"
            className="min-w-0 flex-1 bg-transparent text-sm font-bold text-ink outline-none placeholder:text-faint"
          />
        </label>
        <div className="hide-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={[
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-extrabold transition-colors',
                  isActive
                    ? 'border-accent bg-accent text-[#071B17] shadow-soft'
                    : 'border-[#1E6A45]/45 bg-surface text-muted',
                ].join(' ')}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        {visibleComponents.map((component) => (
          <Link
            key={component.id}
            to={`/components/${component.id}`}
            className="ops-card block rounded-2xl p-3.5 transition-transform active:scale-[0.99]"
          >
            <div className="ops-section">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="asset-chip">
                  <Barcode size={12} strokeWidth={2.5} />
                  {component.assetTag}
                </span>
                <StatusBadge status={component.status} />
              </div>

              <div className="flex gap-3">
                <ComponentIllustration
                  category={component.category}
                  className="h-28 w-28 shrink-0 rounded-xl"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xl font-black tracking-normal">
                        {component.displayId}
                      </p>
                      <p className="mt-1 truncate text-sm font-bold text-muted">
                        {component.type}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 shrink-0 text-faint" size={18} strokeWidth={2.2} />
                  </div>

                  <div className="mt-4 flex items-start gap-2 text-sm font-bold text-ink">
                    <LocateFixed className="mt-0.5 shrink-0 text-[#49B26B]" size={15} strokeWidth={2.3} />
                    <p className="min-w-0 truncate">{component.location}</p>
                  </div>

                  <div className="mt-3">
                    <ConditionMeter value={component.conditionScore} compact />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                <RecordCell label="Asset grade" value={component.grade} />
                <RecordCell label="Reuse ROI" value={component.roi} accent />
                <RecordCell label="Cycles" value={component.cycles} />
                <RecordCell label="Bay code" value={component.bay} wide />
              </div>

              <div className="mt-3 flex items-center justify-between rounded-xl border border-[#1E6A45]/45 bg-[#0E342B] px-3 py-2">
                <div className="flex items-center gap-2">
                  <ClipboardCheck size={15} className="text-[#49B26B]" strokeWidth={2.4} />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.05em] text-muted">
                      Migration path
                    </p>
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.05em] text-faint">
                      {routeCodeFor(component)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black text-ink">{component.lastInspection}</p>
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.05em] text-faint">
                    Next {component.nextService}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

function routeCodeFor(component) {
  if (component.location.includes('Canary Wharf')) {
    return 'LDN-CW-19';
  }

  if (component.location.includes('Hackney')) {
    return 'LDN-HWK-02';
  }

  if (component.location.includes('Stratford')) {
    return 'LDN-STF-03';
  }

  if (component.location.includes('Old Street')) {
    return 'LDN-OLD-03';
  }

  if (component.location.includes('Farringdon')) {
    return 'LDN-FAR-14';
  }

  if (component.location.includes('Liverpool')) {
    return 'LDN-LVS-06';
  }

  if (component.location.includes('Park Royal')) {
    return 'LDN-PRK-12';
  }

  return 'LDN-CIR-04';
}

function FleetStat({ label, value }) {
  return (
    <div className="rounded-xl border border-[#1E6A45]/45 bg-surface px-3 py-3 shadow-soft">
      <p className="text-lg font-black leading-none text-ink">{value}</p>
      <p className="mt-2 text-[0.64rem] font-black uppercase tracking-[0.06em] text-muted">
        {label}
      </p>
    </div>
  );
}

function RecordCell({ label, value, accent = false, wide = false }) {
  return (
    <div className={`${wide ? 'col-span-2' : ''} rounded-xl bg-[#0E342B] px-2.5 py-2`}>
      <p className="text-[0.62rem] font-black uppercase tracking-[0.06em] text-faint">
        {label}
      </p>
      <p className={`mt-1 truncate text-sm font-black ${accent ? 'text-accent' : 'text-ink'}`}>
        {value}
      </p>
    </div>
  );
}
