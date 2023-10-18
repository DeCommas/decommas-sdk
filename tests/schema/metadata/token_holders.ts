export const schema_200_getTokenHolders = {
  type: "array",
  items: {
    type: "object",
    properties: {
      holderAddress: {
        type: "string",
      },
      amount: {
        type: "string",
      },
      decimals: {
        type: "number",
      },
      actualPrice: {
        type: "string",
      },
      chainName: {
        type: "string",
      },
      chainId: {
        type: "number",
      },
    },
    required: [
      "holderAddress",
      "amount",
      "decimals",
      "actualPrice",
      "chainName",
      "chainId",
    ],
    additionalProperties: false,
  },
};
