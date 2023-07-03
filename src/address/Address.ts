import { IHttpRequest } from "../network/httpRequest";
import { TGetTokens, TGetTokensRequest, TGetTokensResponseRaw } from "./getTokens/types";
import { dataMapper } from "./getTokens/dataMapper";

interface IAddress {
    getTokens: TGetTokens
}


export class Address implements IAddress {
    private readonly httpRequest: IHttpRequest;

    constructor(httpRequest: IHttpRequest) {
        this.httpRequest = httpRequest;
    }

    public async getTokens(request: TGetTokensRequest) {
        const responseRaw = await this.httpRequest.fetch<TGetTokensResponseRaw>(`tokens/${request.address}`, {});
        return dataMapper(responseRaw);
    }
}
