import { useEffect, useMemo, useState } from 'react';

export default function MetricCard({ label, value, trend, signal }) {
  const animatedValue = useCountUpValue(value);
  const valueParts = animatedValue.split(' ');
  const hasUnit = valueParts.length > 1;
  const valueSizeClass = hasUnit
    ? 'text-[2.05rem]'
    : value.length >= 8
      ? 'text-[1.55rem]'
      : 'text-[2.05rem]';

  return (
    <article className="ops-card min-h-[178px] rounded-xl p-4">
      <div className="ops-section">
        <div className="flex items-start justify-between gap-3">
          <p className="min-h-9 text-xs font-extrabold uppercase leading-4 tracking-[0.06em] text-muted">
            {label}
          </p>
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(232,255,0,0.18)]" />
        </div>
        <p className={`metric-rise mt-4 whitespace-nowrap ${valueSizeClass} font-black leading-[0.92] tracking-normal text-ink`}>
          {hasUnit ? (
            <>
              <span className="block">{valueParts[0]}</span>
              {' '}
              <span className="mt-1 block text-sm font-black uppercase leading-none text-muted">
                {valueParts.slice(1).join(' ')}
              </span>
            </>
          ) : (
            animatedValue
          )}
        </p>
        <div className="mt-4 space-y-2">
          <p className="inline-flex rounded-full border border-[#D6EE00] bg-accent px-2.5 py-1 text-[0.68rem] font-black leading-none text-ink shadow-[0_8px_18px_rgba(232,255,0,0.2)]">
            {trend}
          </p>
          {signal && (
            <p className="truncate text-[0.65rem] font-bold uppercase tracking-[0.06em] text-faint">
              {signal}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function useCountUpValue(value) {
  const parsed = useMemo(() => parseMetric(value), [value]);
  const [current, setCurrent] = useState(parsed.number);

  useEffect(() => {
    if (!parsed.canAnimate) {
      setCurrent(parsed.number);
      return undefined;
    }

    let frame = 0;
    let animationId;
    const frames = 34;

    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / frames, 3);
      setCurrent(parsed.number * Math.min(progress, 1));

      if (frame < frames) {
        animationId = window.requestAnimationFrame(tick);
      }
    };

    setCurrent(0);
    animationId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationId);
  }, [parsed]);

  if (!parsed.canAnimate) {
    return value;
  }

  return `${parsed.prefix}${formatNumber(current, parsed)}${parsed.suffix}`;
}

function parseMetric(value) {
  const match = value.match(/^([^0-9]*)([0-9,]+(?:\.[0-9]+)?)(.*)$/);

  if (!match) {
    return { canAnimate: false, number: 0 };
  }

  const [, prefix, rawNumber, suffix] = match;
  const decimals = rawNumber.includes('.') ? rawNumber.split('.')[1].length : 0;

  return {
    canAnimate: true,
    decimals,
    number: Number(rawNumber.replace(/,/g, '')),
    prefix,
    suffix,
    useGrouping: rawNumber.includes(','),
  };
}

function formatNumber(number, parsed) {
  return Number(number).toLocaleString('en-GB', {
    maximumFractionDigits: parsed.decimals,
    minimumFractionDigits: parsed.decimals,
    useGrouping: parsed.useGrouping,
  });
}
