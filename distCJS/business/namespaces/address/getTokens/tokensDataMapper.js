"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensDataMapper = void 0;
const tokenDataMapper_1 = require("../../../domains/tokens/tokenDataMapper");
const tokensDataMapper = (responseRaw) => {
    return {
        count: responseRaw.count,
        result: responseRaw.result.map((tokenRaw) => ({
            ...(0, tokenDataMapper_1.tokenDataMapper)(tokenRaw),
            amount: tokenRaw.amount,
        })),
    };
};
exports.tokensDataMapper = tokensDataMapper;
