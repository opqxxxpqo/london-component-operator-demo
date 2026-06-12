const accent = '#C7F000';
const stroke = '#071B17';
const leaf = '#49B26B';

export default function ComponentIllustration({ category, className = '' }) {
  return (
    <svg
      viewBox="0 0 96 72"
      className={className}
      role="img"
      aria-label={`${category} component illustration`}
    >
      <defs>
        <linearGradient id="component-stage" x1="14" y1="4" x2="84" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E6A45" />
          <stop offset="0.52" stopColor="#0E342B" />
          <stop offset="1" stopColor="#04110D" />
        </linearGradient>
        <radialGradient id="dew-highlight" cx="36%" cy="22%" r="58%">
          <stop stopColor="#DDE8E3" stopOpacity="0.28" />
          <stop offset="0.36" stopColor="#DDE8E3" stopOpacity="0.08" />
          <stop offset="1" stopColor="#DDE8E3" stopOpacity="0" />
        </radialGradient>
        <filter id="component-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="2.4" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect width="96" height="72" rx="16" fill="url(#component-stage)" />
      <rect width="96" height="72" rx="16" fill="url(#dew-highlight)" />
      <ellipse cx="48" cy="61" rx="30" ry="5" fill="#000000" opacity="0.3" />
      <path d="M7 61C28 40 45 42 56 27C65 14 76 10 89 7" fill="none" stroke="#DDE8E3" strokeWidth="0.75" opacity="0.34" />
      <path d="M18 59C25 52 31 49 39 47M40 43C47 38 51 33 55 27M61 22C69 16 76 12 86 9" fill="none" stroke="#49B26B" strokeWidth="0.65" opacity="0.38" />
      <path
        d="M12 58C26 47 39 49 50 36C61 23 74 24 84 13"
        fill="none"
        stroke={leaf}
        strokeDasharray="1 7"
        strokeLinecap="round"
        strokeWidth="2"
        opacity="0.62"
      />
      <g filter="url(#component-shadow)">
        {renderShape(category)}
      </g>
      <circle cx="83" cy="13" r="2.2" fill="#DDE8E3" opacity="0.78" />
      <circle cx="12" cy="58" r="2.4" fill={accent} />
    </svg>
  );
}

function renderShape(category) {
  if (category === 'Partitions') {
    return (
      <>
        <rect x="22" y="13" width="21" height="45" rx="5" fill="#DDE8E3" stroke={stroke} strokeWidth="2" />
        <rect x="45" y="13" width="28" height="45" rx="5" fill="#DDE8E3" stroke={stroke} strokeWidth="2" />
        <path d="M32 18V54M59 18V54" stroke="#9DB6AB" strokeWidth="1.5" />
      </>
    );
  }

  if (category === 'Furniture') {
    return (
      <>
        <path d="M22 33H74" stroke={accent} strokeWidth="5" strokeLinecap="round" />
        <path d="M30 35V57M66 35V57" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        <rect x="34" y="20" width="28" height="10" rx="5" fill="#DDE8E3" stroke={stroke} strokeWidth="2" />
      </>
    );
  }

  if (category === 'Pods') {
    return (
      <>
        <rect x="24" y="12" width="48" height="48" rx="12" fill="#DDE8E3" stroke={stroke} strokeWidth="2.5" />
        <rect x="37" y="22" width="22" height="20" rx="6" fill={accent} stroke={stroke} strokeWidth="2" />
        <circle cx="63" cy="38" r="2.4" fill={leaf} />
      </>
    );
  }

  if (category === 'Lighting') {
    return (
      <>
        <path d="M22 22H74" stroke={accent} strokeWidth="3.4" strokeLinecap="round" />
        <path d="M28 28H68" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M34 30L29 50M48 30L48 50M62 30L67 50" stroke={leaf} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M25 53H71" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </>
    );
  }

  return (
    <>
      <rect x="25" y="18" width="46" height="36" rx="9" fill="#DDE8E3" stroke={stroke} strokeWidth="2" />
      <path d="M34 30H62M34 42H56" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </>
  );
}
