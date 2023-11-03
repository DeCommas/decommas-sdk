export const schema_200_getTokenHolders = {
  type: "array",
  items: [
    {
      type: "object",
      properties: {
        amount: {
          type: "string",
        },
        holderAddress: {
          type: "string",
        },
        decimals: {
          type: "integer",
        },
        actualPrice: {
          type: ["string", "null"],
        },
        chainId: {
          type: "integer",
        },
        chainName: {
          type: "string",
        },
      },
      required: [
        "amount",
        "holderAddress",
        "decimals",
        "actualPrice",
        "chainId",
        "chainName",
      ],
    },
  ],
  additionalProperties: false,
};
