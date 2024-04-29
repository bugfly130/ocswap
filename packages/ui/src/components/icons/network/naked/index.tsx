import { ChainId } from 'sushi/chain'

import { IconComponent } from '../../../../types'
import { BaseNaked } from './BaseNaked'
import { BinanceNaked } from './BinanceNaked'
import { EthereumNaked } from './EthereumNaked'

export * from './BaseNaked'
export * from './BinanceNaked'
export * from './EthereumNaked'

export const NETWORK_NAKED_ICON: Record<number, IconComponent> = {
  [ChainId.ETHEREUM]: EthereumNaked,
  [ChainId.BSC]: BinanceNaked,
  [ChainId.BASE]: BaseNaked,
}
