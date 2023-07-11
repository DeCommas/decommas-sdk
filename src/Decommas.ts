import { Address } from "@business/address";
import { HttpRequest } from "@infrastructure/network";

export class Decommas {
  public readonly address: Address;

  constructor(apiKey?: string) {
    const httpRequest = new HttpRequest(apiKey);
    this.address = new Address(httpRequest);
  }
}
