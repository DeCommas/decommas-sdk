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
    totalSupply: {
      type: 'string',
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
    // Данное поле есть в ответе /token_metadata, но нет в ответах /all_tokens_metadata и /tokens_by_symbol
    // "totalSupply",
  ],
  additionalProperties: false,
};
