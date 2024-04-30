import z from 'zod'
import { amountSchema } from '../../currency/index.js'

export const ocSwapV2PoolSchema = z.object({
  reserve0: amountSchema,
  reserve1: amountSchema,
})

export type SerializedOcSwapV2Pool = z.infer<typeof ocSwapV2PoolSchema>
