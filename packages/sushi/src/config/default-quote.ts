import { ChainId } from '../chain/index.js'
import { BUSD, OCS, SUSHI } from '../currency/index.js'

export const defaultQuoteCurrency = {
  [ChainId.ETHEREUM]: SUSHI[ChainId.ETHEREUM],
  [ChainId.BSC]: BUSD[ChainId.BSC],
  [ChainId.BASE]: OCS[ChainId.BASE],
} as const
