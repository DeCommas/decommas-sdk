export const schema_200_getDetail = {
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
    hash: {
      type: 'string',
    },
    transactionIndex: {
      type: 'number',
    },
    fromAddress: {
      type: 'string',
    },
    toAddress: {
      type: 'string',
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
    gasPrice: {
      type: 'string',
    },
    gasUsed: {
      type: 'string',
    },
    blockBaseFeePerGas: {
      type: 'string',
    },
    methodHash: {
      type: 'string',
    },
    method: {
      type: 'string',
    },
    transactionTags: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    deployedContract: {
      type: 'string',
    },
  },
  required: [
    'chainName',
    'chainId',
    'blockNumber',
    'blockTimestamp',
    'hash',
    'transactionIndex',
    'fromAddress',
    'toAddress',
    'value',
    'fee',
    'status',
    'gasPrice',
    'gasUsed',
    'blockBaseFeePerGas',
    'methodHash',
    'method',
    'transactionTags',
    'deployedContract',
  ],
  additionalProperties: false,
};
