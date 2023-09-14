"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTokensWithAmountResponse = exports.mockTokensWithAmountResponseRaw = exports.mockTokensResponse = exports.mockTokensResponseRaw = void 0;
const chains_1 = require("../../lib/chains");
exports.mockTokensResponseRaw = {
    count: 22,
    status: 200,
    result: [
        {
            chain_name: chains_1.EvmChainName.MAINNET,
            chain_id: 1,
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            name: "Tether USD",
            decimals: 6,
            symbol: "USDT",
            logo_url: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            actual_price: "0.999985",
            is_verified: true,
            is_stable: true,
            is_protocol_token: true,
        },
    ],
};
exports.mockTokensResponse = {
    count: 22,
    result: [
        {
            chainName: chains_1.EvmChainName.MAINNET,
            chainId: 1,
            address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
            name: "Tether USD",
            decimals: 6,
            symbol: "USDT",
            logoUrl: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            actualPrice: "0.999985",
            isVerified: true,
            isStable: true,
            isProtocolToken: true,
        },
    ],
};
exports.mockTokensWithAmountResponseRaw = {
    count: 22,
    status: 200,
    result: exports.mockTokensResponseRaw.result.map((r) => {
        return {
            ...r,
            amount: "10000000",
        };
    }),
};
exports.mockTokensWithAmountResponse = {
    count: 22,
    result: exports.mockTokensResponse.result.map((r) => {
        return {
            ...r,
            amount: "10000000",
        };
    }),
};
