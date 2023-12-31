import { Decommas, EvmChainName } from "../src";
import { matchersWithOptions } from "jest-json-schema";
import * as utils from "./utils";
import * as schema from "./schema/address";
import { config } from "dotenv";
import { chainNames } from "./decommas";

expect.extend(
  matchersWithOptions({
    verbose: true,
  })
);

config();

const { X_DECOMMAS_KEY } = process.env;
const decommas = new Decommas(X_DECOMMAS_KEY);
const wallet = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
const walletProtocols = "0xBBEb25f04BDF7D2573325270a32Ba3B4A7ae5F52";

describe("test for namespace address", () => {
  describe("getCoins", () => {
    test("valid request", async () => {
      const data = {
        address: wallet,
      };

      const response = await decommas.address.getCoins(data);

      utils.checkResponse(response, schema.schema_200_coins);
    });

    test("checking all networks", async () => {
      for (const chain of chainNames) {
        await utils.sleep();

        const data = {
          address: wallet,
          chains: [chain],
        };

        const response = await decommas.address.getCoins(data);

        utils.checkResponse(response, schema.schema_200_coins);

        if (response.result.length > 0) {
          expect(response?.result[0]?.chainName).toBe(chain);
        }
      }
    }, 15000);

    test("massive chain check", async () => {
      const data = {
        address: wallet,
        chains: [EvmChainName.ARBITRUM, EvmChainName.OPTIMISM],
        limit: 100,
      };

      const response = await decommas.address.getCoins(data);

      utils.checkResponse(response, schema.schema_200_coins);

      const expectedNetworks = ["arbitrum", "optimism"];
      const receivedNetworks = response.result.map((chain) => chain.chainName);

      const unexpectedNetworks = receivedNetworks.filter(
        (chain) => !expectedNetworks.includes(chain)
      );

      expect(unexpectedNetworks).toEqual([]);
      expect(response.result.length).toBeLessThanOrEqual(100);
    });
  });

  describe("getTokens", () => {
    test("checking all networks", async () => {
      for (const chain of chainNames) {
        await utils.sleep();

        const data = {
          address: wallet,
          chains: [chain],
        };

        const response = await decommas.address.getTokens(data);

        utils.checkResponse(response, schema.schema_200_tokens);

        if (response.result.length > 0) {
          expect(response?.result[0]?.chainName).toBe(chain);
          expect(response.result.length).toBeLessThanOrEqual(20);
        }
      }
    }, 50000);

    test("limit check", async () => {
      const data = {
        address: wallet,
        limit: 50,
      };

      const response = await decommas.address.getTokens(data);

      utils.checkResponse(response, schema.schema_200_tokens);
      expect(response.result.length).toBeGreaterThan(20);
      expect(response.result.length).toBeLessThanOrEqual(50);
    }, 50000);

    test("isVerified check", async () => {
      const data = {
        address: wallet,
        verified: true,
        limit: 100,
      };

      const response = await decommas.address.getTokens(data);

      utils.checkResponse(response, schema.schema_200_tokens);

      const resultHasVerifiedTrue = response.result.some(
        (item) => !item.isVerified
      );

      expect(resultHasVerifiedTrue).toBe(false);
      expect(response.result.length).toBeLessThanOrEqual(100);
    });

    test("massive chain check", async () => {
      const data = {
        address: wallet,
        chains: [EvmChainName.POLYGON, EvmChainName.GNOSIS],
        limit: 100,
      };

      const response = await decommas.address.getTokens(data);

      utils.checkResponse(response, schema.schema_200_tokens);

      const expectedNetworks = ["polygon", "gnosis"];
      const receivedNetworks = response.result.map((chain) => chain.chainName);
      const unexpectedNetworks = receivedNetworks.filter(
        (chain) => !expectedNetworks.includes(chain)
      );

      expect(unexpectedNetworks).toEqual([]);
      expect(response.result.length).toBeLessThanOrEqual(100);
    });
  });

  describe("getNfts", () => {
    test("checking all networks", async () => {
      for (const chain of chainNames) {
        await utils.sleep();

        const data = {
          address: wallet,
          chains: [chain],
        };

        const response = await decommas.address.getNfts(data);

        utils.checkResponse(response, schema.schema_200_nfts);

        if (response.result.length > 0) {
          expect(response?.result[0]?.chainName).toBe(chain);
          expect(response.result.length).toBeLessThanOrEqual(20);
        }
      }
    }, 100000);

    test("limit check", async () => {
      const data = {
        address: wallet,
        limit: 50,
      };

      const response = await decommas.address.getNfts(data);

      utils.checkResponse(response, schema.schema_200_nfts);
      expect(response.result.length).toBeGreaterThan(20);
      expect(response.result.length).toBeLessThanOrEqual(50);
    });
    test("isVerified check", async () => {
      const data = {
        address: wallet,
        chains: [EvmChainName.POLYGON],
        limit: 100,
        verified: true,
      };

      const response = await decommas.address.getNfts(data);

      utils.checkResponse(response, schema.schema_200_nfts);

      const resultHasVerifiedTrue = response.result.some(
        (item) => !item.collectionVerified
      );

      expect(resultHasVerifiedTrue).toBe(false);
      expect(response.result.length).toBeLessThanOrEqual(100);
    });

    test("massive chain check", async () => {
      const data = {
        address: wallet,
        chains: [EvmChainName.FANTOM, EvmChainName.BSC],
        limit: 100,
      };

      const response = await decommas.address.getNfts(data);

      utils.checkResponse(response, schema.schema_200_nfts);

      const expectedNetworks = ["fantom", "bsc"];
      const receivedNetworks = response.result.map((chain) => chain.chainName);
      const unexpectedNetworks = receivedNetworks.filter(
        (chain) => !expectedNetworks.includes(chain)
      );

      expect(unexpectedNetworks).toEqual([]);
      expect(response.result.length).toBeLessThanOrEqual(100);
    });
  });

  describe("getTransactions", () => {
    test("checking all networks", async () => {
      for (const chain of chainNames) {
        await utils.sleep();

        const data = {
          address: wallet,
          chain: chain,
        };

        const response = await decommas.address.getTransactions(data);

        utils.checkResponse(response, schema.schema_200_transactions);

        if (response.result.length > 0) {
          expect(response?.result[0]?.chainName).toBe(chain);
          expect(response.result.length).toBeLessThanOrEqual(20);
        }
      }
    }, 50000);

    test("limit check", async () => {
      const data = {
        address: wallet,
        limit: 50,
      };

      const response = await decommas.address.getTransactions(data);

      utils.checkResponse(response, schema.schema_200_transactions);
      expect(response.result.length).toBeGreaterThan(20);
      expect(response.result.length).toBeLessThanOrEqual(50);
    });
  });

  describe("getErc20Transfers", () => {
    test("checking all networks", async () => {
      for (const chain of chainNames) {
        await utils.sleep();

        const data = {
          address: wallet,
          chain: chain,
        };

        const response = await decommas.address.getErc20Transfers(data);

        utils.checkResponse(response, schema.schema_200_getErc20Transfers);

        if (response.result.length > 0) {
          expect(response?.result[0]?.chainName).toBe(chain);
          expect(response.result.length).toBeLessThanOrEqual(20);
        }
      }
    }, 20000);

    test("limit check", async () => {
      const data = {
        address: wallet,
        limit: 50,
      };

      const response = await decommas.address.getErc20Transfers(data);

      utils.checkResponse(response, schema.schema_200_getErc20Transfers);
      expect(response.result.length).toBeGreaterThan(20);
      expect(response.result.length).toBeLessThanOrEqual(50);
    });
  });

  describe("getNftTransfers", () => {
    test("checking all networks", async () => {
      for (const chain of chainNames) {
        await utils.sleep();

        const data = {
          address: wallet,
          chain: chain,
        };

        const response = await decommas.address.getNftTransfers(data);

        utils.checkResponse(response, schema.schema_200_getNftTransfers);

        if (response.result.length > 0) {
          expect(response?.result[0]?.chainName).toBe(chain);
          expect(response.result.length).toBeLessThanOrEqual(20);
        }
      }
    }, 20000);

    test("limit check", async () => {
      const data = {
        address: wallet,
        limit: 50,
      };

      const response = await decommas.address.getNftTransfers(data);

      utils.checkResponse(response, schema.schema_200_getNftTransfers);
      expect(response.result.length).toBeGreaterThan(20);
      expect(response.result.length).toBeLessThanOrEqual(50);
    });
  });
  describe("getProtocols", () => {
    test("valid request", async () => {
      const data = {
        address: walletProtocols,
      };

      const response = await decommas.address.getProtocols(data);

      utils.checkResponse(response, schema.schema_200_protocols);
    });

    test("checking all networks", async () => {
      for (const chain of chainNames) {
        await utils.sleep();

        const data = {
          address: walletProtocols,
          chains: [chain],
        };

        const response = await decommas.address.getProtocols(data);

        utils.checkResponse(response, schema.schema_200_protocols);

        if (response.result?.length > 0) {
          expect(response.result[0]?.chainName).toBe(chain);
          expect(response.result.length).toBeLessThanOrEqual(20);
        }
      }
    }, 20000);

    test("massive chain check", async () => {
      const data = {
        address: walletProtocols,
        chains: [EvmChainName.ARBITRUM, EvmChainName.OPTIMISM],
        limit: 100,
      };

      const response = await decommas.address.getProtocols(data);

      utils.checkResponse(response, schema.schema_200_protocols);

      const expectedNetworks = ["arbitrum", "optimism"];
      const receivedNetworks = response.result.map((chain) => chain.chainName);

      const unexpectedNetworks = receivedNetworks.filter(
        (chain) => !expectedNetworks.includes(chain)
      );

      expect(unexpectedNetworks).toEqual([]);
      expect(response.result.length).toBeLessThanOrEqual(100);
    });
    test("limit check", async () => {
      const data = {
        address: walletProtocols,
        // TODO test with wallet with more than 20 protocols
        limit: 20,
        chains: [EvmChainName.ARBITRUM],
      };

      const response = await decommas.address.getProtocols(data);

      utils.checkResponse(response, schema.schema_200_protocols);
      expect(response.result.length).toBeLessThanOrEqual(20);
    });
  });
});
