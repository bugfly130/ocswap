'use client'

import {
  Button,
  Container,
  EXPLORE_NAVIGATION_LINKS,
  LinkInternal,
  NavigationContainer,
  NavigationListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@sushiswap/ui'
import React, { FC } from 'react'

export const Header: FC = () => {
  return (
    <Container maxWidth="7xl" className="mx-auto">
      <NavigationContainer variant="transparent">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="block md:hidden">
              <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[400px] gap-3 p-4">
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
              <LinkInternal href="/swap">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Swap
                </NavigationMenuLink>
              </LinkInternal>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <LinkInternal href="/pools/add/v2/56">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Liquidity
                </NavigationMenuLink>
              </LinkInternal>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <LinkInternal href="/swap">
          <Button asChild>Enter App</Button>
        </LinkInternal>
      </NavigationContainer>
    </Container>
  )
}
