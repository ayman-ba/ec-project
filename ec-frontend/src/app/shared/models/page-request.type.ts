export type PageRequestType = {
  page: number;
  size: number;
  sortBy: string;
  sortDirection?: 'ASC' | 'DESC' | null
}
