import { TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { EvmChainName } from "@lib/chains";

export type TErc20TransferRaw = {
  chain_name: EvmChainName;
  chain_id: number;
  block_number: number;
  block_timestamp: number;
  log_index: number;
  from_address: TAddress;
  to_address: TAddress;
  token_address: TAddress;
  amount: string;
  transaction_hash: string;
  method: string | null;
  method_hash: string | null;
};

export type TErc20Transfer = {
  chainName: EvmChainName;
  chainId: number;
  blockNumber: number;
  blockTimestamp: number;
  logIndex: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  tokenAddress: TAddress;
  amount: string;
  transactionHash: string;
  method: string;
  methodHash: string;
};

export type TGetErc20TransfersRequest = PaginatedRequest<{
  address: TAddress;
  chains?: EvmChainName[];
}>;

export type TGetErc20TransfersResponseRaw = Omit<
  PaginatedResponseRaw<TErc20TransferRaw>,
  "count"
>;

export type TGetErc20TransfersResponse = Omit<
  PaginatedResponse<TErc20Transfer>,
  "count"
>;

export type TGetErc20Transfers = (
  request: TGetErc20TransfersRequest
) => Promise<TGetErc20TransfersResponse>;
