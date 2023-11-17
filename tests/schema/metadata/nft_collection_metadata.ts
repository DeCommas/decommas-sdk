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
      type: ["string", "null"],
    },
    collectionVerified: {
      type: "boolean",
    },
    floorPriceUsd: {
      type: ["string", "null"],
    },
    marketCapUsd: {
      type: ["string", "null"],
    },
    contractType: {
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
    "marketCapUsd",
    "contractType",
  ],
  additionalProperties: false,
};
