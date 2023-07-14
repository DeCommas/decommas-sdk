import { IHttpRequest } from "@infrastructure/network";
import {
  TGetTxDetail,
  TGetTxDetailRequest,
  TGetTxDetailResponseRaw,
} from "./getTxDetail/types";
import { txDetailDataMapper } from "./getTxDetail/txDetailDataMapper";

interface ITransaction {
  getDetail: TGetTxDetail;
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
}
