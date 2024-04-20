'use client'

import ArrowsUpDownIcon from '@heroicons/react/24/solid/ArrowsUpDownIcon'

import { useDerivedStateSimpleSwap } from './derivedstate-simple-swap-provider'

export const SimpleSwapSwitchTokensButton = () => {
  const {
    mutate: { switchTokens },
  } = useDerivedStateSimpleSwap()

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={switchTokens}
        type="button"
        className="z-10 p-2 transition-all bg-black border-2 rounded-full cursor-pointer border-blue hover:shadow-sm transition-border group border-accent"
      >
        <div className="transition-transform rotate-0 group-hover:rotate-180">
          <ArrowsUpDownIcon
            strokeWidth={3}
            className="w-4 h-4 lg:w-3 lg:h-3 text-blue"
          />
        </div>
      </button>
    </div>
  )
}
