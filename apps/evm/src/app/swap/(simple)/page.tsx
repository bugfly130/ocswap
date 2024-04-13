import { Container } from '@sushiswap/ui'
import { SimpleSwapPoolInfo } from 'src/ui/swap/simple/simple-swap-pool-info'
import { SimpleSwapWidget } from 'src/ui/swap/simple/simple-swap-widget'

import { Providers } from './providers'

export const metadata = {
  title: 'SushiSwap',
}

export default function SwapSimplePage() {
  return (
    <Providers>
      <Container maxWidth="7xl" className="z-10 px-4">
        <div className="flex flex-col gap-4 text-slate-50">
          <div className="flex flex-col gap-4">
            <span className="text-lg text-slate-50">
              Instantly Exchange Your Tokens on OCS!
            </span>
            <span className="text-sm text-gray-400">
              Enjoy quick and smooth token swaps using our user-friendly
              platform. Our service makes it a breeze for you to exchange tokens
              without any hassle.
            </span>
          </div>
          <div className="flex flex-row gap-6">
            <div className="hidden lg:flex">
              <SimpleSwapPoolInfo />
            </div>
            <SimpleSwapWidget />
          </div>
          <div className="flex-col">OCSWAP Info</div>
        </div>
      </Container>
    </Providers>
  )
}
