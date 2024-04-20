'use client'

import { Pool } from '@sushiswap/client'
import { SkeletonText } from '@sushiswap/ui'
import { MarketCapIcon } from '@sushiswap/ui/components/icons'
import React, { FC, useMemo } from 'react'
import { usePoolGraphData, useTokenAmountDollarValues } from 'src/lib/hooks'
import { ChainId } from 'sushi/chain'
import { formatUSD } from 'sushi/format'

interface PoolInfoMarketCapProps {
  pool: Pool
}

export const PoolInfoMarketCap: FC<PoolInfoMarketCapProps> = ({ pool }) => {
  const { data, isLoading: isPoolLoading } = usePoolGraphData({
    poolAddress: pool.address,
    chainId: pool.chainId as ChainId,
  })

  const amounts = [data?.reserve0, data?.reserve1]

  const fiatValues = useTokenAmountDollarValues({
    chainId: pool.chainId,
    amounts,
  })

  const isLoading = isPoolLoading || fiatValues.length !== amounts.length

  const [reserveUSD] = useMemo(() => {
    if (isLoading) return [0, 0, 0]
    return [fiatValues[0] + fiatValues[1]]
  }, [fiatValues, isLoading])

  return (
    <div className="flex flex-col">
      <MarketCapIcon width={32} height={32} />
      {isLoading ? (
        <SkeletonText />
      ) : (
        <span className="pt-1 text-lg font-semibold text-slate-50">
          {formatUSD(reserveUSD)}
        </span>
      )}
      <span className="text-sm text-gray-400">Market Cap</span>
    </div>
  )
}
