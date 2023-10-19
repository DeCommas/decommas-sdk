export const schema_200_getErc20Transfers = {
  type: "object",
  properties: {
    result: {
      type: "array",
      items: {
        type: "object",
        properties: {
          chainName: {
            type: "string",
          },
          chainId: {
            type: "number",
          },
          blockNumber: {
            type: "number",
          },
          blockTimestamp: {
            type: "number",
          },
          logIndex: {
            type: "number",
          },
          fromAddress: {
            type: "string",
          },
          toAddress: {
            type: "string",
          },
          tokenAddress: {
            type: "string",
          },
          amount: {
            type: "string",
          },
          transactionHash: {
            type: "string",
          },
          method: {
            type: "string",
          },
          methodHash: {
            type: "string",
          },
          fee: {
            type: "string",
          },
          gasPrice: {
            type: "string",
          },
          gasUsed: {
            type: "string",
          },
          blockBaseFeePerGas: {
            type: "string",
          },
        },
        required: [
          "chainName",
          "chainId",
          "blockNumber",
          "blockTimestamp",
          "logIndex",
          "fromAddress",
          "toAddress",
          "tokenAddress",
          "amount",
          "transactionHash",
          "method",
          "methodHash",
          "fee",
          "gasPrice",
          "gasUsed",
          "blockBaseFeePerGas",
        ],
        additionalProperties: false,
      },
    },
  },
  required: ["result"],
  additionalProperties: false,
};
