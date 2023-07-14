import { ChainName } from "@lib/types";
import {
  TGetTxDetailResponse,
  TGetTxDetailResponseRaw,
} from "@business/transaction/getTxDetail/types";

export const mockTxDetailResponseRaw: TGetTxDetailResponseRaw = {
  status: 200,
  result: {
    chain_name: ChainName.MAINNET,
    chain_id: 1,
    block_number: 13545048,
    block_timestamp: 1635958557,
    hash: "0x48cd7f0228f198efa9792274269173d1bba7165b0e7354a06839e6bbee8ed7cb",
    transaction_index: 319,
    from_address: "0xcc0216867bffcbf2db30918bc6215ab762a16a38",
    to_address: "0x9757f2d2b135150bbeb65308d4a91804107cd8d6",
    value: "256250000000000000",
    fee: "53273357143475458",
    status: true,
    gas_price: "166210188331",
    gas_used: "320518",
    block_base_fee_per_gas: "130243738299",
    method_hash: "0xe99a3f80",
    method: "matchOrders",
    transaction_tags: [],
  },
};

export const mockTxDetailResponse: TGetTxDetailResponse = {
  chainName: ChainName.MAINNET,
  chainId: 1,
  blockNumber: 13545048,
  blockTimestamp: 1635958557,
  hash: "0x48cd7f0228f198efa9792274269173d1bba7165b0e7354a06839e6bbee8ed7cb",
  transactionIndex: 319,
  fromAddress: "0xcc0216867bffcbf2db30918bc6215ab762a16a38",
  toAddress: "0x9757f2d2b135150bbeb65308d4a91804107cd8d6",
  value: "256250000000000000",
  fee: "53273357143475458",
  status: true,
  gasPrice: "166210188331",
  gasUsed: "320518",
  blockBaseFeePerGas: "130243738299",
  methodHash: "0xe99a3f80",
  method: "matchOrders",
  transactionTags: [],
};
