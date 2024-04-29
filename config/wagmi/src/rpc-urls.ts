import { ChainId } from 'sushi/chain'

const drpcId = process.env['DRPC_ID'] || process.env['NEXT_PUBLIC_DRPC_ID']
export const rpcUrls = {
  [ChainId.BASE]: [`https://lb.drpc.org/ogrpc?network=base&dkey=${drpcId}`],
  [ChainId.BSC]: [`https://lb.drpc.org/ogrpc?network=bsc&dkey=${drpcId}`],
  [ChainId.ETHEREUM]: [
    // `https://lb.drpc.org/ogrpc?network=ethereum&dkey=${drpcId}`,
    `https://eth.llamarpc.com`,
  ],
} as const

export type RpcEnabledChainId = keyof typeof rpcUrls
