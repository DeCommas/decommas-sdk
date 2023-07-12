import { Address } from "./Address";
import { IHttpRequest } from "@infrastructure/network";
import { mockNftsResponse, mockNftsResponseRaw } from "@mocks/ntfts.mock";
import { mockTokensResponse, mockTokensResponseRaw } from "@mocks/tokens.mock";
import { mockCoinsResponse, mockCoinsResponseRaw } from "@mocks/coins.mock";
import {
  mockTransactionsResponse,
  mockTransactionsResponseRaw,
} from "@mocks/transactions.mock";
import {
  mockErc20TransfersResponse,
  mockErc20TransfersResponseRaw,
} from "@mocks/erc20Transfers.mock";
import {
  mockNftTransfersResponse,
  mockNftTransfersResponseRaw,
} from "@mocks/nftTransfers.mock";

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

  test("getErc20Transfers", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockErc20TransfersResponseRaw),
    };
    const address = new Address(httpRequestMock);

    expect(
      await address.getErc20Transfers({
        address: "0x0000000000000000000000000000000000000000",
      })
    ).toStrictEqual(mockErc20TransfersResponse);
  });

  test("getNftTransfers", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockNftTransfersResponseRaw),
    };
    const address = new Address(httpRequestMock);

    expect(
      await address.getNftTransfers({
        address: "0x0000000000000000000000000000000000000000",
      })
    ).toStrictEqual(mockNftTransfersResponse);
  });
});
