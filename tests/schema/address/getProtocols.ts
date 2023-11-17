export const schema_200_getProtocols = {
  type: "object",
  properties: {
    count: {
      type: 'number',
    },
    result: {
      type: "array",
      items: {
        type: "object",
        properties: {
          chainName: {
            type: "string",
          },
          chainId: {
            type: "number",
          },
          protocolId: {
            type: "string",
          },
          protocolName: {
            type: "string",
          },
          protocolLogo: {
            type: "string",
          },
          position: {
            type: 'object',
            properties: {
              assetUsdValue: {
                type: "string",
              },
              debtUsdValue:{
                type: "string",
              },
              netUsdValue: {
                type: "string",
              },
            }
          }
        },
        required: [
          "chainName",
          "chainId",
          "protocolId",
          "protocolName",
          "protocolLogo",
          "position",
        ],
        additionalProperties: false,
      },
    },
  },
  required: ['count', 'result'],
  additionalProperties: false,
};
