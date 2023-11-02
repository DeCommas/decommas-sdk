import { EvmChainName } from "../src";

export const contractsConfig: {
  [key in EvmChainName]: {
    tokenContract: string;
    nftContract721: string;
    nftContract1155: string;
  };
} = {
  [EvmChainName.ARBITRUM]: {
    tokenContract: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    nftContract721: "0x9d911c2dd24dc8b95e329b4acc7a4552f806d1a8",
    nftContract1155: "0xdffd299821ad4a835616f5479c23d6d01ac6e547",
  },
  [EvmChainName.AVALANCHE]: {
    tokenContract: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
    nftContract721: "0xc0eef2bac6469bd1c89796e712349a1df2dc1298",
    nftContract1155: "0xa695ea0c90d89a1463a53fa7a02168bc46fbbf7e",
  },
  [EvmChainName.BASE]: {
    tokenContract: "0x52c45d3068c937cb1e6b4a7f2c2a66b85056dd24",
    nftContract721: "0x2cdca0a5e8c0133dc8e3677b4022817c6c7dc40b",
    nftContract1155: "0x9f9401ee604f7725255c756b99e416754ba0b910",
  },
  [EvmChainName.BSC]: {
    tokenContract: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    nftContract721: "0x0d133a9afdd9018348adc097335b8dfdb6746a09",
    nftContract1155: "0x98387108842a7cfc7ba23e080030351f6ea68ac0",
  },
  [EvmChainName.FANTOM]: {
    tokenContract: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    nftContract721: "0x6c8b0f90b7bdbea4b7c51eae7189e3dc3214ba6c",
    nftContract1155: "0x1dae89b469d15b0ded980007dfdc8e68c363203d",
  },
  [EvmChainName.GNOSIS]: {
    tokenContract: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
    nftContract721: "0x22c1f6050e56d2876009903609a2cc3fef83b415",
    nftContract1155: "0xf6a509a905cc31aec617c55b6be8880638eca530",
  },
  [EvmChainName.LINEA]: {
    tokenContract: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
    nftContract721: "0xfed1b92fc14e17c2699b45423f5c6e37ed17fffe",
    nftContract1155: "0x0872ec4426103482a50f26ffc32acefcec61b3c9",
  },
  [EvmChainName.MAINNET]: {
    tokenContract: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    nftContract721: "0x000386e3f7559d9b6a2f5c46b4ad1a9587d59dc3",
    nftContract1155: "0x7daec605e9e2a1717326eedfd660601e2753a057",
  },
  [EvmChainName.OPBNB]: {
    tokenContract: "0x7c6b91d9be155a6db01f749217d76ff02a7227f2",
    nftContract721: "0xd954bb4e6af0ccc7d692431b8841a03916bec9e9",
    nftContract1155: "0x72d661c5ce49de219095346af67ed83e866e531a",
  },
  [EvmChainName.OPTIMISM]: {
    tokenContract: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
    nftContract721: "0x375e1114fef565e7fd343d25f39c4bb1893dcb8f",
    nftContract1155: "0x31f88a359a045aba182a3e1d05ceaa5a5b0f5912",
  },
  [EvmChainName.POLYGON]: {
    tokenContract: "0x6f8a06447ff6fcf75d803135a7de15ce88c1d4ec",
    nftContract721: "0x5d666f215a85b87cb042d59662a7ecd2c8cc44e6",
    nftContract1155: "0xcf63b89da7c6ada007fbef13fa1e8453756ba7a6",
  },
  [EvmChainName.ARBITRUM_NOVA]: {
    tokenContract: "0xffa1fd06605241e58291571261f032a94d463b10",
    nftContract721: "0x1bb560bc6a1c4f6e79ba8ce4c74825790fb7d8fe",
    nftContract1155: "0xd5972e8e41dead5bb6e6720e4c65557aa353e0af",
  },
  [EvmChainName.POLYGON_ZKEVM]: {
    tokenContract: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
    nftContract721: "0xb58f5110855fbef7a715d325d60543e7d4c18143",
    nftContract1155: "0xb0e834fb82f890bf6f458c9aaa4e6d9e8411bb20",
  },
};
