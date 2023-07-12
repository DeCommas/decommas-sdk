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

export type ApiResponse<T> = {
  status: number;
  result: T;
};

export type PaginatedResponseRaw<T> = ApiResponse<T[]> & {
  count: number;
};

export type PaginatedResponse<T> = {
  count: number;
  result: T[];
};
