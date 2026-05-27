import { CheckCircle2, ChevronDown, ChevronUp, Clock3, MapPin, PackageCheck } from 'lucide-react';
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

  return (
    <div className="space-y-5 px-5 pt-5">
      <section>
        <p className="text-sm font-semibold text-muted">48-hour deployment</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-normal">
          Matching
        </h1>
      </section>

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-faint">
              New project
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-normal">
              {matchingProject.tenant}
            </h2>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#E7F0EC] text-accent">
            <MapPin size={19} strokeWidth={2.3} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <ProjectFact label="Location" value={matchingProject.location} />
          <ProjectFact label="Move-in" value={matchingProject.moveIn} />
          <ProjectFact label="Lease term" value={matchingProject.leaseTerm} />
          <ProjectFact label="Status" value="Match ready" />
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <h2 className="text-xl font-extrabold tracking-normal">
          Requirements
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {requirements.map((requirement) => (
            <div
              key={requirement}
              className="rounded-lg border border-neutral-100 bg-[#F6F7F6] px-3 py-3"
            >
              <p className="text-sm font-extrabold text-ink">{requirement}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-normal">
              Matching results
            </h2>
            <p className="mt-1 text-sm font-semibold text-muted">
              Matched 47 components from 2 warehouses
            </p>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#E7F0EC] text-accent">
            <PackageCheck size={20} strokeWidth={2.3} />
          </div>
        </div>

        <div className="mt-4 divide-y divide-neutral-100">
          {visibleMatches.map((match) => (
            <div key={match.id} className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
              <div className="min-w-0">
                <p className="text-sm font-extrabold text-ink">
                  {match.id} · {match.type}
                </p>
                <p className="mt-1 truncate text-sm font-semibold text-muted">
                  {match.warehouse}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#F6F7F6] px-3 py-1 text-xs font-extrabold text-accent">
                ETA {match.eta}
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-extrabold text-accent"
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

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <h2 className="text-xl font-extrabold tracking-normal">
          Installation schedule
        </h2>
        <div className="relative mt-5 space-y-4">
          <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-neutral-200" />
          {installationSchedule.map((item) => (
            <div key={`${item.day}-${item.time}`} className="relative flex gap-4">
              <div className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neutral-200 bg-white text-accent">
                <Clock3 size={17} strokeWidth={2.2} />
              </div>
              <div className="min-w-0 flex-1 rounded-lg bg-[#F6F7F6] px-3 py-3">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-xs font-extrabold text-accent">
                    {item.day}
                  </p>
                  <p className="text-xs font-bold text-faint">{item.time}</p>
                </div>
                <p className="mt-1 text-sm font-extrabold text-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-sm font-medium leading-5 text-muted">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <h2 className="text-xl font-extrabold tracking-normal">
          Financial summary
        </h2>
        <div className="mt-4 divide-y divide-neutral-100">
          {matchingFinancials.map((item) => (
            <div key={item.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <p className="text-sm font-bold text-muted">{item.label}</p>
              <p className="text-lg font-extrabold text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <button
        type="button"
        onClick={() => setToastMessage('Dispatch confirmed')}
        className="mb-2 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-base font-extrabold text-white shadow-soft transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-[0.99]"
      >
        <CheckCircle2 size={20} strokeWidth={2.4} />
        Confirm Dispatch
      </button>

      <Toast message={toastMessage} />
    </div>
  );
}

function ProjectFact({ label, value }) {
  return (
    <div className="rounded-lg bg-[#F6F7F6] px-3 py-3">
      <p className="text-[0.68rem] font-bold uppercase text-faint">{label}</p>
      <p className="mt-1 text-sm font-extrabold leading-5 text-ink">{value}</p>
    </div>
  );
}
