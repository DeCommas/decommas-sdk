"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinsDataMapper = void 0;
const coinDataMapper_1 = require("../../../domains/coins/coinDataMapper");
const coinsDataMapper = (responseRaw) => {
    return {
        count: responseRaw.count,
        result: responseRaw.result.map((raw) => {
            return {
                ...(0, coinDataMapper_1.coinDataMapper)(raw),
                amount: raw.amount,
            };
        }),
    };
};
exports.coinsDataMapper = coinsDataMapper;
