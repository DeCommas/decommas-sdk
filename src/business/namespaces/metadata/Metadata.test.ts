import { IHttpRequest } from "@infrastructure/network";
import {
  mockNftMetadataResponse,
  mockNftMetadataResponseRaw,
} from "@mocks/metadata/nftMetadata.mock";
import { ChainName } from "@lib/types";
import { Metadata } from "./Metadata";
import {
  mockTokenMetadataResponse,
  mockTokenMetadataResponseRaw,
} from "@mocks/metadata/tokenMetadata.mock";
import {
  mockTokensResponse,
  mockTokensResponseRaw,
} from "@mocks/address/tokens.mock";
import {
  mockCoinsMetadataResponse,
  mockCoinsMetadataResponseRaw,
} from "@mocks/address/coins.mock";
import {
  mockTokenHoldersMetadataResponse,
  mockTokenHoldersMetadataResponseRaw,
} from "@mocks/metadata/tokenHoldersMetadata.mock";

describe("Metadata", () => {
  test("getNft", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockNftMetadataResponseRaw),
    };
    const address = new Metadata(httpRequestMock);

    expect(
      await address.getNft({
        chainName: ChainName.MAINNET,
        contractAddress: "0x0000000000000000000000000000000000000000",
        tokenId: "111",
      })
    ).toStrictEqual(mockNftMetadataResponse);
  });

  test("getToken", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockTokenMetadataResponseRaw),
    };
    const metadata = new Metadata(httpRequestMock);

    expect(
      await metadata.getToken({
        chainName: ChainName.MAINNET,
        contractAddress: "0x0000000000000000000000000000000000000000",
      })
    ).toStrictEqual(mockTokenMetadataResponse);
  });

  test("getToken", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockTokenMetadataResponseRaw),
    };
    const metadata = new Metadata(httpRequestMock);

    expect(
      await metadata.getToken({
        chainName: ChainName.MAINNET,
        contractAddress: "0x0000000000000000000000000000000000000000",
      })
    ).toStrictEqual(mockTokenMetadataResponse);
  });

  test("getTokensBySymbol", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockTokensResponseRaw),
    };
    const metadata = new Metadata(httpRequestMock);

    expect(
      await metadata.getTokensBySymbol({
        chains: [ChainName.MAINNET],
        symbol: "USDC",
      })
    ).toStrictEqual(mockTokensResponse);
  });

  test("getCoins", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockCoinsMetadataResponseRaw),
    };
    const metadata = new Metadata(httpRequestMock);

    expect(await metadata.getCoins()).toStrictEqual(mockCoinsMetadataResponse);
  });

  test("getTokenHolders", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockTokenHoldersMetadataResponseRaw),
    };

    const metadata = new Metadata(httpRequestMock);
    const response = await metadata.getTokenHolders({
      chainName: ChainName.MAINNET,
      contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    });
    expect(response).toStrictEqual(mockTokenHoldersMetadataResponse);
  });
});
