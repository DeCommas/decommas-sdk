"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erc20TransfersByTxDataMapper = void 0;
const erc20TransfersByTxDataMapper = (responseRaw) => {
    return {
        result: responseRaw.result.map((raw) => ({
            blockNumber: raw.block_number,
            blockTimestamp: raw.block_timestamp,
            fromAddress: raw.from_address,
            toAddress: raw.to_address,
            tokenAddress: raw.token_address,
            amount: raw.amount,
            logIndex: raw.log_index,
        })),
    };
};
exports.erc20TransfersByTxDataMapper = erc20TransfersByTxDataMapper;
