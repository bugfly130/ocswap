import { ChainId } from 'sushi/chain'

export const STEER_SUPPORTED_CHAIN_IDS = [ChainId.BASE, ChainId.BSC]

export const SteerChainIds = STEER_SUPPORTED_CHAIN_IDS

export type SteerChainId = (typeof STEER_SUPPORTED_CHAIN_IDS)[number]

export const isSteerChainId = (chainId: ChainId): chainId is SteerChainId =>
  STEER_SUPPORTED_CHAIN_IDS.includes(chainId as SteerChainId)

export const STEER_PERIPHERY_ADDRESS: Record<SteerChainId, `0x${string}`> = {
  [ChainId.BASE]: '0x16BA7102271dC83Fff2f709691c2B601DAD7668e',
  [ChainId.BSC]: '0xe240B9a2936f6Fb8860219bC059349e50F03492e',
}
