import {
  CurveMultitokenPool,
  CurvePool,
  MultiRoute,
  RouteLeg,
} from '../../tines/index.js'
import { HEXer } from '../HEXer.js'
import { LiquidityProviders } from '../liquidity-providers/index.js'
import { PoolCode } from './PoolCode.js'

export class CurvePoolCode extends PoolCode {
  constructor(
    pool: CurvePool | CurveMultitokenPool,
    liquidityProvider: LiquidityProviders,
    providerName: string,
  ) {
    super(pool, liquidityProvider, `${providerName} ${(pool?.fee || 0) * 100}%`)
  }

  override getStartPoint(): string {
    return PoolCode.RouteProcessorAddress
  }

  getSwapCodeForRouteProcessor(): string {
    return 'CurvePool is not supported by RP1'
  }

  override getSwapCodeForRouteProcessor2(): string {
    return 'CurvePool is not supported by RP2'
  }

  override getSwapCodeForRouteProcessor4(
    leg: RouteLeg,
    _: MultiRoute,
    to: string,
  ): string {
    // supports only 2-token pools currently

    const poolType = 0

    const [index0, index1] =
      this.pool instanceof CurveMultitokenPool
        ? [this.pool.index0, this.pool.index1]
        : [0, 1]
    const [fromIndex, toIndex] =
      this.pool.token0.tokenId === leg.tokenFrom.tokenId
        ? [index0, index1]
        : [index1, index0]
    const code = new HEXer()
      .uint8(5) // Curve pool
      .address(this.pool.address)
      .uint8(poolType)
      .uint8(fromIndex)
      .uint8(toIndex)
      .address(to)
      .address(
        leg.tokenTo.address || '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      )
      .toString()

    return code
  }
}
