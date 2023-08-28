export const schema_200_getAllCoins = {
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
          actualPrice: {
            type: 'string',
          },
        },
        required: [
          'chainName',
          'chainId',
          'name',
          'symbol',
          'logoUrl',
          'decimals',
          'actualPrice',
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['count', 'result'],
  additionalProperties: false,
};
