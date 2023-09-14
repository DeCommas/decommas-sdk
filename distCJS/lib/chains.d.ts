export declare enum EvmChainName {
    ARBITRUM = "arbitrum",
    AVALANCHE = "avalanche",
    BASE = "base",
    BSC = "bsc",
    MAINNET = "mainnet",
    FANTOM = "fantom",
    GNOSIS = "gnosis",
    OPBNB = "opbnb",
    OPTIMISM = "optimism",
    POLYGON = "polygon"
}
export declare enum SolanaChainName {
    DEVNET = "devnet",
    MAINNET_BETA = "mainnet-beta"
}
export type ChainName = EvmChainName | SolanaChainName;
export declare enum EvmChainId {
    ARBITRUM = 42161,
    AVALANCHE = 43114,
    BASE = 8453,
    BSC = 56,
    MAINNET = 1,
    FANTOM = 250,
    GNOSIS = 100,
    OPBNB = 204,
    OPTIMISM = 10,
    POLYGON = 137
}
export declare const EvmChainIdToNameMap: Record<EvmChainId, EvmChainName>;
export declare const EvmChainNameToIdMap: Record<EvmChainName, EvmChainId>;
export declare enum ChainType {
    EVM = "evm",
    SOLANA = "solana"
}
