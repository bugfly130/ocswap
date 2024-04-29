import { ChainId } from '../chain/index.js'

export const SUSHIXSWAP_SUPPORTED_CHAIN_IDS = [
  ChainId.BSC,
  ChainId.ETHEREUM,
] as const

export type SushiXSwapChainId = (typeof SUSHIXSWAP_SUPPORTED_CHAIN_IDS)[number]

export const SUSHIXSWAP_ADDRESS: Record<SushiXSwapChainId, `0x${string}`> = {
  [ChainId.BSC]: '0x7A4af156379f512DE147ed3b96393047226d923F',
  [ChainId.ETHEREUM]: '0x011E52E4E40CF9498c79273329E8827b21E2e581',
} as const

export const isSushiXSwapChainId = (
  chainId: ChainId,
): chainId is SushiXSwapChainId =>
  SUSHIXSWAP_SUPPORTED_CHAIN_IDS.includes(chainId as SushiXSwapChainId)

export const SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS = [
  ChainId.ETHEREUM,
  ChainId.BSC,
  ChainId.BASE,
] as const

export type SushiXSwap2ChainId =
  (typeof SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS)[number]

export const SUSHIXSWAP_2_ADDRESS: Record<SushiXSwap2ChainId, `0x${string}`> = {
  [ChainId.ETHEREUM]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
  [ChainId.BSC]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
  [ChainId.BASE]: '0x804b526e5bf4349819fe2db65349d0825870f8ee',
} as const

export const isSushiXSwap2ChainId = (
  chainId: ChainId,
): chainId is SushiXSwap2ChainId =>
  SUSHIXSWAP_2_SUPPORTED_CHAIN_IDS.includes(chainId as SushiXSwap2ChainId)

export const STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS = [
  ChainId.ETHEREUM,
  ChainId.BSC,
  ChainId.BASE,
] as const

export type StargateAdapterChainId =
  (typeof STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS)[number]

export const STARGATE_ADAPTER_ADDRESS: Record<
  StargateAdapterChainId,
  `0x${string}`
> = {
  [ChainId.ETHEREUM]: '0xbF3B71decBCEFABB3210B9D8f18eC22e0556f5F0',
  [ChainId.BSC]: '0x454714482cA38fBBcE7fC76D96Ba1CE2028A4fF6',
  [ChainId.BASE]: '0xbF3B71decBCEFABB3210B9D8f18eC22e0556f5F0',
} as const

export const isStargateAdapterChainId = (
  chainId: ChainId,
): chainId is StargateAdapterChainId =>
  STARGATE_ADAPTER_SUPPORTED_CHAIN_IDS.includes(
    chainId as StargateAdapterChainId,
  )
