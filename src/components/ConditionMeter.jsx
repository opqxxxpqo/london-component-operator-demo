export default function ConditionMeter({
  value = '0/100',
  label = 'Condition',
  compact = false,
}) {
  const score = parseInt(value, 10) || 0;
  const level = score >= 88 ? 'Prime' : score >= 76 ? 'Operational' : 'Service soon';

  return (
    <div className={compact ? '' : 'readout px-3 py-3'}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.62rem] font-black uppercase tracking-[0.07em] text-faint">
            {label}
          </p>
          {!compact && (
            <p className="mt-0.5 text-xs font-black uppercase tracking-[0.05em] text-muted">
              {level}
            </p>
          )}
        </div>
        <p className="text-xs font-black text-accent">{value}</p>
      </div>
      <div className="condition-track">
        <div className="condition-fill" style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}
