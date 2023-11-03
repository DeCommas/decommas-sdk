export const schema_200_getTokenBySymbol = {
  type: "object",
  properties: {
    count: {
      type: "number",
    },
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
          address: {
            type: "string",
          },
          name: {
            type: "string",
          },
          decimals: {
            type: "number",
          },
          symbol: {
            type: "string",
          },
          logoUrl: {
            type: "string",
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
          isProtocolToken: {
            type: "boolean",
          },
        },
        required: [
          "chainName",
          "chainId",
          "address",
          "name",
          "decimals",
          "symbol",
          "logoUrl",
          "actualPrice",
          "isVerified",
          "isStable",
          "isProtocolToken",
        ],
        additionalProperties: false,
      },
    },
  },
  required: ["count", "result"],
  additionalProperties: false,
};
