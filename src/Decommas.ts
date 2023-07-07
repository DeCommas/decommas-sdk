import { Address } from "./bussiness/address/Address";
import { HttpRequest } from "./infrastracture/network/httpRequest";

export class Decommas {
  public readonly address: Address;

  constructor(apiKey?: string) {
    const httpRequest = new HttpRequest(apiKey);
    this.address = new Address(httpRequest);
  }
}
