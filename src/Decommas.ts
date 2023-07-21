import { HttpRequest } from "@infrastructure/network";
import { Address } from "@business/address";
import { Metadata } from "@business/metadata";
import { Transaction } from "@business/transaction";

export class Decommas {
  public readonly address: Address;
  public readonly metadata: Metadata;
  public readonly tx: Transaction;

  constructor(apiKey?: string) {
    const httpRequest = new HttpRequest(apiKey);

    this.address = new Address(httpRequest);
    this.metadata = new Metadata(httpRequest);
    this.tx = new Transaction(httpRequest);
  }
}
