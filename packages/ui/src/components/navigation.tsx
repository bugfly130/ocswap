'use client'

import { type VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'
import * as React from 'react'

import classNames from 'classnames'
import { SushiIcon } from './icons/SushiIcon'
import { navigationMenuTriggerStyle } from './navigation-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu'

const EXPLORE_NAVIGATION_LINKS: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'Swap',
    href: '/swap',
    description: 'The easiest way to trade.',
  },
  {
    title: 'Liquidity',
    href: '/pools/add/v2/56',
    description: 'Earn fees by providing liquidity.',
  },
]

const navigationContainerVariants = cva(
  'px-4 sticky flex items-center flex-grow gap-4 top-0 z-50 min-h-[96px] max-h-[96px] h-[96px] w-full',
  {
    variants: {
      variant: {
        default: 'border-b border-gray-200',
        transparent: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface NavContainerProps
  extends VariantProps<typeof navigationContainerVariants> {
  children: React.ReactNode
}

const NavigationContainer: React.FC<NavContainerProps> = ({
  children,
  variant,
}) => {
  return (
    <div
      className={navigationContainerVariants({ variant })}
      style={{ backgroundColor: 'rgb(8 51 68)', opacity: '90%' }}
    >
      <SushiIcon width={38} height={38} />
      <h3 className="hidden text-3xl font-semibold tracking-tight text-white md:block">
        OCSWAP
      </h3>
      <div className="flex w-full">{children}</div>
    </div>
  )
}

interface NavProps extends VariantProps<typeof navigationContainerVariants> {
  rightElement?: React.ReactNode
  legacyBehavior?: boolean
}

const Navigation: React.FC<NavProps> = ({
  rightElement,
  variant,
  legacyBehavior = false,
}) => {
  return (
    <NavigationContainer variant={variant}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="block md:hidden">
            <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="min-w-[240px] gap-3 p-4">
                {EXPLORE_NAVIGATION_LINKS.map((component) => (
                  <NavigationListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </NavigationListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            {legacyBehavior ? (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/swap">Swap</a>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href="/swap"
                className={navigationMenuTriggerStyle()}
              >
                Swap
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            {legacyBehavior ? (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href={`/pools/add/v2/56`}>Liquidity</a>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href={`/pools/add/v2/56`}
                className={navigationMenuTriggerStyle()}
              >
                Liquidity
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-2">
        {rightElement ? rightElement : null}
      </div>
    </NavigationContainer>
  )
}

interface NavigationListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  legacyBehavior?: boolean
}

const NavigationListItem = React.forwardRef<
  React.ElementRef<'a'>,
  NavigationListItemProps
>(
  (
    { className, title, children, legacyBehavior = false, href, ...props },
    ref,
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          {legacyBehavior || !href ? (
            <a
              ref={ref}
              className={classNames(
                'cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className,
              )}
              href={href}
              {...props}
            >
              <div className="text-sm font-medium leading-none text-black">
                {title}
              </div>
              <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                {children}
              </p>
            </a>
          ) : (
            <Link
              href={href}
              className={classNames(
                'cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                className,
              )}
            >
              <div className="text-sm font-medium leading-none text-black">
                {title}
              </div>
              <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
                {children}
              </p>
            </Link>
          )}
        </NavigationMenuLink>
      </li>
    )
  },
)

NavigationListItem.displayName = 'NavListItem'

export {
  EXPLORE_NAVIGATION_LINKS,
  Navigation,
  NavigationContainer,
  NavigationListItem,
}
