import { Toggle } from '@sushiswap/ui/components/toggle'
import React from 'react'

export enum PoolChartType {
  Volume = 'Volume',
  TVL = 'TVL',
  Fees = 'Fees',
  APR = 'APR',
  Depth = 'Depth',
}

interface PoolChartTypesProps<C> {
  charts: Readonly<C[]>
  selectedChart: C
  setChart: (chart: C) => void
}

function PoolChartTypes<C extends string>({
  charts,
  selectedChart,
  setChart,
}: PoolChartTypesProps<C>) {
  return (
    <div
      className="flex items-center gap-1 p-1 rounded-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(35px)',
      }}
    >
      {charts.map((chart) => (
        <Toggle
          size="xs"
          pressed={chart === selectedChart}
          onClick={() => setChart(chart)}
          key={chart}
        >
          {chart}
        </Toggle>
      ))}
    </div>
  )
}

export { PoolChartTypes }
