import { ChainId } from 'sushi/chain'

export async function getStrategies() {
  const { getBuiltGraphSDK } = await import('@sushiswap/graph-client')
  const sdk = getBuiltGraphSDK()

  const { crossChainStrategyKpis: data } = await sdk.CrossChainStrategyKpis({
    chainIds: [ChainId.ETHEREUM, ChainId.BSC],
  })

  return data
}
