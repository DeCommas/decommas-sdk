import { Method } from "./types";
export type FetchFunction = <T>(endpoint: string, params?: object, method?: Method) => Promise<T>;
export interface IHttpRequest {
    fetch: FetchFunction;
}
export declare class HttpRequest implements IHttpRequest {
    private readonly apiKey?;
    constructor(apiKey?: string);
    fetch<T>(endpoint?: string, params?: {}, method?: Method): Promise<T>;
}
