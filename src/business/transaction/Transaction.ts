import { IHttpRequest } from "@infrastructure/network";
import {
  TGetTxDetail,
  TGetTxDetailRequest,
  TGetTxDetailResponseRaw,
} from "./getTxDetail/types";
import { txDetailDataMapper } from "./getTxDetail/txDetailDataMapper";
import {
  TGetErc20TransferByTxs,
  TGetErc20TransferByTxsRequest,
  TGetErc20TransferByTxsResponseRaw,
} from "./getErc20TransfersByTx/types";
import { erc20TransfersByTxDataMapper } from "./getErc20TransfersByTx/erc20TransfersByTxDataMapper";

interface ITransaction {
  getDetail: TGetTxDetail;
  getErc20TransfersByTx: TGetErc20TransferByTxs;
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

  public async getErc20TransfersByTx(request: TGetErc20TransferByTxsRequest) {
    const responseRaw =
      await this.httpRequest.fetch<TGetErc20TransferByTxsResponseRaw>(
        `transaction_erc20_transfers/${request.chainName}/${request.txHash}`,
        {
          limit: request.limit,
          offset: request.offset,
        }
      );

    return erc20TransfersByTxDataMapper(responseRaw);
  }
}
