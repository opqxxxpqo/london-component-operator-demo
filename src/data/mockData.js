export const kpis = [
  {
    label: 'Active Components',
    value: '12,847',
    trend: '+124 this week',
  },
  {
    label: 'Monthly Recurring Revenue',
    value: '£284,300',
    trend: '+8.2%',
  },
  {
    label: 'Utilization Rate',
    value: '87.3%',
    trend: '+2.1%',
  },
  {
    label: 'CO₂ Avoided This Month',
    value: '142.8 tonnes',
    trend: '+12.4%',
  },
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
  { name: 'Paddington', kind: 'building', x: 18, y: 46, labelX: -6, labelY: -5 },
  { name: 'King’s Cross', kind: 'building', x: 45, y: 21, labelX: -13, labelY: -7 },
  { name: 'Old Street', kind: 'building', x: 62, y: 29, labelX: 4, labelY: -2 },
  { name: 'Shoreditch', kind: 'building', x: 73, y: 35, labelX: 4, labelY: 1 },
  { name: 'Liverpool Street', kind: 'building', x: 67, y: 47, labelX: 4, labelY: 1 },
  { name: 'Farringdon', kind: 'building', x: 51, y: 43, labelX: -19, labelY: 1 },
  { name: 'London Bridge', kind: 'building', x: 61, y: 64, labelX: 4, labelY: 5 },
  { name: 'Canary Wharf', kind: 'building', x: 84, y: 62, labelX: -5, labelY: 10 },
  { name: 'Stratford', kind: 'warehouse', x: 88, y: 28, labelX: -5, labelY: -8 },
  { name: 'Hackney Wick', kind: 'warehouse', x: 78, y: 22, labelX: -21, labelY: -7 },
  { name: 'Park Royal', kind: 'warehouse', x: 9, y: 36, labelX: -1, labelY: -8 },
];

export const networkLinks = [
  ['Park Royal', 'Paddington'],
  ['Paddington', 'Farringdon'],
  ['King’s Cross', 'Farringdon'],
  ['King’s Cross', 'Old Street'],
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
  },
  {
    type: 'repair',
    text: 'WD-01923 refurbishment completed',
    time: '4h ago',
  },
  {
    type: 'tenant',
    text: 'New tenant onboarded: Verdant Bio',
    time: '6h ago',
  },
  {
    type: 'warehouse',
    text: '18 partitions checked into Stratford',
    time: '8h ago',
  },
  {
    type: 'quality',
    text: 'Canary Wharf floor 19 handover approved',
    time: '11h ago',
  },
  {
    type: 'move',
    text: 'PB-00341 routed from Hackney Wick',
    time: '14h ago',
  },
];

