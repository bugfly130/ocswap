import { Container } from '@sushiswap/ui'
import { SushiIcon } from '@sushiswap/ui'
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkExternal,
  TwitterIcon,
} from '@sushiswap/ui'
import { SimpleSwapPoolInfo } from 'src/ui/swap/simple/simple-swap-pool-info'
import { SimpleSwapWidget } from 'src/ui/swap/simple/simple-swap-widget'
import { Providers } from './providers'

export const metadata = {
  title: 'OCSwap',
}

export default function SwapSimplePage() {
  return (
    <Providers>
      <Container maxWidth="7xl" className="z-10 flex justify-center p-4">
        <div className="flex flex-col w-full gap-4 text-slate-50">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-semibold text-slate-50">
              Instantly Exchange Your Tokens on OCS!
            </span>
            <span className="text-sm text-gray-400 w-[360px]">
              Enjoy quick and smooth token swaps using our user-friendly
              platform. Our service makes it a breeze for you to exchange tokens
              without any hassle.
            </span>
          </div>
          <div className="flex flex-row justify-center gap-6">
            <div className="hidden w-full lg:flex">
              <SimpleSwapPoolInfo />
            </div>
            <SimpleSwapWidget />
          </div>
          <div
            className="grid grid-cols-1 gap-4 p-6 md:flex md:justify-between rounded-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(35px)',
            }}
          >
            <div className="flex flex-col items-center flex-1 gap-2 text-gray-400">
              <div className="h-[40px] flex flex-row items-center gap-4">
                <SushiIcon width={32} height={32} />
                <h3 className="text-2xl font-semibold tracking-tight text-slate-50">
                  OCSWAP
                </h3>
              </div>
              <h3>Instant Token Swaps.</h3>
              <h3>www.ocswap.io</h3>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-4 text-gray-400">
              <h3 className="flex items-center text-lg font-semibold tracking-tight text-slate-50 h-[40px]">
                Join Our Community
              </h3>
              <div className="flex flex-row items-center flex-grow gap-2">
                <div className="flex items-center gap-4">
                  <LinkExternal href="https://github.com/sushiswap">
                    <GithubIcon
                      width={16}
                      className="text-gray-400 hover:text-slate-50"
                    />
                  </LinkExternal>
                  <LinkExternal href="https://twitter.com/sushiswap">
                    <TwitterIcon
                      width={16}
                      className="text-gray-400 hover:text-slate-50"
                    />
                  </LinkExternal>
                  <LinkExternal href="https://instagram.com/instasushiswap">
                    <InstagramIcon
                      width={16}
                      className="text-gray-400 hover:text-slate-50"
                    />
                  </LinkExternal>
                  <LinkExternal href="https://sushi.com/discord">
                    <DiscordIcon
                      width={16}
                      className="text-gray-400 hover:text-slate-50"
                    />
                  </LinkExternal>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-4 text-gray-400">
              <h3 className="flex items-center text-lg font-semibold tracking-tight text-slate-50 h-[40px]">
                Resources
              </h3>
              <div className="flex flex-row items-center flex-grow gap-2 text-gray-400">
                <LinkExternal>Docs</LinkExternal>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-4 text-gray-400">
              <h3 className="flex items-center text-lg font-semibold tracking-tight text-slate-50 h-[40px]">
                Buy $OCS
              </h3>
              <div className="flex flex-row items-center flex-grow gap-2 text-gray-400">
                <LinkExternal>OCSwap</LinkExternal>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Providers>
  )
}
