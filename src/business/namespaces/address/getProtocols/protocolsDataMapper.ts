import { TGetProtocolsResponse, TGetProtocolsResponseRaw } from "./types";
import { protocolDataMapper } from "@business/domains/protocols/protocolDataMapper";

export const protocolsDataMapper = (
  responseRaw: TGetProtocolsResponseRaw
): TGetProtocolsResponse => {
  return {
    count: responseRaw.count,
    result: responseRaw.result.map((raw) => {
      return {
        ...protocolDataMapper(raw),
      };
    }),
  };
};
