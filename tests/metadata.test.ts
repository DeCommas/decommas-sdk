import { EvmChainName } from "../src";
import { matchersWithOptions } from "jest-json-schema";
import { contractsConfig } from "./config";
import { checkResponse } from "./utils";
import * as schema from "./schema/metadata";
import { decommas, chainNames } from "./decommas";

expect.extend(
  matchersWithOptions({
    verbose: true,
  })
);

describe("test namespace metadata", () => {
  describe("test getNft", () => {
    test("getNft_Erc-721", async () => {
      for (const chainName of chainNames) {
        const Contracts = [contractsConfig[chainName].nftContract721];
        for (const contractAddress of Contracts) {
          const tokenId = contractsConfig[chainName].tokenId721;
          const data = {
            chainName,
            contractAddress,
            tokenId,
          };
          const response = await decommas.metadata.getNft(data);

          checkResponse(response, schema.schema_200_getNftMetadata);

          expect(response.tokenId).toBe(tokenId);
          expect(response.chainName).toBe(chainName);
          expect(response.contractType).toBe("ERC-721");
          expect(response.contractAddress).toBe(contractAddress);
        }
      }
    }, 20000);
    test("getNft_Erc-1155", async () => {
      for (const chainName of chainNames) {
        const Contracts = [contractsConfig[chainName].nftContract1155];
        for (const contractAddress of Contracts) {
          const tokenId = contractsConfig[chainName].tokenId1155;
          const data = {
            chainName,
            contractAddress,
            tokenId,
          };
          const response = await decommas.metadata.getNft(data);

          checkResponse(response, schema.schema_200_getNftMetadata);

          expect(response.tokenId).toBe(tokenId);
          expect(response.chainName).toBe(chainName);
          expect(response.contractType).toBe("ERC-1155");
          expect(response.contractAddress).toBe(contractAddress);
        }
      }
    }, 20000);
  });

  describe("test getNftCollection", () => {
    test("getNftCollection_Erc-721", async () => {
      for (const chainName of chainNames) {
        const Contracts = [contractsConfig[chainName].nftContract721];
        for (const contractAddress of Contracts) {
          const data = { chainName, contractAddress };

          const response = await decommas.metadata.getNftCollection(data);

          checkResponse(response, schema.schema_200_getNftCollectionMetadata);
          expect(response.chainName).toBe(chainName);
          expect(response.contractType).toBe("ERC-721");
          expect(response.contractAddress).toBe(data.contractAddress);
        }
      }
    });
    test("getNftCollection_Erc-1155", async () => {
      for (const chainName of chainNames) {
        const Contracts = [contractsConfig[chainName].nftContract1155];
        for (const contractAddress of Contracts) {
          const data = { chainName, contractAddress };

          const response = await decommas.metadata.getNftCollection(data);

          checkResponse(response, schema.schema_200_getNftCollectionMetadata);
          expect(response.chainName).toBe(chainName);
          expect(response.contractType).toBe("ERC-1155");
          expect(response.contractAddress).toBe(data.contractAddress);
        }
      }
    });
  });

  test("getTokenHolders", async () => {
    for (const chainName of chainNames) {
      const contractAddress = contractsConfig[chainName].tokenContract;
      const data = {
        chainName,
        contractAddress,
      };
      const response = await decommas.metadata.getTokenHolders(data);

      checkResponse(response, schema.schema_200_getTokenHolders);
    }
  }, 20000);

  test("getNftHolders", async () => {
    for (const chainName of chainNames) {
      const nftContracts = [
        contractsConfig[chainName].nftContract721,
        contractsConfig[chainName].nftContract1155,
      ];

      for (const contractAddress of nftContracts) {
        const data = {
          chainName,
          contractAddress,
        };
        const response = await decommas.metadata.getNftHolders(data);

        checkResponse(response, schema.schema_200_getNftHolders);
      }
    }
  }, 20000);

  test("getToken", async () => {
    for (const chainName of chainNames) {
      const contractAddress = contractsConfig[chainName].tokenContract;
      const data = {
        chainName,
        contractAddress,
      };
      const response = await decommas.metadata.getToken(data);

      checkResponse(response, schema.schema_200_getTokenMetadata);

      expect(response.chainName).toBe(chainName);
      expect(response.address).toBe(contractAddress);
    }
  }, 20000);

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
    }, 50000);

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
    }, 20000);
  });

  describe("test getTokensBySymbol", () => {
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
