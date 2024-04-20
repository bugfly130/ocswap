'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import classNames from 'classnames'

const toggleVariants = cva(
  'inline-flex gap-2 items-center justify-center text-sm font-medium transition-colors text-gray-400 data-[state=on]:text-white disabled:pointer-events-none disabled:opacity-50 hover:text-slate-50  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue',
  {
    variants: {
      variant: {
        default: 'bg-transparent data-[state=on]:bg-[#1991F5]',
        outline:
          'bg-transparent !border border-default data-[state=on]:border-[#1991F5]',
      },
      size: {
        xs: 'h-[26px] px-2 text-xs rounded-md',
        default: 'h-10 px-3 rounded-md',
        sm: 'h-9 px-2.5 rounded-md',
        lg: 'h-11 px-5 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  testId?: string
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ testId, id, className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    testdata-id={`${testId || id}-button`}
    ref={ref}
    className={classNames(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
