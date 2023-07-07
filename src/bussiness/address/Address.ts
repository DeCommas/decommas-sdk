import {
  TGetTokens,
  TGetTokensRequest,
  TGetTokensResponseRaw,
} from "./getTokens/types";
import { tokensDataMapper } from "./getTokens/tokensDataMapper";
import { TGetNftsRequest, TGetNftsResponseRaw } from "./getNnfts/types";
import { nftsDataMapper } from "./getNnfts/nftsDataMapper";
import { IHttpRequest } from "../../infrastracture/network/httpRequest";

interface IAddress {
  getTokens: TGetTokens;
}

export class Address implements IAddress {
  private readonly httpRequest: IHttpRequest;

  constructor(httpRequest: IHttpRequest) {
    this.httpRequest = httpRequest;
  }

  public async getTokens(request: TGetTokensRequest) {
    const responseRaw = await this.httpRequest.fetch<TGetTokensResponseRaw>(
      `tokens/${request.address}`,
      {
        verified: request.verified,
        limit: request.limit,
        offset: request.offset,
      }
    );

    return tokensDataMapper(responseRaw);
  }

  public async getNfts(request: TGetNftsRequest) {
    const responseRaw = await this.httpRequest.fetch<TGetNftsResponseRaw>(
      `nfts/${request.address}`,
      {
        networks: request.chains,
        limit: request.limit,
        offset: request.offset,
      }
    );

    return nftsDataMapper(responseRaw);
  }
}
