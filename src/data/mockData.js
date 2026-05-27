const GBP = '\u00a3';
const CO2 = 'CO\u2082';
const MULTIPLY = '\u00d7';
const DOT = '\u00b7';
const EN_DASH = '\u2013';
const APOSTROPHE = '\u2019';

export const kpis = [
  {
    label: 'Active Components',
    value: '12,847',
    trend: '+124 this week',
    signal: 'Live fleet count',
  },
  {
    label: 'Monthly Recurring Revenue',
    value: `${GBP}284,300`,
    trend: '+8.2%',
    signal: 'Recurring asset yield',
  },
  {
    label: 'Utilization Rate',
    value: '87.3%',
    trend: '+2.1%',
    signal: 'City-wide availability',
  },
  {
    label: `${CO2} Avoided This Month`,
    value: '142.8 tonnes',
    trend: '+12.4%',
    signal: 'Demolition displacement',
  },
];

export const operationsPulse = [
  { label: 'Dispatch lanes active', value: '18', detail: 'Stratford + Hackney Wick' },
  { label: 'Median redeploy time', value: '31h', detail: 'Last 14 days' },
  { label: 'Open install windows', value: '7', detail: 'Before Friday' },
];

export const revenueTrend = [
  { month: 'Apr', mrr: 213900 },
  { month: 'May', mrr: 226400 },
  { month: 'Jun', mrr: 239800 },
  { month: 'Jul', mrr: 251700 },
  { month: 'Aug', mrr: 267200 },
  { month: 'Sep', mrr: 284300 },
];

export const networkLocations = [
  { name: 'Paddington', kind: 'building', x: 18, y: 46, labelX: -6, labelY: -5, load: 64 },
  { name: `King${APOSTROPHE}s Cross`, kind: 'building', x: 45, y: 21, labelX: -13, labelY: -7, load: 82 },
  { name: 'Old Street', kind: 'building', x: 62, y: 29, labelX: 4, labelY: -2, load: 76 },
  { name: 'Shoreditch', kind: 'building', x: 73, y: 35, labelX: 4, labelY: 1, load: 91 },
  { name: 'Liverpool Street', kind: 'building', x: 67, y: 47, labelX: 4, labelY: 1, load: 73 },
  { name: 'Farringdon', kind: 'building', x: 51, y: 43, labelX: -19, labelY: 1, load: 68 },
  { name: 'London Bridge', kind: 'building', x: 61, y: 64, labelX: 4, labelY: 5, load: 71 },
  { name: 'Canary Wharf', kind: 'building', x: 84, y: 62, labelX: -5, labelY: 10, load: 88 },
  { name: 'Stratford', kind: 'warehouse', x: 88, y: 28, labelX: -5, labelY: -8, load: 43 },
  { name: 'Hackney Wick', kind: 'warehouse', x: 78, y: 22, labelX: -21, labelY: -7, load: 52 },
  { name: 'Park Royal', kind: 'warehouse', x: 9, y: 36, labelX: -1, labelY: -8, load: 38 },
];

export const networkLinks = [
  ['Park Royal', 'Paddington'],
  ['Paddington', 'Farringdon'],
  [`King${APOSTROPHE}s Cross`, 'Farringdon'],
  [`King${APOSTROPHE}s Cross`, 'Old Street'],
  ['Old Street', 'Shoreditch'],
  ['Shoreditch', 'Liverpool Street'],
  ['Liverpool Street', 'London Bridge'],
  ['London Bridge', 'Canary Wharf'],
  ['Hackney Wick', 'Shoreditch'],
  ['Stratford', 'Canary Wharf'],
  ['Stratford', 'Hackney Wick'],
  ['Farringdon', 'Liverpool Street'],
];

