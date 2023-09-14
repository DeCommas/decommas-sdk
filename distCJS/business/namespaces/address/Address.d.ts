import { IHttpRequest } from "../../../infrastructure/network";
import { TGetTokens, TGetTokensRequest } from "./getTokens/types";
import { TGetNfts, TGetNftsRequest } from "./getNnfts/types";
import { TGetCoins, TGetCoinsRequest } from "./getCoins/types";
import { TGetTransactions, TGetTransactionsRequest } from "./getTransactions/types";
import { TGetErc20Transfers, TGetErc20TransfersRequest } from "../../namespaces/address/getErc20Transfers/types";
import { TGetNftTransfers, TGetNftTransfersRequest } from "../../namespaces/address/getNftTransfers/types";
interface IAddress {
    getTokens: TGetTokens;
    getNfts: TGetNfts;
    getCoins: TGetCoins;
    getTransactions: TGetTransactions;
    getErc20Transfers: TGetErc20Transfers;
    getNftTransfers: TGetNftTransfers;
}
export declare class Address implements IAddress {
    private readonly httpRequest;
    constructor(httpRequest: IHttpRequest);
    getCoins(request: TGetCoinsRequest): Promise<import("./getCoins/types").TGetCoinsResponse>;
    getTokens(request: TGetTokensRequest): Promise<import("./getTokens/types").TGetTokensResponse>;
    getNfts(request: TGetNftsRequest): Promise<import("./getNnfts/types").TGetNftsResponse>;
    getTransactions(request: TGetTransactionsRequest): Promise<import("./getTransactions/types").TGetTransactionsResponse>;
    getErc20Transfers(request: TGetErc20TransfersRequest): Promise<import("../../namespaces/address/getErc20Transfers/types").TGetErc20TransfersResponse>;
    getNftTransfers(request: TGetNftTransfersRequest): Promise<import("../../namespaces/address/getNftTransfers/types").TGetNftTransfersResponse>;
}
export {};
