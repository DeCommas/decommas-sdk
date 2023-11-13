import { IHttpRequest } from "@infrastructure/network";
import {
  TGetTokens,
  TGetTokensRequest,
  TGetTokensResponseRaw,
} from "./getTokens/types";
import { tokensDataMapper } from "./getTokens/tokensDataMapper";
import {
  TGetNfts,
  TGetNftsRequest,
  TGetNftsResponseRaw,
} from "./getNnfts/types";
import { nftsDataMapper } from "./getNnfts/nftsDataMapper";
import {
  TGetCoins,
  TGetCoinsRequest,
  TGetCoinsResponseRaw,
} from "./getCoins/types";
import { coinsDataMapper } from "./getCoins/coinsDataMapper";
import {
  TGetTransactions,
  TGetTransactionsRequest,
  TGetTransactionsResponseRaw,
} from "./getTransactions/types";
import { transactionsDataMapper } from "./getTransactions/transactionsDataMapper";
import {
  TGetErc20Transfers,
  TGetErc20TransfersRequest,
  TGetErc20TransfersResponseRaw,
} from "@business/namespaces/address/getErc20Transfers/types";
import { erc20TransfersDataMapper } from "./getErc20Transfers/erc20TransfersDataMapper";
import {
  TGetNftTransfers,
  TGetNftTransfersRequest,
  TGetNftTransfersResponseRaw,
} from "@business/namespaces/address/getNftTransfers/types";
import { nftTransfersDataMapper } from "./getNftTransfers/nftTransfersDataMapper";

interface IAddress {
  getTokens: TGetTokens;
  getNfts: TGetNfts;
  getCoins: TGetCoins;
  getTransactions: TGetTransactions;
  getErc20Transfers: TGetErc20Transfers;
  getNftTransfers: TGetNftTransfers;
}

export class Address implements IAddress {
  private readonly httpRequest: IHttpRequest;

  constructor(httpRequest: IHttpRequest) {
    this.httpRequest = httpRequest;
  }

  public async getCoins(request: TGetCoinsRequest) {
    const responseRaw = await this.httpRequest.fetch<TGetCoinsResponseRaw>(
      `coins/${request.address}`,
      {
        networks: request.chains,
      }
    );

    return coinsDataMapper(responseRaw);
  }

  public async getTokens(request: TGetTokensRequest) {
    const responseRaw = await this.httpRequest.fetch<TGetTokensResponseRaw>(
      `tokens/${request.address}`,
      {
        networks: request.chains,
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
        verified: request.verified || false
      }
    );

    return nftsDataMapper(responseRaw);
  }

  public async getTransactions(request: TGetTransactionsRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetTransactionsResponseRaw>(
        `transactions/${request.address}`,
        {
          networks: request.chain,
          limit: request.limit,
          offset: request.offset,
        }
      );

    return transactionsDataMapper(responseRaw);
  }

  public async getErc20Transfers(request: TGetErc20TransfersRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetErc20TransfersResponseRaw>(
        `transfers_erc20/${request.address}`,
        {
          networks: request.chain,
          limit: request.limit,
          offset: request.offset,
        }
      );

    return erc20TransfersDataMapper(responseRaw);
  }

  public async getNftTransfers(request: TGetNftTransfersRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetNftTransfersResponseRaw>(
        `transfers_nft/${request.address}`,
        {
          networks: request.chain,
          limit: request.limit,
          offset: request.offset,
        }
      );

    return nftTransfersDataMapper(responseRaw);
  }
}
