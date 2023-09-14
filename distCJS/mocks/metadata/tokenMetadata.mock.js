"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTokenMetadataResponse = exports.mockTokenMetadataResponseRaw = void 0;
const chains_1 = require("../../lib/chains");
exports.mockTokenMetadataResponseRaw = {
    status: 200,
    result: {
        chain_name: chains_1.EvmChainName.MAINNET,
        chain_id: 1,
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        name: "Tether USD",
        decimals: 6,
        symbol: "USDT",
        logo_url: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
        actual_price: "1",
        is_verified: true,
        is_stable: true,
        is_protocol_token: true,
    },
};
exports.mockTokenMetadataResponse = {
    chainName: chains_1.EvmChainName.MAINNET,
    chainId: 1,
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    name: "Tether USD",
    decimals: 6,
    symbol: "USDT",
    logoUrl: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    actualPrice: "1",
    isVerified: true,
    isStable: true,
    isProtocolToken: true,
};
