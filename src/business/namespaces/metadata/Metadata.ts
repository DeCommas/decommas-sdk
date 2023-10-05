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
import { tokenDataMapper } from "../../domains/tokens/tokenDataMapper";
import {
  TGetTokensMetadata,
  TGetTokensMetadataRequest,
  TGetTokensMetadataResponseRaw,
} from "@business/namespaces/metadata/getTokens/types";
import { coinsMetadataDataMapper } from "@business/namespaces/metadata/getCoins/coinsMetadataDataMapper";
import {
  TGetCoinsMetadata,
  TGetCoinsMetadataRequest,
  TGetCoinsMetadataResponseRaw,
} from "@business/namespaces/metadata/getCoins/types";
import {
  TGetTokensMetadataBySymbol,
  TGetTokensMetadataBySymbolRequest,
} from "@business/namespaces/metadata/getTokensBySymbol/types";
import {
  TGetTokenHolders,
  TGetTokenHoldersRequest,
  TGetTokenHoldersResponseRaw,
} from "@business/namespaces/metadata/getTokenHolders/types";
import { tokenHoldersDataMapper } from "@business/namespaces/metadata/getTokenHolders/tokenHoldersDataMapper";

interface IMetadata {
  getNft: TGetNftMetadata;
  getToken: TGetTokenMetadata;
  getTokens: TGetTokensMetadata;
  getTokensBySymbol: TGetTokensMetadataBySymbol;
  getCoins: TGetCoinsMetadata;
  getTokenHolders: TGetTokenHolders;
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

    return tokenDataMapper(responseRaw.result);
  }

  public async getTokens(request?: TGetTokensMetadataRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetTokensMetadataResponseRaw>(
        `all_tokens_metadata`,
        {
          networks: request?.chains,
        }
      );
    return responseRaw.result.map((item) => tokenDataMapper(item));
  }

  public async getTokensBySymbol(request: TGetTokensMetadataBySymbolRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetTokensMetadataResponseRaw>(
        `tokens_by_symbol/${request.symbol}`,
        {
          networks: request?.chains,
        }
      );

    return {
      count: responseRaw.count,
      result: responseRaw.result.map((tokenRaw) => tokenDataMapper(tokenRaw)),
    };
  }

  public async getCoins(request?: TGetCoinsMetadataRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetCoinsMetadataResponseRaw>(
        `all_coins_metadata`,
        {
          networks: request?.chains,
        }
      );
    return coinsMetadataDataMapper(responseRaw);
  }

  public async getTokenHolders(request: TGetTokenHoldersRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetTokenHoldersResponseRaw>(
        `token_holders/${request.chainName}/${request.contractAddress}`,
        {
          limit: request.limit,
          offset: request.offset,
        }
      );
    return tokenHoldersDataMapper(responseRaw);
  }
}
