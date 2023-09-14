import { IHttpRequest } from "../../../infrastructure/network";
import { TGetTxDetail, TGetTxDetailRequest } from "./getTxDetail/types";
import { TGetErc20TransfersByTx, TGetErc20TransfersByTxRequest } from "./getErc20TransfersByTx/types";
import { TGetNftTransfersByTxRequest, TGetNftTransfersByTx } from "./getNftTransfersByTx/types";
interface ITransaction {
    getDetail: TGetTxDetail;
    getErc20TransfersByTx: TGetErc20TransfersByTx;
    getNftTransfersByTx: TGetNftTransfersByTx;
}
export declare class Transaction implements ITransaction {
    private readonly httpRequest;
    constructor(httpRequest: IHttpRequest);
    getDetail(request: TGetTxDetailRequest): Promise<import("./getTxDetail/types").TTxDetail>;
    getErc20TransfersByTx(request: TGetErc20TransfersByTxRequest): Promise<import("./getErc20TransfersByTx/types").TGetErc20TransfersByTxResponse>;
    getNftTransfersByTx(request: TGetNftTransfersByTxRequest): Promise<import("./getNftTransfersByTx/types").TGetNftTransfersByTxResponse>;
}
export {};
