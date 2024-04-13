'use client'

import { Pool } from '@sushiswap/client'
import { MarketCapIcon } from '@sushiswap/ui/components/icons'
import React, { FC } from 'react'
import { formatUSD } from 'sushi/format'

interface PoolInfoVolumeProps {
  pool: Pool
}

export const PoolInfoVolume: FC<PoolInfoVolumeProps> = ({ pool }) => {
  return (
    <div className="flex flex-col">
      <MarketCapIcon width={32} height={32} />
      <span className="text-lg text-slate-50">
        {formatUSD(pool?.volumeUSD)}
      </span>
      <span className="text-sm text-gray-400">Volume Traded</span>
    </div>
  )
}
