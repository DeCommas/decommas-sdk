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
- **Base**
- **opBNB**

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

const tokens = await decommas.address.getTokens({ address });
console.log(tokens);
};

getVitalikERC20Balances();
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

getVitalikERC20Balances();
```

## Error handling
It's always a good idea to wrap `async` into a `try catch` structure to deal with any errors and to make your code safe:

```ts
import { Decommas } from '@decommas/sdk';


const API_KEY = "YOUR_API_KEY";
const decommas = new Decommas(API_KEY);

const getVitalikERC20Balances = async () => {
  const address = 'wrong_address';
  
  try {
    const balances = await decommas.address.getTokens({ address });
    console.log(balances);
  } catch (error) {
    console.log(error);
    // ApiError { status: 400, message: 'Invalid parameters' }
  }
};

getVitalikERC20Balances();
```


## DeCommas API SDK use cases and overview

The DeCommas API SDK currently has these namespaces:

- `address`: All methods related to specific address info: ERC20 balances, NFT balances, transactions history etc.
- `metadata`: All methods related to specific token info: ERC20 token metadata, NFT token metadata
- `tx`: All methods related to specific transaction: transaction details, ERC20 transfers inside transaction, NFT transfers inside transaction

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

  const transactionDetails = await decommas.tx.getDetail(getTransactionDetailParams);
  console.log(transactionDetails);

  const nftMetadata = await decommas.metadata.getNft(getNftParams);
  console.log(nftMetadata);
};

getNamespacesUseCases();
```

## DeCommas address namespace

The `address` namespace contains all address-related methods:

- `getCoins({ address })`: Gets native coins balances.
- `getTokens({ address, limit?, offset?, chains?, verified? })`: Gets ERC20 tokens balances.
- `getNfts({ address, limit?, offset?, chains? })`: Gets NFTs balances.
- `getErc20Transfers({ address, limit?, offset?, chains? })`: Gets ERC20 transfers from and to address.
- `getNftTransfers({ address, limit?, offset?, chains? })`: Gets NFTs transfers from and to address.
- `getTransactions({ address, limit?, offset?, chains? })`: Gets transactions made from address.

> ### Pagination and Filters
> - All methods in `address` namespace, except `getCoins`, accept `limit` and `offset` params. By default `limit: 20` and `offset: 1`. Max value for `limit` is `100`.
> - All methods in `address` namespace accept `chains` param to make request only for spicific chains. To avoid misspels in chain names we recommend to use `ChainName` enum includet into this SDK:
> ```ts
> import { Decommas, ChainName } from '@decommas/sdk';
> const exampleAddressNamespaceParams = {
>   address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
>   limit: 20,
>   offset: 1,
>   verified: true,
>   chains: [ChainName.OPTIMISM, ChainName.MAINNET],
> };
>```
> By defalult all requests return data for all supported networks.

## DeCommas metadata namespace

The `metadata` namespace contains all metadata-related methods and helpful utils:

- `getNft({ chainName, contractAddress, tokenId })`: Gets NFT metadata: image, collection name etc.
- `getToken({ chainName, contractAddress })`: Gets ERC20 token metadata: symbol, current price etc.
- `getCoins()`: Gets native coins metadata for all supported networks.
- `getTokens({ chains? })`: Gets list of ERC20 tokens for specified networks.
- `metadata.getTokensBySymbol({ symbol, chains? })`: Gets token addresses in specified networks by token symbol.

## DeCommas transaction namespace

The `tx` namespace contains all transaction-related methods:

- `getErc20TransfersByTx({ chainName, txHash })`: Gets ERC20 transfers made in transaction.
- `getNftTransfersByTx({ chainName, txHash })`: Gets NFT transfers made in transaction.
- `getDetail({ chainName, txHash })`: Gets transaction info: from, to, blocknumber etc.

## **FEATURE REQUEST AND ISSUES**
We'd really appreciate any ideas and thoughts on our products. We always work on making a better web3 experience for developers and users. So, please fill free to share your feedback in our [Discord](https://discord.gg/N8zTPRepsv).
If you ran into issue with our SDK open an issue in [SDK GitHub repo](https://github.com/decommas/decommas-sdk/issues).
