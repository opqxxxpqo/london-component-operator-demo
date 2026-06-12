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

const pulseCodes = ['CANOPY-18', 'MIG-031H', 'NEST-007'];

const controlSignals = [
  { icon: Truck, label: 'E2A-MIG-14', value: 'Stable' },
  { icon: Factory, label: 'STF-SEED-11', value: '11 nests' },
  { icon: CheckCircle2, label: 'SLA-48H', value: '96%' },
];

export default function Overview() {
  const utilizationMetric = kpis.find((metric) => metric.label === 'Utilization Rate');
  const supportMetrics = kpis.filter((metric) => metric.label !== 'Utilization Rate');
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
            <p className="ops-kicker">Living circulation canopy</p>
            <h1 className="mt-2 text-[2.35rem] font-black leading-[0.98] tracking-normal text-ink">
              Good morning, Sarah
            </h1>
            <p className="mt-3 text-sm font-bold text-muted">{dateLabel}</p>
          </div>
          <span className="asset-chip living-chip mt-1">
            <RadioTower size={12} strokeWidth={2.4} />
            Breathing
          </span>
        </div>

        <UtilizationHero metric={utilizationMetric} />

        <div className="grid grid-cols-3 gap-2">
          {operationsPulse.map((item, index) => (
            <div
              key={item.label}
              className="readout px-3 py-3"
            >
              <p className="text-lg font-black leading-none text-ink">{item.value}</p>
              <p className="mt-2 text-[0.63rem] font-extrabold uppercase leading-3 tracking-[0.05em] text-muted">
                {item.label}
              </p>
              <p className="mt-1 truncate text-[0.58rem] font-black uppercase tracking-[0.04em] text-faint">
                {pulseCodes[index]}
              </p>
            </div>
          ))}
        </div>

        <div className="command-strip">
          {controlSignals.map((signal) => (
            <CommandSignal key={signal.label} {...signal} />
          ))}
        </div>
      </section>

      <section className="space-y-3.5">
        <div className="grid grid-cols-3 gap-2.5">
          {supportMetrics.map((metric, index) => (
            <CanopyStat key={metric.label} metric={metric} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="ops-card rounded-2xl p-5">
        <div className="ops-section mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="ops-kicker">Urban canopy map</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">
              London network
            </h2>
            <p className="mt-1 text-sm font-bold text-muted">
              8 host sites / 3 seed banks / 18 migration paths
            </p>
          </div>
          <div className="toe-pad grid h-10 w-10 shrink-0 place-items-center text-ink">
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
            <p className="ops-kicker">Lifecycle stream</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal">
              Recent activity
            </h2>
          </div>
          <Gauge className="text-accent" size={22} strokeWidth={2.3} />
        </div>
        <div className="ops-section mt-5 divide-y divide-[#1E6A45]/35">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type] ?? RefreshCcw;
            return (
              <div
                key={`${activity.text}-${activity.time}`}
                className="relative flex gap-3 py-3.5 first:pt-0 last:pb-0"
              >
                <div className="toe-pad mt-0.5 grid h-9 w-9 shrink-0 place-items-center border text-ink">
                  <Icon size={16} strokeWidth={2.35} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-extrabold leading-5 text-ink">
                      {activity.text}
                    </p>
                    <span className="shrink-0 rounded-full bg-[#0E342B] px-2 py-1 text-[0.62rem] font-black text-muted">
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
            <p className="ops-kicker">Nutrient yield</p>
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
              <CartesianGrid stroke="rgba(73, 178, 107, 0.18)" vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9DB6AB', fontSize: 12, fontWeight: 700 }}
              />
              <YAxis hide domain={['dataMin - 8000', 'dataMax + 8000']} />
              <Tooltip
                cursor={{ stroke: 'rgba(199, 240, 0, 0.3)', strokeWidth: 1 }}
                contentStyle={{
                  border: '1px solid rgba(199, 240, 0, 0.2)',
                  borderRadius: 18,
                  boxShadow: '0 18px 42px rgba(0, 0, 0, 0.28)',
                  fontSize: 12,
                  background: '#0A231B',
                  color: '#DDE8E3',
                }}
                formatter={(value) => [`\u00a3${value.toLocaleString()}`, 'MRR']}
              />
              <Line
                type="monotone"
                dataKey="mrr"
                stroke="#C7F000"
                strokeWidth={3}
                dot={{ r: 3.5, fill: '#C7F000', stroke: '#071B17', strokeWidth: 2 }}
                activeDot={{ r: 5, fill: '#C7F000', stroke: '#DDE8E3', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

function UtilizationHero({ metric }) {
  const [whole, decimal] = splitUtilization(metric.value);

  return (
    <article className="ops-card rounded-2xl p-4">
      <div className="ops-section space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="ops-kicker">LCO-BREATH-873</p>
            <h2 className="mt-1 text-xl font-black tracking-normal">
              Utilization
            </h2>
          </div>
          <span className="eta-pill bg-[#1E6A45]/30">
            48H cycle
          </span>
        </div>
        <div className="frog-hero relative overflow-hidden px-4 py-5">
          <div className="relative">
            <p className="text-[0.64rem] font-black uppercase tracking-[0.12em]">
              City circulation vitality
            </p>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-[6.2rem] font-black leading-[0.72] tracking-normal">
                {whole}
              </span>
              <span className="pb-2 text-[1.65rem] font-black leading-none">
                {decimal}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <IdentityCell label="Route" value="LDN-CIR-04" />
          <IdentityCell label="Reuse" value="91%" />
          <IdentityCell label="Grade" value="A-" />
        </div>
        <p className="text-sm font-bold leading-5 text-muted">
          {metric.signal} across active leases, seed-bank stock and scheduled migrations.
        </p>
      </div>
    </article>
  );
}

function CanopyStat({ metric, featured }) {
  const [primary, secondary] = splitStatValue(metric.value);

  return (
    <article
      className={[
        'min-h-[132px] rounded-lg border px-3 py-3 shadow-soft',
        featured
          ? 'border-[#C7F000] bg-accent text-[#071B17]'
          : 'border-[#1E6A45]/45 bg-[#0A231B] text-ink',
      ].join(' ')}
    >
      <p className={featured ? 'text-[0.58rem] font-black uppercase leading-3 tracking-[0.08em]' : 'text-[0.58rem] font-black uppercase leading-3 tracking-[0.08em] text-faint'}>
        {statCodeFor(metric.label)}
      </p>
      <div className="mt-4">
        <p className="text-[2rem] font-black leading-[0.82] tracking-normal">
          {primary}
        </p>
        {secondary && (
          <p className="mt-1 text-lg font-black leading-none">
            {secondary}
          </p>
        )}
      </div>
      <p className={featured ? 'mt-3 text-[0.62rem] font-black uppercase tracking-[0.05em]' : 'mt-3 text-[0.62rem] font-black uppercase tracking-[0.05em] text-muted'}>
        {metric.trend}
      </p>
    </article>
  );
}

function IdentityCell({ label, value }) {
  return (
    <div className="border border-[#1E6A45]/45 bg-[#0E342B] px-2.5 py-2">
      <p className="text-[0.56rem] font-black uppercase tracking-[0.08em] text-muted">
        {label}
      </p>
      <p className="mt-1 whitespace-nowrap text-[0.72rem] font-black leading-none text-ink">{value}</p>
    </div>
  );
}

function splitUtilization(value) {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? [match[1], match[2]] : [value, ''];
}

function splitStatValue(value) {
  if (value === '12,847') {
    return ['12', '847'];
  }

  if (value.startsWith('\u00a3')) {
    return ['£284', 'k'];
  }

  if (value.includes('tonnes')) {
    return ['142', 't'];
  }

  return [value, ''];
}

function statCodeFor(label) {
  if (label === 'Active Components') {
    return 'CANOPY-CMP-12847';
  }

  if (label === 'Monthly Recurring Revenue') {
    return 'YIELD-NECTAR-284K';
  }

  if (label.includes('CO')) {
    return 'CARBON-LEAF-142T';
  }

  return label;
}

function CommandSignal({ icon: Icon, label, value }) {
  return (
    <div className="min-w-0 flex items-center gap-2">
      <div className="toe-pad grid h-7 w-7 shrink-0 place-items-center text-ink">
        <Icon size={14} strokeWidth={2.4} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-[0.6rem] font-black uppercase tracking-[0.06em] text-faint">
          {label}
        </p>
        <p className="truncate text-xs font-black text-ink">{value}</p>
      </div>
    </div>
  );
}

function MapSignal({ label, value }) {
  return (
    <div className="rounded-xl border border-[#1E6A45]/45 bg-[#0E342B] px-3 py-2">
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
    <div className="ops-section overflow-hidden rounded-2xl border border-[#1E6A45]/45 bg-[#0E342B]">
      <svg viewBox="0 0 100 82" className="h-72 w-full" role="img" aria-label="Abstract London component network map">
        <defs>
          <pattern id="map-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0H0V10" fill="none" stroke="rgba(73, 178, 107, 0.16)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="82" fill="url(#map-grid)" />
        <path
          d="M8 56C17 63 31 64 42 59C54 54 60 50 72 52C82 54 88 62 94 68"
          fill="none"
          stroke="rgba(221, 232, 227, 0.18)"
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
              stroke={active ? '#C7F000' : '#49B26B'}
              strokeDasharray={active ? '1 6' : '0'}
              strokeLinecap="round"
              strokeWidth={active ? 1.4 : 0.8}
              className={active ? 'migration-flow' : ''}
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
                  fill={isWarehouse ? '#49B26B' : '#C7F000'}
                  opacity="0.25"
                  style={{ transformOrigin: `${location.x}px ${location.y}px` }}
                />
              )}
              <circle
                cx={location.x}
                cy={location.y}
                r={isWarehouse ? 3.3 : 2.5}
                fill={isWarehouse ? '#DDE8E3' : '#C7F000'}
                stroke={isWarehouse ? '#49B26B' : '#C7F000'}
                strokeWidth={isWarehouse ? 1.7 : 0}
              />
              <text
                x={location.x + location.labelX}
                y={location.y + location.labelY}
                fill="#DDE8E3"
                fontSize="3.35"
                fontWeight="800"
              >
                {location.name}
              </text>
              <text
                x={location.x + 3.8}
                y={location.y + 4.8}
                fill="#9DB6AB"
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
