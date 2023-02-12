export interface FetchResult<T> {
  readonly response: T;
  readonly errors: string[];
}
