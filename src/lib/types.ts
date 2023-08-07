export enum ChainName {
  MAINNET = "mainnet",
  ARBITRUM = "arbitrum",
  OPTIMISM = "optimism",
  AVALANCHE = "avalanche",
  BSC = "bsc",
  GNOSIS = "gnosis",
  FANTOM = "fantom",
  POLYGON = "polygon",
}

export type TAddress = string;

export type TWithAmount<T> = T & {
  amount: string;
};
