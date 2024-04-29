import { ChainId } from 'sushi/chain'
import { V3MigrateChainId } from './types'

export const V3MigrateAddress = {
  [ChainId.BSC]: '0xFB7eF66a7e61224DD6FcD0D7d9C3be5C8B049b9f',
  [ChainId.ETHEREUM]: '0xc4817DEC4e969F7Ea0c8b5bF9913697869A98e47',
}

export const V3MigrateChainIds = Object.keys(V3MigrateAddress).map(
  (el) => +el as V3MigrateChainId,
) as V3MigrateChainId[]
