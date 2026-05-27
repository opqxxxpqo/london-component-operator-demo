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
  Building2,
  Factory,
  Wrench,
  Warehouse,
} from 'lucide-react';
import { Navigate, useParams } from 'react-router-dom';
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
    <div className="space-y-6 px-5 pt-5">
      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <ComponentIllustration
          category={component.category}
          className="mb-5 h-44 w-full"
        />
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-normal">
              {component.displayId}
            </h1>
            <p className="mt-2 text-sm font-semibold leading-5 text-muted">
              {component.detailSubtitle ??
                `${component.fullType} · ${component.dimensions} · Grade ${component.grade}`}
            </p>
          </div>
          <StatusBadge status={component.status} />
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <p className="text-xs font-bold uppercase tracking-[0.08em] text-faint">
          Current status
        </p>
        <p className="mt-3 text-xl font-extrabold leading-7 text-ink">
          {component.currentStatus ??
            `Currently at ${component.location}, held as ${component.status.toLowerCase()}`}
        </p>
      </section>

      <section className="space-y-3">
        <HorizontalMetric label="Initial Cost" value={component.initialCost} />
        <HorizontalMetric label="Total Revenue" value={component.totalRevenue} />
        <HorizontalMetric label="ROI" value={component.roi} highlight />
      </section>

      {component.timeline && (
        <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
          <div className="mb-5">
            <h2 className="text-xl font-extrabold tracking-normal">
              Career timeline
            </h2>
            <p className="mt-1 text-sm font-medium text-muted">
              Lifecycle record, revenue context and maintenance trace.
            </p>
          </div>
          <div className="relative space-y-5">
            <div className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-px bg-neutral-200" />
            {component.timeline.map((event) => {
              const Icon = timelineIcons[event.icon] ?? Building2;
              return (
                <div key={`${event.date}-${event.title}`} className="relative flex gap-4">
                  <div className="z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-neutral-200 bg-white text-accent">
                    <Icon size={15} strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0 flex-1 pb-1">
                    <p className="text-xs font-extrabold text-accent">
                      {event.date}
                    </p>
                    <p className="mt-1 text-sm font-extrabold leading-5 text-ink">
                      {event.title}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-5 text-muted">
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
        <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
          <p className="text-sm font-semibold text-muted">Carbon impact</p>
          <h2 className="mt-2 text-2xl font-extrabold leading-8 tracking-normal">
            Avoided {component.carbonAvoided}
          </h2>
          <p className="mt-1 text-sm font-semibold leading-5 text-muted">
            compared to single-use scenarios
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
                  cursor={{ fill: '#F6F7F6' }}
                  contentStyle={{
                    border: '1px solid #E5E7E5',
                    borderRadius: 8,
                    boxShadow: '0 8px 24px rgba(26, 26, 26, 0.05)',
                    fontSize: 12,
                  }}
                  formatter={(value) => [`${value} kgCO₂e`, 'Impact']}
                />
                <Bar dataKey="kg" radius={[0, 6, 6, 0]} barSize={24}>
                  {component.carbonComparison.map((item, index) => (
                    <Cell
                      key={item.name}
                      fill={index === 0 ? '#D8DDD9' : '#1F4D3F'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {component.carbonComparison.map((item) => (
              <div key={item.name} className="rounded-lg bg-[#F6F7F6] px-3 py-2">
                <p className="text-xs font-bold text-muted">{item.name}</p>
                <p className="mt-1 text-sm font-extrabold">{item.kg} kgCO₂e</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {component.maintenanceLog && (
        <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
          <h2 className="text-xl font-extrabold tracking-normal">
            Maintenance log
          </h2>
          <div className="mt-4 overflow-hidden rounded-lg border border-neutral-100">
            <div className="grid grid-cols-[1fr_1.3fr_0.6fr] bg-[#F6F7F6] px-3 py-2 text-xs font-extrabold uppercase text-faint">
              <span>Date</span>
              <span>Action</span>
              <span className="text-right">Cost</span>
            </div>
            {component.maintenanceLog.map((item) => (
              <div
                key={`${item.date}-${item.action}`}
                className="grid grid-cols-[1fr_1.3fr_0.6fr] border-t border-neutral-100 px-3 py-3 text-sm"
              >
                <span className="font-bold text-ink">{item.date}</span>
                <span className="font-semibold text-muted">{item.action}</span>
                <span className="text-right font-extrabold text-ink">{item.cost}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function HorizontalMetric({ label, value, highlight = false }) {
  return (
    <article className="flex items-center justify-between rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
      <p className="text-sm font-bold text-muted">{label}</p>
      <p className={`text-xl font-extrabold ${highlight ? 'text-accent' : 'text-ink'}`}>
        {value}
      </p>
    </article>
  );
}
