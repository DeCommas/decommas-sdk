import { TAddress } from "@lib/types";
import { PaginatedRequest } from "@infrastructure/network";
import { ChainName } from "@lib/chains";

export type TNftHolderRaw = {
  holder_address: TAddress;
  amount: string;
  chain_id: number;
  chain_name: ChainName;
};

export type TNftHolder = {
  holderAddress: TAddress;
  amount: string;
  chainId: number;
  chainName: ChainName;
};

export type TGetNftHoldersRequest = PaginatedRequest<{
  chainName: ChainName;
  contractAddress: TAddress;
}>;

export type TGetNftHoldersResponseRaw = {
  status: number;
  result: TNftHolderRaw[];
};

export type TGetNftHoldersResponse = TNftHolder[];

export type TGetNftHolders = (
  request: TGetNftHoldersRequest
) => Promise<TGetNftHoldersResponse>;
