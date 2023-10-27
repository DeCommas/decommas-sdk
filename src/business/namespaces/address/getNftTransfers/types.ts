import { TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { EvmChainName } from "@lib/chains";

export type TNftTransferRaw = {
  chain_name: EvmChainName;
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
  method: string | null;
  method_hash: string | null;
  fee: string;
  gas_price: string;
  gas_used: string;
  block_base_fee_per_gas: string;
};

export type TNftTransfer = {
  chainName: EvmChainName;
  chainId: number;
  blockNumber: number;
  blockTimestamp: number;
  logIndex: number;
  fromAddress: TAddress;
  toAddress: TAddress;
  contractAddress: TAddress;
  tokenId: string;
  contractType: string;
  amount: string;
  transactionHash: string;
  method: string;
  methodHash: string;
  fee: string;
  gasPrice: string;
  gasUsed: string;
  blockBaseFeePerGas: string;
};

export type TGetNftTransfersRequest = PaginatedRequest<{
  address: TAddress;
  chain?: EvmChainName;
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
