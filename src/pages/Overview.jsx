import {
  CheckCircle2,
  CircleDollarSign,
  Factory,
  Gauge,
  MapPinned,
  RadioTower,
  RefreshCcw,
  Send,
  Truck,
  UserPlus,
  Wrench,
} from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import MetricCard from '../components/MetricCard.jsx';
import {
  activities,
  kpis,
  networkLinks,
  networkLocations,
  operationsPulse,
  revenueTrend,
} from '../data/mockData.js';

const activityIcons = {
  dispatch: Send,
  repair: Wrench,
  tenant: UserPlus,
  warehouse: Factory,
  quality: CheckCircle2,
  move: Truck,
};

export default function Overview() {
  const dateLabel = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return (
    <div className="space-y-7 px-5 pt-6">
      <section className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="ops-kicker">London operations grid</p>
            <h1 className="mt-2 text-[2.35rem] font-black leading-[0.98] tracking-normal text-ink">
              Good morning, Sarah
            </h1>
            <p className="mt-3 text-sm font-bold text-muted">{dateLabel}</p>
          </div>
          <span className="asset-chip mt-1">
            <RadioTower size={12} strokeWidth={2.4} />
            Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {operationsPulse.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[#ded7ca] bg-surface/80 px-3 py-3 shadow-soft"
            >
              <p className="text-lg font-black leading-none text-ink">{item.value}</p>
              <p className="mt-2 text-[0.63rem] font-extrabold uppercase leading-3 tracking-[0.05em] text-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3.5">
        {kpis.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="ops-kicker">Circulation network</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">
              London network
            </h2>
            <p className="mt-1 text-sm font-bold text-muted">
              8 buildings / 3 warehouses / 18 dispatch lanes
            </p>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e5eee8] text-accent">
            <MapPinned size={20} strokeWidth={2.4} />
          </div>
        </div>
        <LondonNetworkMap />
        <div className="ops-section mt-4 grid grid-cols-3 gap-2">
          <MapSignal label="Fleet load" value="87%" />
          <MapSignal label="Transit" value="23" />
          <MapSignal label="Refit bays" value="11" />
        </div>
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section flex items-center justify-between gap-4">
          <div>
            <p className="ops-kicker">Event stream</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">
              Recent activity
            </h2>
          </div>
          <Gauge className="text-accent" size={22} strokeWidth={2.3} />
        </div>
        <div className="ops-section mt-5 divide-y divide-[#eee7db]">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type] ?? RefreshCcw;
            return (
              <div
                key={`${activity.text}-${activity.time}`}
                className="relative flex gap-3 py-3.5 first:pt-0 last:pb-0"
              >
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#dcd4c8] bg-[#f5efe5] text-accent">
                  <Icon size={16} strokeWidth={2.35} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-extrabold leading-5 text-ink">
                      {activity.text}
                    </p>
                    <span className="shrink-0 rounded-full bg-[#efe7db] px-2 py-1 text-[0.62rem] font-black text-muted">
                      {activity.lane}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.04em] text-faint">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section mb-5 flex items-center justify-between">
          <div>
            <p className="ops-kicker">Asset yield</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">
              Revenue trend
            </h2>
            <p className="mt-1 text-sm font-bold text-muted">
              Last 6 months MRR
            </p>
          </div>
          <CircleDollarSign className="text-accent" size={23} strokeWidth={2.3} />
        </div>
        <div className="ops-section h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueTrend} margin={{ top: 12, right: 8, left: 0, bottom: 4 }}>
              <CartesianGrid stroke="#E6DFD3" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B6B6B', fontSize: 12, fontWeight: 700 }}
              />
              <YAxis hide domain={['dataMin - 8000', 'dataMax + 8000']} />
              <Tooltip
                cursor={{ stroke: '#D8DDD1', strokeWidth: 1 }}
                contentStyle={{
                  border: '1px solid #DED7CA',
                  borderRadius: 12,
                  boxShadow: '0 14px 34px rgba(48, 42, 32, 0.10)',
                  fontSize: 12,
                  background: '#FFFCF7',
                }}
                formatter={(value) => [`\u00a3${value.toLocaleString()}`, 'MRR']}
              />
              <Line
                type="monotone"
                dataKey="mrr"
                stroke="#1F4D3F"
                strokeWidth={3}
                dot={{ r: 3.5, fill: '#1F4D3F', stroke: '#FFFCF7', strokeWidth: 2 }}
                activeDot={{ r: 5, fill: '#1F4D3F', stroke: '#FFFFFF', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

function MapSignal({ label, value }) {
  return (
    <div className="rounded-xl border border-[#e6dfd3] bg-[#f7f2e9] px-3 py-2">
      <p className="text-[0.62rem] font-black uppercase tracking-[0.06em] text-faint">
        {label}
      </p>
      <p className="mt-1 text-base font-black text-ink">{value}</p>
    </div>
  );
}

function LondonNetworkMap() {
  const locationByName = new Map(
    networkLocations.map((location) => [location.name, location]),
  );

  return (
    <div className="ops-section overflow-hidden rounded-2xl border border-[#e3dccf] bg-[#f8f3ea]">
      <svg viewBox="0 0 100 82" className="h-72 w-full" role="img" aria-label="Abstract London component network map">
        <defs>
          <pattern id="map-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0H0V10" fill="none" stroke="#EBE4D9" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="82" fill="url(#map-grid)" />
        <path
          d="M8 56C17 63 31 64 42 59C54 54 60 50 72 52C82 54 88 62 94 68"
          fill="none"
          stroke="#D6CEC0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {networkLinks.map(([from, to], index) => {
          const a = locationByName.get(from);
          const b = locationByName.get(to);
          const active = index === 8 || index === 9 || index === 10;
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={active ? '#B8742A' : '#D8DDD1'}
              strokeDasharray={active ? '3 3' : '0'}
              strokeLinecap="round"
              strokeWidth={active ? 1.4 : 0.8}
              className={active ? 'dispatch-flow' : ''}
            />
          );
        })}
        {networkLocations.map((location) => {
          const isWarehouse = location.kind === 'warehouse';
          const pulses =
            isWarehouse ||
            location.name === 'Canary Wharf' ||
            location.name === 'Shoreditch';

          return (
            <g key={location.name}>
              {pulses && (
                <circle
                  className="node-pulse"
                  cx={location.x}
                  cy={location.y}
                  r={isWarehouse ? 3.1 : 2.5}
                  fill={isWarehouse ? '#B8742A' : '#1F4D3F'}
                  opacity="0.25"
                  style={{ transformOrigin: `${location.x}px ${location.y}px` }}
                />
              )}
              <circle
                cx={location.x}
                cy={location.y}
                r={isWarehouse ? 3.3 : 2.5}
                fill={isWarehouse ? '#FFFCF7' : '#1F4D3F'}
                stroke={isWarehouse ? '#B8742A' : '#1F4D3F'}
                strokeWidth={isWarehouse ? 1.7 : 0}
              />
              <text
                x={location.x + location.labelX}
                y={location.y + location.labelY}
                fill="#5E594F"
                fontSize="3.35"
                fontWeight="800"
              >
                {location.name}
              </text>
              <text
                x={location.x + 3.8}
                y={location.y + 4.8}
                fill="#9B9285"
                fontSize="2.5"
                fontWeight="800"
              >
                {location.load}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
