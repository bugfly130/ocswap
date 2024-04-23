'use client'

import { Explainer, SkeletonBox, classNames } from '@sushiswap/ui'
import { Address, useAccount } from '@sushiswap/wagmi'
import { AddressToEnsResolver } from '@sushiswap/wagmi/components/account/AddressToEnsResolver'
import React, { FC } from 'react'
import { Chain } from 'sushi/chain'
import { Native } from 'sushi/currency'
import { shortenAddress } from 'sushi/format'
import { ZERO } from 'sushi/math'
import { isAddress } from 'viem'
import {
  warningSeverity,
  warningSeverityClassName,
} from '../../../lib/swap/warningSeverity'
import { TradeRoutePathView } from '../trade-route-path-view'
import {
  useDerivedStateSimpleSwap,
  useFallback,
  useSimpleSwapTrade,
} from './derivedstate-simple-swap-provider'

export const SimpleSwapTradeStats: FC = () => {
  const { address } = useAccount()
  const {
    state: { chainId, recipient },
  } = useDerivedStateSimpleSwap()
  const { isInitialLoading: isLoading, data: trade } = useSimpleSwapTrade()
  const { isFallback } = useFallback(chainId)
  const loading = Boolean(isLoading && !trade?.writeArgs)

  return (
    <div
      className="flex flex-col w-full gap-1 p-2 text-gray-400 rounded-xl "
      style={{
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(35px)',
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm">Price impact</span>
        <span
          className={classNames(
            warningSeverityClassName(warningSeverity(trade?.priceImpact)),
            'text-sm font-semibold',
          )}
        >
          {loading || !trade?.priceImpact ? (
            <SkeletonBox className="h-4 py-0.5 w-[40px]" />
          ) : trade?.priceImpact ? (
            `${
              trade?.priceImpact?.lessThan(ZERO)
                ? '+'
                : trade?.priceImpact?.greaterThan(ZERO)
                  ? '-'
                  : ''
            }${Math.abs(Number(trade?.priceImpact?.toFixed(2)))}%`
          ) : null}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <span className="text-sm">Est. received</span>
        <span className="text-sm font-semibold">
          {loading || !trade?.amountOut ? (
            <SkeletonBox className="h-4 py-0.5 w-[120px]" />
          ) : (
            `${trade?.amountOut?.toSignificant(6) ?? '0.00'} ${
              trade?.amountOut?.currency?.symbol ?? ''
            }`
          )}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <span className="text-sm">Min. received</span>
        <span className="text-sm font-semibold">
          {loading || !trade?.minAmountOut ? (
            <SkeletonBox className="h-4 py-0.5 w-[100px]" />
          ) : (
            `${trade?.minAmountOut?.toSignificant(6) ?? '0.00'} ${
              trade?.amountOut?.currency?.symbol ?? ''
            }`
          )}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm">Network fee</span>
        <span className="text-sm font-semibold">
          {loading || !trade?.gasSpent || trade.gasSpent === '0' ? (
            <SkeletonBox className="h-4 py-0.5 w-[120px]" />
          ) : trade?.gasSpent ? (
            `${trade.gasSpent} ${Native.onChain(chainId).symbol}`
          ) : null}
        </span>
      </div>

      {/* <div className="flex items-center justify-between">
        <span className="text-sm">Routing source</span>
        <span className="text-sm font-semibold">
          {loading || !trade ? (
            <SkeletonBox className="h-4 py-0.5 w-[120px]" />
          ) : !isFallback ? (
            'SushiSwap API'
          ) : (
            'SushiSwap Client'
          )}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm">Route</span>
        <span className="text-sm font-semibold">
          {loading || !trade ? (
            <SkeletonBox className="h-4 py-0.5 w-[40px]" />
          ) : (
            <TradeRoutePathView trade={trade}>
              <button type="button" className="text-sm font-semibold text-blue">
                View
              </button>
            </TradeRoutePathView>
          )}
        </span>
      </div> */}
      {recipient && isAddress(recipient) && (
        <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-200">
          <span className="text-sm font-medium">Recipient</span>
          <span className="font-semibold">
            <a
              target="_blank"
              href={Chain.from(chainId)?.getAccountUrl(recipient)}
              className={classNames(
                address !== recipient ? 'text-yellow-600' : 'text-gray-400',
                'transition-all flex gap-1 items-center',
              )}
              rel="noreferrer"
            >
              <AddressToEnsResolver address={recipient as Address}>
                {({ isLoading, data }) => {
                  return (
                    <>{isLoading || !data ? shortenAddress(recipient) : data}</>
                  )
                }}
              </AddressToEnsResolver>
              {address !== recipient && (
                <Explainer>
                  Recipient is different from the connected wallet address. If
                  this is expected, ignore this warning.
                </Explainer>
              )}
            </a>
          </span>
        </div>
      )}
    </div>
  )
}