export const activities = [
  {
    type: 'dispatch',
    text: 'GP-00472 dispatched to Canary Wharf',
    time: '2h ago',
    lane: 'STF-03',
  },
  {
    type: 'repair',
    text: 'WD-01923 refurbishment completed',
    time: '4h ago',
    lane: 'HWK-QA',
  },
  {
    type: 'tenant',
    text: 'New tenant onboarded: Verdant Bio',
    time: '6h ago',
    lane: 'EC2A',
  },
  {
    type: 'warehouse',
    text: '18 partitions checked into Stratford',
    time: '8h ago',
    lane: 'STF-B07',
  },
  {
    type: 'quality',
    text: 'Canary Wharf floor 19 handover approved',
    time: '11h ago',
    lane: 'CW-19',
  },
  {
    type: 'move',
    text: 'PB-00341 routed from Hackney Wick',
    time: '14h ago',
    lane: 'HWK-02',
  },
];

export const components = [
  {
    id: 'gp-00472',
    displayId: 'GP-00472',
    assetTag: 'LCO-LON-GP-00472',
    category: 'Partitions',
    type: 'Glass Partition 1.2m',
    fullType: 'Glass Partition',
    dimensions: `1.2m ${MULTIPLY} 2.6m`,
    status: 'In Use',
    location: `Canary Wharf ${DOT} Marshall & Co`,
    grade: 'B',
    roi: '137%',
    initialCost: `${GBP}1,200`,
    totalRevenue: `${GBP}2,840`,
    monthlyRate: `${GBP}34.80/mo`,
    bay: 'STF-BAY-07',
    cycles: 5,
    conditionScore: '82/100',
    lastInspection: '2032.07.15',
    nextService: '2033.12',
    currentStatus:
      'Currently at Canary Wharf, leased to Marshall & Co since June 2029',
    detailSubtitle: `Glass Partition ${DOT} 1.2m ${MULTIPLY} 2.6m ${DOT} Grade B`,
    carbonAvoided: `487 kg${CO2}e`,
    carbonComparison: [
      { name: 'Single-use', kg: 1310 },
      { name: 'LCO circulation', kg: 823 },
    ],
    timeline: [
      {
        date: '2027.03',
        title: 'Manufactured & added to fleet',
        detail: 'Registered to the Stratford operating inventory.',
        icon: 'factory',
        stamp: 'FLEET ENTRY',
      },
      {
        date: `2027.03${EN_DASH}2029.03`,
        title: `Pixel Labs, King${APOSTROPHE}s Cross`,
        detail: 'Installed as a meeting room partition.',
        icon: 'building',
        stamp: 'LEASED',
      },
      {
        date: '2029.04',
        title: 'Returned to Stratford warehouse',
        detail: 'Cleaned, inspected and refurbished for redeployment.',
        icon: 'warehouse',
        stamp: 'REFIT PASS',
      },
      {
        date: `2029.06${EN_DASH}2032.06`,
        title: 'Marshall & Co, Canary Wharf',
        detail: 'Partner meeting room fit-out on a 36-month lease.',
        icon: 'building',
        stamp: 'REVENUE RUN',
      },
      {
        date: '2032.07',
        title: 'Refurbishment',
        detail: 'Frame polish and acoustic seal replacement. Regraded to B.',
        icon: 'wrench',
        stamp: 'GRADE B',
      },
      {
        date: `2032.09${EN_DASH}2033.09`,
        title: 'Verdant Bio, Shoreditch',
        detail: 'Reused as a lab partition in a 12-month project space.',
        icon: 'building',
        stamp: 'CIRCULATED',
      },
      {
        date: '2033.10',
        title: 'Returned to Stratford warehouse',
        detail: 'Available for the next office configuration.',
        icon: 'warehouse',
        stamp: 'READY',
      },
    ],
    maintenanceLog: [
      { date: '2029.04.08', action: 'Seal replacement', cost: `${GBP}46` },
      { date: '2032.07.14', action: 'Frame polish', cost: `${GBP}28` },
      { date: '2032.07.15', action: 'Acoustic inspection', cost: `${GBP}62` },
    ],
  },
  {
    id: 'wd-01923',
    displayId: 'WD-01923',
    assetTag: 'LCO-LON-WD-01923',
    category: 'Furniture',
    type: 'Workstation Desk',
    fullType: 'Workstation Desk',
    dimensions: `1.4m ${MULTIPLY} 0.8m`,
    status: 'Refurbishing',
    location: 'Hackney Wick warehouse',
    grade: 'A',
    roi: '121%',
    initialCost: `${GBP}680`,
    totalRevenue: `${GBP}1,504`,
    monthlyRate: `${GBP}21.20/mo`,
    bay: 'HWK-REFIT-02',
    cycles: 4,
    conditionScore: '91/100',
    lastInspection: '2032.09.03',
    nextService: '2032.09.11',
  },
  {
    id: 'pb-00341',
    displayId: 'PB-00341',
    assetTag: 'LCO-LON-PB-00341',
    category: 'Pods',
    type: 'Phone Booth',
    fullType: 'Phone Booth',
    dimensions: `1.0m ${MULTIPLY} 1.0m`,
    status: 'In Warehouse',
    location: 'Stratford warehouse',
    grade: 'B',
    roi: '92%',
    initialCost: `${GBP}4,180`,
    totalRevenue: `${GBP}8,025`,
    monthlyRate: `${GBP}124.80/mo`,
    bay: 'STF-POD-03',
    cycles: 3,
    conditionScore: '79/100',
    lastInspection: '2032.08.26',
    nextService: '2032.11.20',
  },
  {
    id: 'lt-01184',
    displayId: 'LT-01184',
    assetTag: 'LCO-LON-LT-01184',
    category: 'Lighting',
    type: 'Task Lighting Rail',
    fullType: 'Lighting',
    dimensions: '2.4m rail',
    status: 'In Use',
    location: `Farringdon ${DOT} Northstar Capital`,
    grade: 'A',
    roi: '149%',
    initialCost: `${GBP}540`,
    totalRevenue: `${GBP}1,345`,
    monthlyRate: `${GBP}16.90/mo`,
    bay: 'FAR-14',
    cycles: 6,
    conditionScore: '94/100',
    lastInspection: '2032.06.29',
    nextService: '2033.01.14',
  },
  {
    id: 'mr-00218',
    displayId: 'MR-00218',
    assetTag: 'LCO-LON-MR-00218',
    category: 'Pods',
    type: 'Meeting Room Pod',
    fullType: 'Meeting Room Pod',
    dimensions: '4 person',
    status: 'In Use',
    location: `Liverpool Street ${DOT} Clay Studio`,
    grade: 'B',
    roi: '116%',
    initialCost: `${GBP}7,840`,
    totalRevenue: `${GBP}16,928`,
    monthlyRate: `${GBP}246.60/mo`,
    bay: 'LVS-06',
    cycles: 4,
    conditionScore: '84/100',
    lastInspection: '2032.07.09',
    nextService: '2032.12.02',
  },
  {
    id: 'ch-04419',
    displayId: 'CH-04419',
    assetTag: 'LCO-LON-CH-04419',
    category: 'Furniture',
    type: 'Task Chair',
    fullType: 'Chair',
    dimensions: 'Adjustable',
    status: 'In Warehouse',
    location: 'Park Royal warehouse',
    grade: 'A',
    roi: '104%',
    initialCost: `${GBP}390`,
    totalRevenue: `${GBP}796`,
    monthlyRate: `${GBP}11.70/mo`,
    bay: 'PRK-FURN-12',
    cycles: 5,
    conditionScore: '89/100',
    lastInspection: '2032.08.18',
    nextService: '2033.02.01',
  },
  {
    id: 'gp-00613',
    displayId: 'GP-00613',
    assetTag: 'LCO-LON-GP-00613',
    category: 'Partitions',
    type: 'Glass Partition 1.8m',
    fullType: 'Glass Partition',
    dimensions: `1.8m ${MULTIPLY} 2.6m`,
    status: 'In Use',
    location: `Old Street ${DOT} Pixel Labs`,
    grade: 'A',
    roi: '132%',
    initialCost: `${GBP}1,640`,
    totalRevenue: `${GBP}3,804`,
    monthlyRate: `${GBP}49.10/mo`,
    bay: 'OLD-03',
    cycles: 4,
    conditionScore: '92/100',
    lastInspection: '2032.08.01',
    nextService: '2033.03.10',
  },
  {
    id: 'lt-01402',
    displayId: 'LT-01402',
    assetTag: 'LCO-LON-LT-01402',
    category: 'Lighting',
    type: 'Ceiling Light Grid',
    fullType: 'Lighting',
    dimensions: '6 module',
    status: 'Refurbishing',
    location: 'Stratford warehouse',
    grade: 'C',
    roi: '88%',
    initialCost: `${GBP}870`,
    totalRevenue: `${GBP}1,636`,
    monthlyRate: `${GBP}25.80/mo`,
    bay: 'STF-LIGHT-09',
    cycles: 7,
    conditionScore: '68/100',
    lastInspection: '2032.09.02',
    nextService: '2032.09.12',
  },
];

