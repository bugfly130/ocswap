'use client'

import { useDerivedStateSimpleSwap } from './derivedstate-simple-swap-provider'

import React, { useMemo } from 'react'

import { type GetPoolsArgs } from '@sushiswap/client'
import { usePools } from '@sushiswap/client/hooks'
import { Native } from 'sushi/currency'

import { ChainId } from 'sushi/chain'
import { PoolInfoChart } from './simple-swap-pool-chart'
import { PoolInfoLiquidity } from './simple-swap-pool-info-liquidity'
import { PoolInfoMarketCap } from './simple-swap-pool-info-marketcap'
import { PoolInfoVolume } from './simple-swap-pool-info-volume'

export const SimpleSwapPoolInfo = () => {
  const {
    state: { token0, token1, chainId },
  } = useDerivedStateSimpleSwap()

  const args = useMemo<GetPoolsArgs>(() => {
    if (token0?.symbol && token1?.symbol)
      return {
        chainIds: [chainId],
        tokenSymbols: [token0?.symbol, token1?.symbol],
        isWhitelisted: true,
      }
    else return undefined
  }, [token0, token1, chainId])

  const { data: pools } = usePools({ args, shouldFetch: true })

  const pool = useMemo(() => {
    const foundP = pools?.flat().find((p) => {
      const [_token0, _token1] = [
        Native.onChain(chainId).wrapped.address.toLowerCase() ===
        p.token0.address.toLowerCase()
          ? Native.onChain(chainId)
          : p.token0,
        Native.onChain(chainId).wrapped.address.toLowerCase() ===
        p.token1.address.toLowerCase()
          ? Native.onChain(chainId)
          : p.token1,
      ]
      if (
        (token0?.symbol === _token0.symbol &&
          token1?.symbol === _token1.symbol) ||
        (token1?.symbol === _token0.symbol && token0?.symbol === _token1.symbol)
      ) {
        return true // Return true to include the current element in the foundP result
      }
    })

    return foundP
  }, [pools, token0, token1, chainId])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div
          className="flex flex-col flex-1 gap-2 p-4 rounded-xl min-w-[180px]"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(35px)',
          }}
        >
          {pool ? <PoolInfoLiquidity pool={pool} /> : ''}
        </div>
        <div
          className="flex flex-col flex-1 gap-2 p-4 rounded-xl min-w-[180px]"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(35px)',
          }}
        >
          {pool ? <PoolInfoMarketCap pool={pool} /> : ''}
        </div>
        <div
          className="flex flex-col flex-1 gap-2 p-4 rounded-xl min-w-[180px]"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(35px)',
          }}
        >
          {pool ? <PoolInfoVolume pool={pool} /> : ''}
        </div>
      </div>
      <div className="flex flex-col">
        {pool ? (
          <PoolInfoChart
            address={pool.address}
            chainId={pool.chainId as ChainId}
          />
        ) : (
          ''
        )}
        {/* <div className="flex flex-row">
          <h3>Overview Statstic</h3>
        </div>
        <div className="mt-10">a</div> */}
      </div>
    </div>
  )
}
