import { ChainId } from '../chain/index.js'
import { Token } from '../currency/index.js'
import {
  BUSD,
  DAI,
  FRAX,
  LINK,
  MIM,
  OCS,
  OHM,
  SUSHI,
  USDC,
  USDT,
  WBTC,
  WETH9,
  WNATIVE,
  axlUSDC,
} from '../currency/index.js'

export const BASES_TO_CHECK_TRADES_AGAINST: {
  readonly [chainId: number]: Token[]
} = {
  [ChainId.ETHEREUM]: [
    WNATIVE[ChainId.ETHEREUM],
    WBTC[ChainId.ETHEREUM],
    USDC[ChainId.ETHEREUM],
    USDT[ChainId.ETHEREUM],
    DAI[ChainId.ETHEREUM],
    MIM[ChainId.ETHEREUM],
    FRAX[ChainId.ETHEREUM],
    OHM[ChainId.ETHEREUM],
    LINK[ChainId.ETHEREUM],
    SUSHI[ChainId.ETHEREUM],
  ],
  [ChainId.BSC]: [
    WNATIVE[ChainId.BSC],
    WETH9[ChainId.BSC],
    USDC[ChainId.BSC],
    USDT[ChainId.BSC],
    DAI[ChainId.BSC],
    BUSD[ChainId.BSC],
    new Token({
      chainId: ChainId.BSC,
      address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      decimals: 18,
      symbol: 'BTCB',
      name: 'Binance-Peg BTCB Token',
    }),
    new Token({
      chainId: ChainId.BSC,
      address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      decimals: 18,
      symbol: 'Cake',
      name: 'PancakeSwap Token',
    }),
  ],
  [ChainId.BASE]: [
    WNATIVE[ChainId.BASE],
    new Token({
      chainId: ChainId.BASE,
      address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
      decimals: 18,
      symbol: 'cbETH',
      name: 'Coinbase Wrapped Staked ETH',
    }),
    USDC[ChainId.BASE],
    new Token({
      chainId: ChainId.BASE,
      address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
      decimals: 6,
      symbol: 'USDbC',
      name: 'USD Base Coin',
    }),
    axlUSDC[ChainId.BASE],
    DAI[ChainId.BASE],
    OCS[ChainId.BASE],
  ],
}
