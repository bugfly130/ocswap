import { RadioGroup } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import { useGasFees } from '@sushiswap/hooks'
import classNames from 'classnames'
import React, { FC, useCallback } from 'react'

import { CardDescription, CardHeader, CardTitle } from '../card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardPrimitive,
  HoverCardTrigger,
} from '../hover-card'
import { Label } from '../label'
import { Toggle } from '../toggle'

const TABS: {
  title: string
  gwei: number
}[] = [
  {
    title: 'Normal',
    gwei: 24.2,
  },
  {
    title: 'Fast',
    gwei: 24.2,
  },
  {
    title: 'Urgent',
    gwei: 24.2,
  },
]

export const GasFees: FC<{
  options?: {
    storageKey?: string
    defaultValue?: string
    title?: string
  }
  className?: string
}> = ({ options, className = true }) => {
  const [gasFees, setGasFees] = useGasFees(options?.storageKey)

  const onChange = useCallback(
    (value: {
      title: string
      gwei: number
    }) => {
      setGasFees(value)
    },
    [setGasFees],
  )

  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <div className={classNames(className, 'p-4 rounded-lg')}>
        <div className="flex justify-between gap-[50px]">
          <div className="flex flex-col gap-2">
            <Label className="flex items-center gap-1 mb-2">
              Gas Fees
              <HoverCardTrigger>
                <InformationCircleIcon width={16} height={16} />
              </HoverCardTrigger>
              <HoverCardPrimitive.Portal>
                <HoverCardContent className="p-2 max-w-[320px] z-[1080]">
                  <CardHeader>
                    <CardTitle>Gas Fees</CardTitle>
                    <CardDescription className="prose">
                      <p>Unknown.</p>
                    </CardDescription>
                  </CardHeader>
                </HoverCardContent>
              </HoverCardPrimitive.Portal>
            </Label>
          </div>
        </div>
        <div className="flex gap-1 items-center border border-accent rounded-xl bg-secondary p-0.5">
          <RadioGroup value={gasFees} onChange={onChange} className="w-full">
            <div className="grid items-center grid-cols-2 gap-4">
              {TABS.map((tab, i) => (
                <RadioGroup.Option
                  className="h-[80px]"
                  key={i}
                  value={tab}
                  as={Toggle}
                  variant={'outline'}
                  size="sm"
                  pressed={gasFees.title === tab.title}
                >
                  <div className="flex flex-col gap-2">
                    <span>{tab.title}</span>
                    <span>
                      {tab.gwei}
                      {' Gwei (US$6.73)'}
                    </span>
                  </div>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </HoverCard>
  )
}
