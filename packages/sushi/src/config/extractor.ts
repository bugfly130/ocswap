import { ChainId } from '../chain/index.js'

export const EXTRACTOR_SUPPORTED_CHAIN_IDS = [
  ChainId.BASE,
  ChainId.BSC,
  ChainId.ETHEREUM,
] as const

export type ExtractorSupportedChainId =
  (typeof EXTRACTOR_SUPPORTED_CHAIN_IDS)[number]

export const isExtractorSupportedChainId = (
  chainId: number,
): chainId is ExtractorSupportedChainId =>
  EXTRACTOR_SUPPORTED_CHAIN_IDS.includes(chainId as ExtractorSupportedChainId)
