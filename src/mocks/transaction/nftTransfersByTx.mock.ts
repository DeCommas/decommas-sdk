import {
  TGetNftTransfersByTxResponse,
  TGetNftTransfersByTxResponseRaw,
} from "@business/namespaces/transaction/getNftTransfersByTx/types";

export const mockNftTransfersByTxResponseRaw: TGetNftTransfersByTxResponseRaw =
  {
    status: 200,
    result: [
      {
        block_number: 25578358,
        block_timestamp: 1676130398,
        from_address: "0x000000000482aa9817645c3d56aa2230f6573532",
        to_address: "0xd891442f82e62bab57e1ca297893003d1b12f628",
        contract_address: "0x000000000482aa9817645c3d56aa2230f6573532",
        token_id: "605931",
        amount: "298222198686",
        log_index: 325,
        contract_type: "ERC-1155",
      },
    ],
  };

export const mockNftTransfersByTxResponse: TGetNftTransfersByTxResponse = {
  result: [
    {
      blockNumber: 25578358,
      blockTimestamp: 1676130398,
      fromAddress: "0x000000000482aa9817645c3d56aa2230f6573532",
      toAddress: "0xd891442f82e62bab57e1ca297893003d1b12f628",
      contractAddress: "0x000000000482aa9817645c3d56aa2230f6573532",
      tokenId: "605931",
      amount: "298222198686",
      logIndex: 325,
      contractType: "ERC-1155",
    },
  ],
};
