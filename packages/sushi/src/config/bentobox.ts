import { ChainId } from '../chain/index.js'

export const BENTOBOX_SUPPORTED_CHAIN_IDS = [
  ChainId.BSC,
  ChainId.ETHEREUM,
] as const

export type BentoBoxChainId = (typeof BENTOBOX_SUPPORTED_CHAIN_IDS)[number]

export const BENTOBOX_ADDRESS: Record<BentoBoxChainId, `0x${string}`> = {
  [ChainId.BSC]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.ETHEREUM]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
} as const

export const isBentoBoxChainId = (
  chainId: ChainId,
): chainId is BentoBoxChainId =>
  BENTOBOX_SUPPORTED_CHAIN_IDS.includes(chainId as BentoBoxChainId)
