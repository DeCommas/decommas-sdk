"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockErc20TransfersByTxResponse = exports.mockErc20TransfersByTxResponseRaw = void 0;
exports.mockErc20TransfersByTxResponseRaw = {
    status: 200,
    result: [
        {
            block_number: 25578358,
            block_timestamp: 1676130398,
            from_address: "0x000000000482aa9817645c3d56aa2230f6573532",
            to_address: "0xd891442f82e62bab57e1ca297893003d1b12f628",
            token_address: "0x000000000482aa9817645c3d56aa2230f6573532",
            amount: "298222198686",
            log_index: 325,
        },
    ],
};
exports.mockErc20TransfersByTxResponse = {
    result: [
        {
            blockNumber: 25578358,
            blockTimestamp: 1676130398,
            fromAddress: "0x000000000482aa9817645c3d56aa2230f6573532",
            toAddress: "0xd891442f82e62bab57e1ca297893003d1b12f628",
            tokenAddress: "0x000000000482aa9817645c3d56aa2230f6573532",
            amount: "298222198686",
            logIndex: 325,
        },
    ],
};
