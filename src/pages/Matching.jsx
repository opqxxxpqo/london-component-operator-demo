import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  MapPin,
  PackageCheck,
  Radar,
  Route,
  Truck,
  Warehouse,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import Toast from '../components/Toast.jsx';
import {
  installationSchedule,
  matchingFinancials,
  matchingProject,
  matchingResults,
  requirements,
} from '../data/mockData.js';

export default function Matching() {
  const [showAll, setShowAll] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [dispatchConfirmed, setDispatchConfirmed] = useState(false);

  const visibleMatches = useMemo(
    () => (showAll ? matchingResults : matchingResults.slice(0, 3)),
    [showAll],
  );

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setToastMessage(''), 2400);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  function confirmDispatch() {
    setDispatchConfirmed(true);
    setToastMessage('Migration confirmed');
  }

  return (
    <div className="space-y-6 px-5 pt-6">
      <section className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="ops-kicker">48-hour migration engine</p>
            <h1 className="mt-2 text-[2.35rem] font-black leading-none tracking-normal">
              Matching
            </h1>
          </div>
          <span className="asset-chip living-chip mt-1">
            <Radar size={12} strokeWidth={2.5} />
            Alive
          </span>
        </div>
        <DispatchRoute active={dispatchConfirmed} />
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="ops-kicker">New project</p>
            <h2 className="mt-2 text-3xl font-black leading-none tracking-normal">
              {matchingProject.tenant}
            </h2>
            <p className="mt-2 text-xs font-black uppercase tracking-[0.06em] text-faint">
              {matchingProject.reference}
            </p>
          </div>
          <div className="toe-pad grid h-11 w-11 shrink-0 place-items-center text-ink">
            <MapPin size={20} strokeWidth={2.4} />
          </div>
        </div>
        <div className="ops-section grid grid-cols-2 gap-3">
          <ProjectFact label="Location" value={matchingProject.location} />
          <ProjectFact label="Move-in" value={matchingProject.moveIn} />
          <ProjectFact label="Lease term" value={matchingProject.leaseTerm} />
          <ProjectFact label="State" value={dispatchConfirmed ? 'Migration live' : 'Match ready'} />
          <ProjectFact label="Route code" value="LDN-E2A-14" />
          <ProjectFact label="Reuse score" value="91%" />
        </div>
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section flex items-center justify-between">
          <div>
            <p className="ops-kicker">Habitat manifest</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">
              Requirements
            </h2>
          </div>
          <PackageCheck className="text-accent" size={22} strokeWidth={2.4} />
        </div>
        <div className="ops-section mt-4 grid grid-cols-2 gap-3">
          {requirements.map((requirement, index) => (
            <div
              key={requirement}
              className="rounded-xl border border-[#1E6A45]/45 bg-[#0E342B] px-3 py-3"
            >
              <p className="text-[0.62rem] font-black uppercase tracking-[0.06em] text-faint">
                Line {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-1 text-sm font-black text-ink">{requirement}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section flex items-start justify-between gap-4">
          <div>
            <p className="ops-kicker">Seed-bank routing logic</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">
              Matched 47 components
            </h2>
            <p className="mt-1 text-sm font-bold text-muted">
              2 seed banks / 6-hour longest ETA / 91% reuse fit
            </p>
          </div>
          <div className="toe-pad grid h-11 w-11 shrink-0 place-items-center text-ink">
            <Truck size={22} strokeWidth={2.4} />
          </div>
        </div>

        <div className="ops-section mt-5 divide-y divide-[#1E6A45]/35">
          {visibleMatches.map((match) => (
            <div key={match.id} className="py-3.5 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-base font-black text-ink">
                    {match.id} / {match.type}
                  </p>
                  <p className="mt-1 truncate text-sm font-bold text-muted">
                    {match.warehouse}
                  </p>
                </div>
                <span className="eta-pill">
                  <Clock3 size={13} strokeWidth={2.4} />
                  ETA {match.eta}
                </span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <RouteLine />
                <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                  <p className="truncate text-xs font-black uppercase tracking-[0.05em] text-muted">
                    {match.route}
                  </p>
                  <span className="rounded-full bg-[#0E342B] px-2 py-1 text-[0.62rem] font-black text-[#DDE8E3]">
                    {match.state}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="ops-section mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-[#1E6A45]/45 bg-surface px-4 py-3 text-sm font-black text-accent"
        >
          {showAll ? (
            <>
              Show fewer <ChevronUp size={16} strokeWidth={2.4} />
            </>
          ) : (
            <>
              Show all 47 <ChevronDown size={16} strokeWidth={2.4} />
            </>
          )}
        </button>
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section">
            <p className="ops-kicker">Canopy runbook</p>
          <h2 className="mt-1 text-2xl font-black tracking-normal">
            Installation schedule
          </h2>
        </div>
        <div className="ops-section relative mt-5 space-y-4">
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-[#49B26B]" />
          {installationSchedule.map((item, index) => (
            <div
              key={`${item.day}-${item.time}`}
              className="timeline-reveal relative flex gap-4"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="toe-pad z-10 grid h-10 w-10 shrink-0 place-items-center border text-ink shadow-soft">
                <Clock3 size={17} strokeWidth={2.3} />
              </div>
              <div className="min-w-0 flex-1 rounded-2xl border border-[#1E6A45]/45 bg-[#0E342B] px-3 py-3">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-xs font-black uppercase tracking-[0.06em] text-accent">
                    {item.day}
                  </p>
                  <p className="text-xs font-black text-faint">{item.time}</p>
                </div>
                <p className="mt-1 text-sm font-black text-ink">{item.title}</p>
                <p className="mt-1 text-sm font-semibold leading-5 text-muted">
                  {item.detail}
                </p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#071B17]">
                  <div
                    className={`h-full rounded-full ${dispatchConfirmed ? 'bg-transit' : 'bg-accent'}`}
                    style={{ width: `${dispatchConfirmed ? item.progress : Math.max(12, item.progress - 24)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section">
            <p className="ops-kicker">Yield summary</p>
          <h2 className="mt-1 text-2xl font-black tracking-normal">
            Financial summary
          </h2>
          <div className="mt-5 divide-y divide-[#1E6A45]/35">
            {matchingFinancials.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                <p className="text-sm font-black text-muted">{item.label}</p>
                <p className="text-xl font-black text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={confirmDispatch}
        className={`mb-2 flex h-14 w-full items-center justify-center gap-2 rounded-full px-5 text-base font-black text-[#071B17] shadow-lift transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas active:scale-[0.99] ${
          dispatchConfirmed ? 'bg-transit' : 'bg-accent'
        }`}
      >
        <CheckCircle2 size={20} strokeWidth={2.4} />
        {dispatchConfirmed ? 'Migration Live' : 'Confirm Migration'}
      </button>

      <Toast message={toastMessage} />
    </div>
  );
}

function DispatchRoute({ active }) {
  return (
    <div className="ops-card living-panel rounded-2xl p-4">
      <div className="ops-section space-y-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.62rem] font-black uppercase tracking-[0.07em] text-faint">
            LDN-E2A-14 / migration confidence
          </p>
          <span className={active ? 'eta-pill' : 'asset-chip'}>
            {active ? 'Migrating' : '91% reuse fit'}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <RoutePoint icon={Warehouse} label="Stratford" detail="Pick + scan" />
          <div className="relative h-12 flex-1">
            <svg viewBox="0 0 120 48" className="h-full w-full" aria-hidden="true">
              <path
                d="M6 24C36 7 71 41 114 18"
                fill="none"
                stroke="#49B26B"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <path
                className="migration-flow"
                d="M6 24C36 7 71 41 114 18"
                fill="none"
                stroke={active ? '#C7F000' : '#49B26B'}
                strokeDasharray="8 10"
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>
          </div>
          <RoutePoint icon={MapPin} label="EC2A" detail={active ? 'Migrating' : 'Reserved'} />
        </div>
      </div>
    </div>
  );
}

function RoutePoint({ icon: Icon, label, detail }) {
  return (
    <div className="w-20 text-center">
      <div className="toe-pad mx-auto grid h-10 w-10 place-items-center border text-ink shadow-soft">
        <Icon size={18} strokeWidth={2.4} />
      </div>
      <p className="mt-2 text-xs font-black text-ink">{label}</p>
      <p className="text-[0.62rem] font-black uppercase tracking-[0.05em] text-faint">
        {detail}
      </p>
    </div>
  );
}

function RouteLine() {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <span className="h-2 w-2 rounded-full bg-accent" />
      <span className="h-px w-8 bg-[#49B26B]" />
      <span className="h-2 w-2 rounded-full bg-transit" />
    </div>
  );
}

function ProjectFact({ label, value }) {
  return (
    <div className="rounded-xl bg-[#0E342B] px-3 py-3">
      <p className="text-[0.64rem] font-black uppercase tracking-[0.06em] text-faint">{label}</p>
      <p className="mt-1 text-sm font-black leading-5 text-ink">{value}</p>
    </div>
  );
}
