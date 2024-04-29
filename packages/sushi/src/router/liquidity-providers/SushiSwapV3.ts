import { PublicClient } from 'viem'
import { ChainId } from '../../chain/index.js'
import { LiquidityProviders } from './LiquidityProvider.js'
import { UniswapV3BaseProvider } from './UniswapV3Base.js'

export class SushiSwapV3Provider extends UniswapV3BaseProvider {
  constructor(chainId: ChainId, web3Client: PublicClient) {
    const factory = {
      [ChainId.BSC]: '0x126555dd55a39328F69400d6aE4F782Bd4C34ABb',
      [ChainId.ETHEREUM]: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
      [ChainId.BASE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    } as const
    const initCodeHash = {
      [ChainId.BSC]:
        '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
      [ChainId.ETHEREUM]:
        '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
      [ChainId.BASE]:
        '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54',
    } as const

    const tickLens = {
      [ChainId.BSC]: '0x10c19390E1Ac2Fd6D0c3643a2320b0abA38E5bAA',
      [ChainId.ETHEREUM]: '0xFB70AD5a200d784E7901230E6875d91d5Fa6B68c',
      [ChainId.BASE]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
    } as const
    super(chainId, web3Client, factory, initCodeHash, tickLens)
  }
  getType(): LiquidityProviders {
    return LiquidityProviders.SushiSwapV3
  }
  getPoolProviderName(): string {
    return 'SushiSwapV3'
  }
}
