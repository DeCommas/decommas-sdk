"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decommas = void 0;
const network_1 = require("./infrastructure/network");
const address_1 = require("./business/namespaces/address");
const metadata_1 = require("./business/namespaces/metadata");
const transaction_1 = require("./business/namespaces/transaction");
class Decommas {
    constructor(apiKey) {
        const httpRequest = new network_1.HttpRequest(apiKey);
        this.address = new address_1.Address(httpRequest);
        this.metadata = new metadata_1.Metadata(httpRequest);
        this.tx = new transaction_1.Transaction(httpRequest);
    }
}
exports.Decommas = Decommas;
