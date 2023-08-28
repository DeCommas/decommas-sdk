export const schema_200_transactions = {
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
          value: {
            type: 'string',
          },
          fee: {
            type: 'string',
          },
          status: {
            type: 'boolean',
          },
          blockNumber: {
            type: 'number',
          },
          blockTimestamp: {
            type: 'number',
          },
          fromAddress: {
            type: 'string',
          },
          toAddress: {
            type: 'string',
          },
          method: {
            type: 'string',
          },
          methodHash: {
            type: 'string',
          },
          hash: {
            type: 'string',
          },
          deployedContract: {
            type: 'string',
          },
          gasPrice: {
            type: 'string',
          },
          gasUsed: {
            type: 'string',
          },
          blockBaseFeePerGas: {
            type: 'string',
          },
          transactionTags: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: [
          'chainName',
          'chainId',
          'blockNumber',
          'blockTimestamp',
          'value',
          'fromAddress',
          'toAddress',
          'fee',
          'status',
          'transactionTags',
          'method',
          'methodHash',
          'hash',
          'deployedContract',
          'gasPrice',
          'gasUsed',
          'blockBaseFeePerGas',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['result'],
  additionalProperties: false,
};
