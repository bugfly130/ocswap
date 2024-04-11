'use client'

import { useDerivedStateSimpleSwap } from './derivedstate-simple-swap-provider'

import React, { useMemo } from 'react'
import { formatUSD } from 'sushi/format'

import { type GetPoolsArgs } from '@sushiswap/client'
import { usePools } from '@sushiswap/client/hooks'
import { Currency } from '@sushiswap/ui/components/currency'
import { Native, Token } from 'sushi/currency'

export const SimpleSwapPoolInfo = () => {
  const {
    state: { token0, token1, chainId },
    isLoading,
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
    <div className="flex flex-col">
      <div className="flex flex-row gap-6">
        <div
          className="flex flex-col flex-1 gap-6 p-4 rounded-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(35px)',
          }}
        >
          {!isLoading ? (
            <div className="gap-4">
              <div className="flex gap-2">
                {/* <Currency.IconList iconWidth={26} iconHeight={26}>
                  {pool?.token0 ? (
                    <Currency.Icon currency={pool?.token0} />
                  ) : null}
                  {token1 ? <Currency.Icon currency={token1} /> : null}
                </Currency.IconList> */}
                <span className="text-sm text-gray-400">
                  {token0?.symbol}/{token1?.symbol}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-lg text-slate-50">
                  {pool?.volumeUSD ? formatUSD(pool?.volume1d) : 'N/A'}
                </span>
              </div>
            </div>
          ) : (
            <div>a</div>
          )}
        </div>
        <div
          className="flex flex-col items-center flex-1 gap-6 p-6 rounded-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(35px)',
          }}
        >
          a
        </div>
        <div
          className="flex flex-col items-center flex-1 gap-6 p-6 rounded-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(35px)',
          }}
        >
          b
        </div>
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
