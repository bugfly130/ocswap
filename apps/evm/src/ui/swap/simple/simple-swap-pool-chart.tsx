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
    <Card>
      <div className="flex flex-col items-center justify-between gap-4 border-b border-accent md:flex-row">
        <PoolInfoChartPeriods
          periods={periods}
          selectedPeriod={period}
          setPeriod={setPeriod}
        />
      </div>
      <PoolInfoChartGraph period={period} address={address} chainId={chainId} />
    </Card>
  )
}

export { PoolInfoChart }
