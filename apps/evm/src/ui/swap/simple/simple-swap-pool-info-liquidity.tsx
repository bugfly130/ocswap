'use client'

import { Pool } from '@sushiswap/client'
import { SkeletonText } from '@sushiswap/ui'
import { Currency } from '@sushiswap/ui/components/currency'
import React, { FC } from 'react'
import { usePoolGraphData } from 'src/lib/hooks'
import { ChainId } from 'sushi/chain'
import { Native } from 'sushi/currency'
import { formatUSD } from 'sushi/format'

interface PoolInfoLiquidityProps {
  pool: Pool
}

export const PoolInfoLiquidity: FC<PoolInfoLiquidityProps> = ({ pool }) => {
  const { data, isLoading } = usePoolGraphData({
    poolAddress: pool.address,
    chainId: pool.chainId as ChainId,
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {isLoading ? (
          <SkeletonText />
        ) : (
          <Currency.IconList iconWidth={26} iconHeight={26}>
            <Currency.Icon
              currency={data?.token0 ?? Native.onChain(pool.chainId)}
            />
            <Currency.Icon
              currency={data?.token1 ?? Native.onChain(pool.chainId)}
            />
          </Currency.IconList>
        )}
        {isLoading ? (
          <SkeletonText />
        ) : (
          <span className="text-sm text-gray-400">
            {data?.token0.symbol}/{data?.token1.symbol}
          </span>
        )}
      </div>
      <div className="flex">
        {isLoading ? (
          <SkeletonText />
        ) : (
          <span className="pt-1 text-lg font-semibold text-slate-50">
            {formatUSD(data?.liquidityNative ?? 0)}
          </span>
        )}
      </div>
    </div>
  )
}
