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
      type: ["string", "null"],
    },
    logoUrl: {
      type: ["string", "null"],
    },
    symbol: {
      type: "string",
    },
    actualPrice: {
      type: ["string", "null"],
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
    totalSupply: {
      type: ["string", "null"],
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
    "totalSupply",
  ],
  additionalProperties: false,
};
