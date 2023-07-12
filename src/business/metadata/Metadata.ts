import { IHttpRequest } from "@infrastructure/network";
import {
  TGetNftMetadata,
  TGetNftMetadataRequest,
  TGetNftMetadataResponseRaw,
} from "./getNft/types";
import { nftMetadataDataMapper } from "./getNft/nftMetadataDataMapper";

interface IMetadata {
  getNft: TGetNftMetadata;
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
}
