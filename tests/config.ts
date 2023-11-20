import { EvmChainName } from "../src";

export type ContractInfo = {
  tokenContract: string;
  nftContract721: string;
  nftContract1155: string;
  tokenId721: string;
  tokenId1155: string;
  txHashErc20: string;
  txHashNft: string;
};

export const contractsConfig: Record<EvmChainName, ContractInfo> = {
  [EvmChainName.ARBITRUM]: {
    tokenContract: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    nftContract721: "0x9d911c2dd24dc8b95e329b4acc7a4552f806d1a8",
    tokenId721: "214",
    nftContract1155: "0xdffd299821ad4a835616f5479c23d6d01ac6e547",
    tokenId1155: "1",
    txHashErc20:
      "0xed19ab9231ae6f9753e73b11d4e50fea940cb86ab049cf2a110419de3dcc062c",
    txHashNft:
      "0xaf8eefb2c62d09d4aabbff87eb3623f19bff722a4554436d1598805800e1dca8",
  },
  [EvmChainName.AVALANCHE]: {
    tokenContract: "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",
    nftContract721: "0xc0eef2bac6469bd1c89796e712349a1df2dc1298",
    tokenId721: "115",
    nftContract1155: "0xa695ea0c90d89a1463a53fa7a02168bc46fbbf7e",
    tokenId1155: "0",
    txHashErc20:
      "0xa418c0525399f2922496617ad32c4039675bc54d18e991d7f597745a6d6e2207",
    txHashNft:
      "0x17dbc18be26537f46009557334bdacecc0a43d79c1f7563dbf4fc39d081492ce",
  },
  [EvmChainName.BASE]: {
    tokenContract: "0x52c45d3068c937cb1e6b4a7f2c2a66b85056dd24",
    nftContract721: "0x2cdca0a5e8c0133dc8e3677b4022817c6c7dc40b",
    tokenId721: "1438",
    nftContract1155: "0x9f9401ee604f7725255c756b99e416754ba0b910",
    tokenId1155: "67",
    txHashErc20:
      "0xa9abdacd63f2b00b70bca0e4fad6afe38c415f10d6b3a7f9d25870712678f0a2",
    txHashNft:
      "0x6bd5c9b6948fe2cbf325af7358416970b2a143e20cc35f0101a8546a4e6c9486",
  },
  [EvmChainName.BSC]: {
    tokenContract: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    nftContract721: "0x0d133a9afdd9018348adc097335b8dfdb6746a09",
    tokenId721: "586430227848038019174374300982845652912257441249",
    nftContract1155: "0x98387108842a7cfc7ba23e080030351f6ea68ac0",
    tokenId1155: "0",
    txHashErc20:
      "0x78f9ec5583f39457d4ebc30701360f663acd36e62933d4612c72485d39b2379c",
    txHashNft:
      "0x97eab8298da9f79a43c894b9eb422da71331d04b1039d8f680c559912eb42789",
  },
  [EvmChainName.FANTOM]: {
    tokenContract: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    nftContract721: "0x6c8b0f90b7bdbea4b7c51eae7189e3dc3214ba6c",
    tokenId721: "14715",
    nftContract1155: "0x1dae89b469d15b0ded980007dfdc8e68c363203d",
    tokenId1155: "12803",
    txHashErc20:
      "0xdee666fb744c1b36eac38240a577a9b3461229b14afd0c02fdb21ef338cca6ae",
    txHashNft:
      "0x883df2632e151fdeef663f35eebe664f8d50c62bc6e27d445e18922838659fc5",
  },
  [EvmChainName.GNOSIS]: {
    tokenContract: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
    nftContract721: "0x22c1f6050e56d2876009903609a2cc3fef83b415",
    tokenId721: "2230630",
    nftContract1155: "0xf6a509a905cc31aec617c55b6be8880638eca530",
    tokenId1155: "2",
    txHashErc20:
      "0xbc2eb8a35d3ede15add8daa4ab51388358eb2d76aab8c037ccf94f3349d3d5df",
    txHashNft:
      "0xa078388875ba95e70e08c1abe8170d77bee7385304451247def7288a0bd7feae",
  },
  [EvmChainName.LINEA]: {
    tokenContract: "0xa219439258ca9da29e9cc4ce5596924745e12b93",
    nftContract721: "0xfed1b92fc14e17c2699b45423f5c6e37ed17fffe",
    tokenId721: "333",
    nftContract1155: "0x0872ec4426103482a50f26ffc32acefcec61b3c9",
    tokenId1155: "5",
    txHashErc20:
      "0xc1931d09605271f1be519b393a701cc5b63047c3ceedb8f96f9c8fc12cfffdd8",
    txHashNft:
      "0x6bd5c9b6948fe2cbf325af7358416970b2a143e20cc35f0101a8546a4e6c9486",
  },
  [EvmChainName.MAINNET]: {
    tokenContract: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    nftContract721: "0x000386e3f7559d9b6a2f5c46b4ad1a9587d59dc3",
    tokenId721: "619",
    nftContract1155: "0x7daec605e9e2a1717326eedfd660601e2753a057",
    tokenId1155: "13",
    txHashErc20:
      "0xf242769b6e2c784fccf4007623b520e67c57b2741ad15c4e16ba00f11acb8ab7",
    txHashNft:
      "0x0d691b19523986847beff7c6af41353fe7a20bddcf3a82ae0c81e1a82e6428d8",
  },
  [EvmChainName.OPBNB]: {
    tokenContract: "0x7c6b91d9be155a6db01f749217d76ff02a7227f2",
    nftContract721: "0xd954bb4e6af0ccc7d692431b8841a03916bec9e9",
    tokenId721: "1208",
    nftContract1155: "0x72d661c5ce49de219095346af67ed83e866e531a",
    tokenId1155: "1",
    txHashErc20:
      "0xc6eeb8214517130196cbaf092df7df628fcce3cb80cf2e3eec6e75422146835b",
    txHashNft:
      "0x21d9cd61fad5aad03c02543375360f75bc676eb20510bd42b8221893c7fa4ed3",
  },
  [EvmChainName.OPTIMISM]: {
    tokenContract: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
    nftContract721: "0x375e1114fef565e7fd343d25f39c4bb1893dcb8f",
    tokenId721: "1787",
    nftContract1155: "0x31f88a359a045aba182a3e1d05ceaa5a5b0f5912",
    tokenId1155: "0",
    txHashErc20:
      "0x4ad86cb8eb10313922e8482c7e08d8574040ed6636df7a749d6537285246aa42",
    txHashNft:
      "0x5b96edda45adab0ba985d7985c81bc8538774233f190b6bb6218a29ac936ba4b",
  },
  [EvmChainName.POLYGON]: {
    tokenContract: "0x6f8a06447ff6fcf75d803135a7de15ce88c1d4ec",
    nftContract721: "0x5d666f215a85b87cb042d59662a7ecd2c8cc44e6",
    tokenId721: "18015208",
    nftContract1155: "0xcf63b89da7c6ada007fbef13fa1e8453756ba7a6",
    tokenId1155: "0",
    txHashErc20:
      "0x9e077460cd074ca9a331cca438ae8d4623f8d86de10870e7e69f13ffe39bf0b8",
    txHashNft:
      "0x0b30d44aee547c86f858db84268c501fdae4305d379c6aae14bbced2351a7cbb",
  },
  [EvmChainName.ARBITRUM_NOVA]: {
    tokenContract: "0xffa1fd06605241e58291571261f032a94d463b10",
    nftContract721: "0x1bb560bc6a1c4f6e79ba8ce4c74825790fb7d8fe",
    tokenId721: "15186",
    nftContract1155: "0xd5972e8e41dead5bb6e6720e4c65557aa353e0af",
    tokenId1155: "3",
    txHashErc20:
      "0x15499ad46919c73d2eb6c725a1804e65c420665220d0934bab5bbad129771dd5",
    txHashNft:
      "0x57a6d4cd54f33d89e6c830cc6c2c404d891eeca961da4e163928ae36b3a3af8b",
  },
  [EvmChainName.POLYGON_ZKEVM]: {
    tokenContract: "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
    nftContract721: "0xb58f5110855fbef7a715d325d60543e7d4c18143",
    tokenId721: "1092205",
    nftContract1155: "0xb0e834fb82f890bf6f458c9aaa4e6d9e8411bb20",
    tokenId1155: "0",
    txHashErc20:
      "0x2e434aa0dcd2bfbd22a421030a69690e709d50905ad76eaebf485f7747957fe9",
    txHashNft:
      "0xe6af67528d01347c782e76d24cecf4563d4aa0cdd3ad6e6257ce8c636fc35525",
  },
};
