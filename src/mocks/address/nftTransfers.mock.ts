import { EvmChainName } from "@lib/chains";
import {
  TGetNftTransfersResponse,
  TGetNftTransfersResponseRaw,
} from "@business/namespaces/address/getNftTransfers/types";

export const mockNftTransfersResponseRaw: TGetNftTransfersResponseRaw = {
  status: 200,
  result: [
    {
      chain_name: EvmChainName.MAINNET,
      chain_id: 137,
      block_number: 44570085,
      block_timestamp: 1688247708,
      log_index: 2048,
      from_address: "0x0000000000000000000000000000000000000000",
      to_address: "0x9648652a24e513434aea6b38ff1e4eeb32367699",
      contract_address: "0xb56ca8173673160e55bd4e57dcc0a84d6ea89ecb",
      token_id: "1919",
      contract_type: "ERC-1155",
      amount: "1",
      transaction_hash:
        "0xd56e8d4d606499f0e2001d9d04ea5d79ba668ef24ab58c529e97f36e3ddbffe7",
      method: "mintBatch",
      method_hash: "0x927f59ba",
      fee: "1729918146273732",
      gas_price: "5545107081",
      gas_used: "311972",
      block_base_fee_per_gas: "5245107081",
    },
  ],
};

export const mockNftTransfersResponse: TGetNftTransfersResponse = {
  result: [
    {
      chainName: EvmChainName.MAINNET,
      chainId: 137,
      blockNumber: 44570085,
      blockTimestamp: 1688247708,
      logIndex: 2048,
      fromAddress: "0x0000000000000000000000000000000000000000",
      toAddress: "0x9648652a24e513434aea6b38ff1e4eeb32367699",
      contractAddress: "0xb56ca8173673160e55bd4e57dcc0a84d6ea89ecb",
      tokenId: "1919",
      contractType: "ERC-1155",
      amount: "1",
      transactionHash:
        "0xd56e8d4d606499f0e2001d9d04ea5d79ba668ef24ab58c529e97f36e3ddbffe7",
      method: "mintBatch",
      methodHash: "0x927f59ba",
      fee: "1729918146273732",
      gasPrice: "5545107081",
      gasUsed: "311972",
      blockBaseFeePerGas: "5245107081",
    },
  ],
};
