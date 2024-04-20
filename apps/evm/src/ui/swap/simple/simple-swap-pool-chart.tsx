'use client'

import { Card } from '@sushiswap/ui'
import React, { FC, useState } from 'react'
import { ChainId } from 'sushi/chain'

import { PoolInfoChartGraph } from './simple-swap-pool-chart-graph'
import {
  PoolInfoChartPeriod,
  PoolInfoChartPeriods,
} from './simple-swap-pool-chart-periods'

const periods = [
  PoolInfoChartPeriod.Day,
  PoolInfoChartPeriod.Week,
  PoolInfoChartPeriod.Month,
  PoolInfoChartPeriod.Year,
  PoolInfoChartPeriod.All,
]

interface PoolChartProps {
  address: string
  chainId: ChainId
}

const PoolInfoChart: FC<PoolChartProps> = ({ address, chainId }) => {
  const [period, setPeriod] = useState<PoolInfoChartPeriod>(
    PoolInfoChartPeriod.Month,
  )

  return (
    <Card
      className="p-2"
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(35px)',
      }}
    >
      <div className="flex flex-row pt-2">
        <h1 className="flex-grow text-xl font-semibold text-slate-50">
          Overview Statistic
        </h1>
        <div className="flex flex-col items-center justify-between gap-4 border-b border-accent md:flex-row">
          <PoolInfoChartPeriods
            periods={periods}
            selectedPeriod={period}
            setPeriod={setPeriod}
          />
        </div>
      </div>

      <PoolInfoChartGraph period={period} address={address} chainId={chainId} />
    </Card>
  )
}

export { PoolInfoChart }
