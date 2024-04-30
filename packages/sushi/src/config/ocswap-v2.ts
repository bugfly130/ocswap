import { ChainId } from '../chain/index.js'

export const OCSWAP_V2_SUPPORTED_CHAIN_IDS = [ChainId.BASE]

export const OcSwapV2ChainIds = OCSWAP_V2_SUPPORTED_CHAIN_IDS

export type OcSwapV2ChainId = (typeof OCSWAP_V2_SUPPORTED_CHAIN_IDS)[number]

export const isOcSwapV2ChainId = (
  chainId: ChainId,
): chainId is OcSwapV2ChainId =>
  OCSWAP_V2_SUPPORTED_CHAIN_IDS.includes(chainId as OcSwapV2ChainId)

export const OCSWAP_V2_INIT_CODE_HASH: Record<OcSwapV2ChainId, `0x${string}`> =
  {
    [ChainId.BASE]:
      '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  }

export const OCSWAP_V2_FACTORY_ADDRESS: Record<OcSwapV2ChainId, `0x${string}`> =
  {
    [ChainId.BASE]: '0xBe516583f0fE612A74fc37eeEF285B1Fb109927a',
  }

export const OCSWAP_V2_ROUTER_ADDRESS: Record<OcSwapV2ChainId, `0x${string}`> =
  {
    [ChainId.BASE]: '0x4FeC265a0c5D9F07662CA8779A0e5d96Ba677183',
  }