export const matchingProject = {
  tenant: 'Verdant Bio',
  location: 'Shoreditch, EC2A',
  moveIn: 'September 15, 2032',
  leaseTerm: '12 months',
  reference: 'LCO-MATCH-2032-0915-VB',
};

export const requirements = [
  '12 workstations',
  '3 meeting rooms',
  '1 phone booth',
  '1 kitchen area',
];

const matchingSeed = [
  {
    id: 'GP-00472',
    type: 'Glass Partition',
    warehouse: 'Stratford warehouse',
    eta: '6h',
    route: 'STF -> EC2A',
    state: 'Reserved',
  },
  {
    id: 'WD-01923',
    type: 'Workstation',
    warehouse: 'Hackney Wick warehouse',
    eta: '4h',
    route: 'HWK -> EC2A',
    state: 'Pick list',
  },
  {
    id: 'PB-00341',
    type: 'Phone Booth',
    warehouse: 'Stratford warehouse',
    eta: '6h',
    route: 'STF -> EC2A',
    state: 'QA clear',
  },
];

const generatedMatches = Array.from({ length: 44 }, (_, index) => {
  const catalog = [
    ['WD', 'Workstation', 'Hackney Wick warehouse', '4h', 'HWK -> EC2A'],
    ['GP', 'Glass Partition', 'Stratford warehouse', '6h', 'STF -> EC2A'],
    ['CH', 'Task Chair', 'Hackney Wick warehouse', '5h', 'HWK -> EC2A'],
    ['LT', 'Lighting Rail', 'Stratford warehouse', '7h', 'STF -> EC2A'],
    ['MR', 'Meeting Room Pod', 'Hackney Wick warehouse', '8h', 'HWK -> EC2A'],
  ];
  const [prefix, type, warehouse, eta, route] = catalog[index % catalog.length];
  const number = String(1924 + index * 17).padStart(5, '0');

  return {
    id: `${prefix}-${number}`,
    type,
    warehouse,
    eta,
    route,
    state: index % 3 === 0 ? 'Reserved' : index % 3 === 1 ? 'Pick list' : 'QA clear',
  };
});

export const matchingResults = [...matchingSeed, ...generatedMatches];

export const installationSchedule = [
  {
    day: 'Day 1',
    time: `08:00${EN_DASH}12:00`,
    title: 'Component dispatch',
    detail: 'Warehouse teams pick, scan and load matched components.',
    progress: 28,
  },
  {
    day: 'Day 1',
    time: `13:00${EN_DASH}18:00`,
    title: 'Delivery & layout',
    detail: 'Components arrive on site and are staged by floor zone.',
    progress: 52,
  },
  {
    day: 'Day 2',
    time: `08:00${EN_DASH}17:00`,
    title: 'Installation',
    detail: 'Partitions, desks, pods and lighting are installed.',
    progress: 82,
  },
  {
    day: 'Day 2',
    time: `17:00${EN_DASH}18:00`,
    title: 'Quality check & handover',
    detail: 'Asset records update and the tenant can move in.',
    progress: 100,
  },
];

export const matchingFinancials = [
  { label: 'Setup fee', value: `${GBP}4,200` },
  { label: 'Monthly subscription', value: `${GBP}2,840` },
  { label: 'Estimated 12-month revenue', value: `${GBP}38,280` },
];
