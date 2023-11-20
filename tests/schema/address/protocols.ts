export const schema_200_protocols = {
  type: "object",
  properties: {
    count: {
      type: "number",
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
            type: ["string", "null"],
          },
          position: {
            type: "object",
            properties: {
              assetUsdValue: {
                type: "string",
              },
              debtUsdValue: {
                type: "string",
              },
              netUsdValue: {
                type: "string",
              },
            },
            required: ["assetUsdValue", "debtUsdValue", "netUsdValue"],
            additionalProperties: false,
          },
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
  required: ["count", "result"],
  additionalProperties: false,
};
