'use client'

import { useMemo } from 'react'
import { uniswapV2PairAbi } from 'sushi/abi'
import {
  OCSWAP_V2_FACTORY_ADDRESS,
  OcSwapV2ChainId,
  isOcSwapV2ChainId,
} from 'sushi/config'
import { Amount, Currency, Token, Type } from 'sushi/currency'
import { OcSwapV2Pool, computeOcSwapV2PoolAddress } from 'sushi/pool'
import { Address, useContractReads } from 'wagmi'

type UseContractReadsConfig = Parameters<typeof useContractReads>['0']

export enum OcSwapV2PoolState {
  LOADING = 'Loading',
  NOT_EXISTS = 'Not Exists',
  EXISTS = 'Exists',
  INVALID = 'Invalid',
}

function getOcSwapV2Pools(
  chainId: OcSwapV2ChainId | undefined,
  currencies: [Currency | undefined, Currency | undefined][],
) {
  const filtered = currencies.filter(
    (currencies): currencies is [Type, Type] => {
      const [currencyA, currencyB] = currencies
      return Boolean(
        currencyA &&
          currencyB &&
          currencyA.chainId === currencyB.chainId &&
          !currencyA.wrapped.equals(currencyB.wrapped) &&
          isOcSwapV2ChainId(currencyA.chainId),
      )
    },
  )

  const [tokensA, tokensB] = filtered.reduce<[Token[], Token[]]>(
    (acc, [currencyA, currencyB]) => {
      acc[0].push(currencyA.wrapped)
      acc[1].push(currencyB.wrapped)

      return acc
    },
    [[], []],
  )

  const contracts = filtered.map(([currencyA, currencyB]) => ({
    chainId,
    address: computeOcSwapV2PoolAddress({
      factoryAddress:
        OCSWAP_V2_FACTORY_ADDRESS[currencyA.chainId as OcSwapV2ChainId],
      tokenA: currencyA.wrapped,
      tokenB: currencyB.wrapped,
    }) as Address,
    abi: uniswapV2PairAbi,
    functionName: 'getReserves' as const,
  }))

  return [tokensA, tokensB, contracts] as const
}

interface UseOcSwapV2PoolsReturn {
  isLoading: boolean
  isError: boolean
  data: [OcSwapV2PoolState, OcSwapV2Pool | null][]
}

export function useOcSwapV2Pools(
  chainId: OcSwapV2ChainId | undefined,
  currencies: [Currency | undefined, Currency | undefined][],
  config?: Omit<NonNullable<UseContractReadsConfig>, 'contracts'>,
): UseOcSwapV2PoolsReturn {
  const [tokensA, tokensB, contracts] = useMemo(
    () => getOcSwapV2Pools(chainId, currencies),
    [chainId, currencies],
  )

  const { data, isLoading, isError } = useContractReads({
    contracts: contracts,
    enabled:
      config?.enabled !== undefined
        ? config.enabled && contracts.length > 0
        : contracts.length > 0,
    watch: !(typeof config?.enabled !== 'undefined' && !config?.enabled),
    select: (results) => results.map((r) => r.result),
  })
  return useMemo(() => {
    if (contracts.length === 0)
      return {
        isLoading,
        isError,
        data: [[OcSwapV2PoolState.INVALID, null]],
      }
    if (!data)
      return {
        isLoading,
        isError,
        data: contracts.map(() => [OcSwapV2PoolState.LOADING, null]),
      }

    return {
      isLoading,
      isError,
      data: data.map((result, i) => {
        const tokenA = tokensA[i]
        const tokenB = tokensB[i]
        if (!tokenA || !tokenB || tokenA.equals(tokenB))
          return [OcSwapV2PoolState.INVALID, null]
        if (!result) return [OcSwapV2PoolState.NOT_EXISTS, null]
        const [reserve0, reserve1] = result
        const [token0, token1] = tokenA.sortsBefore(tokenB)
          ? [tokenA, tokenB]
          : [tokenB, tokenA]
        return [
          OcSwapV2PoolState.EXISTS,
          new OcSwapV2Pool(
            Amount.fromRawAmount(token0, reserve0.toString()),
            Amount.fromRawAmount(token1, reserve1.toString()),
          ),
        ]
      }),
    }
  }, [contracts, data, isError, isLoading, tokensA, tokensB])
}

interface UseOcSwapV2PoolReturn {
  isLoading: boolean
  isError: boolean
  data: [OcSwapV2PoolState, OcSwapV2Pool | null]
}

export function useOcSwapV2Pool(
  chainId: OcSwapV2ChainId,
  tokenA?: Currency,
  tokenB?: Currency,
  config?: Omit<UseContractReadsConfig, 'contracts'>,
): UseOcSwapV2PoolReturn {
  const inputs: [[Currency | undefined, Currency | undefined]] = useMemo(
    () => [[tokenA, tokenB]],
    [tokenA, tokenB],
  )
  const { data, isLoading, isError } = useOcSwapV2Pools(chainId, inputs, config)

  return useMemo(
    () => ({
      isLoading,
      isError,
      data: data?.[0],
    }),
    [data, isError, isLoading],
  )
}
