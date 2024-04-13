'use client'

import { typographyVariants } from '@sushiswap/ui'
import React from 'react'

export const SimpleSwapHeader = () => {
  return (
    <div className="flex flex-col items-start gap-2 mt-2 mb-4">
      <h1 className={typographyVariants({ variant: 'h1' })}>Swap</h1>
    </div>
  )
}
