'use client'

import { ChainId } from 'sushi/chain'
import { getContract } from 'viem'
import { Address, usePublicClient } from 'wagmi'

import { multicallAbi } from 'sushi/abi'

export const MULTICALL_ADDRESS: Record<number, string> = {
  [ChainId.ETHEREUM]: '0x1F98415757620B543A52E61c46B32eB19261F984',
  [ChainId.BSC]: '0x47A307e3167820daf22a377D777371753758f59c',
}

export const getMulticallContractConfig = (chainId: number | undefined) => ({
  address: (chainId && chainId in MULTICALL_ADDRESS
    ? MULTICALL_ADDRESS[chainId]
    : '') as Address,
  abi: multicallAbi,
})

export function useMulticallContract(chainId: number) {
  const publicClient = usePublicClient({ chainId })

  return getContract({
    ...getMulticallContractConfig(chainId),
    publicClient,
  })
}
