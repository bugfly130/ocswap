import { ChainId } from '../chain/index.js'
import { Token } from '../currency/index.js'
import {
  APE_ADDRESS,
  FEI_ADDRESS,
  FRAX_ADDRESS,
  FXS_ADDRESS,
  KP3R_ADDRESS,
  LDO_ADDRESS,
  PRIMATE_ADDRESS,
  SUSHI_ADDRESS,
  SWISE_ADDRESS,
  TRIBE_ADDRESS,
  WBTC_ADDRESS,
  XSUSHI_ADDRESS,
  rETH2_ADDRESS,
  renBTC_ADDRESS,
} from '../currency/token-addresses.js'
import {
  AAVE,
  APE,
  COMP,
  CRV,
  ENJ,
  FEI,
  FRAX,
  FXS,
  GALA,
  KP3R,
  LDO,
  MKR,
  PRIMATE,
  SNX,
  SUSHI,
  TRIBE,
  WBTC,
  XSUSHI,
  YFI,
  renBTC,
  sETH2,
} from '../currency/tokens.js'

export const ADDITIONAL_BASES: {
  [chainId: number]: { [tokenAddress: string]: Token[] }
} = {
  [ChainId.ETHEREUM]: {
    [rETH2_ADDRESS[ChainId.ETHEREUM]]: [sETH2[ChainId.ETHEREUM]],
    [SWISE_ADDRESS[ChainId.ETHEREUM]]: [sETH2[ChainId.ETHEREUM]],
    [FEI_ADDRESS[ChainId.ETHEREUM]]: [TRIBE[ChainId.ETHEREUM]],
    [TRIBE_ADDRESS[ChainId.ETHEREUM]]: [FEI[ChainId.ETHEREUM]],
    [FRAX_ADDRESS[ChainId.ETHEREUM]]: [FXS[ChainId.ETHEREUM]],
    [FXS_ADDRESS[ChainId.ETHEREUM]]: [FRAX[ChainId.ETHEREUM]],
    [WBTC_ADDRESS[ChainId.ETHEREUM]]: [renBTC[ChainId.ETHEREUM]],
    [renBTC_ADDRESS[ChainId.ETHEREUM]]: [WBTC[ChainId.ETHEREUM]],
    [APE_ADDRESS[ChainId.ETHEREUM]]: [PRIMATE[ChainId.ETHEREUM]],
    [PRIMATE_ADDRESS[ChainId.ETHEREUM]]: [APE[ChainId.ETHEREUM]],
    [SUSHI_ADDRESS[ChainId.ETHEREUM]]: [XSUSHI[ChainId.ETHEREUM]],
    [XSUSHI_ADDRESS[ChainId.ETHEREUM]]: [SUSHI[ChainId.ETHEREUM]],
    [KP3R_ADDRESS[ChainId.ETHEREUM]]: [LDO[ChainId.ETHEREUM]],
    [LDO_ADDRESS[ChainId.ETHEREUM]]: [KP3R[ChainId.ETHEREUM]],
    ['0x1e0275806C3CD0bDb5C99916A064d36b5e8eAE8d']: [
      // TWO
      AAVE[ChainId.ETHEREUM],
      MKR[ChainId.ETHEREUM],
      SNX[ChainId.ETHEREUM],
      CRV[ChainId.ETHEREUM],
      YFI[ChainId.ETHEREUM],
      ENJ[ChainId.ETHEREUM],
      COMP[ChainId.ETHEREUM],
      GALA[ChainId.ETHEREUM],
      XSUSHI[ChainId.ETHEREUM],
    ],
  },
  [ChainId.BSC]: {
    [FRAX_ADDRESS[ChainId.BSC]]: [FXS[ChainId.BSC]],
    [FXS_ADDRESS[ChainId.BSC]]: [FRAX[ChainId.BSC]],
  },
}
