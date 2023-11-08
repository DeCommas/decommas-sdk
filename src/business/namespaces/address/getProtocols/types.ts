import { TAddress } from "@lib/types";
import {
  PaginatedRequest,
  PaginatedResponse,
  PaginatedResponseRaw,
} from "@infrastructure/network";
import {
  TProtocol,
  TProtocolRaw,
} from "@business/domains/protocols/types";
import { EvmChainName } from "@lib/chains";

export type TGetProtocolsRequest = PaginatedRequest<{
  address: TAddress;
  chain?: EvmChainName;
}>;

export type TGetProtocolsResponseRaw = PaginatedResponseRaw<TProtocolRaw>;

export type TGetProtocolsResponse = PaginatedResponse<TProtocol>;

export type TGetProtocols = (
  request: TGetProtocolsRequest
) => Promise<TGetProtocolsResponse>;
