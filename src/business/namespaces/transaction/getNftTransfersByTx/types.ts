import { TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { EvmChainName } from "@lib/chains";

export type TNftTransferByTxRaw = {
  block_number: number;
  block_timestamp: number;
  from_address: TAddress;
  to_address: TAddress;
  contract_address: TAddress;
  token_id: string;
  amount: string;
  log_index: number;
  contract_type: string;
};

export type TNftTransferByTx = {
  blockNumber: number;
  blockTimestamp: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  contractAddress: TAddress;
  tokenId: string;
  amount: string;
  logIndex: number;
  contractType: string;
};

export type TGetNftTransfersByTxRequest = PaginatedRequest<{
  txHash: string;
  chainName: EvmChainName;
}>;

export type TGetNftTransfersByTxResponseRaw = Omit<
  PaginatedResponseRaw<TNftTransferByTxRaw>,
  "count"
>;

export type TGetNftTransfersByTxResponse = Omit<
  PaginatedResponse<TNftTransferByTx>,
  "count"
>;

export type TGetNftTransfersByTx = (
  request: TGetNftTransfersByTxRequest
) => Promise<TGetNftTransfersByTxResponse>;
