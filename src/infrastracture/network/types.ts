export enum Method {
  GET = "get",
  POST = "post",
  DELETE = "delete",
}

export type RequestHeaders = Record<string, string>;

export type PaginatedRequest<T> = {
  limit?: number;
  offset?: number;
} & T;

export type PaginatedResponseRaw<T> = {
  count: number;
  status: number;
  result: T[];
};

export type PaginatedResponse<T> = {
  count: number;
  result: T[];
};
