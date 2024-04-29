import { ChainId } from '../chain/index.js'

export const SUSHISWAP_V2_SUPPORTED_CHAIN_IDS = [
  ChainId.BASE,
  ChainId.BSC,
  ChainId.ETHEREUM,
]

export const SushiSwapV2ChainIds = SUSHISWAP_V2_SUPPORTED_CHAIN_IDS

export type SushiSwapV2ChainId =
  (typeof SUSHISWAP_V2_SUPPORTED_CHAIN_IDS)[number]

export const isSushiSwapV2ChainId = (
  chainId: ChainId,
): chainId is SushiSwapV2ChainId =>
  SUSHISWAP_V2_SUPPORTED_CHAIN_IDS.includes(chainId as SushiSwapV2ChainId)

export const SUSHISWAP_V2_INIT_CODE_HASH: Record<
  SushiSwapV2ChainId,
  `0x${string}`
> = {
  [ChainId.ETHEREUM]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.BSC]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
  [ChainId.BASE]:
    '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303',
}

export const SUSHISWAP_V2_FACTORY_ADDRESS: Record<
  SushiSwapV2ChainId,
  `0x${string}`
> = {
  [ChainId.ETHEREUM]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac',
  [ChainId.BSC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BASE]: '0x71524B4f93c58fcbF659783284E38825f0622859',
}

export const SUSHISWAP_V2_ROUTER_ADDRESS: Record<
  SushiSwapV2ChainId,
  `0x${string}`
> = {
  [ChainId.ETHEREUM]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
  [ChainId.BSC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BASE]: '0x6BDED42c6DA8FBf0d2bA55B2fa120C5e0c8D7891',
}
