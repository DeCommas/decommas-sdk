"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const tokensDataMapper_1 = require("./getTokens/tokensDataMapper");
const nftsDataMapper_1 = require("./getNnfts/nftsDataMapper");
const coinsDataMapper_1 = require("./getCoins/coinsDataMapper");
const transactionsDataMapper_1 = require("./getTransactions/transactionsDataMapper");
const erc20TransfersDataMapper_1 = require("./getErc20Transfers/erc20TransfersDataMapper");
const nftTransfersDataMapper_1 = require("./getNftTransfers/nftTransfersDataMapper");
class Address {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    async getCoins(request) {
        const responseRaw = await this.httpRequest.fetch(`coins/${request.address}`, {
            networks: request.chains,
        });
        return (0, coinsDataMapper_1.coinsDataMapper)(responseRaw);
    }
    async getTokens(request) {
        const responseRaw = await this.httpRequest.fetch(`tokens/${request.address}`, {
            networks: request.chains,
            verified: request.verified,
            limit: request.limit,
            offset: request.offset,
        });
        return (0, tokensDataMapper_1.tokensDataMapper)(responseRaw);
    }
    async getNfts(request) {
        const responseRaw = await this.httpRequest.fetch(`nfts/${request.address}`, {
            networks: request.chains,
            limit: request.limit,
            offset: request.offset,
        });
        return (0, nftsDataMapper_1.nftsDataMapper)(responseRaw);
    }
    async getTransactions(request) {
        const responseRaw = await this.httpRequest.fetch(`transactions/${request.address}`, {
            networks: request.chains,
            limit: request.limit,
            offset: request.offset,
        });
        return (0, transactionsDataMapper_1.transactionsDataMapper)(responseRaw);
    }
    async getErc20Transfers(request) {
        const responseRaw = await this.httpRequest.fetch(`transfers_erc20/${request.address}`, {
            networks: request.chains,
            limit: request.limit,
            offset: request.offset,
        });
        return (0, erc20TransfersDataMapper_1.erc20TransfersDataMapper)(responseRaw);
    }
    async getNftTransfers(request) {
        const responseRaw = await this.httpRequest.fetch(`transfers_nft/${request.address}`, {
            networks: request.chains,
            limit: request.limit,
            offset: request.offset,
        });
        return (0, nftTransfersDataMapper_1.nftTransfersDataMapper)(responseRaw);
    }
}
exports.Address = Address;
