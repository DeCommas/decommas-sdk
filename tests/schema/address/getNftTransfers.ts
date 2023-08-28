export const schema_200_getNftTransfers = {
  type: 'object',
  properties: {
    result: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          chainName: {
            type: 'string',
          },
          chainId: {
            type: 'number',
          },
          blockNumber: {
            type: 'number',
          },
          blockTimestamp: {
            type: 'number',
          },
          logIndex: {
            type: 'number',
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
          tokenId: {
            type: 'string',
          },
          contractType: {
            type: 'string',
          },
          transactionHash: {
            type: 'string',
          },
          method: {
            type: 'string',
          },
          methodHash: {
            type: 'string',
          },
        },
        required: [
          'chainName',
          'chainId',
          'blockNumber',
          'blockTimestamp',
          'logIndex',
          'fromAddress',
          'toAddress',
          'contractAddress',
          'tokenId',
          'contractType',
          'amount',
          'transactionHash',
          'method',
          'methodHash',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['result'],
  additionalProperties: false,
};
