'use client'

import { Pool } from '@sushiswap/client'
import { SkeletonText } from '@sushiswap/ui'
import {
  Card,
  CardContent,
  CardCurrencyAmountItem,
  CardDescription,
  CardGroup,
  CardHeader,
  CardLabel,
  CardTitle,
} from '@sushiswap/ui/components/card'
import React, { FC, useMemo } from 'react'
import { usePoolGraphData, useTokenAmountDollarValues } from 'src/lib/hooks'
import { ChainId } from 'sushi/chain'
import { formatUSD } from 'sushi/format'

interface PoolCompositionProps {
  pool: Pool
}

export const PoolComposition: FC<PoolCompositionProps> = ({ pool }) => {
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

  const [reserve0USD, reserve1USD, reserveUSD] = useMemo(() => {
    if (isLoading) return [0, 0, 0]
    return [fiatValues[0], fiatValues[1], fiatValues[0] + fiatValues[1]]
  }, [fiatValues, isLoading])

  return (
    <Card>
      <CardHeader className="px-0 py-2">
        <div className="flex flex-row items-center">
          <CardLabel className="grow">Pool Liquidity</CardLabel>
          <CardDescription>
            {isLoading ? <SkeletonText /> : <>{formatUSD(reserveUSD)}</>}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent
        className="px-0 py-0 rounded-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(35px)',
        }}
      >
        <CardGroup className="p-2">
          <CardCurrencyAmountItem
            isLoading={isLoading}
            amount={data?.reserve0}
            fiatValue={formatUSD(reserve0USD)}
          />
          <CardCurrencyAmountItem
            isLoading={isLoading}
            amount={data?.reserve1}
            fiatValue={formatUSD(reserve1USD)}
          />
        </CardGroup>
      </CardContent>
    </Card>
  )
}
