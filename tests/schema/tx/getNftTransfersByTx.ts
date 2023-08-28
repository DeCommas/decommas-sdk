export const schema_200_getNftTransfersByTx = {
  type: 'object',
  properties: {
    result: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          blockNumber: {
            type: 'integer',
          },
          blockTimestamp: {
            type: 'integer',
          },
          fromAddress: {
            type: 'string',
          },
          toAddress: {
            type: 'string',
          },
          contractAddress: {
            type: 'string',
          },
          amount: {
            type: 'string',
          },
          logIndex: {
            type: 'integer',
          },
          tokenId: {
            type: 'string',
          },
          contractType: {
            type: 'string',
          },
        },
        required: [
          'blockNumber',
          'blockTimestamp',
          'fromAddress',
          'toAddress',
          'contractAddress',
          'amount',
          'logIndex',
          'contractType',
          'tokenId',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['result'],
  additionalProperties: false,
};
