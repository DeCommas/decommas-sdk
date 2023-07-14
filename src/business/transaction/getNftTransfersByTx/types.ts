import { ChainName, TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";

export type TNftTransfersByTxRaw = {
  block_number: number;
  block_timestamp: number;
  from_address: TAddress;
  to_address: TAddress;
  token_address: TAddress;
  token_id: string;
  amount: string;
  log_index: number;
  contract_type: string;
};

export type TNftTransfersByTx = {
  blockNumber: number;
  blockTimestamp: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  tokenAddress: TAddress;
  tokenId: string;
  amount: string;
  logIndex: number;
  contractType: string;
};

export type TGetNftTransfersByTxRequest = PaginatedRequest<{
  txHash: string;
  chainName: ChainName;
}>;

export type TGetNftTransfersByTxResponseRaw = Omit<
  PaginatedResponseRaw<TNftTransfersByTxRaw>,
  "count"
>;

export type TGetNftTransfersByTxResponse = Omit<
  PaginatedResponse<TNftTransfersByTx>,
  "count"
>;

export type TGetNftTransfersByTx = (
  request: TGetNftTransfersByTxRequest
) => Promise<TGetNftTransfersByTxResponse>;
