import { ChainId } from '../chain/index.js'

// v1
export const ROUTE_PROCESSOR_SUPPORTED_CHAIN_IDS = [
  ChainId.BSC,
  ChainId.ETHEREUM,
] as const
export type RouteProcessorChainId =
  (typeof ROUTE_PROCESSOR_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_ADDRESS: Record<
  RouteProcessorChainId,
  `0x${string}`
> = {
  [ChainId.BSC]: '0x7cf167390E2526Bc03F3CF6852A7AF1CEC3e243d',
  [ChainId.ETHEREUM]: '0x19dBa5df5383168f760617aaDD23322BC5F9Ff7b',
} as const
export const isRouteProcessorChainId = (
  chainId: ChainId,
): chainId is RouteProcessorChainId =>
  ROUTE_PROCESSOR_SUPPORTED_CHAIN_IDS.includes(chainId as RouteProcessorChainId)

// v2
export const ROUTE_PROCESSOR_2_SUPPORTED_CHAIN_IDS = [
  ChainId.BSC,
  ChainId.ETHEREUM,
] as const
export type RouteProcessor2ChainId =
  (typeof ROUTE_PROCESSOR_2_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_2_ADDRESS: Record<
  RouteProcessor2ChainId,
  `0x${string}`
> = {
  [ChainId.BSC]: '0xD75F5369724b513b497101fb15211160c1d96550',
  [ChainId.ETHEREUM]: '0x044b75f554b886A065b9567891e45c79542d7357',
} as const
export const isRouteProcessor2ChainId = (
  chainId: ChainId,
): chainId is RouteProcessor2ChainId =>
  ROUTE_PROCESSOR_2_SUPPORTED_CHAIN_IDS.includes(
    chainId as RouteProcessor2ChainId,
  )

// v3
export const ROUTE_PROCESSOR_3_SUPPORTED_CHAIN_IDS = [
  ChainId.BASE,
  ChainId.BSC,
  ChainId.ETHEREUM,
] as const
export type RouteProcessor3ChainId =
  (typeof ROUTE_PROCESSOR_3_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_3_ADDRESS: Record<
  RouteProcessor3ChainId,
  `0x${string}`
> = {
  [ChainId.BASE]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
  [ChainId.BSC]: '0x400d75dAb26bBc18D163AEA3e83D9Ea68F6c1804',
  [ChainId.ETHEREUM]: '0x827179dD56d07A7eeA32e3873493835da2866976',
} as const
export const isRouteProcessor3ChainId = (
  chainId: ChainId,
): chainId is RouteProcessor3ChainId =>
  ROUTE_PROCESSOR_3_SUPPORTED_CHAIN_IDS.includes(
    chainId as RouteProcessor3ChainId,
  )

// v3.1
export const ROUTE_PROCESSOR_3_1_SUPPORTED_CHAIN_IDS = [
  ChainId.BASE,
  // ChainId.BSC,
  ChainId.ETHEREUM,
] as const
export type RouteProcessor3_1ChainId =
  (typeof ROUTE_PROCESSOR_3_1_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_3_1_ADDRESS: Record<
  RouteProcessor3_1ChainId,
  `0x${string}`
> = {
  [ChainId.BASE]: '0x9B77032075806975B3bd3bcFc69E5DE36ee6D176',
  // [ChainId.BSC]: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
  [ChainId.ETHEREUM]: '0x8516944E89f296eb6473d79aED1Ba12088016c9e',
} as const
export const isRouteProcessor3_1ChainId = (
  chainId: ChainId,
): chainId is RouteProcessor3_1ChainId =>
  ROUTE_PROCESSOR_3_1_SUPPORTED_CHAIN_IDS.includes(
    chainId as RouteProcessor3_1ChainId,
  )

// v3.2
export const ROUTE_PROCESSOR_3_2_SUPPORTED_CHAIN_IDS = [
  ChainId.BASE,
  ChainId.BSC,
  ChainId.ETHEREUM,
] as const
export type RouteProcessor3_2ChainId =
  (typeof ROUTE_PROCESSOR_3_2_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_3_2_ADDRESS: Record<
  RouteProcessor3_2ChainId,
  `0x${string}`
> = {
  [ChainId.BASE]: '0x83eC81Ae54dD8dca17C3Dd4703141599090751D1',
  [ChainId.BSC]: '0xd36990D74b947eC4Ad9f52Fe3D49d14AdDB51E44',
  [ChainId.ETHEREUM]: '0x5550D13389bB70F45fCeF58f19f6b6e87F6e747d',
} as const
export const isRouteProcessor3_2ChainId = (
  chainId: ChainId,
): chainId is RouteProcessor3_2ChainId =>
  ROUTE_PROCESSOR_3_2_SUPPORTED_CHAIN_IDS.includes(
    chainId as RouteProcessor3_2ChainId,
  )

// v4
export const ROUTE_PROCESSOR_4_SUPPORTED_CHAIN_IDS = [
  ChainId.ETHEREUM,
  ChainId.BASE,
  ChainId.BSC,
] as const
export type RouteProcessor4ChainId =
  (typeof ROUTE_PROCESSOR_4_SUPPORTED_CHAIN_IDS)[number]
export const ROUTE_PROCESSOR_4_ADDRESS: Record<
  RouteProcessor4ChainId,
  `0x${string}`
> = {
  [ChainId.ETHEREUM]: '0xe43ca1Dee3F0fc1e2df73A0745674545F11A59F5',
  [ChainId.BASE]: '0x0389879e0156033202c44bf784ac18fc02edee4f',
  [ChainId.BSC]: '0x33d91116e0370970444B0281AB117e161fEbFcdD',
} as const
export const isRouteProcessor4ChainId = (
  chainId: ChainId,
): chainId is RouteProcessor4ChainId =>
  ROUTE_PROCESSOR_4_SUPPORTED_CHAIN_IDS.includes(
    chainId as RouteProcessor4ChainId,
  )
