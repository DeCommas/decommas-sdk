import { IHttpRequest } from "@infrastructure/network";
import {
  TGetNftMetadata,
  TGetNftMetadataRequest,
  TGetNftMetadataResponseRaw,
} from "./getNft/types";
import { nftMetadataDataMapper } from "./getNft/nftMetadataDataMapper";
import {
  TGetTokenMetadata,
  TGetTokenMetadataRequest,
  TGetTokenMetadataResponseRaw,
} from "./getToken/types";
import { tokenMetadataDataMapper } from "./getToken/tokenMetadataDataMapper";

interface IMetadata {
  getNft: TGetNftMetadata;
  getToken: TGetTokenMetadata;
}

export class Metadata implements IMetadata {
  private readonly httpRequest: IHttpRequest;

  constructor(httpRequest: IHttpRequest) {
    this.httpRequest = httpRequest;
  }

  public async getNft(request: TGetNftMetadataRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetNftMetadataResponseRaw>(
        `nft_metadata/${request.chainName}/${request.contractAddress}/${request.tokenId}`
      );

    return nftMetadataDataMapper(responseRaw);
  }

  public async getToken(request: TGetTokenMetadataRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetTokenMetadataResponseRaw>(
        `token_metadata/${request.chainName}/${request.contractAddress}`
      );

    return tokenMetadataDataMapper(responseRaw);
  }
}