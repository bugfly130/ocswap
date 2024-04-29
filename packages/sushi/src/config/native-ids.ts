import { ChainId } from '../chain/index.js'

export const nativeCurrencyIds = {
  [ChainId.ETHEREUM]: 'ETH',
  [ChainId.BSC]: 'BNB',
  [ChainId.BASE]: 'ETH',
} as const
