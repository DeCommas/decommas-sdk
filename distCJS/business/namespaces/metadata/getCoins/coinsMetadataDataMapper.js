"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinsMetadataDataMapper = void 0;
const coinDataMapper_1 = require("../../../domains/coins/coinDataMapper");
const coinsMetadataDataMapper = (responseRaw) => {
    return {
        count: responseRaw.count,
        result: responseRaw.result.map(coinDataMapper_1.coinDataMapper),
    };
};
exports.coinsMetadataDataMapper = coinsMetadataDataMapper;
