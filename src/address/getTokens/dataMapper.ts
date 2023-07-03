import { TGetTokensResponse, TGetTokensResponseRaw } from "./types";

export const dataMapper = (responseRaw: TGetTokensResponseRaw): TGetTokensResponse => {
    return responseRaw.result.map(raw => ({
        chainName: raw.chain_name,
        chainId: raw.chain_id,
        address: raw.address,
        name: raw.name,
        decimals: raw.decimals,
        symbol: raw.symbol,
        logoUrl: raw.logo_url,
        actualPrice: Number(raw.actual_price),
        isVerified: raw.is_verified,
        isStable: raw.is_stable,
        amount: Number(raw.amount),
    }));
}
