export default [
  {
    chainId: 1,
    explorers: [
      {
        name: 'etherscan',
        url: 'https://etherscan.io',
        standard: 'EIP3091',
      },
      {
        name: 'blockscout',
        url: 'https://eth.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091',
      },
      {
        name: 'dexguru',
        url: 'https://ethereum.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091',
      },
    ],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    name: 'Ethereum Mainnet',
    shortName: 'eth',
  },
  {
    chainId: 56,
    explorers: [
      {
        name: 'bscscan',
        url: 'https://bscscan.com',
        standard: 'EIP3091',
      },
      {
        name: 'dexguru',
        url: 'https://bnb.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091',
      },
    ],
    nativeCurrency: {
      name: 'BNB Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    name: 'BNB Smart Chain Mainnet',
    shortName: 'bnb',
  },
  {
    chainId: 8453,
    explorers: [
      {
        name: 'basescan',
        url: 'https://basescan.org',
        standard: 'none',
      },
      {
        name: 'basescout',
        url: 'https://base.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091',
      },
      {
        name: 'dexguru',
        url: 'https://base.dex.guru',
        icon: 'dexguru',
        standard: 'EIP3091',
      },
    ],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    name: 'Base',
    shortName: 'base',
  },
] as const
