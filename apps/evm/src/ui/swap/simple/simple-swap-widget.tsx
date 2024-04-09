'use client'

import { CrossChainBanner } from '../cross-chain-banner'
import { SwapModeButtons } from '../swap-mode-buttons'
import { SimpleSwapHeader } from './simple-swap-header'
import { SimpleSwapSettingsOverlay } from './simple-swap-settings-overlay'
import { SimpleSwapSwitchTokensButton } from './simple-swap-switch-tokens-button'
import { SimpleSwapTokenNotFoundDialog } from './simple-swap-token-not-found-dialog'
import { SimpleSwapToken0Input } from './simple-swap-token0-input'
import { SimpleSwapToken1Input } from './simple-swap-token1-input'
import { SimpleSwapTradeButton } from './simple-swap-trade-button'
import { SimpleSwapTradeStats } from './simple-swap-trade-stats'
import { SwapMaintenanceMessage } from './swap-maintenance-message'

import React, { useMemo } from 'react'
import { formatUSD } from 'sushi/format'
import { useDerivedStateSimpleSwap } from './derivedstate-simple-swap-provider'

import { type GetPoolsArgs, getPools } from '@sushiswap/client'
import { usePools } from '@sushiswap/client/hooks'
import { Native } from 'sushi/currency'

export const SimpleSwapWidget = () => {
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
      <SimpleSwapHeader />
      <span className="text-slate-50">
        {pool?.name} Volume:
        {pool?.volumeUSD ? formatUSD(pool?.volume1d) : 'N/A'}
      </span>
      <div className="flex items-center justify-between">
        <SwapModeButtons />
        <SimpleSwapSettingsOverlay />
      </div>
      <SwapMaintenanceMessage />
      <CrossChainBanner />
      <SimpleSwapToken0Input />
      <SimpleSwapSwitchTokensButton />
      <div className="flex flex-col">
        <SimpleSwapToken1Input />
        <SimpleSwapTradeButton />
      </div>
      <SimpleSwapTradeStats />
      <SimpleSwapTokenNotFoundDialog />
    </div>
  )
}
