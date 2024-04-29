'use client'

import { ChefType } from '@sushiswap/client'
import { masterChefV1Abi, masterChefV2Abi, miniChefAbi } from 'sushi/abi'
import { ChainId } from 'sushi/chain'
import { getContract } from 'viem'
import { Address, usePublicClient } from 'wagmi'

// TODO move to package
export const MASTERCHEF_ADDRESS = {
  [ChainId.ETHEREUM]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
} as const

export const MASTERCHEF_V2_ADDRESS = {
  [ChainId.ETHEREUM]: '0xEF0881eC094552b2e128Cf945EF17a6752B4Ec5d',
} as const

export const MINICHEF_ADDRESS = {
  [ChainId.BSC]: '0x5219C5E32b9FFf87F29d5A833832c29134464aaa',
} as const

export const _getMasterChefContractConfig = (
  chainId: keyof typeof MASTERCHEF_ADDRESS,
) =>
  ({
    chainId,
    address: MASTERCHEF_ADDRESS[chainId] as Address,
    abi: masterChefV1Abi,
  }) as const

export const getMasterChefContractV2Config = (
  chainId: keyof typeof MASTERCHEF_V2_ADDRESS,
) =>
  ({
    chainId,
    address: MASTERCHEF_V2_ADDRESS[chainId] as Address,
    abi: masterChefV2Abi,
  }) as const

export const getMiniChefContractConfig = (
  chainId: keyof typeof MINICHEF_ADDRESS,
) => {
  return {
    chainId,
    address: MINICHEF_ADDRESS[chainId] as Address,
    abi: miniChefAbi,
  } as const
}

export const getMasterChefContractConfig = (
  chainId: number,
  chef: ChefType,
) => {
  if (chef === ChefType.MasterChefV1)
    return _getMasterChefContractConfig(
      chainId as keyof typeof MASTERCHEF_ADDRESS,
    )
  if (chef === ChefType.MasterChefV2)
    return getMasterChefContractV2Config(
      chainId as keyof typeof MASTERCHEF_V2_ADDRESS,
    )
  if (chef === ChefType.MiniChef)
    return getMiniChefContractConfig(chainId as keyof typeof MINICHEF_ADDRESS)
}

export function useMasterChefContract(chainId: number, chef: ChefType) {
  const publicClient = usePublicClient({ chainId })

  // @ts-ignore - Workaround for TS#4058
  return getContract({
    ...getMasterChefContractConfig(chainId, chef),
    publicClient,
  })
}
