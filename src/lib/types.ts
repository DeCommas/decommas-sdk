export enum ChainName {
  MAINNET = "mainnet",
  ARBITRUM = "arbitrum",
  OPTIMISM = "optimism",
  AVALANCHE = "avalanche",
  BSC = "bsc",
  GNOSIS = "gnosis",
  FANTOM = "fantom",
  POLYGON = "polygon",
  BASE = "base",
  OPBNB = "opbnb",
  LINEA = "linea",
}

export type TAddress = string;

export type TWithAmount<T> = T & {
  amount: string;
};
