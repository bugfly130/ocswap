'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ChipInput } from '@sushiswap/ui'
import React, { FC, useCallback, useState, useTransition } from 'react'

import { usePoolFilters, useSetPoolFilters } from './PoolsFiltersProvider'

export const TableFiltersSearchToken: FC = () => {
  const [isPending, startTransition] = useTransition()
  const { tokenSymbols } = usePoolFilters()
  const setFilters = useSetPoolFilters()
  const [values, setValues] = useState<string[]>(tokenSymbols)

  const onValueChange = useCallback(
    (values: string[]) => {
      setValues(values)
      startTransition(() => {
        setFilters((prev) => ({ ...prev, tokenSymbols: values }))
      })
    },
    [setFilters],
  )

  return (
    <div className="grow">
      <ChipInput
        size="sm"
        icon={MagnifyingGlassIcon}
        delimiters={[',', ' ', ';', ':', 'Enter']}
        variant="outline"
        values={isPending ? values : tokenSymbols ?? []}
        onValueChange={onValueChange}
        placeholder="Type And Press Enter To Add Tokens"
        maxValues={3}
      />
    </div>
  )
}
