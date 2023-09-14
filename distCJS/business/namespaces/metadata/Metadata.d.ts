import { IHttpRequest } from "../../../infrastructure/network";
import { TGetNftMetadata, TGetNftMetadataRequest } from "./getNft/types";
import { TGetTokenMetadata, TGetTokenMetadataRequest } from "./getToken/types";
import { TGetTokensMetadata, TGetTokensMetadataRequest } from "../../namespaces/metadata/getTokens/types";
import { TGetCoinsMetadata, TGetCoinsMetadataRequest } from "../../namespaces/metadata/getCoins/types";
import { TGetTokensMetadataBySymbol, TGetTokensMetadataBySymbolRequest } from "../../namespaces/metadata/getTokensBySymbol/types";
interface IMetadata {
    getNft: TGetNftMetadata;
    getToken: TGetTokenMetadata;
    getTokens: TGetTokensMetadata;
    getTokensBySymbol: TGetTokensMetadataBySymbol;
    getCoins: TGetCoinsMetadata;
}
export declare class Metadata implements IMetadata {
    private readonly httpRequest;
    constructor(httpRequest: IHttpRequest);
    getNft(request: TGetNftMetadataRequest): Promise<import("./getNft/types").TNftMetadata>;
    getToken(request: TGetTokenMetadataRequest): Promise<import("../../..").TToken>;
    getTokens(request?: TGetTokensMetadataRequest): Promise<import("../../..").TToken[]>;
    getTokensBySymbol(request: TGetTokensMetadataBySymbolRequest): Promise<{
        count: number;
        result: import("../../..").TToken[];
    }>;
    getCoins(request?: TGetCoinsMetadataRequest): Promise<import("../../namespaces/metadata/getCoins/types").TGetCoinsMetadataResponse>;
}
export {};
