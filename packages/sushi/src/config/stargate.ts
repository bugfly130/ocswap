import { ChainId } from '../chain/index.js'
import {
  BUSD,
  BUSD_ADDRESS,
  DAI,
  DAI_ADDRESS,
  FRAX,
  FRAX_ADDRESS,
  MAI,
  MAI_ADDRESS,
  Token,
  Type,
  USDC,
  USDC_ADDRESS,
  USDT,
  USDT_ADDRESS,
} from '../currency/index.js'

export const STARGATE_CHAIN_ID = {
  [ChainId.ETHEREUM]: 101,
  [ChainId.BSC]: 102,
  [ChainId.BASE]: 184,
} as const

export const STARGATE_WIDGET_ADDRESS = {
  [ChainId.ETHEREUM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.BSC]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.BASE]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
} as const

export const STARGATE_COMPOSER_ADDRESS = {
  [ChainId.ETHEREUM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.BSC]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.BASE]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
} as const

export const STARGATE_ETH_ADDRESS = {
  [ChainId.ETHEREUM]: '0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c',
  [ChainId.BASE]: '0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03',
} as const

export const STARGATE_ETH: Record<keyof typeof STARGATE_ETH_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: new Token({
    chainId: ChainId.ETHEREUM,
    address: STARGATE_ETH_ADDRESS[ChainId.ETHEREUM],
    decimals: 18,
    symbol: 'SGETH',
    name: 'Stargate Ether',
  }),
  [ChainId.BASE]: new Token({
    chainId: ChainId.BASE,
    address: STARGATE_ETH_ADDRESS[ChainId.BASE],
    decimals: 18,
    symbol: 'SGETH',
    name: 'Stargate Ether',
  }),
}

export const STARGATE_WETH_ADDRESS = {}

export const STARGATE_WETH = {}

export const STARGATE_WBTC_ADDRESS = {}

export const STARGATE_WBTC = {}

export const STARGATE_USDC_ADDRESS = {
  [ChainId.ETHEREUM]: USDC_ADDRESS[ChainId.ETHEREUM],
  [ChainId.BASE]: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
} as const

export const STARGATE_USDC: Record<keyof typeof STARGATE_USDC_ADDRESS, Token> =
  {
    [ChainId.ETHEREUM]: USDC[ChainId.ETHEREUM],
    [ChainId.BASE]: new Token({
      chainId: ChainId.BASE,
      address: STARGATE_USDC_ADDRESS[ChainId.BASE],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
  } as const

export const STARGATE_USDT_ADDRESS = {
  [ChainId.ETHEREUM]: USDT_ADDRESS[ChainId.ETHEREUM],
  [ChainId.BSC]: USDT_ADDRESS[ChainId.BSC],
} as const

export const STARGATE_USDT: Record<keyof typeof STARGATE_USDT_ADDRESS, Token> =
  {
    [ChainId.ETHEREUM]: USDT[ChainId.ETHEREUM],
    [ChainId.BSC]: USDT[ChainId.BSC],
  } as const

export const STARGATE_DAI_ADDRESS = {
  [ChainId.ETHEREUM]: DAI_ADDRESS[ChainId.ETHEREUM],
} as const

export const STARGATE_DAI: Record<keyof typeof STARGATE_DAI_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: DAI[ChainId.ETHEREUM],
} as const

export const STARGATE_FRAX_ADDRESS = {
  [ChainId.ETHEREUM]: FRAX_ADDRESS[ChainId.ETHEREUM],
} as const

export const STARGATE_FRAX: Record<keyof typeof STARGATE_FRAX_ADDRESS, Token> =
  {
    [ChainId.ETHEREUM]: FRAX[ChainId.ETHEREUM],
  }

export const STARGATE_BUSD_ADDRESS = {
  [ChainId.BSC]: BUSD_ADDRESS[ChainId.BSC],
} as const

export const STARGATE_BUSD: Record<keyof typeof STARGATE_BUSD_ADDRESS, Token> =
  {
    [ChainId.BSC]: BUSD[ChainId.BSC],
  }

export const STARGATE_MAI_ADDRESS = {
  [ChainId.ETHEREUM]: MAI_ADDRESS[ChainId.ETHEREUM],
  [ChainId.BSC]: MAI_ADDRESS[ChainId.BSC],
} as const

export const STARGATE_MAI: Record<keyof typeof STARGATE_MAI_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: MAI[ChainId.ETHEREUM],
  [ChainId.BSC]: MAI[ChainId.BSC],
}

export const STARGATE_BRIDGE_TOKENS: Record<number, Token[]> = {
  [ChainId.ETHEREUM]: [
    STARGATE_ETH[ChainId.ETHEREUM],
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_DAI[ChainId.ETHEREUM],
    STARGATE_FRAX[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.ETHEREUM],
  ],
  [ChainId.BSC]: [
    STARGATE_USDT[ChainId.BSC],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_MAI[ChainId.BSC],
  ],
  [ChainId.BASE]: [STARGATE_ETH[ChainId.BASE], STARGATE_USDC[ChainId.BASE]],
}

export const STARGATE_BRIDGE_TOKEN_ADDRESSES: Record<number, string[]> = {
  [ChainId.ETHEREUM]: [
    STARGATE_ETH_ADDRESS[ChainId.ETHEREUM],
    STARGATE_USDC_ADDRESS[ChainId.ETHEREUM],
    STARGATE_USDT_ADDRESS[ChainId.ETHEREUM],
    STARGATE_DAI_ADDRESS[ChainId.ETHEREUM],
    STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM],
    STARGATE_MAI_ADDRESS[ChainId.ETHEREUM],
  ],
  [ChainId.BSC]: [
    STARGATE_USDT_ADDRESS[ChainId.BSC],
    STARGATE_BUSD_ADDRESS[ChainId.BSC],
    STARGATE_MAI_ADDRESS[ChainId.BSC],
  ],
  [ChainId.BASE]: [
    STARGATE_ETH_ADDRESS[ChainId.BASE],
    STARGATE_USDC_ADDRESS[ChainId.BASE],
  ],
}

