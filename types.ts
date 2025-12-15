export interface Company {
  id: string;
  inn: string;
  name: string;
  revenue: number; // In RUB
  site: string;
  catEvidence: string;
  catProduct: 'Smartcat' | 'MemoQ' | 'Trados' | 'Memsource' | 'Custom' | 'Unknown';
  source: string;
  employees: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
}

export enum ViewMode {
  DASHBOARD = 'DASHBOARD',
  DATA_GRID = 'DATA_GRID',
  LOGS = 'LOGS',
  REPORT = 'REPORT'
}

export interface StatMetric {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}