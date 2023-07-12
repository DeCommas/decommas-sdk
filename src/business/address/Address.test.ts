import { Address } from "./Address";
import { IHttpRequest } from "@infrastructure/network";
import { mockNftsResponse, mockNftsResponseRaw } from "@mocks/ntfts.mock";
import { mockTokensResponse, mockTokensResponseRaw } from "@mocks/tokens.mock";
import { mockCoinsResponse, mockCoinsResponseRaw } from "@mocks/coins.mock";
import {
  mockTransactionsResponse,
  mockTransactionsResponseRaw,
} from "@mocks/transactions.mock";

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

  test("getCoins", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockCoinsResponseRaw),
    };
    const address = new Address(httpRequestMock);

    expect(
      await address.getCoins({
        address: "0x0000000000000000000000000000000000000000",
      })
    ).toStrictEqual(mockCoinsResponse);
  });

  test("getTransactions", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockTransactionsResponseRaw),
    };
    const address = new Address(httpRequestMock);

    expect(
      await address.getTransactions({
        address: "0x0000000000000000000000000000000000000000",
      })
    ).toStrictEqual(mockTransactionsResponse);
  });
});
