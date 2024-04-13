import { Toggle } from '@sushiswap/ui/components/toggle'
import React, { FC } from 'react'

export enum PoolInfoChartPeriod {
  Day = '1D',
  Week = '1W',
  Month = '1M',
  Year = '1Y',
  All = 'All',
}

export const chartPeriods: Record<PoolInfoChartPeriod, number> = {
  [PoolInfoChartPeriod.Day]: 86400 * 1000,
  [PoolInfoChartPeriod.Week]: 604800 * 1000,
  [PoolInfoChartPeriod.Month]: 2629746 * 1000,
  [PoolInfoChartPeriod.Year]: 31556952 * 1000,
  [PoolInfoChartPeriod.All]: Infinity,
}

interface PoolInfoChartPeriodsProps {
  periods: PoolInfoChartPeriod[]
  selectedPeriod: PoolInfoChartPeriod
  setPeriod: (period: PoolInfoChartPeriod) => void
}

const PoolInfoChartPeriods: FC<PoolInfoChartPeriodsProps> = ({
  periods,
  selectedPeriod,
  setPeriod,
}) => {
  return (
    <div
      className="flex items-center gap-1 p-1 rounded-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(35px)',
      }}
    >
      {periods.map((period) => (
        <Toggle
          size="xs"
          pressed={period === selectedPeriod}
          onClick={() => setPeriod(period)}
          key={period}
        >
          {period}
        </Toggle>
      ))}
    </div>
  )
}

export { PoolInfoChartPeriods }
