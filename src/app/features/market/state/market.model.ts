export interface AppPagedResponse<T> {
  count: number;
  total: number;
  page: number;
  pageCount: number;
  data: T[];
}

export interface Market {
  symbol: string;
  name: string;
  country: string;
  industry: null | string;
  ipoYear: number | null;
  marketCap: number | null;
  sector: null | string;
  volume: number | null;
  netChange: number;
  netChangePercent: number;
  lastPrice: number;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}
export function createMarket(params: Partial<Market>) {
  return {} as Market;
}
