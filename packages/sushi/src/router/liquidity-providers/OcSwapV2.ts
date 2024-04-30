import { PublicClient } from 'viem'
import { ChainId } from '../../chain/index.js'
import {
  OCSWAP_V2_FACTORY_ADDRESS,
  OCSWAP_V2_INIT_CODE_HASH,
} from '../../config/index.js'
import { LiquidityProviders } from './LiquidityProvider.js'
import { UniswapV2BaseProvider } from './UniswapV2Base.js'

export class OcSwapV2Provider extends UniswapV2BaseProvider {
  constructor(chainId: ChainId, web3Client: PublicClient) {
    const factory = OCSWAP_V2_FACTORY_ADDRESS
    super(chainId, web3Client, factory, OCSWAP_V2_INIT_CODE_HASH)
  }
  getType(): LiquidityProviders {
    return LiquidityProviders.OcSwapV2
  }
  getPoolProviderName(): string {
    return 'OcSwapV2'
  }
}
