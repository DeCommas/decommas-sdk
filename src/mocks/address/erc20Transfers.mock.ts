import { EvmChainName } from "@lib/chains";
import {
  TGetErc20TransfersResponse,
  TGetErc20TransfersResponseRaw,
} from "@business/namespaces/address/getErc20Transfers/types";

export const mockErc20TransfersResponseRaw: TGetErc20TransfersResponseRaw = {
  status: 200,
  result: [
    {
      chain_name: EvmChainName.MAINNET,
      chain_id: 10,
      block_number: 106147116,
      block_timestamp: 1687893009,
      log_index: 21,
      from_address: "0x9648652a24e513434aea6b38ff1e4eeb32367699",
      to_address: "0x4dea9e918c6289a52cd469cac652727b7b412cd2",
      token_address: "0xdecc0c09c3b5f6e92ef4184125d5648a66e35298",
      amount: "1319850",
      transaction_hash:
        "0xfd1fd95846d51531702861e8a131997e3ef2ba4ca00f6fc364902927a0b704c4",
      method: "deposit",
      method_hash: "0xe2bbb158",
      fee: "1729918146273732",
      gas_price: "5545107081",
      gas_used: "311972",
      block_base_fee_per_gas: "5245107081",
    },
  ],
};

export const mockErc20TransfersResponse: TGetErc20TransfersResponse = {
  result: [
    {
      chainName: EvmChainName.MAINNET,
      chainId: 10,
      blockNumber: 106147116,
      blockTimestamp: 1687893009,
      logIndex: 21,
      fromAddress: "0x9648652a24e513434aea6b38ff1e4eeb32367699",
      toAddress: "0x4dea9e918c6289a52cd469cac652727b7b412cd2",
      tokenAddress: "0xdecc0c09c3b5f6e92ef4184125d5648a66e35298",
      amount: "1319850",
      transactionHash:
        "0xfd1fd95846d51531702861e8a131997e3ef2ba4ca00f6fc364902927a0b704c4",
      method: "deposit",
      methodHash: "0xe2bbb158",
      fee: "1729918146273732",
      gasPrice: "5545107081",
      gasUsed: "311972",
      blockBaseFeePerGas: "5245107081",
    },
  ],
};
