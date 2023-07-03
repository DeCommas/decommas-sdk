import querystring from "query-string";
import { Method, RequestHeaders } from "./types";
import { config } from "../config";

export type FetchFunction = <T>(
    endpoint: string,
    params?: {},
    method?: Method,
) => Promise<T>;


export interface IHttpRequest {
    fetch: FetchFunction
}

export class HttpRequest implements IHttpRequest{
    private readonly apiKey?: string;
    constructor(apiKey?: string) {
        this.apiKey = apiKey;
    }

    async fetch(
        endpoint = "",
        params = {},
        method = Method.GET,
    ) {
        const fetchUrl = `${config.apiUrl}/${endpoint}${
            method === Method.GET
                ? `?${querystring.stringify(params, { arrayFormat: "bracket" })}`
                : ""
        }`;
        const headers: RequestHeaders = {
            "Content-Type": "application/json",
        };

        if(this.apiKey) {
            headers["x-decommas-key"] = this.apiKey;
        }


        const response = await fetch(fetchUrl, {
            headers,
            method,
            ...(method !== Method.GET
                ? {
                    body: JSON.stringify(params),
                }
                : {}),
        });

        const data = await response.json();
        if (response.ok) {
            return data;
        }
        throw new Error(data.error);
    }
}
