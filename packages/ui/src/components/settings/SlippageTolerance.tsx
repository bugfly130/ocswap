import { RadioGroup } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import { useSlippageTolerance } from '@sushiswap/hooks'
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
import { Separator } from '../separator'
import { TextField } from '../text-field'
import { Toggle } from '../toggle'

const TABS = ['0.1', '0.5', '1.0']

export const SlippageTolerance: FC<{
  options?: {
    storageKey?: string
    defaultValue?: string
    title?: string
  }
  className?: string
}> = ({ options, className = true }) => {
  const [slippageTolerance, setSlippageTolerance] = useSlippageTolerance(
    options?.storageKey,
  )

  const onChange = useCallback(
    (value: string) => {
      setSlippageTolerance(value)
    },
    [setSlippageTolerance],
  )

  const isDangerous =
    (!Number.isNaN(+slippageTolerance) && +slippageTolerance >= 1.3) ||
    (!Number.isNaN(+slippageTolerance) &&
      +slippageTolerance <= 0.1 &&
      +slippageTolerance > 0)

  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <div className={classNames(className, 'p-4 rounded-lg')}>
        <div className="flex justify-between gap-[50px]">
          <div className="flex flex-col gap-2">
            <Label className="flex items-center gap-1">
              {options?.title || 'Max Slippage'}{' '}
              <HoverCardTrigger>
                <InformationCircleIcon width={16} height={16} />
              </HoverCardTrigger>
              <HoverCardPrimitive.Portal>
                <HoverCardContent className="p-2 max-w-[320px] z-[1080]">
                  <CardHeader>
                    <CardTitle>Max Slippage</CardTitle>
                    <CardDescription className="prose">
                      <p>
                        Slippage is the difference between the expected value of
                        output from a trade and the actual value due to asset
                        volatility and liquidity depth. If the actual slippage
                        falls outside of the user-designated range, the
                        transaction will revert.
                      </p>
                      <a
                        className="text-blue hover:underline"
                        target="_blank"
                        href="https://www.sushi.com/academy/articles/what-is-slippage-price-impact"
                        rel="noreferrer"
                      >
                        Learn more
                      </a>
                    </CardDescription>
                  </CardHeader>
                </HoverCardContent>
              </HoverCardPrimitive.Portal>
            </Label>
            <span className="mb-2 text-sm text-red">
              {+slippageTolerance <= 0.1 && +slippageTolerance > 0
                ? 'Your transaction may be reverted due to low slippage tolerance'
                : isDangerous
                  ? 'Your transaction may be frontrun due to high slippage tolerance'
                  : undefined}
            </span>
          </div>
        </div>
        <div className="flex gap-1 items-center border border-accent rounded-xl bg-secondary p-0.5">
          <RadioGroup value={slippageTolerance} onChange={onChange}>
            <div className="flex items-center gap-4">
              {TABS.map((tab, i) => (
                <RadioGroup.Option
                  className="h-[40px] w-[80px]"
                  key={i}
                  value={tab}
                  as={Toggle}
                  size="sm"
                  pressed={slippageTolerance === tab}
                >
                  {tab}%
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>

          <Separator orientation="vertical" className="min-h-[36px]" />
          <TextField
            type="number"
            value={slippageTolerance}
            onValueChange={setSlippageTolerance}
            placeholder="Custom"
            id="slippage-tolerance"
            maxDecimals={1}
            unit="%"
          />
        </div>
      </div>
    </HoverCard>
  )
}
