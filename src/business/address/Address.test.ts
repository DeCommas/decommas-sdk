import { Address } from "./Address";
import { IHttpRequest } from "../../infrastructure/network/httpRequest";
import {
  mockTokensResponse,
  mockTokensResponseRaw,
  mockNftsResponse,
  mockNftsResponseRaw,
} from "../../mocks";

describe("Address", () => {
  test("getTokens", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockTokensResponseRaw),
    };
    const address = new Address(httpRequestMock);

    expect(
      await address.getTokens({
        address: "0x0000000000000000000000000000000000000000",
        verified: true,
      })
    ).toStrictEqual(mockTokensResponse);
  });

  test("getNfts", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockNftsResponseRaw),
    };
    const address = new Address(httpRequestMock);

    expect(
      await address.getNfts({
        address: "0x0000000000000000000000000000000000000000",
      })
    ).toStrictEqual(mockNftsResponse);
  });
});
