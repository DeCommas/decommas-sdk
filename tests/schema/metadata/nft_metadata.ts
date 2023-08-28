export const schema_200_getNftMetadata = {
  type: 'object',
  properties: {
    chainName: {
      type: 'string',
    },
    chainId: {
      type: 'number',
    },
    contractAddress: {
      type: 'string',
    },
    tokenId: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    imageUrl: {
      type: 'string',
    },
    animationUrl: {
      type: 'string',
    },
    contractType: {
      type: 'string',
    },
    collectionName: {
      type: 'string',
    },
    collectionVerified: {
      type: 'boolean',
    },
  },
  required: [
    'chainName',
    'chainId',
    'contractAddress',
    'tokenId',
    'name',
    'imageUrl',
    'animationUrl',
    'contractType',
    'collectionName',
    'collectionVerified',
  ],
  additionalProperties: false,
};
