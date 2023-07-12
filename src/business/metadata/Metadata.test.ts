import { IHttpRequest } from "@infrastructure/network";
import {
  mockNftMetadataResponse,
  mockNftMetadataResponseRaw,
} from "@mocks/metadata/nftMetadata.mock";
import { ChainName } from "@lib/types";
import { Metadata } from "./Metadata";

describe("Metadata", () => {
  test("getNfts", async () => {
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
});
