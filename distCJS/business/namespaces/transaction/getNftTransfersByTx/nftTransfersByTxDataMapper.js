"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nftTransfersByTxDataMapper = void 0;
const nftTransfersByTxDataMapper = (responseRaw) => {
    return {
        result: responseRaw.result.map((raw) => ({
            blockNumber: raw.block_number,
            blockTimestamp: raw.block_timestamp,
            fromAddress: raw.from_address,
            toAddress: raw.to_address,
            contractAddress: raw.contract_address,
            tokenId: raw.token_id,
            amount: raw.amount,
            logIndex: raw.log_index,
            contractType: raw.contract_type,
        })),
    };
};
exports.nftTransfersByTxDataMapper = nftTransfersByTxDataMapper;
