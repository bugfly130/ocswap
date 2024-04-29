import { ChainId } from '../chain/index.js'

const POOL_INIT_CODE_HASH =
  '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */

export enum SushiSwapV3FeeAmount {
  /** 0.01% */
  LOWEST = 100,
  /** 0.1% */
  LOW = 500,
  /** 0.3% */
  MEDIUM = 3000,
  /** 1% */
  HIGH = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [_amount in SushiSwapV3FeeAmount]: number } = {
  [SushiSwapV3FeeAmount.LOWEST]: 1,
  [SushiSwapV3FeeAmount.LOW]: 10,
  [SushiSwapV3FeeAmount.MEDIUM]: 60,
  [SushiSwapV3FeeAmount.HIGH]: 200,
}

// SUSHISWAP
export const SUSHISWAP_V3_FACTORY_ADDRESS: Record<
  SushiSwapV3ChainId,
  `0x${string}`
> = {
  [ChainId.BSC]: '0x126555dd55a39328F69400d6aE4F782Bd4C34ABb',
  [ChainId.ETHEREUM]: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
  [ChainId.BASE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
} as const

export const SUSHISWAP_V3_INIT_CODE_HASH: Record<
  SushiSwapV3ChainId,
  `0x${string}`
> = {
  [ChainId.BSC]: POOL_INIT_CODE_HASH,
  [ChainId.ETHEREUM]: POOL_INIT_CODE_HASH,
  [ChainId.BASE]: POOL_INIT_CODE_HASH,
} as const

export const SUSHISWAP_V3_POSTIION_MANAGER: Record<
  SushiSwapV3ChainId,
  `0x${string}`
> = {
  [ChainId.BSC]: '0xF70c086618dcf2b1A461311275e00D6B722ef914',
  [ChainId.ETHEREUM]: '0x2214A42d8e2A1d20635c2cb0664422c528B6A432',
  [ChainId.BASE]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
} as const

export const SUSHISWAP_V3_TICK_LENS: Record<SushiSwapV3ChainId, `0x${string}`> =
  {
    [ChainId.BSC]: '0x10c19390E1Ac2Fd6D0c3643a2320b0abA38E5bAA',
    [ChainId.ETHEREUM]: '0xFB70AD5a200d784E7901230E6875d91d5Fa6B68c',
    [ChainId.BASE]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  } as const

export const SUSHISWAP_V3_SUPPORTED_CHAIN_IDS = [
  ChainId.BSC,
  ChainId.ETHEREUM,
  ChainId.BASE,
] as const

export const SushiSwapV3ChainIds = SUSHISWAP_V3_SUPPORTED_CHAIN_IDS

export type SushiSwapV3ChainId =
  (typeof SUSHISWAP_V3_SUPPORTED_CHAIN_IDS)[number]

export const isSushiSwapV3ChainId = (
  chainId: ChainId,
): chainId is SushiSwapV3ChainId =>
  SUSHISWAP_V3_SUPPORTED_CHAIN_IDS.includes(chainId as SushiSwapV3ChainId)
