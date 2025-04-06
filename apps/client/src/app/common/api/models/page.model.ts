export interface PageMetadata {
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly totalElements: number;
  readonly totalPages: number;
}

export interface Page<T> {
  data: Array<T>;
  readonly metadata?: PageMetadata;
}
