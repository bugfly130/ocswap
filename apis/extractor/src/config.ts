import { ExtractorConfig } from '@sushiswap/extractor'
import { ChainId } from 'sushi/chain'
import {
  ExtractorSupportedChainId,
  OCSWAP_V2_FACTORY_ADDRESS,
  OCSWAP_V2_INIT_CODE_HASH,
  type OcSwapV2ChainId,
  PANCAKESWAP_V3_DEPLOYER_ADDRESS,
  PANCAKESWAP_V3_FACTORY_ADDRESS,
  PANCAKESWAP_V3_FEE_SPACING_MAP,
  PANCAKESWAP_V3_INIT_CODE_HASH,
  PancakeSwapV3ChainId,
  SUSHISWAP_V2_FACTORY_ADDRESS,
  SUSHISWAP_V2_INIT_CODE_HASH,
  SUSHISWAP_V3_FACTORY_ADDRESS,
  SUSHISWAP_V3_INIT_CODE_HASH,
  SUSHISWAP_V3_TICK_LENS,
  SpecialExtractorClientConfig,
  type SushiSwapV2ChainId,
  type SushiSwapV3ChainId,
  UNISWAP_V2_FACTORY_ADDRESS,
  UNISWAP_V2_INIT_CODE_HASH,
  UNISWAP_V3_FACTORY_ADDRESS,
  UNISWAP_V3_INIT_CODE_HASH,
  type UniswapV3ChainId,
  publicClientConfig,
} from 'sushi/config'
import { LiquidityProviders } from 'sushi/router'
import { type Address, createPublicClient } from 'viem'

const RPC_MAX_CALLS_IN_ONE_BATCH = 1000

function ocswapV2Factory(chainId: OcSwapV2ChainId) {
  return {
    address: OCSWAP_V2_FACTORY_ADDRESS[chainId],
    provider: LiquidityProviders.OcSwapV2,
    fee: 0.003,
    initCodeHash: OCSWAP_V2_INIT_CODE_HASH[chainId],
  } as const
}

function sushiswapV2Factory(chainId: SushiSwapV2ChainId) {
  return {
    address: SUSHISWAP_V2_FACTORY_ADDRESS[chainId],
    provider: LiquidityProviders.SushiSwapV2,
    fee: 0.003,
    initCodeHash: SUSHISWAP_V2_INIT_CODE_HASH[chainId],
  } as const
}

function sushiswapV3Factory(chainId: SushiSwapV3ChainId) {
  return {
    address: SUSHISWAP_V3_FACTORY_ADDRESS[chainId],
    provider: LiquidityProviders.SushiSwapV3,
    initCodeHash: SUSHISWAP_V3_INIT_CODE_HASH[chainId],
  } as const
}

function uniswapV3Factory(chainId: UniswapV3ChainId) {
  return {
    address: UNISWAP_V3_FACTORY_ADDRESS[chainId],
    provider: LiquidityProviders.UniswapV3,
    initCodeHash: UNISWAP_V3_INIT_CODE_HASH[chainId],
  } as const
}

export function pancakeswapV3Factory(chainId: PancakeSwapV3ChainId) {
  return {
    address: PANCAKESWAP_V3_FACTORY_ADDRESS[chainId],
    provider: LiquidityProviders.PancakeSwapV3,
    initCodeHash: PANCAKESWAP_V3_INIT_CODE_HASH[chainId],
    deployer: PANCAKESWAP_V3_DEPLOYER_ADDRESS[chainId],
    feeSpacingMap: PANCAKESWAP_V3_FEE_SPACING_MAP,
  } as const
}

export const EXTRACTOR_CONFIG: Record<
  ExtractorSupportedChainId,
  ExtractorConfig
