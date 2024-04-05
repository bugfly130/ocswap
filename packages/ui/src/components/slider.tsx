'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import classNames from 'classnames'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={classNames(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative w-full h-2 overflow-hidden rounded-full grow bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-gray-600" />
    </SliderPrimitive.Track>
    {props.defaultValue ? (
      props.defaultValue.map((_el, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="block w-5 h-5 transition-colors border-2 rounded-full border-primary bg-blue hover:ring-4 ring-offset-background ring-accent focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
        />
      ))
    ) : props.value ? (
      props.value.map((_el, i) => (
        <SliderPrimitive.Thumb
          key={i}
          className="block w-5 h-5 transition-colors border-2 rounded-full border-primary bg-blue hover:ring-4 ring-offset-background ring-accent disabled:pointer-events-none disabled:opacity-50"
        />
      ))
    ) : (
      <SliderPrimitive.Thumb className="block w-5 h-5 transition-colors border-2 rounded-full border-primary bg-blue hover:ring-4 ring-offset-background ring-accent disabled:pointer-events-none disabled:opacity-50" />
    )}
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
