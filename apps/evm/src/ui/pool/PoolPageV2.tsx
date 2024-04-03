import { Container, Separator } from '@sushiswap/ui'
import { ManageV2LiquidityCard } from 'src/ui/pool/ManageV2LiquidityCard'
import { PoolTransactionsV2 } from 'src/ui/pool/PoolTransactionsV2'
import { ChainId } from 'sushi/chain'

import { Protocol, getPool } from '@sushiswap/client'
import { FC } from 'react'
import { ManageTridentLiquidityCard } from './ManageTridentLiquidityCard'
import { PoolChartV2 } from './PoolChartV2'
import { PoolComposition } from './PoolComposition'
import { PoolMyRewards } from './PoolMyRewards'
import { PoolPosition } from './PoolPosition'
import { PoolPositionProvider } from './PoolPositionProvider'
import { PoolPositionRewardsProvider } from './PoolPositionRewardsProvider'
import { PoolPositionStakedProvider } from './PoolPositionStakedProvider'
import { PoolRewards } from './PoolRewards'
import { PoolStats } from './PoolStats'
import { UnknownTokenAlert } from './UnknownTokenAlert'

interface PoolPageV2 {
  pool: Awaited<ReturnType<typeof getPool>>
  tab: 'add' | 'remove' | 'unstake' | 'stake'
}

export const PoolPageV2: FC<PoolPageV2> = ({ pool, tab }) => {
  return (
    <Container maxWidth="5xl" className="bg-black sm:px-4">
      <UnknownTokenAlert pool={pool} />
      <div className="flex flex-col gap-6 p-2">
        <div className="grid grid-cols-1 md:grid-cols-[auto_400px] gap-6">
          {pool.protocol === Protocol.SUSHISWAP_V2 ? (
            <ManageV2LiquidityCard pool={pool} tab={tab} />
          ) : (
            <ManageTridentLiquidityCard pool={pool} tab={tab} />
          )}
          <div className="flex flex-col gap-6">
            <PoolPositionProvider pool={pool}>
              <PoolPositionStakedProvider pool={pool}>
                <PoolPositionRewardsProvider pool={pool}>
                  <PoolPosition pool={pool} />
                  <PoolMyRewards pool={pool} />
                </PoolPositionRewardsProvider>
              </PoolPositionStakedProvider>
            </PoolPositionProvider>
          </div>
        </div>
        {/* <div className="flex flex-col gap-6"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_400px] gap-6">
          <div className="flex flex-col gap-6">
            <div>
              <PoolChartV2
                address={pool.address}
                chainId={pool.chainId as ChainId}
              />
            </div>
            <div className="flex flex-col gap-2">
              <PoolStats pool={pool} />
              <PoolComposition pool={pool} />
              {pool.isIncentivized ? <PoolRewards pool={pool} /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <Separator />
      </div>
      <PoolTransactionsV2 pool={pool} poolId={pool.address} />
    </Container>
  )
}
