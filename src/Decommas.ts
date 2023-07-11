import { Address } from "@business/address/Address";
import { HttpRequest } from "@infrastructure/network/httpRequest";

export class Decommas {
  public readonly address: Address;

  constructor(apiKey?: string) {
    const httpRequest = new HttpRequest(apiKey);
    this.address = new Address(httpRequest);
  }
}
