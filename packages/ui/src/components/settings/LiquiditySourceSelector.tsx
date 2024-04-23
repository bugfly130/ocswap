'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { useDebounce } from '@sushiswap/hooks'
import React, { FC, ReactNode, useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  TextField,
} from '../'
import { gtagEvent } from '../../lib'
import { List } from '../list'
import { SkeletonCircle, SkeletonText } from '../skeleton'

interface LiquiditySourceSelector {
  id: string
  children: ReactNode
  hideSearch?: boolean
}

export const LiquiditySourceSelector: FC<LiquiditySourceSelector> = ({
  id,
  children,
  hideSearch,
}) => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const debouncedQuery = useDebounce(query, 250)

  useEffect(() => {
    if (debouncedQuery)
      gtagEvent('liquidity-source-search', { query: debouncedQuery })
  }, [debouncedQuery])

  const liquiditySourceMap: {
    title: string
  }[] = [
    {
      title: 'Uniswap',
    },
    {
      title: 'Pancakeswap',
    },
    {
      title: 'Sushiswap',
    },
  ]

  const isLoading = true

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!flex flex-col justify-start min-h-[85vh]">
        <DialogHeader>
          <DialogTitle>Liquidity Sources</DialogTitle>
        </DialogHeader>
        {!hideSearch ? (
          <div className="flex gap-2">
            <TextField
              placeholder="Search liquidity source"
              icon={MagnifyingGlassIcon}
              type="text"
              testdata-id={`${id}-address-input`}
              value={query}
              onValueChange={setQuery}
            />
          </div>
        ) : null}

        <List.Control className="relative flex flex-1 flex-col flex-grow gap-3 px-1 py-0.5 min-h-[128px]">
          <div
            data-state={isLoading ? 'active' : 'inactive'}
            className="data-[state=active]:block data-[state=active]:flex-1 data-[state=inactive]:hidden py-0.5 h-[64px] -mb-3"
          >
            <div className="flex items-center w-full h-full px-3 rounded-lg">
              <div className="flex items-center justify-between flex-grow gap-2 rounded">
                <div className="flex flex-row items-center flex-grow gap-4">
                  <SkeletonCircle radius={40} />
                  <div className="flex flex-col items-start">
                    <SkeletonText className="w-full w-[100px]" />
                    <SkeletonText fontSize="sm" className="w-full w-[60px]" />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <SkeletonText className="w-[80px]" />
                  <SkeletonText
                    fontSize="sm"
                    align="right"
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            data-state={isLoading ? 'inactive' : 'active'}
            className="data-[state=active]:block data-[state=active]:flex-1 data-[state=inactive]:hidden rounded-xl"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(35px)',
            }}
          >
            {liquiditySourceMap.map((tab, i) => (
              <div>
                <span className="h-[40px] text-slate-50 text-md" key={i}>
                  {tab.title}
                </span>
              </div>
            ))}
            {liquiditySourceMap?.length === 0 && (
              <span className="flex items-center justify-center h-10 text-sm text-center text-gray-500 ">
                No results found.
              </span>
            )}
          </div>
        </List.Control>
      </DialogContent>
    </Dialog>
  )
}
