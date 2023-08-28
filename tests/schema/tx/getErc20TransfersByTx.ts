export const schema_200_getErc20TransfersByTx = {
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
          tokenAddress: {
            type: 'string',
          },
          amount: {
            type: 'string',
          },
          logIndex: {
            type: 'integer',
          },
        },
        required: [
          'blockNumber',
          'blockTimestamp',
          'fromAddress',
          'toAddress',
          'tokenAddress',
          'amount',
          'logIndex',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['result'],
  additionalProperties: false,
};
