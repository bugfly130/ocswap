'use client'

import { CardContent, classNames } from '@sushiswap/ui'
import { SkeletonBox } from '@sushiswap/ui/components/skeleton'
import { format } from 'date-fns'
import ReactECharts from 'echarts-for-react'
import { EChartsOption } from 'echarts-for-react/lib/types'
import { FC, useCallback, useMemo } from 'react'
import { usePoolGraphData } from 'src/lib/hooks'
import { ChainId } from 'sushi/chain'
import { formatUSD } from 'sushi/format'
import tailwindConfig from 'tailwind.config.js'
import resolveConfig from 'tailwindcss/resolveConfig'

import {
  PoolInfoChartPeriod,
  chartPeriods,
} from './simple-swap-pool-chart-periods'

interface PoolInfoChartGraphProps {
  period: PoolInfoChartPeriod
  address: string
  chainId: ChainId
}

const tailwind = resolveConfig(tailwindConfig)

export const PoolInfoChartGraph: FC<PoolInfoChartGraphProps> = ({
  period,
  address,
  chainId,
}) => {
  const { data: graphPair, isLoading } = usePoolGraphData({
    poolAddress: address,
    chainId,
  })

  const swapFee = graphPair ? graphPair?.swapFee / 10000 : 0

  const [xData, yData]: [number[], number[]] = useMemo(() => {
    const data =
      (chartPeriods[period] < chartPeriods[PoolInfoChartPeriod.Week]
        ? graphPair?.hourSnapshots
        : graphPair?.daySnapshots) || []

    const currentDate = Math.round(Date.now())
    const [x, y] = data.reduce<[number[], number[]]>(
      (acc, cur) => {
        if (cur.date * 1000 >= currentDate - chartPeriods[period]) {
          acc[0].push(cur.date)
          acc[1].push(Number(cur.volumeUSD))
        }
        return acc
      },
      [[], []],
    )

    return [x.reverse(), y.reverse()]
  }, [graphPair?.hourSnapshots, graphPair?.daySnapshots, period])

  // Transient update for performance
  const onMouseOver = useCallback(
    ({ name, value }: { name: number; value: number }) => {
      const valueNodes = document.getElementsByClassName('hoveredItemValue')
      const nameNodes = document.getElementsByClassName('hoveredItemName')

      if (valueNodes[0]) {
        valueNodes[0].innerHTML = formatUSD(value)
      }

      if (valueNodes[1]) {
        valueNodes[1].innerHTML = formatUSD(value * Number(swapFee))
      }

      if (nameNodes[0]) {
        nameNodes[0].innerHTML = format(
          new Date(name * 1000),
          `dd MMM yyyy${
            chartPeriods[period] < chartPeriods[PoolInfoChartPeriod.Week]
              ? ' p'
              : ''
          }`,
        )
      }
    },
    [period, swapFee],
  )

  const DEFAULT_OPTION: EChartsOption = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        extraCssText:
          'z-index: 1000; padding: 0 !important; box-shadow: none !important',
        responsive: true,
        // @ts-ignore
        backgroundColor: 'transparent',
        textStyle: {
          fontSize: 12,
          fontWeight: 600,
        },
        formatter: (params: any) => {
          onMouseOver({ name: params[0].name, value: params[0].value })

          const date = new Date(Number(params[0].name * 1000))
          return `<div class="flex flex-col gap-0.5 paper bg-white/50 px-3 py-2 rounded-xl overflow-hidden shadow-lg">
            <span class="text-sm  text-gray-900 font-medium">${formatUSD(
              params[0].value,
            )}</span>
            <span class="text-xs text-gray-500  font-medium">${
              date instanceof Date && !Number.isNaN(date?.getTime())
                ? format(
                    date,
                    `dd MMM yyyy${
                      chartPeriods[period] <
                      chartPeriods[PoolInfoChartPeriod.Week]
                        ? ' p'
                        : ''
                    }`,
                  )
                : ''
            }</span>
          </div>`
        },
        borderWidth: 0,
      },
      toolbox: {
        show: false,
      },
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      dataZoom: {
        show: false,
        start: 0,
        end: 100,
      },
      visualMap: {
        show: false,
        // @ts-ignore
        color: [tailwind.theme.colors.blue['500']],
      },
      xAxis: [
        {
          show: false,
          type: 'category',
          data: xData,
        },
      ],
      yAxis: [
        {
          show: false,
          type: 'value',
          name: 'Volume',
        },
      ],
      series: [
        {
          name: 'Volume',
          type: 'bar',
          smooth: true,
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            color: 'blue',
            normal: {
              barBorderRadius: 2,
            },
          },
          areaStyle: {
            // @ts-ignore
            color: tailwind.theme.colors.blue['500'],
          },
          animationEasing: 'elasticOut',
          animationDelayUpdate: (idx: number) => idx * 2,
          data: yData,
        },
      ],
    }),
    [xData, yData, onMouseOver, period],
  )

  return (
    <>
      <CardContent className="px-0 py-0 ">
        {isLoading ? (
          <SkeletonBox className={classNames('h-[350px] w-full')} />
        ) : (
          <ReactECharts option={DEFAULT_OPTION} style={{ height: 350 }} />
        )}
      </CardContent>
    </>
  )
}
