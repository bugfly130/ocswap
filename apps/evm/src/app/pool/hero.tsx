'use client'

import { GiftIcon } from '@heroicons/react-v1/outline'
import { LinkExternal, LinkInternal } from '@sushiswap/ui'
import { Button } from '@sushiswap/ui/components/button'
import { Chip } from '@sushiswap/ui/components/chip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@sushiswap/ui/components/dropdown-menu'
import {
  DiscordIcon,
  ImproveIcon,
  SushiIcon,
} from '@sushiswap/ui/components/icons'
import { SelectIcon } from '@sushiswap/ui/components/select'
import { useNetwork } from '@sushiswap/wagmi'
import { FC } from 'react'
import { ChainId } from 'sushi/chain'
import {
  SushiSwapV3ChainId,
  isSushiSwapV2ChainId,
  isSushiSwapV3ChainId,
} from 'sushi/config'

export const Hero: FC = () => {
  const { chain } = useNetwork()
  const chainId = chain?.id || ChainId.ETHEREUM
  return (
    <section className="flex flex-col justify-between gap-12 mb-12 lg:flex-row lg:items-start">
      <div
        className="flex flex-col items-center flex-grow gap-6 p-6 rounded-xl lg:items-start"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(35px)',
        }}
      >
        <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-start">
          <div className="flex flex-col px-4">
            <div className="flex flex-row items-center">
              <SushiIcon width={24} height={24} />
              <h3 className="m-2 text-sm font-semibold tracking-tight text-gray-500">
                Growth Liquidity
              </h3>
            </div>
            <h1 className="my-2 text-2xl font-semibold tracking-tight text-white">
              Employ your funds to enhance growth via liquidity provision
            </h1>
            <h3 className="text-base font-semibold tracking-tight text-gray-500 max-w-[500px]">
              Offering liquidity yields a share of pool&apos;s trade volume and
              bonus incentives
            </h3>
            <div className="flex flex-col sm:flex-row w-full sm:w-[unset] gap-4 mt-6">
              <div className="flex flex-1">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 sm:flex-0 sm:w-[unset] rounded-r-none"
                >
                  <LinkInternal
                    href={
                      isSushiSwapV3ChainId(chainId as SushiSwapV3ChainId)
                        ? `/pool/add?chainId=${chainId}`
                        : isSushiSwapV2ChainId(chainId as SushiSwapV3ChainId)
                          ? `/pool/add/v2/${chainId}`
                          : ''
                    }
                  >
                    Create Position
                  </LinkInternal>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button asChild size="lg" className="rounded-l-none">
                      <SelectIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80">
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        disabled={
                          !isSushiSwapV3ChainId(chainId as SushiSwapV3ChainId)
                        }
                        asChild
                      >
                        <LinkInternal
                          href={`/pool/add?chainId=${chainId}`}
                          className="flex flex-col !items-start gap-1 cursor-pointer"
                        >
                          <div className="flex items-center gap-1 font-medium leading-none">
                            V3 Position
                            <Chip variant="secondary">
                              {isSushiSwapV3ChainId(
                                chainId as SushiSwapV3ChainId,
                              )
                                ? 'New 🔥'
                                : 'Unavailable'}
                            </Chip>
                          </div>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Provide liquidity to a V3 liquidity pool.
                          </p>
                        </LinkInternal>
                      </DropdownMenuItem>
                      {isSushiSwapV2ChainId(chainId as ChainId) ? (
                        <DropdownMenuItem asChild>
                          <LinkInternal
                            href={`/pools/add/v2/${chainId}`}
                            className="flex flex-col !items-start gap-1 cursor-pointer"
                          >
                            <div className="flex items-center gap-1 font-medium leading-none">
                              V2 Position
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              Provide liquidity to a V2 liquidity pool.
                            </p>
                          </LinkInternal>
                        </DropdownMenuItem>
                      ) : null}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Button
                fullWidth
                asChild
                icon={GiftIcon}
                variant="outline"
                size="lg"
                className="flex-1 text-[#1991F5] border rounded-none border-[#1991F5] hover:text-blue-500"
              >
                <LinkInternal href="/pools/incentivize">
                  Pool Incentive
                </LinkInternal>
              </Button>
            </div>
          </div>
          <div className="pl-4">
            <ImproveIcon width={372} height={186} />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center h-full gap-6 p-6 rounded-xl lg:items-end"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(35px)',
        }}
      >
        <div className="flex flex-col items-center gap-1 lg:items-end">
          <h1 className="my-2 text-2xl font-semibold tracking-tight text-white">
            Looking for a partnership with Ocswap?
          </h1>
          <h3 className="text-base font-semibold tracking-tight text-gray-500 max-w-[500px]">
            If you&apos;re searching for a collaboration that revolves around
          </h3>
        </div>
        <div className="flex flex-row w-full">
          <Button
            className="grow sm:flex-0 sm:w-[unset]"
            style={{ justifyContent: 'left' }}
            variant="link"
            size="sm"
            asChild
          >
            <LinkInternal href="/partner">&gt; Join Onsan</LinkInternal>
          </Button>
          <div className="flex flex-col gap-1 lg:items-end">
            <h1 className="my-2 text-2xl font-semibold tracking-tight text-white">
              Need Help?
            </h1>

            <Button icon={DiscordIcon} variant="link" size="sm" asChild>
              <LinkExternal href="https://sushi.com/discord">
                Join our discord
              </LinkExternal>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
