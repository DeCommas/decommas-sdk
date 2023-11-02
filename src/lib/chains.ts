export enum EvmChainName {
  ARBITRUM = "arbitrum",
  AVALANCHE = "avalanche",
  BASE = "base",
  BSC = "bsc",
  FANTOM = "fantom",
  GNOSIS = "gnosis",
  LINEA = "linea",
  MAINNET = "mainnet",
  OPBNB = "opbnb",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  ARBITRUM_NOVA = "arbitrum_nova",
  POLYGON_ZKEVM = "polygon_zkevm",
}

export enum SolanaChainName {
  DEVNET = "devnet",
  MAINNET_BETA = "mainnet-beta",
}

export type ChainName = EvmChainName | SolanaChainName;

export enum EvmChainId {
  ARBITRUM = 42161,
  AVALANCHE = 43114,
  BASE = 8453,
  BSC = 56,
  MAINNET = 1,
  FANTOM = 250,
  GNOSIS = 100,
  OPBNB = 204,
  OPTIMISM = 10,
  POLYGON = 137,
  LINEA = 59144,
  ARBITRUM_NOVA = 42170,
  POLYGON_ZKEVM = 1101,
}

export const EvmChainIdToNameMap: Record<EvmChainId, EvmChainName> = {
  [EvmChainId.ARBITRUM]: EvmChainName.ARBITRUM,
  [EvmChainId.AVALANCHE]: EvmChainName.AVALANCHE,
  [EvmChainId.BSC]: EvmChainName.BSC,
  [EvmChainId.MAINNET]: EvmChainName.MAINNET,
  [EvmChainId.FANTOM]: EvmChainName.FANTOM,
  [EvmChainId.OPTIMISM]: EvmChainName.OPTIMISM,
  [EvmChainId.POLYGON]: EvmChainName.POLYGON,
  [EvmChainId.GNOSIS]: EvmChainName.GNOSIS,
  [EvmChainId.OPBNB]: EvmChainName.OPBNB,
  [EvmChainId.BASE]: EvmChainName.BASE,
  [EvmChainId.LINEA]: EvmChainName.LINEA,
  [EvmChainId.ARBITRUM_NOVA]: EvmChainName.ARBITRUM_NOVA,
  [EvmChainId.POLYGON_ZKEVM]: EvmChainName.POLYGON_ZKEVM,
};

export const EvmChainNameToIdMap: Record<EvmChainName, EvmChainId> = {
  [EvmChainName.ARBITRUM]: EvmChainId.ARBITRUM,
  [EvmChainName.AVALANCHE]: EvmChainId.AVALANCHE,
  [EvmChainName.BSC]: EvmChainId.BSC,
  [EvmChainName.MAINNET]: EvmChainId.MAINNET,
  [EvmChainName.FANTOM]: EvmChainId.FANTOM,
  [EvmChainName.OPTIMISM]: EvmChainId.OPTIMISM,
  [EvmChainName.POLYGON]: EvmChainId.POLYGON,
  [EvmChainName.GNOSIS]: EvmChainId.GNOSIS,
  [EvmChainName.OPBNB]: EvmChainId.OPBNB,
  [EvmChainName.BASE]: EvmChainId.BASE,
  [EvmChainName.LINEA]: EvmChainId.LINEA,
  [EvmChainName.ARBITRUM_NOVA]: EvmChainId.ARBITRUM_NOVA,
  [EvmChainName.POLYGON_ZKEVM]: EvmChainId.POLYGON_ZKEVM,
};

export enum ChainType {
  EVM = "evm",
  SOLANA = "solana",
}
