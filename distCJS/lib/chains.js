"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainType = exports.EvmChainNameToIdMap = exports.EvmChainIdToNameMap = exports.EvmChainId = exports.SolanaChainName = exports.EvmChainName = void 0;
var EvmChainName;
(function (EvmChainName) {
    EvmChainName["ARBITRUM"] = "arbitrum";
    EvmChainName["AVALANCHE"] = "avalanche";
    EvmChainName["BASE"] = "base";
    EvmChainName["BSC"] = "bsc";
    EvmChainName["MAINNET"] = "mainnet";
    EvmChainName["FANTOM"] = "fantom";
    EvmChainName["GNOSIS"] = "gnosis";
    EvmChainName["OPBNB"] = "opbnb";
    EvmChainName["OPTIMISM"] = "optimism";
    EvmChainName["POLYGON"] = "polygon";
})(EvmChainName || (exports.EvmChainName = EvmChainName = {}));
var SolanaChainName;
(function (SolanaChainName) {
    SolanaChainName["DEVNET"] = "devnet";
    SolanaChainName["MAINNET_BETA"] = "mainnet-beta";
})(SolanaChainName || (exports.SolanaChainName = SolanaChainName = {}));
var EvmChainId;
(function (EvmChainId) {
    EvmChainId[EvmChainId["ARBITRUM"] = 42161] = "ARBITRUM";
    EvmChainId[EvmChainId["AVALANCHE"] = 43114] = "AVALANCHE";
    EvmChainId[EvmChainId["BASE"] = 8453] = "BASE";
    EvmChainId[EvmChainId["BSC"] = 56] = "BSC";
    EvmChainId[EvmChainId["MAINNET"] = 1] = "MAINNET";
    EvmChainId[EvmChainId["FANTOM"] = 250] = "FANTOM";
    EvmChainId[EvmChainId["GNOSIS"] = 100] = "GNOSIS";
    EvmChainId[EvmChainId["OPBNB"] = 204] = "OPBNB";
    EvmChainId[EvmChainId["OPTIMISM"] = 10] = "OPTIMISM";
    EvmChainId[EvmChainId["POLYGON"] = 137] = "POLYGON";
})(EvmChainId || (exports.EvmChainId = EvmChainId = {}));
exports.EvmChainIdToNameMap = {
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
};
exports.EvmChainNameToIdMap = {
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
};
var ChainType;
(function (ChainType) {
    ChainType["EVM"] = "evm";
    ChainType["SOLANA"] = "solana";
})(ChainType || (exports.ChainType = ChainType = {}));
