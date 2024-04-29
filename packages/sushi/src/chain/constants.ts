export const ChainId = {
  ETHEREUM: 1,
  BSC: 56,
  BASE: 8453,
} as const
export type ChainId = (typeof ChainId)[keyof typeof ChainId]

export const TESTNET_CHAIN_IDS = [] as const
export type TestnetChainId = (typeof TESTNET_CHAIN_IDS)[number]

// export const isChainId = (chainId: number): chainId is ChainId => Object.values(ChainId).includes(chainId as ChainId)

export const ChainKey = {
  [ChainId.BSC]: 'bsc',
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.BASE]: 'base',
} as const
export type ChainKey = (typeof ChainKey)[keyof typeof ChainKey]
