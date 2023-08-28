export const schema_200_tokens = {
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
            type: 'number',
          },
          name: {
            type: 'string',
          },
          symbol: {
            type: 'string',
          },
          logoUrl: {
            type: 'string',
          },
          decimals: {
            type: 'number',
          },
          amount: {
            type: 'string',
          },
          actualPrice: {
            type: 'string',
          },
          isVerified: {
            type: 'boolean',
          },
          isStable: {
            type: 'boolean',
          },
          address: {
            type: 'string',
          },
          isProtocolToken: {
            type: 'boolean',
          },
        },
        required: [
          'chainName',
          'chainId',
          'name',
          'symbol',
          'logoUrl',
          'decimals',
          'amount',
          'actualPrice',
          'isVerified',
          'isStable',
          'address',
          'isProtocolToken',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['count', 'result'],
  additionalProperties: false,
};
