import * as schema from "./schema/tx";
import { checkResponse } from "./utils";
import { contractsConfig } from "./config";
import { decommas, chainNames } from "./decommas";
import { matchersWithOptions } from "jest-json-schema";

expect.extend(
  matchersWithOptions({
    verbose: true,
  })
);

describe("test namespace transaction", () => {
  test("getErc20TransfersByTx", async () => {
    for (const chainName of chainNames) {
      const txHashs = [contractsConfig[chainName].txHashErc20];
      for (const txHash of txHashs) {
        const data = {
          chainName,
          txHash,
        };
        const response = await decommas.tx.getErc20TransfersByTx(data);

        checkResponse(response, schema.schema_200_getErc20TransfersByTx);
      }
    }
  });

  test("getNftTransfersByTx", async () => {
    for (const chainName of chainNames) {
      const txHashs = [contractsConfig[chainName].txHashNft];
      for (const txHash of txHashs) {
        const data = {
          chainName,
          txHash,
        };

        const response = await decommas.tx.getNftTransfersByTx(data);

        checkResponse(response, schema.schema_200_getNftTransfersByTx);
      }
    }
  });

  test("getDetail", async () => {
    for (const chainName of chainNames) {
      const txHashs = [contractsConfig[chainName].txHashErc20];
      for (const txHash of txHashs) {
        const data = {
          chainName,
          txHash,
        };
        const response = await decommas.tx.getDetail(data);

        checkResponse(response, schema.schema_200_getDetail);
        expect(response.hash).toBe(data.txHash);
      }
    }
  });
});
