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

import { type GetPoolsArgs } from '@sushiswap/client'
import { usePools } from '@sushiswap/client/hooks'

export const SimpleSwapWidget = () => {
  // const {
  //   state: { token0, token1, chainId },
  // } = useDerivedStateSimpleSwap()

  // const args = useMemo<GetPoolsArgs>(() => {
  //   console.log('aaaaaaaaaaaa', chainId, token0, token1)
  //   if (token0?.symbol && token1?.symbol)
  //     return {
  //       chainIds: [chainId],
  //       tokenSymbols: [token0?.symbol, token1?.symbol],
  //       isWhitelisted: true,
  //     }
  //   else return undefined
  // }, [token0, token1, chainId])

  // const { data: pools } = usePools({ args, shouldFetch: true })
  // console.log('aaaaaaaaaaab', pools)
  // const { pool } = useMemo(() => {
  //   return {
  //     pool:
  //       pools
  //         ?.flat()
  //         .filter(
  //           (pool) =>
  //             (pool.token0.symbol === token0?.symbol &&
  //               pool.token1.symbol === token1?.symbol) ||
  //             (pool.token1.symbol === token0?.symbol &&
  //               pool.token0.symbol === token1?.symbol),
  //         )
  //         .at(0) || undefined,
  //   }
  // }, [pools, token0, token1])
  // console.log('aaaaaaaaaaac', pool)

  return (
    <div className="flex flex-col gap-4">
      <SimpleSwapHeader />
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
