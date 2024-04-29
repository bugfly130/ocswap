import { ChainId } from 'sushi/chain'

import { IconComponent } from '../../../../types'
import { BaseCircle } from './BaseCircle'
import { BinanceCircle } from './BinanceCircle'
import { EthereumCircle } from './EthereumCircle'

export * from './BaseCircle'
export * from './BinanceCircle'
export * from './EthereumCircle'

export const NETWORK_CIRCLE_ICON: Record<number, IconComponent> = {
  [ChainId.ETHEREUM]: EthereumCircle,
  [ChainId.BSC]: BinanceCircle,
  [ChainId.BASE]: BaseCircle,
}
