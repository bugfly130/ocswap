import { ReactElement } from 'react'
import {
  BentoBoxChainId,
  OcSwapV2ChainId,
  SushiSwapV2ChainId,
} from 'sushi/config'
import { Type } from 'sushi/currency'
import { Fee } from 'sushi/dex'
import {
  OcSwapV2Pool,
  SushiSwapV2Pool,
  TridentConstantPool,
  TridentStablePool,
} from 'sushi/pool'

import {
  OcSwapV2PoolState,
  SushiSwapV2PoolState,
  TridentConstantPoolState,
  TridentStablePoolState,
} from '../../hooks'

export type ComponentsWrapperProps<T> = {
  children:
    | ReactElement<T>
    | Array<ReactElement<T> | undefined>
    | Array<ReactElement<T>[] | ReactElement<T> | undefined>
    | undefined
}

interface PoolFinderProps {
  token0: Type | undefined
  token1: Type | undefined
  index?: number
  dispatch?(payload: PoolExistenceStateAction): void
  enabled: boolean
}

export interface SushiSwapV2PoolFinderProps extends PoolFinderProps {
  chainId: SushiSwapV2ChainId
  token0: Type | undefined
  token1: Type | undefined
  index?: number
  dispatch?(payload: PoolExistenceStateAction): void
  enabled: boolean
}

export interface OcSwapV2PoolFinderProps extends PoolFinderProps {
  chainId: OcSwapV2ChainId
  token0: Type | undefined
  token1: Type | undefined
  index?: number
  dispatch?(payload: PoolExistenceStateAction): void
  enabled: boolean
}

export interface TridentPoolFinderProps extends PoolFinderProps {
  chainId: BentoBoxChainId
  fee?: Fee
  twap?: boolean
}

export type PoolStateUnion = [
  (
    | OcSwapV2PoolState
    | SushiSwapV2PoolState
    | TridentConstantPoolState
    | TridentStablePoolState
  ),
  (
    | OcSwapV2Pool
    | SushiSwapV2Pool
    | TridentConstantPool
    | TridentStablePool
    | null
  ),
]

export enum PoolFinderType {
  Classic = 'Classic',
  Stable = 'Stable',
  ConcentratedLiquidity = 'Concentrated Liquidity',
}

export type PoolExistenceStateAction = {
  type: 'update'
  payload: { state: PoolStateUnion; index: number; poolType: PoolFinderType }
}
