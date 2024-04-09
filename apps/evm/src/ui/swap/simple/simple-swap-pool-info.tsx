'use client'

import React, { useMemo } from 'react'
import { formatUSD } from 'sushi/format'
import { useDerivedStateSimpleSwap } from './derivedstate-simple-swap-provider'

import { type GetPoolsArgs } from '@sushiswap/client'
import { usePools } from '@sushiswap/client/hooks'

export const SimpleSwapPoolInfo = () => {
  const {
    state: { token0, token1, chainId },
  } = useDerivedStateSimpleSwap()

  // console.log('aaaaaaaaaaaa', token0?.symbol, token1?.symbol)

  const args = useMemo<GetPoolsArgs>(() => {
    console.log('aaaaaaaaaaaa', chainId, token0, token1)
    if (token0?.symbol && token1?.symbol)
      return {
        chainIds: [chainId],
        tokenSymbols: [token0?.symbol, token1?.symbol],
        isWhitelisted: false,
      }
    else return undefined
  }, [token0, token1, chainId])

  const { data: pools } = usePools({ args, shouldFetch: true })
  console.log('aaaaaaaaaaab', pools)
  const { pool } = useMemo(() => {
    return {
      pool:
        pools
          ?.flat()
          .filter(
            (pool) =>
              (pool.token0.symbol === token0?.symbol &&
                pool.token1.symbol === token1?.symbol) ||
              (pool.token1.symbol === token0?.symbol &&
                pool.token0.symbol === token1?.symbol),
          )
          .at(0) || undefined,
    }
  }, [pools, token0, token1])

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-6">
        <span className="text-lg text-slate-50">
          {token0?.symbol}/{token1?.symbol}
        </span>
        <span className="text-sm text-slate-50">
          {pool?.volumeUSD ? formatUSD(pool?.volumeUSD) : 'N/A'}
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h3>Overview Statstic</h3>
          {/*Period Toggle Button*/}
        </div>
        <div className="mt-10">a</div>
      </div>
    </div>
  )
}
