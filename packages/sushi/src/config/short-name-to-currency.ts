import { ChainId } from '../chain/index.js'
import {
  AGEUR,
  DAI,
  FRAX,
  LUSD,
  MAI,
  MIM,
  Native,
  SUSHI,
  Type,
  UNI,
  USDC,
  USDT,
  WBTC,
  WETH9,
  WNATIVE,
} from '../currency/index.js'

const CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY = {
  [ChainId.BSC]: {
    // NATIVE: Native.onChain(ChainId.BSC),
    // WNATIVE: WNATIVE[ChainId.BSC],
    BNB: Native.onChain(ChainId.BSC),
    WBNB: WNATIVE[ChainId.BSC],
    ETH: WETH9[ChainId.BSC],
    WETH: WETH9[ChainId.BSC],
    USDC: USDC[ChainId.BSC],
    USDT: USDT[ChainId.BSC],
    DAI: DAI[ChainId.BSC],
    FRAX: FRAX[ChainId.BSC],
    MIM: MIM[ChainId.BSC],
    SUSHI: SUSHI[ChainId.BSC],
    MAI: MAI[ChainId.BSC],
    UNI: UNI[ChainId.BSC],
    AGEUR: AGEUR[ChainId.BSC],
  },
  [ChainId.ETHEREUM]: {
    // NATIVE: Native.onChain(ChainId.ETHEREUM),
    // WNATIVE: WETH9[ChainId.ETHEREUM],
    ETH: Native.onChain(ChainId.ETHEREUM),
    WETH: WETH9[ChainId.ETHEREUM],
    WBTC: WBTC[ChainId.ETHEREUM],
    USDC: USDC[ChainId.ETHEREUM],
    USDT: USDT[ChainId.ETHEREUM],
    DAI: DAI[ChainId.ETHEREUM],
    FRAX: FRAX[ChainId.ETHEREUM],
    MIM: MIM[ChainId.ETHEREUM],
    SUSHI: SUSHI[ChainId.ETHEREUM],
    MAI: MAI[ChainId.ETHEREUM],
    UNI: UNI[ChainId.ETHEREUM],
    LUSD: LUSD[ChainId.ETHEREUM],
    AGEUR: AGEUR[ChainId.ETHEREUM],
  },
  [ChainId.BASE]: {
    NATIVE: Native.onChain(ChainId.BASE),
    WNATIVE: WNATIVE[ChainId.BASE],
    ETH: Native.onChain(ChainId.BASE),
    WETH: WNATIVE[ChainId.BASE],
  },
} as const

export type ShortCurrencyNameChainId =
  keyof typeof CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY

export type ShortCurrencyName =
  keyof (typeof CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY)[ShortCurrencyNameChainId]

export const isShortCurrencyNameSupported = (
  chainId: ChainId,
): chainId is ShortCurrencyNameChainId =>
  chainId in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY

export const isShortCurrencyName = (
  chainId: ChainId,
  shortCurrencyName: string,
): shortCurrencyName is ShortCurrencyName => {
  return (
    isShortCurrencyNameSupported(chainId) &&
    shortCurrencyName in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId]
  )
}

export const currencyFromShortCurrencyName = (
  chainId: ChainId,
  shortCurrencyName: ShortCurrencyName,
): Type => {
  if (!isShortCurrencyNameSupported(chainId))
    throw new Error(
      `Unsupported chain id ${chainId} for short currency name ${shortCurrencyName}`,
    )
  if (!(shortCurrencyName in CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId]))
    throw new Error(
      `Unsupported short currency name ${shortCurrencyName} on chain ${chainId}`,
    )
  return CHAIN_ID_SHORT_CURRENCY_NAME_TO_CURRENCY[chainId][shortCurrencyName]
}
