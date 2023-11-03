import { TAddress } from "@lib/types";
import { PaginatedRequest } from "@infrastructure/network";
import { ChainName } from "@lib/chains";

export type TTokenHolderRaw = {
  holder_address: TAddress;
  amount: string;
  decimals: number;
  actual_price: string;
  chain_id: number;
  chain_name: ChainName;
};

export type TTokenHolder = {
  holderAddress: TAddress;
  amount: string;
  decimals: number;
  actualPrice: string;
  chainId: number;
  chainName: ChainName;
};

export type TGetTokenHoldersRequest = PaginatedRequest<{
  chainName: ChainName;
  contractAddress: TAddress;
}>;

export type TGetTokenHoldersResponseRaw = {
  status: number;
  result: TTokenHolderRaw[];
};

export type TGetTokenHoldersResponse = TTokenHolder[];

export type TGetTokenHolders = (
  request: TGetTokenHoldersRequest
) => Promise<TGetTokenHoldersResponse>;
