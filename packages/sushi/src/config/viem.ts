import { http, type PublicClientConfig } from 'viem'
import { base, bsc, hardhat, mainnet } from 'viem/chains'
import { ChainId, TestnetChainId } from '../chain/index.js'

export { base, bsc, hardhat, mainnet }

// const alchemyId =
//   process.env['ALCHEMY_ID'] || process.env['NEXT_PUBLIC_ALCHEMY_ID']
const drpcId = process.env['DRPC_ID'] || process.env['NEXT_PUBLIC_DRPC_ID']

export const publicClientConfig: Record<
  Exclude<ChainId, TestnetChainId>,
  PublicClientConfig
> = {
  [ChainId.BASE]: {
    chain: base,
    transport: http(`https://lb.drpc.org/ogrpc?network=base&dkey=${drpcId}`),
  },
  [ChainId.BSC]: {
    chain: bsc,
    transport: http(`https://lb.drpc.org/ogrpc?network=bsc&dkey=${drpcId}`, {
      timeout: 120_000,
    }),
  },
  [ChainId.ETHEREUM]: {
    chain: mainnet,
    transport: http(
      // `https://lb.drpc.org/ogrpc?network=ethereum&dkey=${drpcId}`,
      `https://eth.llamarpc.com`,
      {
        timeout: 120_000,
      },
    ),
  },
} as const

export const SpecialExtractorClientConfig: Record<
  typeof ChainId.BSC | typeof ChainId.ETHEREUM,
  PublicClientConfig
> = {
  [ChainId.BSC]: {
    chain: bsc,
    transport: http(`https://lb.drpc.org/ogrpc?network=bsc&dkey=${drpcId}`, {
      timeout: 120_000,
    }),
  },
  [ChainId.ETHEREUM]: {
    chain: mainnet,
    transport: http(
      `https://lb.drpc.org/ogrpc?network=ethereum&dkey=${drpcId}`,
      {
        timeout: 120_000,
      },
    ),
  },
} as const
