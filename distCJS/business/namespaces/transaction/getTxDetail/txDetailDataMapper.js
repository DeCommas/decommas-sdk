"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.txDetailDataMapper = void 0;
const txDetailDataMapper = (responseRaw) => {
    const raw = responseRaw.result;
    return {
        chainName: raw.chain_name,
        chainId: raw.chain_id,
        blockNumber: raw.block_number,
        blockTimestamp: raw.block_timestamp,
        hash: raw.hash,
        transactionIndex: raw.transaction_index,
        fromAddress: raw.from_address,
        toAddress: raw.to_address,
        value: raw.value,
        fee: raw.fee,
        status: raw.status,
        gasPrice: raw.gas_price,
        gasUsed: raw.gas_used,
        blockBaseFeePerGas: raw.block_base_fee_per_gas,
        methodHash: raw.method_hash ?? "",
        method: raw.method ?? "",
        transactionTags: raw.transaction_tags,
        deployedContract: raw.deployed_contract ?? "",
    };
};
exports.txDetailDataMapper = txDetailDataMapper;
