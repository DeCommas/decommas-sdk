import { ChainName, TAddress } from "@lib/types";
import {
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import {
  TCoinWithAmount,
  TCoinWithAmountRaw,
} from "@business/domains/coins/types";

export type TGetCoinsRequest = {
  address: TAddress;
  chains?: ChainName[];
};

export type TGetCoinsResponseRaw = PaginatedResponseRaw<TCoinWithAmountRaw>;

export type TGetCoinsResponse = PaginatedResponse<TCoinWithAmount>;

export type TGetCoins = (
  request: TGetCoinsRequest
) => Promise<TGetCoinsResponse>;
