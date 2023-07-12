import { ChainName, TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";

export type TNftTransferRaw = {
  chain_name: ChainName;
  chain_id: number;
  block_number: number;
  block_timestamp: number;
  log_index: number;
  from_address: TAddress;
  to_address: TAddress;
  contract_address: TAddress;
  token_id: string;
  contract_type: string;
  amount: string;
  transaction_hash: string;
  method: string;
  method_hash: string;
};

export type TNftTransfer = {
  chainName: ChainName;
  chainId: number;
  blockNumber: number;
  blockTimestamp: number;
  logIndex: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  contractAddress: TAddress;
  tokenId: number;
  contractType: string;
  amount: string;
  transactionHash: string;
  method: string;
  methodHash: string;
};

export type TGetNftTransfersRequest = PaginatedRequest<{
  address: TAddress;
  chains?: ChainName[];
}>;

export type TGetNftTransfersResponseRaw = Omit<
  PaginatedResponseRaw<TNftTransferRaw>,
  "count"
>;

export type TGetNftTransfersResponse = Omit<
  PaginatedResponse<TNftTransfer>,
  "count"
>;

export type TGetNftTransfers = (
  request: TGetNftTransfersRequest
) => Promise<TGetNftTransfersResponse>;
