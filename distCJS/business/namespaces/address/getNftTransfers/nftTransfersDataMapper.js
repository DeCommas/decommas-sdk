"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nftTransfersDataMapper = void 0;
const nftTransfersDataMapper = (responseRaw) => {
    return {
        result: responseRaw.result.map((raw) => ({
            chainName: raw.chain_name,
            chainId: raw.chain_id,
            blockNumber: raw.block_number,
            blockTimestamp: raw.block_timestamp,
            logIndex: raw.log_index,
            fromAddress: raw.from_address,
            toAddress: raw.to_address,
            contractAddress: raw.contract_address,
            tokenId: raw.token_id,
            contractType: raw.contract_type,
            amount: raw.amount,
            transactionHash: raw.transaction_hash,
            method: raw.method ?? "",
            methodHash: raw.method_hash ?? "",
        })),
    };
};
exports.nftTransfersDataMapper = nftTransfersDataMapper;
