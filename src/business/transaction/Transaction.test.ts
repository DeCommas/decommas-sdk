import { IHttpRequest } from "@infrastructure/network";
import {
  mockTxDetailResponse,
  mockTxDetailResponseRaw,
} from "@mocks/transaction/txDetail.mock";
import { ChainName } from "@lib/types";
import { Transaction } from "@business/transaction/Transaction";

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
});