export const components = [
  {
    id: 'gp-00472',
    displayId: 'GP-00472',
    category: 'Partitions',
    type: 'Glass Partition 1.2m',
    fullType: 'Glass Partition',
    dimensions: '1.2m × 2.6m',
    status: 'In Use',
    location: 'Canary Wharf · Marshall & Co',
    grade: 'B',
    roi: '137%',
    initialCost: '£1,200',
    totalRevenue: '£2,840',
    currentStatus:
      'Currently at Canary Wharf, leased to Marshall & Co since June 2029',
    detailSubtitle: 'Glass Partition · 1.2m × 2.6m · Grade B',
    carbonAvoided: '487 kgCO₂e',
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
      },
      {
        date: '2027.03–2029.03',
        title: 'Pixel Labs, King’s Cross',
        detail: 'Installed as a meeting room partition.',
        icon: 'building',
      },
      {
        date: '2029.04',
        title: 'Returned to Stratford warehouse',
        detail: 'Cleaned, inspected and refurbished for redeployment.',
        icon: 'warehouse',
      },
      {
        date: '2029.06–2032.06',
        title: 'Marshall & Co, Canary Wharf',
        detail: 'Partner meeting room fit-out on a 36-month lease.',
        icon: 'building',
      },
      {
        date: '2032.07',
        title: 'Refurbishment',
        detail: 'Frame polish and acoustic seal replacement. Regraded to B.',
        icon: 'wrench',
      },
      {
        date: '2032.09–2033.09',
        title: 'Verdant Bio, Shoreditch',
        detail: 'Reused as a lab partition in a 12-month project space.',
        icon: 'building',
      },
      {
        date: '2033.10',
        title: 'Returned to Stratford warehouse',
        detail: 'Available for the next office configuration.',
        icon: 'warehouse',
      },
    ],
    maintenanceLog: [
      { date: '2029.04.08', action: 'Seal replacement', cost: '£46' },
      { date: '2032.07.14', action: 'Frame polish', cost: '£28' },
      { date: '2032.07.15', action: 'Acoustic inspection', cost: '£62' },
    ],
  },
  {
    id: 'wd-01923',
    displayId: 'WD-01923',
    category: 'Furniture',
    type: 'Workstation Desk',
    fullType: 'Workstation Desk',
    dimensions: '1.4m × 0.8m',
    status: 'Refurbishing',
    location: 'Hackney Wick warehouse',
    grade: 'A',
    roi: '121%',
    initialCost: '£680',
    totalRevenue: '£1,504',
  },
  {
    id: 'pb-00341',
    displayId: 'PB-00341',
    category: 'Pods',
    type: 'Phone Booth',
    fullType: 'Phone Booth',
    dimensions: '1.0m × 1.0m',
    status: 'In Warehouse',
    location: 'Stratford warehouse',
    grade: 'B',
    roi: '92%',
    initialCost: '£4,180',
    totalRevenue: '£8,025',
  },
  {
    id: 'lt-01184',
    displayId: 'LT-01184',
    category: 'Lighting',
    type: 'Task Lighting Rail',
    fullType: 'Lighting',
    dimensions: '2.4m rail',
    status: 'In Use',
    location: 'Farringdon · Northstar Capital',
    grade: 'A',
    roi: '149%',
    initialCost: '£540',
    totalRevenue: '£1,345',
  },
  {
    id: 'mr-00218',
    displayId: 'MR-00218',
    category: 'Pods',
    type: 'Meeting Room Pod',
    fullType: 'Meeting Room Pod',
    dimensions: '4 person',
    status: 'In Use',
    location: 'Liverpool Street · Clay Studio',
    grade: 'B',
    roi: '116%',
    initialCost: '£7,840',
    totalRevenue: '£16,928',
  },
  {
    id: 'ch-04419',
    displayId: 'CH-04419',
    category: 'Furniture',
    type: 'Task Chair',
    fullType: 'Chair',
    dimensions: 'Adjustable',
    status: 'In Warehouse',
    location: 'Park Royal warehouse',
    grade: 'A',
    roi: '104%',
    initialCost: '£390',
    totalRevenue: '£796',
  },
  {
    id: 'gp-00613',
    displayId: 'GP-00613',
    category: 'Partitions',
    type: 'Glass Partition 1.8m',
    fullType: 'Glass Partition',
    dimensions: '1.8m × 2.6m',
    status: 'In Use',
    location: 'Old Street · Pixel Labs',
    grade: 'A',
    roi: '132%',
    initialCost: '£1,640',
    totalRevenue: '£3,804',
  },
  {
    id: 'lt-01402',
    displayId: 'LT-01402',
    category: 'Lighting',
    type: 'Ceiling Light Grid',
    fullType: 'Lighting',
    dimensions: '6 module',
    status: 'Refurbishing',
    location: 'Stratford warehouse',
    grade: 'C',
    roi: '88%',
    initialCost: '£870',
    totalRevenue: '£1,636',
  },
];

export const matchingProject = {
  tenant: 'Verdant Bio',
  location: 'Shoreditch, EC2A',
  moveIn: 'September 15, 2032',
  leaseTerm: '12 months',
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
  },
  {
    id: 'WD-01923',
    type: 'Workstation',
    warehouse: 'Hackney Wick warehouse',
    eta: '4h',
  },
  {
    id: 'PB-00341',
    type: 'Phone Booth',
    warehouse: 'Stratford warehouse',
    eta: '6h',
  },
];

const generatedMatches = Array.from({ length: 44 }, (_, index) => {
  const catalog = [
    ['WD', 'Workstation', 'Hackney Wick warehouse', '4h'],
    ['GP', 'Glass Partition', 'Stratford warehouse', '6h'],
    ['CH', 'Task Chair', 'Hackney Wick warehouse', '5h'],
    ['LT', 'Lighting Rail', 'Stratford warehouse', '7h'],
    ['MR', 'Meeting Room Pod', 'Hackney Wick warehouse', '8h'],
  ];
  const [prefix, type, warehouse, eta] = catalog[index % catalog.length];
  const number = String(1924 + index * 17).padStart(5, '0');

  return {
    id: `${prefix}-${number}`,
    type,
    warehouse,
    eta,
  };
});

export const matchingResults = [...matchingSeed, ...generatedMatches];

export const installationSchedule = [
  {
    day: 'Day 1',
    time: '08:00–12:00',
    title: 'Component dispatch',
    detail: 'Warehouse teams pick, scan and load matched components.',
  },
  {
    day: 'Day 1',
    time: '13:00–18:00',
    title: 'Delivery & layout',
    detail: 'Components arrive on site and are staged by floor zone.',
  },
  {
    day: 'Day 2',
    time: '08:00–17:00',
    title: 'Installation',
    detail: 'Partitions, desks, pods and lighting are installed.',
  },
  {
    day: 'Day 2',
    time: '17:00–18:00',
    title: 'Quality check & handover',
    detail: 'Asset records update and the tenant can move in.',
  },
];

export const matchingFinancials = [
  { label: 'Setup fee', value: '£4,200' },
  { label: 'Monthly subscription', value: '£2,840' },
  { label: 'Estimated 12-month revenue', value: '£38,280' },
];
