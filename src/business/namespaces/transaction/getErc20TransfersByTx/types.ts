import { TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { EvmChainName } from "@lib/chains";

export type TErc20TransferByTxRaw = {
  block_number: number;
  block_timestamp: number;
  from_address: TAddress;
  to_address: TAddress;
  token_address: TAddress;
  amount: string;
  log_index: number;
};

export type TErc20TransferByTx = {
  blockNumber: number;
  blockTimestamp: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  tokenAddress: TAddress;
  amount: string;
  logIndex: number;
};

export type TGetErc20TransfersByTxRequest = PaginatedRequest<{
  txHash: string;
  chainName: EvmChainName;
}>;

export type TGetErc20TransfersByTxResponseRaw = Omit<
  PaginatedResponseRaw<TErc20TransferByTxRaw>,
  "count"
>;

export type TGetErc20TransfersByTxResponse = Omit<
  PaginatedResponse<TErc20TransferByTx>,
  "count"
>;

export type TGetErc20TransfersByTx = (
  request: TGetErc20TransfersByTxRequest
) => Promise<TGetErc20TransfersByTxResponse>;
