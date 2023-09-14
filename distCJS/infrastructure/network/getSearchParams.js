"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchParams = void 0;
const getSearchParams = (params = {}) => {
    const searchParams = new URLSearchParams(params);
    const keysForDel = [];
    searchParams.forEach((value, key) => {
        if (value == "" || value === "undefined") {
            keysForDel.push(key);
        }
    });
    keysForDel.forEach((key) => {
        searchParams.delete(key);
    });
    return searchParams;
};
exports.getSearchParams = getSearchParams;
