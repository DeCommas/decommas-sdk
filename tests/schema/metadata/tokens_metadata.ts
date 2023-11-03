export const schema_200_getAllTokens = {
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
      name: {
        type: "string",
      },
      symbol: {
        type: "string",
      },
      logoUrl: {
        type: "string",
      },
      decimals: {
        type: "number",
      },
      actualPrice: {
        type: "string",
      },
      isVerified: {
        type: "boolean",
      },
      isStable: {
        type: "boolean",
      },
      address: {
        type: "string",
      },
      isProtocolToken: {
        type: "boolean",
      },
    },
    required: [
      "chainName",
      "chainId",
      "name",
      "symbol",
      "logoUrl",
      "decimals",
      "actualPrice",
      "isVerified",
      "isStable",
      "address",
      "isProtocolToken",
    ],
    additionalProperties: false,
  },
};
