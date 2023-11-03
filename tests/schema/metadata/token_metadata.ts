export const schema_200_getTokenMetadata = {
  type: "object",
  properties: {
    chainName: {
      type: "string",
    },
    chainId: {
      type: "integer",
    },
    address: {
      type: "string",
    },
    decimals: {
      type: "integer",
    },
    name: {
      type: "string",
    },
    logoUrl: {
      type: "string",
    },
    symbol: {
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
    "decimals",
    "name",
    "logoUrl",
    "symbol",
    "actualPrice",
    "isVerified",
    "isStable",
    "isProtocolToken",
  ],
  additionalProperties: false,
};
