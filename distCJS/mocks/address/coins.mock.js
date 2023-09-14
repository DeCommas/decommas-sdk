"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCoinsResponse = exports.mockCoinsResponseRaw = exports.mockCoinsMetadataResponse = exports.mockCoinsMetadataResponseRaw = void 0;
const chains_1 = require("../../lib/chains");
exports.mockCoinsMetadataResponseRaw = {
    count: 22,
    status: 200,
    result: [
        {
            chain_name: chains_1.EvmChainName.MAINNET,
            chain_id: 1,
            name: "ethereum",
            symbol: "ETH",
            logo_url: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            decimals: 18,
            actual_price: "1869.17",
        },
    ],
};
exports.mockCoinsMetadataResponse = {
    count: 22,
    result: [
        {
            chainName: chains_1.EvmChainName.MAINNET,
            chainId: 1,
            name: "ethereum",
            symbol: "ETH",
            logoUrl: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            decimals: 18,
            actualPrice: "1869.17",
        },
    ],
};
exports.mockCoinsResponseRaw = {
    count: 22,
    status: 200,
    result: exports.mockCoinsMetadataResponseRaw.result.map((item) => {
        return {
            ...item,
            amount: "38368326268114187",
        };
    }),
};
exports.mockCoinsResponse = {
    count: 22,
    result: exports.mockCoinsMetadataResponse.result.map((item) => {
        return {
            ...item,
            amount: "38368326268114187",
        };
    }),
};
