import type { Chain } from '@wagmi/core'
import { bsc, hardhat, localhost, mainnet } from '@wagmi/core/chains'
import { ChainId } from 'sushi/chain'

export const defaultChains: Chain[] = [bsc, hardhat, localhost, mainnet]

export const otherChains: Chain[] = [
  {
    id: ChainId.BSC,
    name: 'Binance Smart Chain',
    network: 'bsc',
    nativeCurrency: {
      name: 'Binance Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://bsc-dataseed1.binance.org'],
      },
      public: {
        http: ['https://bsc-dataseed1.binance.org'],
      },
    },
    blockExplorers: {
      etherscan: {
        name: 'Bscscan',
        url: 'https://bscscan.com',
      },
      default: {
        name: 'Bscscan',
        url: 'https://bscscan.com',
      },
    },
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 15921452,
      },
    },
  },
  {
    id: ChainId.BASE,
    name: 'Base',
    network: 'base',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://developer-access-mainnet.base.org'],
      },
      public: {
        http: ['https://developer-access-mainnet.base.org'],
      },
    },
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 5022,
      },
    },
  },
]

export const allChains = [...defaultChains, ...otherChains]
