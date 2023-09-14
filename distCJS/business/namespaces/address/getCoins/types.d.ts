import { TAddress } from "../../../../lib/types";
import { PaginatedResponse, PaginatedResponseRaw } from "../../../../infrastructure/network";
import { TCoinWithAmount, TCoinWithAmountRaw } from "../../../domains/coins/types";
import { EvmChainName } from "../../../../lib/chains";
export type TGetCoinsRequest = {
    address: TAddress;
    chains?: EvmChainName[];
};
export type TGetCoinsResponseRaw = PaginatedResponseRaw<TCoinWithAmountRaw>;
export type TGetCoinsResponse = PaginatedResponse<TCoinWithAmount>;
export type TGetCoins = (request: TGetCoinsRequest) => Promise<TGetCoinsResponse>;
