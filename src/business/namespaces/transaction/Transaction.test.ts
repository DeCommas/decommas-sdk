import { IHttpRequest } from "@infrastructure/network";
import {
  mockTxDetailResponse,
  mockTxDetailResponseRaw,
} from "@mocks/transaction/txDetail.mock";
import { ChainName } from "@lib/types";
import { Transaction } from "@business/namespaces/transaction/Transaction";
import {
  mockErc20TransfersByTxResponse,
  mockErc20TransfersByTxResponseRaw,
} from "@mocks/transaction/erc20transfersByTx.mock";
import {
  mockNftTransfersByTxResponse,
  mockNftTransfersByTxResponseRaw,
} from "@mocks/transaction/nftTransfersByTx.mock";

describe("Transaction", () => {
  test("getDetail", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockTxDetailResponseRaw),
    };
    const transaction = new Transaction(httpRequestMock);

    expect(
      await transaction.getDetail({
        chainName: ChainName.MAINNET,
        txHash:
          "0x48cd7f0228f198efa9792274269173d1bba7165b0e7354a06839e6bbee8ed7cb",
      })
    ).toStrictEqual(mockTxDetailResponse);
  });

  test("getErc20Transfers", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockErc20TransfersByTxResponseRaw),
    };
    const transaction = new Transaction(httpRequestMock);

    expect(
      await transaction.getErc20TransfersByTx({
        chainName: ChainName.BSC,
        txHash:
          "0xbe055f412ea0cb0af6cd6e1bd72bc755e671ebe6b60e31e8c780364e59e4d7e3",
      })
    ).toStrictEqual(mockErc20TransfersByTxResponse);
  });

  test("getNftTransfers", async () => {
    const httpRequestMock: IHttpRequest = {
      fetch: jest.fn().mockReturnValue(mockNftTransfersByTxResponseRaw),
    };
    const transaction = new Transaction(httpRequestMock);

    expect(
      await transaction.getNftTransfersByTx({
        chainName: ChainName.BSC,
        txHash:
          "0xbe055f412ea0cb0af6cd6e1bd72bc755e671ebe6b60e31e8c780364e59e4d7e3",
      })
    ).toStrictEqual(mockNftTransfersByTxResponse);
  });
});
