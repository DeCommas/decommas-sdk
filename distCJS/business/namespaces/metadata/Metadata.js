"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
const nftMetadataDataMapper_1 = require("./getNft/nftMetadataDataMapper");
const tokenDataMapper_1 = require("../../domains/tokens/tokenDataMapper");
const coinsMetadataDataMapper_1 = require("../../namespaces/metadata/getCoins/coinsMetadataDataMapper");
class Metadata {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    async getNft(request) {
        const responseRaw = await this.httpRequest.fetch(`nft_metadata/${request.chainName}/${request.contractAddress}/${request.tokenId}`);
        return (0, nftMetadataDataMapper_1.nftMetadataDataMapper)(responseRaw);
    }
    async getToken(request) {
        const responseRaw = await this.httpRequest.fetch(`token_metadata/${request.chainName}/${request.contractAddress}`);
        return (0, tokenDataMapper_1.tokenDataMapper)(responseRaw.result);
    }
    async getTokens(request) {
        const responseRaw = await this.httpRequest.fetch(`all_tokens_metadata`, {
            networks: request?.chains,
        });
        return responseRaw.result.map((item) => (0, tokenDataMapper_1.tokenDataMapper)(item));
    }
    async getTokensBySymbol(request) {
        const responseRaw = await this.httpRequest.fetch(`tokens_by_symbol/${request.symbol}`, {
            networks: request?.chains,
        });
        return {
            count: responseRaw.count,
            result: responseRaw.result.map((tokenRaw) => (0, tokenDataMapper_1.tokenDataMapper)(tokenRaw)),
        };
    }
    async getCoins(request) {
        const responseRaw = await this.httpRequest.fetch(`all_coins_metadata`, {
            networks: request?.chains,
        });
        return (0, coinsMetadataDataMapper_1.coinsMetadataDataMapper)(responseRaw);
    }
}
exports.Metadata = Metadata;
