import { ChainName } from "@lib/types";
import {
  TGetTransactionsResponse,
  TGetTransactionsResponseRaw,
} from "@business/namespaces/address/getTransactions/types";

export const mockTransactionsResponseRaw: TGetTransactionsResponseRaw = {
  status: 200,
  result: [
    {
      chain_name: ChainName.MAINNET,
      chain_id: 10,
      hash: "0x07cae200e50f9e53ffee9846dcec4a3a30773d064a2966746361ecd9ee2d1e27",
      block_number: 106147107,
      block_timestamp: 1687892991,
      from_address: "0x9648652a24e513434aea6b38ff1e4eeb32367699",
      to_address: "0xb0d502e938ed5f4df2e681fe6e419ff29631d62b",
      value: "0",
      fee: "71418998851117",
      method: "addLiquidity",
      method_hash: "0x87b21efc",
      status: true,
      transaction_tags: ["approve"],
      deployed_contract: "0xce74a760b754f7717e7a62e389d4b153aa753e0e",
      gas_price: "30032808611",
      gas_used: "24102",
      block_base_fee_per_gas: "29932808611",
    },
  ],
};

export const mockTransactionsResponse: TGetTransactionsResponse = {
  result: [
    {
      chainName: ChainName.MAINNET,
      chainId: 10,
      hash: "0x07cae200e50f9e53ffee9846dcec4a3a30773d064a2966746361ecd9ee2d1e27",
      blockNumber: 106147107,
      blockTimestamp: 1687892991,
      fromAddress: "0x9648652a24e513434aea6b38ff1e4eeb32367699",
      toAddress: "0xb0d502e938ed5f4df2e681fe6e419ff29631d62b",
      value: "0",
      fee: "71418998851117",
      method: "addLiquidity",
      methodHash: "0x87b21efc",
      status: true,
      transactionTags: ["approve"],
      deployedContract: "0xce74a760b754f7717e7a62e389d4b153aa753e0e",
      gasPrice: "30032808611",
      gasUsed: "24102",
      blockBaseFeePerGas: "29932808611",
    },
  ],
};
