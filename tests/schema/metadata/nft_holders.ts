export const schema_200_getNftHolders = {
  type: 'array',
  items: [
    {
      type: 'object',
      properties: {
        amount: {
          type: 'string',
        },
        holderAddress: {
          type: 'string',
        },
        chainId: {
          type: 'integer',
        },
        chainName: {
          type: 'string',
        },
      },
      required: ['amount', 'holderAddress', 'chainId', 'chainName'],
    },
  ],
  additionalProperties: false,
};
