"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }
}
exports.ApiError = ApiError;
