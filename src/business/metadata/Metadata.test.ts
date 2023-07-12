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
});
