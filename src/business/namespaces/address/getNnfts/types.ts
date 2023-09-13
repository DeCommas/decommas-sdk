import { TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import { EvmChainName } from "@lib/chains";

export type TNftRaw = {
  chain_name: EvmChainName;
  chain_id: number;
  contract_address: TAddress;
  token_id: string;
  amount: string;
  contract_type: string;
};

export type TNft = {
  chainName: EvmChainName;
  chainId: number;
  contractAddress: TAddress;
  tokenId: string;
  amount: string;
  contractType: string;
};

export type TGetNftsRequest = PaginatedRequest<{
  address: TAddress;
  chains?: EvmChainName[];
}>;

export type TGetNftsResponseRaw = PaginatedResponseRaw<TNftRaw>;

export type TGetNftsResponse = PaginatedResponse<TNft>;

export type TGetNfts = (request: TGetNftsRequest) => Promise<TGetNftsResponse>;
