'use client'

import { useLocalStorage } from '@sushiswap/hooks'
import { useDebounce } from '@sushiswap/hooks'
import React, { FC, useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  TextField,
} from '../'
import { CheckIcon } from '../'
import { gtagEvent } from '../../lib'
import { Button } from '../button'
import { Label } from '../label'
import { List } from '../list'
import { SelectIcon } from '../select'
import { Switch } from '../switch'
import { typographyVariants } from '../typography'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const SwapApi: FC = () => {
  const [swapApi, setSwapApi] = useLocalStorage('swapApi', true)

  const liquiditySources = ['SUSHISWAP_V2', 'SUSHISWAP_V3']
  const [peekedLS, setPeekedLS] = useLocalStorage(
    'liquiditySource',
    liquiditySources[0],
  )

  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const debouncedQuery = useDebounce(query, 250)

  useEffect(() => {
    if (debouncedQuery)
      gtagEvent('liquidity-source-search', { query: debouncedQuery })
  }, [debouncedQuery])

  return (
    <div className="p-4 rounded-lg">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <Label>Exchanges</Label>
          <span
            className={typographyVariants({
              variant: 'muted',
              className: 'text-sm',
            })}
          >
            Switch to the client for trade discovery by deactivating the Swap
            API.
          </span>
        </div>
        <Switch
          checked={swapApi}
          onCheckedChange={(checked) => setSwapApi(checked)}
        />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            data-state="active"
            size="lg"
            type="button"
            variant="outline"
            className="!rounded-xl data-[state=inactive]:hidden data-[state=active]:flex flex-row w-full"
          >
            <span className="flex-grow ">{peekedLS}</span>
            <SelectIcon />
          </Button>
        </DialogTrigger>
        <DialogContent
          className="!flex flex-col justify-start min-h-[400px]"
          style={{ width: '350px' }}
        >
          <DialogHeader>
            <DialogTitle>Liquidity Sources</DialogTitle>
          </DialogHeader>
          <div className="flex gap-2">
            <TextField
              placeholder="Search liquidity source"
              icon={MagnifyingGlassIcon}
              type="text"
              testdata-id={`ls-address-input`}
              value={query}
              onValueChange={setQuery}
            />
          </div>
          <List.Control className="relative flex flex-1 flex-col flex-grow gap-3 px-1 py-0.5 min-h-[300px]">
            <div
              className="flex-1 block rounded-xl"
              style={{
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(35px)',
              }}
            >
              {liquiditySources.map((tab, i) => (
                <div className="flex flex-row items-center gap-4 p-2">
                  <div className="w-[40px]">
                    {peekedLS === tab ? (
                      <CheckIcon
                        strokeWidth={3}
                        width={16}
                        height={16}
                        className="text-blue"
                      />
                    ) : null}
                  </div>
                  <span
                    className="h-[40px] text-slate-50 text-lg flex items-center"
                    key={i}
                    onSelect={() => setPeekedLS(tab)}
                  >
                    {tab}
                  </span>
                </div>
              ))}
              {liquiditySources?.length === 0 && (
                <span className="flex items-center justify-center h-10 text-sm text-center text-gray-500 dark:text-slate-500">
                  No results found.
                </span>
              )}
            </div>
          </List.Control>
        </DialogContent>
      </Dialog>
    </div>
  )
}