> = {
  [ChainId.BASE]: {
    client: createPublicClient(publicClientConfig[ChainId.BASE]),
    factoriesV2: [
      ocswapV2Factory(ChainId.BASE),
      sushiswapV2Factory(ChainId.BASE),
      {
        address: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB' as Address,
        provider: LiquidityProviders.BaseSwap,
        fee: 0.0025,
        initCodeHash:
          '0xb618a2730fae167f5f8ac7bd659dd8436d571872655bcb6fd11f2158c8a64a3b',
      },
    ],
    factoriesV3: [
      sushiswapV3Factory(ChainId.BASE),
      uniswapV3Factory(ChainId.BASE),
      pancakeswapV3Factory(ChainId.BASE),
    ],
    tickHelperContractV3: SUSHISWAP_V3_TICK_LENS[ChainId.BASE],
    tickHelperContractAlgebra:
      '0x0000000000000000000000000000000000000000' as Address,
    cacheDir: './cache',
    logDepth: 50,
    logging: true,
  },
  [ChainId.BSC]: {
    client: createPublicClient(SpecialExtractorClientConfig[ChainId.BSC]),
    factoriesV2: [
      sushiswapV2Factory(ChainId.BSC),
      {
        address: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73' as Address,
        provider: LiquidityProviders.PancakeSwap,
        fee: 0.0025,
        initCodeHash:
          '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
      },
    ],
    factoriesV3: [
      uniswapV3Factory(ChainId.BSC),
      sushiswapV3Factory(ChainId.BSC),
      pancakeswapV3Factory(ChainId.BSC),
    ],
    tickHelperContractV3: SUSHISWAP_V3_TICK_LENS[ChainId.BSC],
    tickHelperContractAlgebra:
      '0x0000000000000000000000000000000000000000' as Address,
    cacheDir: './cache',
    logDepth: 1000,
    logging: true,
    maxCallsInOneBatch: RPC_MAX_CALLS_IN_ONE_BATCH,
    maxBatchesSimultaniously: 5,
    experimantalPoolIncrementalMode: true, // Only changed pools are sent from Extractor to Router
    checkPoolIncrementalModeCorrectness: true, // if experimantalPoolIncrementalMode then make correctness check (resourcefull)
  },
  [ChainId.ETHEREUM]: {
    client: createPublicClient(SpecialExtractorClientConfig[ChainId.ETHEREUM]),
    factoriesV2: [
      {
        address: UNISWAP_V2_FACTORY_ADDRESS,
        provider: LiquidityProviders.UniswapV2,
        fee: 0.003,
        initCodeHash: UNISWAP_V2_INIT_CODE_HASH,
      },
      sushiswapV2Factory(ChainId.ETHEREUM),
      {
        address: '0x1097053Fd2ea711dad45caCcc45EfF7548fCB362' as Address,
        provider: LiquidityProviders.PancakeSwap,
        fee: 0.0025,
        initCodeHash:
          '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
      },
    ],
    factoriesV3: [
      uniswapV3Factory(ChainId.ETHEREUM),
      sushiswapV3Factory(ChainId.ETHEREUM),
      pancakeswapV3Factory(ChainId.ETHEREUM),
    ],
    tickHelperContractV3: SUSHISWAP_V3_TICK_LENS[ChainId.ETHEREUM],
    tickHelperContractAlgebra:
      '0x0000000000000000000000000000000000000000' as Address,
    cacheDir: './cache',
    logDepth: 50,
    logging: true,
    maxCallsInOneBatch: RPC_MAX_CALLS_IN_ONE_BATCH,
    maxBatchesSimultaniously: 5,
  },
}

export const PORT = process.env['PORT'] || 80

export const SENTRY_DSN = process.env['SENTRY_DSN'] as string
if (!SENTRY_DSN) {
  throw new Error('SENTRY_DSN is not set')
}
export const SENTRY_ENVIRONMENT = process.env['SENTRY_ENVIRONMENT'] as string
if (!SENTRY_ENVIRONMENT) {
  throw new Error('SENTRY_ENVIRONMENT is not set')
}

export const CHAIN_ID = Number(
  process.env['CHAIN_ID'],
) as keyof typeof EXTRACTOR_CONFIG
if (!CHAIN_ID) {
  throw new Error('CHAIN_ID is not set')
}

if (!(CHAIN_ID in EXTRACTOR_CONFIG)) {
  throw new Error(`EXTRACTOR_CONFIG is not set for CHAIN_ID=${CHAIN_ID}`)
}

export const POOLS_SERIALIZATION_INTERVAL = (_chainId: ChainId) => 4_000
export const REQUESTED_PAIRS_SERIALIZATION_INTERVAL = (_chainId: ChainId) =>
  120_000
