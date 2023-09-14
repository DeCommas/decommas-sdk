"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nftsDataMapper = void 0;
const nftsDataMapper = (responseRaw) => {
    return {
        count: responseRaw.count,
        result: responseRaw.result.map((raw) => ({
            chainName: raw.chain_name,
            chainId: raw.chain_id,
            contractAddress: raw.contract_address,
            tokenId: raw.token_id,
            amount: raw.amount,
            contractType: raw.contract_type,
        })),
    };
};
exports.nftsDataMapper = nftsDataMapper;