export const STARGATE_POOL_ID: Record<number, Record<string, number>> = {
  [ChainId.ETHEREUM]: {
    [STARGATE_ETH_ADDRESS[ChainId.ETHEREUM]]: 13,
    [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]]: 2,
    [STARGATE_DAI_ADDRESS[ChainId.ETHEREUM]]: 3,
    [STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM]]: 7,
    [STARGATE_MAI_ADDRESS[ChainId.ETHEREUM]]: 16,
  },
  [ChainId.BSC]: {
    [STARGATE_USDT_ADDRESS[ChainId.BSC]]: 2,
    [STARGATE_BUSD_ADDRESS[ChainId.BSC]]: 5,
    [STARGATE_MAI_ADDRESS[ChainId.BSC]]: 16,
  },
  [ChainId.BASE]: {
    [STARGATE_ETH_ADDRESS[ChainId.BASE]]: 13,
    [STARGATE_USDC_ADDRESS[ChainId.BASE]]: 1,
  },
}

export const STARGATE_POOL_ADDRESS: Record<number, Record<string, string>> = {
  [ChainId.ETHEREUM]: {
    [STARGATE_ETH_ADDRESS[ChainId.ETHEREUM]]:
      '0x101816545F6bd2b1076434B54383a1E633390A2E',
    [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM]]:
      '0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56',
    [STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]]:
      '0x38ea452219524bb87e18de1c24d3bb59510bd783',
    [STARGATE_DAI_ADDRESS[ChainId.ETHEREUM]]:
      '0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d',
    [STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM]]:
      '0xfA0F307783AC21C39E939ACFF795e27b650F6e68',
    [STARGATE_MAI_ADDRESS[ChainId.ETHEREUM]]:
      '0x9cef9a0b1be0d289ac9f4a98ff317c33eaa84eb8',
  },
  [ChainId.BSC]: {
    [STARGATE_USDT_ADDRESS[ChainId.BSC]]:
      '0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda',
    [STARGATE_BUSD_ADDRESS[ChainId.BSC]]:
      '0x98a5737749490856b401DB5Dc27F522fC314A4e1',
    [STARGATE_MAI_ADDRESS[ChainId.BSC]]:
      '0x7BfD7f2498C4796f10b6C611D9db393D3052510C',
  },
  [ChainId.BASE]: {
    [STARGATE_ETH_ADDRESS[ChainId.BASE]]:
      '0x28fc411f9e1c480AD312b3d9C60c22b965015c6B',
    [STARGATE_USDC_ADDRESS[ChainId.BASE]]:
      '0x4c80e24119cfb836cdf0a6b53dc23f04f7e652ca',
  },
}

export function isStargateBridgeToken(currency: Type | undefined) {
  if (!currency) return false
  if (currency.isNative && currency.chainId in STARGATE_ETH_ADDRESS) return true
  if (!STARGATE_BRIDGE_TOKEN_ADDRESSES[currency.chainId]) return false
  return STARGATE_BRIDGE_TOKEN_ADDRESSES?.[currency.chainId]?.includes(
    currency.wrapped.address,
  )
}

export const STARGATE_TOKEN = new Token({
  chainId: ChainId.ETHEREUM,
  address: '0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6',
  decimals: 18,
  symbol: 'STG',
  name: 'StargateToken',
})

export type StargateBridgeTokens =
  (typeof STARGATE_BRIDGE_TOKENS)[StargateChainId]

export type StargateBridgeToken = StargateBridgeTokens[number]

export const STARGATE_SUPPORTED_CHAIN_IDS = [
  ChainId.ETHEREUM,
  ChainId.BSC,
  ChainId.BASE,
] as const

export type StargateChainId = (typeof STARGATE_SUPPORTED_CHAIN_IDS)[number]

// https://stargateprotocol.gitbook.io/stargate/developers/stargate-chain-paths

const ETHEREUM_CHAIN_PATHS = {
  [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM]]: [
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]]: [
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_DAI_ADDRESS[ChainId.ETHEREUM]]: [],
  [STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM]]: [],
  [STARGATE_ETH_ADDRESS[ChainId.ETHEREUM]]: [STARGATE_ETH[ChainId.BASE]],
  [STARGATE_MAI_ADDRESS[ChainId.ETHEREUM]]: [STARGATE_MAI[ChainId.BSC]],
}

const BSC_CHAIN_PATHS = {
  [STARGATE_BUSD_ADDRESS[ChainId.BSC]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_USDT_ADDRESS[ChainId.BSC]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_MAI_ADDRESS[ChainId.BSC]]: [STARGATE_MAI[ChainId.ETHEREUM]],
}

const BASE_CHAIN_PATHS = {
  [STARGATE_USDC_ADDRESS[ChainId.BASE]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.BSC],
  ],
  [STARGATE_ETH_ADDRESS[ChainId.BASE]]: [STARGATE_ETH[ChainId.ETHEREUM]],
}

export const STARGATE_CHAIN_PATHS: Record<
  StargateChainId,
  Record<`0x${string}`, Token[]>
> = {
  [ChainId.ETHEREUM]: ETHEREUM_CHAIN_PATHS,
  [ChainId.BSC]: BSC_CHAIN_PATHS,
  [ChainId.BASE]: BASE_CHAIN_PATHS,
}
