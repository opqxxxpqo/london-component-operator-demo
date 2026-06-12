import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  Factory,
  Route,
  Stamp,
  Wrench,
  Warehouse,
} from 'lucide-react';
import { Navigate, useParams } from 'react-router-dom';
import ConditionMeter from '../components/ConditionMeter.jsx';
import ComponentIllustration from '../components/ComponentIllustration.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import { components } from '../data/mockData.js';

const timelineIcons = {
  factory: Factory,
  building: Building2,
  warehouse: Warehouse,
  wrench: Wrench,
};

export default function ComponentDetail() {
  const { id } = useParams();
  const component = components.find((item) => item.id === id);

  if (!component) {
    return <Navigate to="/components" replace />;
  }

  return (
    <div className="space-y-7 px-5 pt-6">
      <section className="ops-card rounded-2xl p-4">
        <div className="ops-section">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="asset-chip">
              <Route size={12} strokeWidth={2.5} />
              Asset passport
            </span>
            <StatusBadge status={component.status} />
          </div>
          <ComponentIllustration
            category={component.category}
            className="mb-5 h-48 w-full rounded-2xl"
          />
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="ops-kicker">{component.assetTag}</p>
              <h1 className="mt-2 text-[2.45rem] font-black leading-none tracking-normal">
                {component.displayId}
              </h1>
              <p className="mt-3 text-sm font-bold leading-5 text-muted">
                {component.detailSubtitle ??
                  `${component.fullType} / ${component.dimensions} / Grade ${component.grade}`}
              </p>
            </div>
            <div className="rounded-xl border border-[#0E6F97]/45 bg-[#092633] px-3 py-2 text-center">
              <p className="text-[0.62rem] font-black uppercase text-faint">Grade</p>
              <p className="text-2xl font-black text-accent">{component.grade}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section">
          <div className="mb-4 flex items-center justify-between">
            <p className="ops-kicker">Current lease state</p>
            <CalendarClock size={18} className="text-accent" strokeWidth={2.4} />
          </div>
          <p className="text-2xl font-black leading-8 text-ink">
            {component.currentStatus ??
              `Currently at ${component.location}, held as ${component.status.toLowerCase()}`}
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <Record label="Bay" value={component.bay} />
            <Record label="Cycles" value={component.cycles} />
            <Record label="Next service" value={component.nextService} />
          </div>
          <div className="mt-3">
            <ConditionMeter value={component.conditionScore} label="Condition score" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-2">
        <FinancialMetric label="Initial cost" value={component.initialCost} />
        <FinancialMetric label="Revenue" value={component.totalRevenue} />
        <FinancialMetric label="ROI" value={component.roi} highlight />
      </section>

      {component.timeline && (
        <section className="ops-card rounded-2xl p-5">
          <div className="ops-section mb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="ops-kicker">Lifecycle passport</p>
                <h2 className="mt-1 text-2xl font-black tracking-normal">
                  Career timeline
                </h2>
                <p className="mt-2 text-sm font-bold leading-5 text-muted">
                  Every placement, inspection and refurbishment becomes part of the object's operating record.
                </p>
              </div>
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#083F5A] text-[#D8E6EA]">
                <Stamp size={21} strokeWidth={2.4} />
              </div>
            </div>
          </div>
          <div className="ops-section relative space-y-4">
            <div className="absolute left-[19px] top-4 h-[calc(100%-2rem)] w-px bg-[#0E6F97]" />
            {component.timeline.map((event, index) => {
              const Icon = timelineIcons[event.icon] ?? Building2;
              return (
                <div
                  key={`${event.date}-${event.title}`}
                  className="timeline-reveal relative flex gap-4"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#0E6F97]/50 bg-[#083F5A] text-[#D8E6EA] shadow-soft">
                    <Icon size={17} strokeWidth={2.3} />
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-[#0E6F97]/45 bg-[#092633] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-black uppercase tracking-[0.06em] text-accent">
                        {event.date}
                      </p>
                      <span className="rotate-[-2deg] rounded border border-[#DFFF00]/50 bg-[#DFFF00] px-2 py-1 text-[0.58rem] font-black uppercase tracking-[0.08em] text-[#06141C]">
                        {event.stamp}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-black leading-5 text-ink">
                      {event.title}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-muted">
                      {event.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {component.carbonComparison && (
        <section className="ops-card rounded-2xl p-5">
          <div className="ops-section">
            <p className="ops-kicker">Circulation impact</p>
            <h2 className="mt-2 text-3xl font-black leading-9 tracking-normal">
              Avoided {component.carbonAvoided}
            </h2>
            <p className="mt-2 text-sm font-bold leading-5 text-muted">
              Compared to single-use fit-out scenarios.
            </p>
            <div className="mt-5 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={component.carbonComparison}
                  layout="vertical"
                  margin={{ top: 4, right: 8, left: 8, bottom: 4 }}
                >
                  <XAxis type="number" hide domain={[0, 'dataMax + 80']} />
                  <YAxis type="category" dataKey="name" hide />
                  <Tooltip
                    cursor={{ fill: '#0B2E3A' }}
                    contentStyle={{
                      border: '1px solid rgba(223, 255, 0, 0.22)',
                      borderRadius: 12,
                      boxShadow: '0 18px 42px rgba(6, 17, 26, 0.14)',
                      fontSize: 12,
                      background: '#081820',
                      color: '#F7FFFF',
                    }}
                    formatter={(value) => [`${value} kgCO\u2082e`, 'Impact']}
                  />
                  <Bar dataKey="kg" radius={[0, 8, 8, 0]} barSize={26}>
                    {component.carbonComparison.map((item, index) => (
                      <Cell
                        key={item.name}
                        fill={index === 0 ? '#D8E6EA' : '#DFFF00'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {component.carbonComparison.map((item) => (
                <div key={item.name} className="rounded-xl bg-[#092633] px-3 py-3">
                  <p className="text-xs font-black uppercase tracking-[0.05em] text-muted">
                    {item.name}
                  </p>
                  <p className="mt-1 text-lg font-black">{item.kg} kgCO\u2082e</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {component.maintenanceLog && (
        <section className="ops-card rounded-2xl p-5">
          <div className="ops-section">
            <div className="flex items-center justify-between">
              <div>
                <p className="ops-kicker">Inspection ledger</p>
                <h2 className="mt-1 text-2xl font-black tracking-normal">
                  Maintenance log
                </h2>
              </div>
              <BadgeCheck size={22} className="text-accent" strokeWidth={2.4} />
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-[#0E6F97]/45 bg-[#092633]">
              <div className="grid grid-cols-[1fr_1.3fr_0.6fr] bg-[#0B2E3A] px-3 py-2 text-xs font-black uppercase tracking-[0.06em] text-faint">
                <span>Date</span>
                <span>Action</span>
                <span className="text-right">Cost</span>
              </div>
              {component.maintenanceLog.map((item) => (
                <div
                  key={`${item.date}-${item.action}`}
                  className="grid grid-cols-[1fr_1.3fr_0.6fr] border-t border-[#0E6F97]/35 px-3 py-3 text-sm"
                >
                  <span className="font-black text-ink">{item.date}</span>
                  <span className="font-bold text-muted">{item.action}</span>
                  <span className="text-right font-black text-ink">{item.cost}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function FinancialMetric({ label, value, highlight = false }) {
  return (
    <article className="rounded-2xl border border-[#0E6F97]/45 bg-surface px-3 py-4 shadow-soft">
      <p className="text-[0.63rem] font-black uppercase leading-3 tracking-[0.06em] text-muted">
        {label}
      </p>
      <p className={`mt-3 text-xl font-black leading-none ${highlight ? 'text-accent' : 'text-ink'}`}>
        {value}
      </p>
    </article>
  );
}

function Record({ label, value }) {
  return (
    <div className="rounded-xl bg-[#092633] px-3 py-3">
      <p className="text-[0.62rem] font-black uppercase tracking-[0.06em] text-faint">
        {label}
      </p>
      <p className="mt-1 truncate text-sm font-black text-ink">{value}</p>
    </div>
  );
}
