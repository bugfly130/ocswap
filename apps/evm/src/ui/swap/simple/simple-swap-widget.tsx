'use client'

import { SwapModeButtons } from '../swap-mode-buttons'
import { SimpleSwapSettingsOverlay } from './simple-swap-settings-overlay'
import { SimpleSwapSwitchTokensButton } from './simple-swap-switch-tokens-button'
import { SimpleSwapTokenNotFoundDialog } from './simple-swap-token-not-found-dialog'
import { SimpleSwapToken0Input } from './simple-swap-token0-input'
import { SimpleSwapToken1Input } from './simple-swap-token1-input'
import { SimpleSwapTradeButton } from './simple-swap-trade-button'
import { SimpleSwapTradeStats } from './simple-swap-trade-stats'
import { SwapMaintenanceMessage } from './swap-maintenance-message'

export const SimpleSwapWidget = () => {
  return (
    <div
      className="flex flex-col gap-2 p-4 rounded-xl max-w-[400px]"
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(35px)',
      }}
    >
      <div className="flex items-center justify-between">
        <SwapModeButtons />
        <SimpleSwapSettingsOverlay />
      </div>
      <SwapMaintenanceMessage />
      {/* <CrossChainBanner /> */}
      <SimpleSwapToken0Input />
      <SimpleSwapSwitchTokensButton />
      <SimpleSwapToken1Input />
      <SimpleSwapTradeStats />
      <SimpleSwapTokenNotFoundDialog />
      <SimpleSwapTradeButton />
    </div>
  )
}
