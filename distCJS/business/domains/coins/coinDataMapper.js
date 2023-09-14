"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coinDataMapper = void 0;
const coinDataMapper = (raw) => {
    return {
        chainName: raw.chain_name,
        chainId: raw.chain_id,
        name: raw.name,
        symbol: raw.symbol,
        logoUrl: raw.logo_url ?? "",
        decimals: raw.decimals,
        actualPrice: raw.actual_price ?? "",
    };
};
exports.coinDataMapper = coinDataMapper;
