export const schema_200_getNftCollectionMetadata = {
  type: "object",
  properties: {
    chainName: {
      type: "string",
    },
    chainId: {
      type: "number",
    },
    contractAddress: {
      type: "string",
    },
    collectionName: {
      type: "string",
    },
    collectionVerified: {
      type: "boolean",
    },
    floorPriceUsd: {
      type: "string",
    },
    marketCapUsd: {
      type: "string",
    },
  },
  required: [
    "chainName",
    "chainId",
    "contractAddress",
    "collectionName",
    "collectionVerified",
    "floorPriceUsd",
    "marketCapUsd"
  ],
  additionalProperties: false,
};
