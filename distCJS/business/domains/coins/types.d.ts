import { TWithAmount } from "../../../lib/types";
import { EvmChainName } from "../../../lib/chains";
export type TCoinRaw = {
    chain_name: EvmChainName;
    chain_id: number;
    name: string;
    symbol: string;
    logo_url: string | null;
    decimals: number;
    actual_price: string | null;
};
export type TCoin = {
    chainName: EvmChainName;
    chainId: number;
    name: string;
    symbol: string;
    logoUrl: string;
    decimals: number;
    actualPrice: string;
};
export type TCoinWithAmountRaw = TWithAmount<TCoinRaw>;
export type TCoinWithAmount = TWithAmount<TCoin>;
