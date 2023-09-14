"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockNftsResponse = exports.mockNftsResponseRaw = void 0;
const chains_1 = require("../../lib/chains");
exports.mockNftsResponseRaw = {
    count: 22,
    status: 200,
    result: [
        {
            chain_name: chains_1.EvmChainName.MAINNET,
            chain_id: 1,
            contract_address: "0x76be3b62873462d2142405439777e971754e8e77",
            token_id: "10397",
            amount: "1",
            contract_type: "ERC-1155",
        },
    ],
};
exports.mockNftsResponse = {
    count: 22,
    result: [
        {
            chainName: chains_1.EvmChainName.MAINNET,
            chainId: 1,
            contractAddress: "0x76be3b62873462d2142405439777e971754e8e77",
            tokenId: "10397",
            amount: "1",
            contractType: "ERC-1155",
        },
    ],
};
