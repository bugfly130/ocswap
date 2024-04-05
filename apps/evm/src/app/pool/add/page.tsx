'use client'

import { useAccount, useConcentratedPositionInfo } from '@sushiswap/wagmi'
import { getV3FactoryContractConfig } from '@sushiswap/wagmi/hooks/contracts/useV3FactoryContract'
import React, { FC, useMemo, useState } from 'react'
import { computeSushiSwapV3PoolAddress } from 'sushi'
import { tryParseAmount } from 'sushi/currency'
import { SWRConfig } from 'swr'
import { SUPPORTED_CHAIN_IDS } from '../../../config'
import { useTokenAmountDollarValues } from '../../../lib/hooks'
import { ConcentratedLiquidityProvider } from '../../../ui/pool/ConcentratedLiquidityProvider'
import {
  ConcentratedLiquidityURLStateProvider,
  useConcentratedLiquidityURLState,
} from '../../../ui/pool/ConcentratedLiquidityURLStateProvider'
import { ConcentratedLiquidityWidget } from '../../../ui/pool/ConcentratedLiquidityWidget'
import { SelectFeeConcentratedWidget } from '../../../ui/pool/SelectFeeConcentratedWidget'
import { SelectNetworkWidget } from '../../../ui/pool/SelectNetworkWidget'
import { SelectPricesWidget } from '../../../ui/pool/SelectPricesWidget'
import { SelectTokensWidget } from '../../../ui/pool/SelectTokensWidget'

import { Currency } from '@sushiswap/ui'
import { formatUSD } from 'sushi/format'

import { Badge } from '@sushiswap/ui/components/badge'
import { NetworkIcon } from '@sushiswap/ui/components/icons'
import { chainName } from 'sushi/chain'

export default function Page() {
  return (
    <ConcentratedLiquidityURLStateProvider>
      <SWRConfig>
        <ConcentratedLiquidityProvider>
          <_Add />
        </ConcentratedLiquidityProvider>
      </SWRConfig>
    </ConcentratedLiquidityURLStateProvider>
  )
}

const _Add: FC = () => {
  const { address } = useAccount()
  const {
    chainId,
    token0,
    token1,
    setToken1,
    setToken0,
    setNetwork,
    feeAmount,
    setFeeAmount,
    tokensLoading,
    tokenId,
    switchTokens,
  } = useConcentratedLiquidityURLState()

  const [_invert, _setInvert] = useState(false)
  const { data: position } = useConcentratedPositionInfo({
    chainId,
    token0,
    tokenId,
    token1,
  })

  const poolAddress = useMemo(
    () =>
      token0 && token1 && feeAmount && chainId
        ? computeSushiSwapV3PoolAddress({
            factoryAddress: getV3FactoryContractConfig(chainId).address,
            tokenA: token0.wrapped,
            tokenB: token1.wrapped,
            fee: feeAmount,
          })
        : undefined,
    [chainId, feeAmount, token0, token1],
  )

  const fiatAmounts = useMemo(
    () => [tryParseAmount('1', token0), tryParseAmount('1', token1)],
    [token0, token1],
  )
  const _fiatAmountsAsNumber = useTokenAmountDollarValues({
    chainId,
    amounts: fiatAmounts,
  })

  return (
    <>
      <div className="flex flex-row gap-6">
        <div className="flex-col hidden gap-6 md:flex">
          <div
            className="flex flex-col gap-4 p-6 flex-4 rounded-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(35px)',
            }}
          >
            <div className="flex items-center gap-2">
              <Badge
                className="border-2 border-slate-900 rounded-full z-[11]"
                position="bottom-right"
                badgeContent={
                  <NetworkIcon chainId={chainId} width={14} height={14} />
                }
              >
                <Currency.IconList iconWidth={26} iconHeight={26}>
                  {token0 ? <Currency.Icon currency={token0} /> : null}
                  {token1 ? <Currency.Icon currency={token1} /> : null}
                </Currency.IconList>
              </Badge>
              <div className="flex flex-col ms-6">
                <h3 className="text-lg text-slate-50">
                  {token0?.symbol}/{token1?.symbol}
                </h3>
                <h3 className="text-sm text-gray-400 whitespace-nowrap">
                  OcswapShop V3.0%
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <h3 className="text-sm text-slate-50">Network</h3>
              <div className="flex items-center gap-2">
                <NetworkIcon chainId={chainId} width={26} height={26} />
                <h3 className="text-md text-slate-50">
                  {chainName?.[chainId]}
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-2">
              <h3 className="text-sm text-gray-400">Free Tier</h3>
              <h3 className="text-md text-slate-50">
                {feeAmount / 10000}% Fee
              </h3>
            </div>

            <div className="flex flex-col gap-2 p-2">
              <h3 className="text-sm text-gray-400">Pool Type</h3>
              <h3 className="text-md text-slate-50">Concentrated Liquidity</h3>
            </div>

            <div className="flex flex-col gap-2 p-2">
              <h3 className="text-sm text-gray-400">Current Price</h3>
              <h3 className="text-md text-slate-50">
                {_fiatAmountsAsNumber
                  ? formatUSD(_fiatAmountsAsNumber[0] + _fiatAmountsAsNumber[1])
                  : 'N/A'}
              </h3>
            </div>

            {/* <div className="flex flex-col">
              <Button
                asChild
                variant="link"
                className={typographyVariants({
                  variant: 'h1',
                  className:
                    'sm:!text2-xl sm:!text-4xl !font-bold text-gray-900 dark:text-slate-50 truncate overflow-x-auto',
                })}
              >
                <LinkExternal
                  href={Chain.from(pool.chainId)?.getTokenUrl(address)}
                >
                  {token0.symbol}/{token1.symbol}
                </LinkExternal>
              </Button>
              <div className="flex items-center flex-1">
                <span className="font-semibold tracking-tighter">Fee: </span>
                <span className="font-semibold tracking-tighter">
                  {pool instanceof SushiSwapV3Pool
                    ? pool.fee / 10000
                    : pool.swapFee * 100}
                  %
                </span>
              </div>
            </div> */}
          </div>
        </div>
        <div
          className="flex flex-col gap-6 p-6 flex-8 rounded-xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(35px)',
          }}
        >
          <SelectNetworkWidget
            selectedNetwork={chainId}
            onSelect={setNetwork}
            networks={SUPPORTED_CHAIN_IDS}
          />
          <SelectTokensWidget
            chainId={chainId}
            token0={token0}
            token1={token1}
            setToken0={setToken0}
            setToken1={setToken1}
          />
          <SelectFeeConcentratedWidget
            feeAmount={feeAmount}
            setFeeAmount={setFeeAmount}
            token1={token1}
            token0={token0}
          />
          <SelectPricesWidget
            chainId={chainId}
            token0={token0}
            token1={token1}
            poolAddress={poolAddress}
            tokenId={tokenId}
            feeAmount={feeAmount}
            switchTokens={switchTokens}
          />
          <ConcentratedLiquidityWidget
            chainId={chainId}
            account={address}
            token0={token0}
            token1={token1}
            setToken0={setToken0}
            setToken1={setToken1}
            feeAmount={feeAmount}
            tokensLoading={tokensLoading}
            existingPosition={position ?? undefined}
            tokenId={tokenId}
            successLink={`/pools/${chainId}:${poolAddress}?activeTab=myPositions`}
          />
        </div>
      </div>
    </>
  )
}
