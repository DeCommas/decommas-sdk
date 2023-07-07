import { ChainName, TAddress } from "../../../lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "../../../infrastracture/network/types";

export type TNftRaw = {
  chain_name: ChainName;
  chain_id: number;
  contract_address: TAddress;
  token_id: string;
  amount: string;
};

export type TNft = {
  chainName: ChainName;
  chainId: number;
  contractAddress: TAddress;
  tokenId: number;
  amount: number;
};

export type TGetNftsRequest = PaginatedRequest<{
  address: TAddress;
  chains?: ChainName[];
}>;

export type TGetNftsResponseRaw = PaginatedResponseRaw<TNftRaw>;

export type TGetNftsResponse = PaginatedResponse<TNft>;

export type TGetNfts = (request: TGetNftsRequest) => Promise<TGetNftsResponse>;
