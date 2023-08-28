export const schema_200_nfts = {
  type: 'object',
  properties: {
    count: {
      type: 'number',
    },
    result: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          chainName: {
            type: 'string',
          },
          chainId: {
            type: 'integer',
          },
          amount: {
            type: 'string',
          },
          contractAddress: {
            type: 'string',
          },
          tokenId: {
            type: 'string',
          },
          contractType: {
            type: 'string',
          },
        },
        required: [
          'chainName',
          'chainId',
          'amount',
          'tokenId',
          'contractAddress',
          'contractType',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['count', 'result'],
  additionalProperties: false,
};
