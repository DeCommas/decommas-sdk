import { EvmChainName } from "../src";
import { matchersWithOptions } from "jest-json-schema";
import { checkResponse } from "./utils";
import * as schema from "./schema/metadata";
import { decommas, chainNames } from "./decommas";

expect.extend(
  matchersWithOptions({
    verbose: true,
  })
);

describe("test namespace metadata", () => {
  test("getNft", async () => {
    const data = {
      chainName: EvmChainName.BSC,
      contractAddress: "0x0d133a9afdd9018348adc097335b8dfdb6746a09",
      tokenId: "586430227848038019174374300982845652912257441249",
    };

    const response = await decommas.metadata.getNft(data);

    checkResponse(response, schema.schema_200_getNftMetadata);
    expect(response.chainName).toBe(EvmChainName.BSC);
    expect(response.contractAddress).toBe(data.contractAddress);
    expect(response.tokenId).toBe(data.tokenId);
    expect(response.chainId).toBe(56);
  });

  test("getTokenHolders", async () => {
    for (const chainName of chainNames) {
      const data = {
        chainName,
        contractAddress: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
      };

      const response = await decommas.metadata.getTokenHolders(data);
      checkResponse(response, schema.schema_200_getTokenHolders);
    }
  });

  test("getToken", async () => {
    const data = {
      chainName: EvmChainName.ARBITRUM,
      contractAddress: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    };

    const response = await decommas.metadata.getToken(data);

    checkResponse(response, schema.schema_200_getTokenMetadata);
    expect(response.chainName).toBe(EvmChainName.ARBITRUM);
    expect(response.address).toBe(data.contractAddress);
    expect(response.chainId).toBe(42161);
  });

  describe("test getCoins(all coins from db) metadata", () => {
    test("check each chain", async () => {
      for (const chain of chainNames) {
        const data = {
          chains: [chain],
        };

        const response = await decommas.metadata.getCoins(data);

        checkResponse(response, schema.schema_200_getAllCoins);
      }
    }, 10000);

    test("check massive chains", async () => {
      const data = {
        chains: [EvmChainName.ARBITRUM, EvmChainName.AVALANCHE],
      };

      const response = await decommas.metadata.getCoins(data);

      checkResponse(response, schema.schema_200_getAllCoins);

      const expectedNetworks = [EvmChainName.ARBITRUM, EvmChainName.AVALANCHE];
      const receivedNetworks = response.result.map((chain) => chain.chainName);
      const unexpectedNetworks = receivedNetworks.filter(
        (chain) => !expectedNetworks.includes(chain)
      );

      expect(unexpectedNetworks).toEqual([]);
    });
  });

  describe("test getTokens(all tokens from db) metadata", () => {
    test("check each chain", async () => {
      for (const chain of chainNames) {
        const data = {
          chains: [chain],
        };

        const response = await decommas.metadata.getTokens(data);

        checkResponse(response, schema.schema_200_getAllTokens);
      }
    }, 10000);

    test("check massive chains", async () => {
      const data = {
        chains: [EvmChainName.POLYGON, EvmChainName.FANTOM],
      };

      const response = await decommas.metadata.getTokens(data);

      checkResponse(response, schema.schema_200_getAllTokens);

      const expectedNetworks = [EvmChainName.POLYGON, EvmChainName.FANTOM];
      const receivedNetworks = response.map((chain) => chain.chainName);
      const unexpectedNetworks = receivedNetworks.filter(
        (chain) => !expectedNetworks.includes(chain)
      );

      expect(unexpectedNetworks).toEqual([]);
    });
  });

  describe("GET token by symbol", () => {
    test("check each chain", async () => {
      for (const chain of chainNames) {
        const data = {
          symbol: "USDT",
          chains: [chain],
        };

        const response = await decommas.metadata.getTokensBySymbol(data);

        checkResponse(response, schema.schema_200_getTokenBySymbol);
        expect(
          response.result.every(
            (token) => token.symbol.toUpperCase() === "USDT"
          )
        );
        expect(
          response.result.every((token) => token.chainName === chain)
        ).toBe(true);
      }
    }, 10000);

    test("check massive chains", async () => {
      const data = {
        symbol: "USDC",
        chains: [EvmChainName.POLYGON, EvmChainName.FANTOM],
      };

      const response = await decommas.metadata.getTokensBySymbol(data);

      checkResponse(response, schema.schema_200_getTokenBySymbol);

      const expectedNetworks = [EvmChainName.POLYGON, EvmChainName.FANTOM];
      const receivedNetworks = response.result.map((chain) => chain.chainName);
      const unexpectedNetworks = receivedNetworks.filter(
        (chain) => !expectedNetworks.includes(chain)
      );

      expect(unexpectedNetworks).toEqual([]);
      expect(
        response.result.every((token) => token.symbol.toUpperCase() === "USDC")
      );
    });
  });
});
