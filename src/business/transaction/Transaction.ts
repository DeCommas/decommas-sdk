import { IHttpRequest } from "@infrastructure/network";
import {
  TGetTxDetail,
  TGetTxDetailRequest,
  TGetTxDetailResponseRaw,
} from "./getTxDetail/types";
import { txDetailDataMapper } from "./getTxDetail/txDetailDataMapper";
import {
  TGetErc20TransfersByTxs,
  TGetErc20TransfersByTxRequest,
  TGetErc20TransfersByTxResponseRaw,
} from "./getErc20TransfersByTx/types";
import { erc20Erc20TransfersByTxDataMapper } from "./getErc20TransfersByTx/erc20TransfersByTxDataMapper";

interface ITransaction {
  getDetail: TGetTxDetail;
  getErc20Erc20TransfersByTx: TGetErc20TransfersByTxs;
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

  public async getErc20Erc20TransfersByTx(
    request: TGetErc20TransfersByTxRequest
  ) {
    const responseRaw =
      await this.httpRequest.fetch<TGetErc20TransfersByTxResponseRaw>(
        `transaction_erc20_transfers/${request.chainName}/${request.txHash}`,
        {
          limit: request.limit,
          offset: request.offset,
        }
      );

    return erc20Erc20TransfersByTxDataMapper(responseRaw);
  }

  public async getNftErc20TransfersByTx(
    request: TGetErc20TransfersByTxRequest
  ) {
    const responseRaw =
      await this.httpRequest.fetch<TGetErc20TransfersByTxResponseRaw>(
        `transaction_erc20_transfers/${request.chainName}/${request.txHash}`,
        {
          limit: request.limit,
          offset: request.offset,
        }
      );

    return erc20Erc20TransfersByTxDataMapper(responseRaw);
  }
}
