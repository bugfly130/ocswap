import { ChainId } from 'sushi/chain'
import { type Address } from 'viem'

export const FEE_DECIMALS = 100000

export const AuctionType = {
  Static: 'Static',
  Dynamic: 'Dynamic',
} as const

export const AuctionTypes = [AuctionType.Static, AuctionType.Dynamic] as const

export type AuctionType = (typeof AuctionType)[keyof typeof AuctionType]

export const VestingType = {
  'Fixed-Term': 'Fixed-Term',
} as const

export const VestingTypes = [VestingType['Fixed-Term']] as const

export type VestingType = (typeof VestingType)[keyof typeof VestingType]

export const BONDS_ENABLED_CHAIN_IDS = [
  ChainId.ETHEREUM,
] as const satisfies Readonly<ChainId[]>

export type BondChainId = (typeof BONDS_ENABLED_CHAIN_IDS)[number]

export const BONDS_SUBGRAPH_URL: Record<BondChainId, string> = {
  [ChainId.ETHEREUM]:
    'api.thegraph.com/subgraphs/name/bond-protocol/bond-protocol-mainnet',
}

export const isBondChainId = (chainId: ChainId): chainId is BondChainId =>
  BONDS_ENABLED_CHAIN_IDS.includes(chainId as BondChainId)

export const REFERRER_ADDRESS: Record<BondChainId, Address> = {
  [ChainId.ETHEREUM]: '0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7',
}
