import { Address } from "./address/Address";
import { HttpRequest } from "./network/httpRequest";

export class Decommas {
  public readonly address: Address;

  constructor(apiKey?: string) {
    const httpRequest = new HttpRequest(apiKey);
    this.address = new Address(httpRequest);
  }
}
