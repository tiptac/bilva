export interface Page<T> {
  elements: Array<T>;
  pageSize: number;
  pageNumber: number;
  total: number;
}
