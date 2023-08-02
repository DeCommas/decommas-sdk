import { ChainName, TAddress } from "@lib/types";
import { ApiResponse } from "@infrastructure/network";

export type TTokenMetadataRaw = {
  chain_name: ChainName;
  chain_id: number;
  address: TAddress;
  name: string;
  decimals: number;
  symbol: string;
  logo_url: string | null;
  actual_price: string | null;
  is_verified: boolean;
  is_stable: boolean;
  is_protocol_token: boolean;
};

export type TTokenMetadata = {
  chainName: ChainName;
  chainId: number;
  address: TAddress;
  name: string;
  decimals: number;
  symbol: string;
  logoUrl: string;
  actualPrice: string;
  isVerified: boolean;
  isStable: boolean;
  isProtocolToken: boolean;
};

export type TGetTokenMetadataRequest = {
  chainName: ChainName;
  contractAddress: TAddress;
};

export type TGetTokenMetadataResponseRaw = ApiResponse<TTokenMetadataRaw>;

export type TGetTokenMetadataResponse = TTokenMetadata;

export type TGetTokenMetadata = (
  request: TGetTokenMetadataRequest
) => Promise<TGetTokenMetadataResponse>;
