import { get } from '@vercel/edge-config'

interface CrossChainSwapEdgeConfig {
  maintenance: boolean
}

const getCrossChainSwapEdgeConfig = async () => {
  return { maintenance: true } //get<CrossChainSwapEdgeConfig>('xswap')
}

export { type CrossChainSwapEdgeConfig, getCrossChainSwapEdgeConfig }
