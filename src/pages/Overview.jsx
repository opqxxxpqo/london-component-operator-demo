import {
  CheckCircle2,
  CircleDollarSign,
  Factory,
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
    <div className="space-y-6 px-5 pt-5">
      <section>
        <p className="text-sm font-semibold text-muted">{dateLabel}</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-normal text-ink">
          Good morning, Sarah
        </h1>
      </section>

      <section className="grid grid-cols-2 gap-3">
        {kpis.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-normal">
              London network
            </h2>
            <p className="mt-1 text-sm font-medium text-muted">
              8 buildings · 3 warehouses
            </p>
          </div>
          <span className="rounded-full bg-[#E7F0EC] px-3 py-1 text-xs font-bold text-accent">
            Live
          </span>
        </div>
        <LondonNetworkMap />
      </section>

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <h2 className="text-xl font-extrabold tracking-normal">
          Recent activity
        </h2>
        <div className="mt-4 divide-y divide-neutral-100">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type] ?? RefreshCcw;
            return (
              <div key={`${activity.text}-${activity.time}`} className="flex gap-3 py-3 first:pt-0 last:pb-0">
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#E7F0EC] text-accent">
                  <Icon size={16} strokeWidth={2.25} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-5 text-ink">
                    {activity.text}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-faint">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200/80 bg-white p-4 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold tracking-normal">
              Revenue trend
            </h2>
            <p className="mt-1 text-sm font-medium text-muted">
              Last 6 months MRR
            </p>
          </div>
          <CircleDollarSign className="text-accent" size={22} strokeWidth={2.2} />
        </div>
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueTrend} margin={{ top: 12, right: 8, left: 0, bottom: 4 }}>
              <CartesianGrid stroke="#ECEEEC" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B6B6B', fontSize: 12, fontWeight: 600 }}
              />
              <YAxis hide domain={['dataMin - 8000', 'dataMax + 8000']} />
              <Tooltip
                cursor={{ stroke: '#D8DDD9', strokeWidth: 1 }}
                contentStyle={{
                  border: '1px solid #E5E7E5',
                  borderRadius: 8,
                  boxShadow: '0 8px 24px rgba(26, 26, 26, 0.05)',
                  fontSize: 12,
                }}
                formatter={(value) => [`£${value.toLocaleString()}`, 'MRR']}
              />
              <Line
                type="monotone"
                dataKey="mrr"
                stroke="#1F4D3F"
                strokeWidth={2.5}
                dot={{ r: 3, fill: '#1F4D3F', strokeWidth: 0 }}
                activeDot={{ r: 5, fill: '#1F4D3F', stroke: '#FFFFFF', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

function LondonNetworkMap() {
  const locationByName = new Map(
    networkLocations.map((location) => [location.name, location]),
  );

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-100 bg-[#FBFCFB]">
      <svg viewBox="0 0 100 82" className="h-64 w-full" role="img" aria-label="Abstract London component network map">
        <path
          d="M8 56C17 63 31 64 42 59C54 54 60 50 72 52C82 54 88 62 94 68"
          fill="none"
          stroke="#ECEEEC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {networkLinks.map(([from, to]) => {
          const a = locationByName.get(from);
          const b = locationByName.get(to);
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#D8DDD9"
              strokeWidth="0.8"
            />
          );
        })}
        {networkLocations.map((location) => {
          const isWarehouse = location.kind === 'warehouse';
          return (
            <g key={location.name}>
              <circle
                cx={location.x}
                cy={location.y}
                r={isWarehouse ? 3.1 : 2.5}
                fill={isWarehouse ? '#FFFFFF' : '#1F4D3F'}
                stroke="#1F4D3F"
                strokeWidth={isWarehouse ? 1.6 : 0}
              />
              <text
                x={location.x + location.labelX}
                y={location.y + location.labelY}
                fill="#6B6B6B"
                fontSize="3.4"
                fontWeight="700"
              >
                {location.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
