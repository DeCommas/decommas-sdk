import { IHttpRequest } from "@infrastructure/network";
import {
  TGetTxDetail,
  TGetTxDetailRequest,
  TGetTxDetailResponseRaw,
} from "./getTxDetail/types";
import { txDetailDataMapper } from "./getTxDetail/txDetailDataMapper";
import {
  TGetErc20TransfersByTx,
  TGetErc20TransfersByTxRequest,
  TGetErc20TransfersByTxResponseRaw,
} from "./getErc20TransfersByTx/types";
import { erc20TransfersByTxDataMapper } from "./getErc20TransfersByTx/erc20TransfersByTxDataMapper";
import {
  TGetNftTransfersByTxRequest,
  TGetNftTransfersByTxResponseRaw,
  TGetNftTransfersByTx,
} from "./getNftTransfersByTx/types";
import { nftTransfersByTxDataMapper } from "./getNftTransfersByTx/nftTransfersByTxDataMapper";

interface ITransaction {
  getDetail: TGetTxDetail;
  getErc20TransfersByTx: TGetErc20TransfersByTx;
  getNftTransfersByTx: TGetNftTransfersByTx;
}

export class Transaction implements ITransaction {
  private readonly httpRequest: IHttpRequest;

  constructor(httpRequest: IHttpRequest) {
    this.httpRequest = httpRequest;
  }

  public async getDetail(request: TGetTxDetailRequest) {
    const responseRaw = await this.httpRequest.fetch<TGetTxDetailResponseRaw>(
      `transaction/${request.chainName}/${request.txHash}`
    );

    return txDetailDataMapper(responseRaw);
  }

  public async getErc20TransfersByTx(request: TGetErc20TransfersByTxRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetErc20TransfersByTxResponseRaw>(
        `transaction_erc20_transfers/${request.chainName}/${request.txHash}`,
        {
          limit: request.limit,
          offset: request.offset,
        }
      );

    return erc20TransfersByTxDataMapper(responseRaw);
  }

  public async getNftTransfersByTx(request: TGetNftTransfersByTxRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetNftTransfersByTxResponseRaw>(
        `transaction_nft_transfers/${request.chainName}/${request.txHash}`,
        {
          limit: request.limit,
          offset: request.offset,
        }
      );

    return nftTransfersByTxDataMapper(responseRaw);
  }
}
