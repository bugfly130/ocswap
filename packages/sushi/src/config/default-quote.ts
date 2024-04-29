import { ChainId } from '../chain/index.js'
import { BUSD, SUSHI, axlUSDC } from '../currency/index.js'

export const defaultQuoteCurrency = {
  [ChainId.ETHEREUM]: SUSHI[ChainId.ETHEREUM],
  [ChainId.BSC]: BUSD[ChainId.BSC],
  [ChainId.BASE]: axlUSDC[ChainId.BASE],
} as const
