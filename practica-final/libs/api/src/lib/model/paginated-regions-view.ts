import { RegionView } from './region-view';

export interface PaginatedRegionsView {
  total?: number;
  per_page?: number;
  page?: string;
  pages?: string;
  results?: Array<RegionView>;
}
