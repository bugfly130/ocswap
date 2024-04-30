import { ChainId, TESTNET_CHAIN_IDS } from 'sushi/chain'
import { EXTRACTOR_SUPPORTED_CHAIN_IDS, OcSwapV2ChainIds } from 'sushi/config'
import { Currency } from 'sushi/currency'

export const SWAP_API_ENABLED_NETWORKS = EXTRACTOR_SUPPORTED_CHAIN_IDS

export type SwapApiEnabledChainId = (typeof SWAP_API_ENABLED_NETWORKS)[number]
export const isSwapApiEnabledChainId = (
  chainId: number,
): chainId is SwapApiEnabledChainId =>
  SWAP_API_ENABLED_NETWORKS.includes(chainId as SwapApiEnabledChainId)

const PREFERRED_CHAINID_ORDER = [ChainId.BASE] as const

const OC_CHAIN_IDS = Array.from(new Set([...OcSwapV2ChainIds]))

export const CHAIN_IDS = [...OC_CHAIN_IDS] as const

export const SUPPORTED_CHAIN_IDS = Array.from(
  new Set([
    ...PREFERRED_CHAINID_ORDER.filter((el) =>
      CHAIN_IDS.includes(el as (typeof CHAIN_IDS)[number]),
    ),
    ...CHAIN_IDS,
  ]),
).filter(
  (
    c,
  ): c is Exclude<
    (typeof CHAIN_IDS)[number],
    (typeof TESTNET_CHAIN_IDS)[number]
  > => !TESTNET_CHAIN_IDS.includes(c as (typeof TESTNET_CHAIN_IDS)[number]),
)

export const DISABLED_ANALYTICS_CHAIN_IDS = []

export const ANALYTICS_CHAIN_IDS = [
  ...SUPPORTED_CHAIN_IDS.filter(
    (el) =>
      !DISABLED_ANALYTICS_CHAIN_IDS.includes(
        el as (typeof DISABLED_ANALYTICS_CHAIN_IDS)[number],
      ),
  ),
]

export type SupportedChainId = (typeof SUPPORTED_CHAIN_IDS)[number]
export const isSupportedChainId = (
  chainId: number,
): chainId is SupportedChainId =>
  SUPPORTED_CHAIN_IDS.includes(chainId as SupportedChainId)

export type Config = {
  [_chainId in SupportedChainId]: {
    stables: Currency[]
    lsds: Currency[]
  }
}
