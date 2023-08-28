import { ChainName } from "@decommas/sdk";
import { matchersWithOptions } from "jest-json-schema";
import { checkResponse } from "./utils";
import * as schema from "./schema/tx";
import { decommas } from "./decommas";

expect.extend(
  matchersWithOptions({
    verbose: true,
  })
);

describe("test namespace transaction", () => {
  test("getErc20TransfersByTx", async () => {
    const data = {
      chainName: ChainName.MAINNET,
      txHash:
        "0xf242769b6e2c784fccf4007623b520e67c57b2741ad15c4e16ba00f11acb8ab7",
    };

    const response = await decommas.tx.getErc20TransfersByTx(data);

    checkResponse(response, schema.schema_200_getErc20TransfersByTx);
  });

  test("getNftTransfersByTx", async () => {
    const data = {
      chainName: ChainName.MAINNET,
      txHash:
        "0x0d691b19523986847beff7c6af41353fe7a20bddcf3a82ae0c81e1a82e6428d8",
    };

    const response = await decommas.tx.getNftTransfersByTx(data);

    checkResponse(response, schema.schema_200_getNftTransfersByTx);
  });

  test("getDetail", async () => {
    const data = {
      chainName: ChainName.MAINNET,
      txHash:
        "0xf242769b6e2c784fccf4007623b520e67c57b2741ad15c4e16ba00f11acb8ab7",
    };

    const response = await decommas.tx.getDetail(data);

    checkResponse(response, schema.schema_200_getDetail);
    expect(response.hash).toBe(data.txHash);
  });
});
