# DeCommas API SDK for Javascript

The DeCommas API SDK provides complete and stable access to DeCommas API - the fastest and best-in-class API for cross-chain indexed data.

The SDK covers all available endpoints and features.

Supported chains (mainnet only):

- **Ethereum**
- **Polygon**
- **Optimism**
- **Arbitrum**
- **Binance Smart Chain(BSC)**
- **Avalanche**
- **Fantom**
- **Gnosis(ex-xDai)**

## Quick start

```
npm install @decommas/sdk
```

After installing the app you can import and use the SDK:

```ts
import { Decommas } from '@decommas/sdk';

// Allows to use SDK in DEV-ONLY mode
const decommas = new Decommas();

const getVitalikERC20Balances = async () => {
const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'; // any address

const balances = await decommas.address.getTokens({ address });
console.log(balances);
}; 
```
And this is it! Now you're ready to build your own project. You can use `decommas.address.getCoins` and `decommas.address.getTokens` freely for development purposes.

### Quick start with API key
> When your app is ready for some battle-tests, or you'd like to use all DeCommas API functionality, sugin up on [our dashboard](https://dashboard.decommas.io/) to get API key. It's still free to use but allows calls to all API methods and increases rate limits.


```ts
import { Decommas } from '@decommas/sdk';

// You can pass your API key to constructor. For security purposes we recommend store API key as environment variable
const API_KEY = "YOUR_API_KEY";

const decommas = new Decommas(API_KEY);

const getVitalikERC20Balances = async () => {
  const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'; // any address

  const balances = await decommas.address.getTokens({ address });
  console.log(balances);
}; 
```

## DeCommas API SDK use cases and overview

The DeCommas API SDK currently has these namespaces:

- `address`: All methods related to specific address info: ERC20 balances, NFT balances, transactions history etc.
- `metadata`: All methods related to specific token info: ERC20 token metadata, NFT token metadata
- `transaction`: All methods related to specific transaction: transaction details, ERC20 transfers inside transaction, NFT transfers inside transaction

```ts
import { Decommas, ChainName } from '@decommas/sdk';

const API_KEY = "YOUR_API_KEY";
const decommas = new Decommas(API_KEY);

const getNamespacesUseCases = async () => {
  const getTokensParams = {
    address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
  };

  const getTransactionDetailParams = {
    chainName: ChainName.MAINNET,
    txHash: '0x1d13160c69bac11b359585f37ffe8ba421e9f775852ea25b5b3b1ffab1f217de'
  };

  const getNftParams = {
    chainName: ChainName.MAINNET,
    contractAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    tokenId: 1,
  }

  const tokens = await decommas.address.getTokens(getTokensParams);
  console.log(tokens);

  const transactionDetails = await decommas.transaction.getDetail(getTransactionDetailParams);
  console.log(transactionDetails);

  const nftMetadata = await decommas.metadata.getNft(getNftParams);
  console.log(nftMetadata);
};
```

## DeCommas address namespace

The `address` namespace contains all address-related methods:

- `getCoins()`: Gets native coins balances.
- `getTokens()`: Gets ERC20 tokens balances.
- `getNfts()`: Gets NFTs balances.
- `getErc20Transfers()`: Gets ERC20 transfers from and to address.
- `getNftTransfers()`: Gets NFTs transfers from and to address.
- `getTransactions()`: Gets transactions made from address.

> ### Pagination and Filters
> - All methods in `address` namespace, except `getCoins`, accept `limit` and `offset` params. By default `limit: 25` and `offset: 1`. Max value for `limit` is `100`.
> - All methods in `address` namespace accept `chains` param to make request only for spicific chains. To avoid misspels in chain names we recommend to use `ChainName` enum includet into this SDK:
> ```
>  import { Decommas, ChainName } from '@decommas/sdk';
>```
> By defalult all requests return data for all supported networks.

## DeCommas metadata namespace

The `metadata` namespace contains all metadata-related methods:

- `getNft()`: Gets NFT metadata: image, collection name etc.
- `getToken()`: Gets ERC20 token metadata: symbol, current price etc.

## DeCommas transaction namespace

The `transaction` namespace contains all transaction-related methods:

- `getErc20TransfersByTx()`: Gets ERC20 transfers made in transaction.
- `getNFTTransfersByTx()`: Gets NFT transfers made in transaction.
- `getDetail()`: Gets transaction info: from, to, blocknumber etc.

## **FEATURE REQUEST AND ISSUES**
We'd really appreciate any ideas and thoughts on our products. We always work on making a better web3 experience for developers and users. So, please fill free to share your feedback in our [Discord](https://discord.gg/N8zTPRepsv).
If you ran into issue with our SDK open an issue in [SDK GitHub repo](https://github.com/decommas/decommas-sdk/issues).
