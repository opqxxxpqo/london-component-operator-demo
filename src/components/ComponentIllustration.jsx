const accent = '#E8FF00';
const stroke = '#142432';
const transit = '#0099D1';

export default function ComponentIllustration({ category, className = '' }) {
  return (
    <svg
      viewBox="0 0 96 72"
      className={className}
      role="img"
      aria-label={`${category} component illustration`}
    >
      <defs>
        <linearGradient id="component-stage" x1="12" y1="6" x2="84" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F3FAF7" />
          <stop offset="0.58" stopColor="#C6DCE3" />
          <stop offset="1" stopColor="#9FB6C1" />
        </linearGradient>
        <filter id="component-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodColor="#06111A" floodOpacity="0.22" />
        </filter>
      </defs>
      <rect width="96" height="72" rx="8" fill="url(#component-stage)" />
      <ellipse cx="48" cy="61" rx="28" ry="5" fill="#06111A" opacity="0.14" />
      <path d="M8 14H88M8 36H88M8 58H88" stroke="#BFD1D8" strokeWidth="0.7" />
      <path d="M14 8V64M48 8V64M82 8V64" stroke="#BFD1D8" strokeWidth="0.7" />
      <path
        d="M12 58C26 45 39 48 49 35C60 22 74 23 84 12"
        fill="none"
        stroke={transit}
        strokeDasharray="3 3"
        strokeLinecap="round"
        strokeWidth="1"
        opacity="0.55"
      />
      <g filter="url(#component-shadow)">
        {renderShape(category)}
      </g>
      <circle cx="84" cy="12" r="2" fill={transit} />
      <circle cx="12" cy="58" r="2" fill={accent} />
    </svg>
  );
}

function renderShape(category) {
  if (category === 'Partitions') {
    return (
      <>
        <rect x="22" y="13" width="21" height="45" rx="2" fill="#F3FAF7" stroke={stroke} strokeWidth="2" />
        <rect x="45" y="13" width="28" height="45" rx="2" fill="#F3FAF7" stroke={stroke} strokeWidth="2" />
        <path d="M32 18V54M59 18V54" stroke={stroke} strokeWidth="1.5" />
      </>
    );
  }

  if (category === 'Furniture') {
    return (
      <>
        <path d="M22 33H74" stroke={accent} strokeWidth="5" strokeLinecap="round" />
        <path d="M30 35V57M66 35V57" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        <rect x="34" y="20" width="28" height="10" rx="3" fill="#F3FAF7" stroke={stroke} strokeWidth="2" />
      </>
    );
  }

  if (category === 'Pods') {
    return (
      <>
        <rect x="24" y="12" width="48" height="48" rx="7" fill="#F3FAF7" stroke={stroke} strokeWidth="2.5" />
        <rect x="37" y="22" width="22" height="20" rx="3" fill="#E8FF00" stroke={stroke} strokeWidth="2" />
        <circle cx="63" cy="38" r="2" fill={accent} />
      </>
    );
  }

  if (category === 'Lighting') {
    return (
      <>
        <path d="M22 22H74" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        <path d="M28 28H68" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M34 30L29 50M48 30L48 50M62 30L67 50" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        <path d="M25 53H71" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </>
    );
  }

  return (
    <>
      <rect x="25" y="18" width="46" height="36" rx="6" fill="#F3FAF7" stroke={stroke} strokeWidth="2" />
      <path d="M34 30H62M34 42H56" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </>
  );
}
