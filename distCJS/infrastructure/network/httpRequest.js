"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequest = void 0;
const types_1 = require("./types");
const config_1 = require("../../config");
const errors_1 = require("./errors");
const getSearchParams_1 = require("./getSearchParams");
class HttpRequest {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async fetch(endpoint = "", params = {}, method = types_1.Method.GET) {
        const urlSearchParams = (0, getSearchParams_1.getSearchParams)(params);
        const fetchUrl = `${config_1.config.apiUrl}/${endpoint}${method === types_1.Method.GET ? `?${urlSearchParams.toString()}` : ""}`;
        const headers = {
            "Content-Type": "application/json",
        };
        if (this.apiKey) {
            headers["x-decommas-key"] = this.apiKey;
        }
        const response = await fetch(fetchUrl, {
            headers,
            method,
            ...(method !== types_1.Method.GET
                ? {
                    body: JSON.stringify(params),
                }
                : {}),
        });
        const data = await response.json();
        if (response.ok) {
            return data;
        }
        throw new errors_1.ApiError(response.status, data.message);
    }
}
exports.HttpRequest = HttpRequest;
