import { ChainId } from '../chain/index.js'

export const TRIDENT_STABLE_POOL_FACTORY_ADDRESS = {
  [ChainId.BSC]: '0xA4C0363edD74F55AC8f316a3Bf447F8aa09607D3',
  [ChainId.ETHEREUM]: '0xC040F84Cf7046409f92d578eF9040fE45E6ef4be',
} as const

export const TRIDENT_CONSTANT_POOL_FACTORY_ADDRESS = {
  [ChainId.BSC]: '0x3D2f8ae0344d38525d2AE96Ab750B83480c0844F',
  [ChainId.ETHEREUM]: '0xD75F5369724b513b497101fb15211160c1d96550',
} as const

export const TRIDENT_ROUTER_ADDRESS = {
  [ChainId.BSC]: '0x97a32B4f8486735075f2cBEcff64208fBF2e610A',
  [ChainId.ETHEREUM]: '0xDdC1b5920723F774d2Ec2C3c9355251A20819776',
} as const

export const TRIDENT_SUPPORTED_CHAIN_IDS = [ChainId.BSC]

export const TridentChainIds = TRIDENT_SUPPORTED_CHAIN_IDS

export type TridentChainId = (typeof TRIDENT_SUPPORTED_CHAIN_IDS)[number]

export const isTridentChainId = (chainId: ChainId): chainId is TridentChainId =>
  TRIDENT_SUPPORTED_CHAIN_IDS.includes(chainId as TridentChainId)
