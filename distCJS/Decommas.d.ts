import { Address } from "./business/namespaces/address";
import { Metadata } from "./business/namespaces/metadata";
import { Transaction } from "./business/namespaces/transaction";
export declare class Decommas {
    readonly address: Address;
    readonly metadata: Metadata;
    readonly tx: Transaction;
    constructor(apiKey?: string);
}
