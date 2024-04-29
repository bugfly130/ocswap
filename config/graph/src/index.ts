import { ChainId } from 'sushi/chain'

export const TRIDENT_ENABLED_NETWORKS = [ChainId.BSC] as const

export type TridentChainId = (typeof TRIDENT_ENABLED_NETWORKS)[number]

export const SUSHISWAP_ENABLED_NETWORKS = [
  ChainId.BSC,
  ChainId.ETHEREUM,
  ChainId.BASE,
] as const

export type SushiSwapChainId = (typeof SUSHISWAP_ENABLED_NETWORKS)[number]

export const SUSHISWAP_V3_ENABLED_NETWORKS = [
  ChainId.ETHEREUM,
  ChainId.BSC,
  ChainId.BASE,
]
export type SushiSwapV3ChainId = (typeof SUSHISWAP_V3_ENABLED_NETWORKS)[number]

export const SWAP_ENABLED_NETWORKS = Array.from(
  new Set([
    ...SUSHISWAP_ENABLED_NETWORKS,
    ...SUSHISWAP_V3_ENABLED_NETWORKS,
    ...TRIDENT_ENABLED_NETWORKS,
  ]),
)

export type SwapSupportedChainIds = typeof SWAP_ENABLED_NETWORKS
export type SwapSupportedChainId = SwapSupportedChainIds[number]

export const GRAPH_HOST = 'api.thegraph.com/subgraphs/name'
export const PENDING_GRAPH_HOST = 'api.thegraph.com/subgraphs/id'

export const KAVA_HOST = 'pvt.graph.kava.io/subgraphs/name'
export const PENDING_KAVA_HOST = 'pvt.graph.kava.io/subgraphs/id'

export const METIS_HOST = 'andromeda.thegraph.metis.io/subgraphs/name'
export const PENDING_METIS_HOST = 'andromeda.thegraph.metis.io/subgraphs/id'

export const FILECOIN_HOST = 'sushi.laconic.com/subgraphs/name'
export const STUDIO_HOST = 'api.studio.thegraph.com/query/32073'
export const THUNDERCORE_HOST = 'graph-node.thundercore.com/subgraphs/name'
export const CORE_HOST = 'thegraph.coredao.org/subgraphs/name'
export const LINEA_HOST = 'graph-query.linea.build/subgraphs/name'
export const HAQQ_HOST = 'haqq.graph.p2p.org/subgraphs/name'
export const ZETACHAIN_HOST =
  'api.goldsky.com/api/public/project_cls39ugcfyhbq01xl9tsf6g38/subgraphs'
export const BLAST_HOST =
  'api.goldsky.com/api/public/project_clslspm3c0knv01wvgfb2fqyq/subgraphs'

export const SUSHI_HOST = 'subgraphs.sushi.com/subgraphs/name'

export const CHAIN_NAME: Record<number, string> = {
  [ChainId.BSC]: 'Bsc',
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.BASE]: 'Base',
} as const

export const SUBGRAPH_HOST: Record<number, string> = {
  [ChainId.BSC]: GRAPH_HOST,
  [ChainId.ETHEREUM]: GRAPH_HOST,
  [ChainId.BASE]: STUDIO_HOST,
} as const

export const BENTOBOX_SUBGRAPH_NAME = {
  [ChainId.ETHEREUM]: 'sushiswap/bentobox-ethereum',
  [ChainId.BSC]: 'sushiswap/bentobox-bsc',
} as const

export const BENTOBOX_ENABLED_NETWORKS = Object.keys(
  BENTOBOX_SUBGRAPH_NAME,
).map(Number) as BentoBoxChainId[]

export type BentoBoxChainId = keyof typeof BENTOBOX_SUBGRAPH_NAME

export const BLOCKS_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.ETHEREUM]: 'blocklytics/ethereum-blocks',
  [ChainId.BSC]: 'matthewlilley/bsc-blocks',
  [ChainId.BASE]: 'blocks-base/v0.0.1',
} as const

export const SECONDS_BETWEEN_BLOCKS: Record<number, number> = {
  [ChainId.ETHEREUM]: 12,
  [ChainId.BSC]: 3,
} as const

export const EXCHANGE_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.BSC]: 'sushiswap/bsc-exchange',
  [ChainId.ETHEREUM]: 'sushiswap/exchange-ethereum',
} as const

export const SUSHISWAP_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.ETHEREUM]: 'sushi-v2/sushiswap-ethereum',
  [ChainId.BSC]: 'sushi-v2/sushiswap-bsc',
  [ChainId.BASE]: 'sushiswap-base/v0.0.1',
} as const

export const SUSHISWAP_V3_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.BSC]: 'sushi-v3/v3-bsc',
  [ChainId.ETHEREUM]: 'sushi-v3/v3-ethereum',
  [ChainId.BASE]: 'v3-base/v0.0.1',
}

export const TRIDENT_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.BSC]: 'sushi-v2/trident-bsc',
} as const

export const TRIDENT_SUBGRAPH_START_BLOCK: Record<
  keyof typeof TRIDENT_SUBGRAPH_NAME,
  number
> = {
  [ChainId.BSC]: 23136876,
} as const

export const MINICHEF_SUBGRAPH_NAME = {
  [ChainId.BSC]: 'sushiswap/minichef-bsc',
} as const

export const MASTERCHEF_V1_SUBGRAPH_NAME =
  'jiro-ono/masterchef-staging' as const
export const MASTERCHEF_V2_SUBGRAPH_NAME = 'sushiswap/master-chefv2' as const

export const FURO_ENABLED_NETWORKS = [ChainId.ETHEREUM, ChainId.BSC] as const

// TODO: Make typesafe
export const FURO_SUBGRAPH_NAME: Record<string, string> = {
  [ChainId.ETHEREUM]: 'sushi-subgraphs/furo-ethereum',
  [ChainId.BSC]: 'sushi-subgraphs/furo-bsc',
} as const

export const KASHI_SUBGRAPH_NAME: Record<number, string> = {} as const

export const CONCENTRATED_SUBGRAPH_NAME: Record<number, string> = {
  [ChainId.ETHEREUM]: 'uniswap/uniswap-v3',
}

export const STEER_ENABLED_NETWORKS = [ChainId.BSC, ChainId.BASE] as const

export type SteerChainId = (typeof STEER_ENABLED_NETWORKS)[number]

export const STEER_SUBGRAPH_URL: Record<SteerChainId, string> = {
  [ChainId.BSC]:
    'api.thegraph.com/subgraphs/name/steerprotocol/steer-protocol-bsc',
  [ChainId.BASE]:
    'subgraph.satsuma-prod.com/769a117cc018/steer/steer-protocol-base/api',
}

export const DEFAULT_CHAIN_ID = ChainId.ETHEREUM
export const DEFAULT_CHAIN_NAME = CHAIN_NAME[DEFAULT_CHAIN_ID]

export const isTridentChain = (chainId: ChainId): chainId is TridentChainId =>
  Object.keys(TRIDENT_SUBGRAPH_NAME).map(Number).includes(chainId)

export const isSushiSwapChain = (
  chainId: ChainId,
): chainId is SushiSwapChainId =>
  Object.keys(SUSHISWAP_SUBGRAPH_NAME).map(Number).includes(chainId)

export const isSushiSwapV3Chain = (
  chainId: ChainId,
): chainId is SushiSwapV3ChainId =>
  Object.keys(SUSHISWAP_V3_SUBGRAPH_NAME).map(Number).includes(chainId)
