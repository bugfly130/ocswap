'use client'

import { useMemo } from 'react'
import { uniswapV2RouterAbi } from 'sushi/abi'
import { OCSWAP_V2_ROUTER_ADDRESS, OcSwapV2ChainId } from 'sushi/config'
import { WalletClient } from 'viem'
import { usePublicClient, useWalletClient } from 'wagmi'
import { getContract } from 'wagmi/actions'

export const getOcSwapRouterContractConfig = (chainId: OcSwapV2ChainId) => ({
  address: OCSWAP_V2_ROUTER_ADDRESS[chainId],
  abi: uniswapV2RouterAbi,
})

export function useOcSwapRouterContract(chainId: OcSwapV2ChainId | undefined) {
  const publicClient = usePublicClient({ chainId })
  const { data: walletClient } = useWalletClient({ chainId })

  return useMemo(() => {
    if (!chainId) return null

    return getContract({
      ...getOcSwapRouterContractConfig(chainId),
      walletClient: (walletClient as WalletClient) ?? publicClient,
    })
  }, [chainId, publicClient, walletClient])
}

export type OcSwapRouter = NonNullable<
  ReturnType<typeof useOcSwapRouterContract>
>
