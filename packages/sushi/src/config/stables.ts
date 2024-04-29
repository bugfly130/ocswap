import { ChainId } from '../chain/index.js'
import {
  BASE_BRIDGE_USDC,
  BUSD,
  DAI,
  FRAX,
  LUSD,
  MIM,
  USDC,
  USDT,
  USD_PLUS,
  axlUSDC,
} from '../currency/index.js'

export const STABLES = {
  [ChainId.BASE]: [
    USDC[ChainId.BASE],
    DAI[ChainId.BASE],
    axlUSDC[ChainId.BASE],
    USD_PLUS[ChainId.BASE],
    BASE_BRIDGE_USDC,
  ],
  [ChainId.BSC]: [
    USDC[ChainId.BSC],
    USDT[ChainId.BSC],
    BUSD[ChainId.BSC],
    DAI[ChainId.BSC],
    MIM[ChainId.BSC],
    FRAX[ChainId.BSC],
  ],
  [ChainId.ETHEREUM]: [
    USDC[ChainId.ETHEREUM],
    USDT[ChainId.ETHEREUM],
    DAI[ChainId.ETHEREUM],
    LUSD[ChainId.ETHEREUM],
    MIM[ChainId.ETHEREUM],
    FRAX[ChainId.ETHEREUM],
  ],
} as const
