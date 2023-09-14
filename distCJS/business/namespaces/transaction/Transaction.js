"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const txDetailDataMapper_1 = require("./getTxDetail/txDetailDataMapper");
const erc20TransfersByTxDataMapper_1 = require("./getErc20TransfersByTx/erc20TransfersByTxDataMapper");
const nftTransfersByTxDataMapper_1 = require("./getNftTransfersByTx/nftTransfersByTxDataMapper");
class Transaction {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    async getDetail(request) {
        const responseRaw = await this.httpRequest.fetch(`transaction/${request.chainName}/${request.txHash}`);
        return (0, txDetailDataMapper_1.txDetailDataMapper)(responseRaw);
    }
    async getErc20TransfersByTx(request) {
        const responseRaw = await this.httpRequest.fetch(`transaction_erc20_transfers/${request.chainName}/${request.txHash}`, {
            limit: request.limit,
            offset: request.offset,
        });
        return (0, erc20TransfersByTxDataMapper_1.erc20TransfersByTxDataMapper)(responseRaw);
    }
    async getNftTransfersByTx(request) {
        const responseRaw = await this.httpRequest.fetch(`transaction_nft_transfers/${request.chainName}/${request.txHash}`, {
            limit: request.limit,
            offset: request.offset,
        });
        return (0, nftTransfersByTxDataMapper_1.nftTransfersByTxDataMapper)(responseRaw);
    }
}
exports.Transaction = Transaction;
