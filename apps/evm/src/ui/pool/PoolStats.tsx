'use client'

import { Pool } from '@sushiswap/client'
import { Card, CardContent, CardLabel, classNames } from '@sushiswap/ui'
import { SkeletonText } from '@sushiswap/ui/components/skeleton'
import { FC } from 'react'
import { usePoolGraphData } from 'src/lib/hooks'
import { ChainId } from 'sushi/chain'
import { formatNumber, formatPercent, formatUSD } from 'sushi/format'

interface PoolStats {
  pool: Pool
}

export const PoolStats: FC<PoolStats> = ({ pool }) => {
  const { data, isLoading } = usePoolGraphData({
    poolAddress: pool.address,
    chainId: pool.chainId as ChainId,
  })

  return (
    <Card>
      <CardContent className="px-0 py-0">
        <div className="flex flex-row gap-3">
          <div
            className="flex-1 p-2 rounded-xl whitespace-nowrap"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(35px)',
            }}
          >
            <CardLabel>Liquidity</CardLabel>
            {isLoading ? (
              <SkeletonText />
            ) : data ? (
              <div className="flex flex-col text-xl font-semibold text-slate-50">
                {formatUSD(data.liquidityUSD ?? 0)}{' '}
                <span
                  className={classNames(
                    'text-xs',
                    data.liquidity1dChange > 0 ? 'text-green' : 'text-red',
                  )}
                >
                  {data.liquidity1dChange > 0 ? '+' : '-'}
                  {formatPercent(Math.abs(data.liquidity1dChange))}
                </span>
              </div>
            ) : null}
          </div>
          <div
            className="flex-1 p-2 rounded-xl whitespace-nowrap"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(35px)',
            }}
          >
            <CardLabel>Volume (24h)</CardLabel>
            {data ? (
              <div className="flex flex-col text-xl font-semibold text-slate-50">
                {formatUSD(data.volume1d ?? 0)}{' '}
                <span
                  className={classNames(
                    'text-xs',
                    data.volume1dChange > 0 ? 'text-green' : 'text-red',
                  )}
                >
                  {data.volume1dChange > 0 ? '+' : '-'}
                  {formatPercent(Math.abs(data.volume1dChange))}
                </span>
              </div>
            ) : isLoading ? (
              <SkeletonText />
            ) : null}
          </div>
          <div
            className="flex-1 p-2 rounded-xl whitespace-nowrap"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(35px)',
            }}
          >
            <CardLabel>Fees (24h)</CardLabel>
            {data ? (
              <div className="flex flex-col text-xl font-semibold text-slate-50 ">
                {formatUSD(data.fees1d ?? 0)}{' '}
                <span
                  className={classNames(
                    'text-xs',
                    data.fees1dChange > 0 ? 'text-green' : 'text-red',
                  )}
                >
                  {data.fees1dChange > 0 ? '+' : '-'}
                  {formatPercent(Math.abs(data.fees1dChange))}
                </span>
              </div>
            ) : isLoading ? (
              <SkeletonText />
            ) : null}
          </div>
          <div
            className="flex-1 p-2 rounded-xl whitespace-nowrap"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(35px)',
            }}
          >
            <CardLabel>Transactions (24h)</CardLabel>
            {data ? (
              <div className="flex flex-col text-lg font-semibold text-slate-50 ">
                {formatNumber(data.txCount1d).replace('.00', '')}{' '}
                <span
                  className={classNames(
                    'text-xs',
                    data.txCount1dChange > 0 ? 'text-green' : 'text-red',
                  )}
                >
                  {data.txCount1dChange > 0 ? '+' : '-'}
                  {formatPercent(Math.abs(data.txCount1dChange))}
                </span>
              </div>
            ) : isLoading ? (
              <SkeletonText />
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
