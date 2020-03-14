import { Region } from './region';

export interface PaginatedRegions {
  total?: number;
  per_page?: number;
  page?: string;
  pages?: string;
  results?: Array<Region>;
}
